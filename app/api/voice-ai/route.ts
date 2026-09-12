import { NextResponse } from "next/server";
import knowledgeBase from "@/data/tcb-knowledge.json";

const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY || "AIzaSyB1OYrNUMVq_HdkTb8BPplrvIuOkucCDwI";

// Sliding window rate limiter: 15 requests per 60 seconds (Gemini free tier limit)
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 15;

const requestTimestamps: number[] = [];

function checkRateLimit(): { allowed: boolean; remaining: number; resetInSec: number } {
  const now = Date.now();

  while (requestTimestamps.length > 0 && requestTimestamps[0] <= now - RATE_LIMIT_WINDOW_MS) {
    requestTimestamps.shift();
  }

  if (requestTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = requestTimestamps[0];
    const resetInSec = Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      resetInSec: Math.max(resetInSec, 1),
    };
  }

  requestTimestamps.push(now);
  const remaining = MAX_REQUESTS_PER_WINDOW - requestTimestamps.length;
  return { allowed: true, remaining, resetInSec: 60 };
}

export async function POST(req: Request) {
  try {
    const rateStatus = checkRateLimit();

    if (!rateStatus.allowed) {
      return NextResponse.json({
        reply: `Please wait ${rateStatus.resetInSec} seconds before your next voice query to preserve system throughput.`,
        action: null,
        actionLabel: null,
        rateLimited: true,
        remaining: 0,
        resetInSec: rateStatus.resetInSec,
      });
    }

    const { message } = await req.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Valid message string is required" },
        { status: 400 }
      );
    }

    const systemPrompt = `You are TCB Voice AI, an intelligent, polite, and senior AI consultant for The Code Brains (TCB) — an elite AI Agents & Intelligent Workflow Automation Services Studio. We do NOT sell pre-packaged SaaS products; we provide 100% tailor-made custom AI engineering and automation services.

CRITICAL LANGUAGE & TONE RULES:
1. STRICTLY ENGLISH ONLY:
   - Always reply in natural, polished, and professional English.
   - Do NOT reply in Hindi, Hinglish, or any other language. Regardless of how the user types or speaks, your response MUST BE 100% fluent English.
2. Spoken brevity: Strictly 1 to 2 short sentences (under 25 words) so text-to-speech speaks quickly and crisply.

TCB GROUNDED KNOWLEDGE BASE:
- Custom AI Agents & Engineering Services: OUR CORE SPECIALTY! We build production-ready custom AI agents (voice calling agents, autonomous sales outreach bots, 24/7 customer support bots, n8n/Make workflows) tailored directly to the client's business workflow.
- Pure Service Model: We do not sell off-the-shelf software packages. Every solution is custom-built, fully owned by the client, with full source code handover.
- Pricing & Quotes: Tailored project quotes provided based on business scope, tech stack, and complexity. No fixed public packages. Recommend booking a consultation.
- Cloud Infra: Deployments run directly on client's AWS cloud (~$5 to $15/month), with zero agency markup and 100% source code ownership.

AVAILABLE NAVIGATION ACTIONS (Select best matching action or null):
- "ai-agents-catalog" (Label: "10 Production AI Agents Catalog"): When user asks about AI agents, bots, voice callers, modules, "agent dikhao".
- "real-projects" (Label: "Real Projects & Results"): When user asks about real projects, case studies, deliverables, results, "real project dikhao", "case study dikhao", "results dikhao".
- "contact" (Label: "Book Consultation & Contact"): When user asks about price, cost, rates, budget, fees, consultation, contact, call, meeting, hire.
- "tech-stack" (Label: "AI Tech Stack"): When user asks about tech stack, Python, LangChain, tools.
- "testimonials" (Label: "Client Testimonials"): When user asks about reviews, feedback, client stories.
- "faq" (Label: "Frequently Asked Questions"): When user asks general doubts or questions.
- "features" (Label: "Core AI Capabilities"): When user asks about features, capabilities, workflows.
- "how-it-works" (Label: "AI Transformation Process"): When user asks how it works, process, steps.
- "home" (Label: "Home / Top"): When user asks to go top or home.
- null: General conversation or questions not requiring scroll.

Return ONLY pure valid JSON:
{"reply": "Polite spoken text", "action": "action-name or null", "actionLabel": "label or null"}
`;

    // Try fast modern model first (gemini-3.5-flash-lite), with fallback to gemini-flash-latest
    let response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `${systemPrompt}\n\nClient query: "${message}"\nJSON response:`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 200,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    // Fallback if 3.5 is unavailable
    if (!response.ok) {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `${systemPrompt}\n\nClient query: "${message}"\nJSON response:`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 200,
              responseMimeType: "application/json",
            },
          }),
        }
      );
    }

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", errText);
      return NextResponse.json(
        { error: "Gemini API service temporarily unavailable" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

    try {
      const parsed = JSON.parse(rawText.trim());
      return NextResponse.json({
        reply: parsed.reply || "Namaste! Main TCB AI hoon, batayein main aapki kya madad kar sakta hoon?",
        action: parsed.action || null,
        actionLabel: parsed.actionLabel || null,
        remaining: rateStatus.remaining,
      });
    } catch (parseErr) {
      return NextResponse.json({
        reply: rawText,
        action: null,
        actionLabel: null,
        remaining: rateStatus.remaining,
      });
    }
  } catch (error) {
    console.error("Voice AI Route Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
