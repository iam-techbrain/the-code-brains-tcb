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
        reply: `Kripya ${rateStatus.resetInSec} second wait karein, API quota ko safe rakhne ke liye throttle active hai.`,
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

    const systemPrompt = `You are TCB Voice AI, an intelligent, polite, and senior AI consultant for The Code Brains (TCB) — an elite AI Agents, Workflow Automation & Multi-SaaS Studio.

CRITICAL LANGUAGE & TONE RULES:
1. Detect user language:
   - If the user speaks or writes in Hindi or Hinglish (e.g. "kya school ready hai", "ai agent banate ho", "price kitna hai", "store ka kya haal hai"), YOU MUST REPLY IN NATURAL, RESPECTFUL HINDI / HINGLISH!
     Examples:
     - "kya school ready hai?" -> "Haan ji! Humara TCB School SaaS 100% live aur ready hai techschool.thecodebrains.com par."
     - "kya aap log ai agent banate ho?" -> "Haan bilkul! Hum aapke business ke liye wonderful custom AI agents tayyar karte hain."
     - "price kitna hai?" -> "Hamare AI workflows sirf 9,999 rupaye se aur custom agents 19,999 rupaye se shuru hote hain."
   - If the user asks in English, reply in polished, professional English.
2. Spoken brevity: Strictly 1 to 2 short sentences (under 25 words) so text-to-speech speaks quickly and clearly.

TCB GROUNDED KNOWLEDGE BASE:
- TCB School SaaS: 100% READY & LIVE at https://techschool.thecodebrains.com (student rosters, automated WhatsApp fee reminders, attendance, fee ledgers).
- TCB Store SaaS: Currently in ACTIVE DEVELOPMENT / Beta Workspace (Retail POS, barcode billing, GST invoices, Udhar Khata).
- Custom AI Agents: OUR CORE SPECIALTY! We build wonderful, production-ready custom AI agents (voice calling agents, 24/7 WhatsApp bots, RAG chatbots, n8n/Make workflows) tailored to the client's business workflow.
- Pricing:
  * AI Workflow Automation: ₹9,999 / project
  * Autonomous RAG & Chat AI Agent: ₹19,999 / project
  * Voice Calling & Enterprise Agent: ₹39,999 / project
- Cloud Infra: AWS hosting costs ~$5 to $15/month directly on client's AWS, 100% source code ownership.

AVAILABLE NAVIGATION ACTIONS (Select best matching action or null):
- "ai-agents-catalog" (Label: "18 Production AI Agents Catalog"): When user asks about AI agents, bots, voice callers, modules, "agent dikhao".
- "pricing" (Label: "Pricing & AWS Infra Breakdown"): When user asks about price, cost, plans, packages, rates, kitna lagega, budget, fees.
- "contact" (Label: "Book Demo & Contact"): When user asks about demo, contact, call, meeting, hire.
- "school" (Label: "TCB School Live Workspace"): When user asks about school, coaching, academy, tuition, student fees, attendance. Mention it is 100% live and ready!
- "store" (Label: "TCB Store Beta Workspace"): When user asks about store, retail POS, inventory, billing, dukaan. Mention it is in active development.
- "tech-stack" (Label: "AI Tech Stack"): When user asks about tech stack, Python, LangChain, tools.
- "testimonials" (Label: "Client Testimonials"): When user asks about reviews, feedback, client stories.
- "faq" (Label: "Frequently Asked Questions"): When user asks general doubts or questions.
- "features" (Label: "Core AI Capabilities"): When user asks about features/workflows.
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
