"use client";

import { useState } from "react";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  RefreshCw,
  Lock,
  Bot,
  Workflow,
  Cpu,
  Server,
  Database,
  PhoneCall,
  MessageSquare,
  Cloud,
  Code2,
  ExternalLink,
  CheckCircle2,
  DollarSign,
} from "lucide-react";

type PricingPlan = {
  name: string;
  badge?: string;
  priceText: string;
  priceVal: number;
  period: string;
  description: string;
  highlighted?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
};

// 1. TCB INVENTORY PLANS DATA (ONLY FOR /store PAGE)
const STORE_PLANS: PricingPlan[] = [
  {
    name: "Starter Inventory Tier",
    badge: "Coming Soon",
    priceText: "₹299",
    priceVal: 299,
    period: "/ month",
    description: "Complete barcode stock management & POS billing for retail shops.",
    features: [
      "Barcode Stock Scanning",
      "GST Compliant Invoicing",
      "Customer Credit Ledger",
      "Supplier Purchase Records",
      "WhatsApp Invoice Dispatch",
    ],
    ctaText: "Coming Soon",
    ctaHref: "#coming-soon",
  },
  {
    name: "Pro Warehouse Tier",
    badge: "Coming Soon",
    priceText: "₹599",
    priceVal: 599,
    period: "/ month",
    description: "Multi-counter retail & warehouse stock replenishment system.",
    highlighted: true,
    features: [
      "Multi-Counter POS Terminals",
      "Low Stock Automated Alerts",
      "Warehouse Stock Reordering",
      "Custom GST Invoice Templates",
      "Multi-User Staff Logins",
    ],
    ctaText: "Coming Soon",
    ctaHref: "#coming-soon",
  },
  {
    name: "Enterprise Multi-Branch",
    badge: "Coming Soon",
    priceText: "₹999",
    priceVal: 999,
    period: "/ month",
    description: "Designed for chain retail stores & bulk stock distribution.",
    features: [
      "Multi-Branch Stock Sync",
      "Supplier Purchase Ledger",
      "AI Inventory Forecasting",
      "Priority Cloud Backups",
      "Dedicated Manager Support",
    ],
    ctaText: "Coming Soon",
    ctaHref: "#coming-soon",
  },
];

// 2. TCB SCHOOL PLANS DATA (ONLY FOR /school PAGE)
const SCHOOL_PLANS: PricingPlan[] = [
  {
    name: "Starter Coaching Tier",
    badge: "Live Workspace",
    priceText: "₹499",
    priceVal: 499,
    period: "/ month",
    description: "Ideal for tuition centers & coaching classes up to 150 students.",
    highlighted: true,
    features: [
      "Students Limit: Up to 150 Students",
      "Fee & Attendance Tracking: Included",
      "Parent WhatsApp Alerts: Automated",
      "Staff & Teacher Logins: Included",
      "Digital Student ID Card Generator",
    ],
    ctaText: "Launch TCB School",
    ctaHref: "https://techschool.thecodebrains.com",
  },
  {
    name: "Growth Academy Plan",
    badge: "Popular",
    priceText: "₹799",
    priceVal: 799,
    period: "/ month",
    description: "Designed for growing coaching institutes needing multiple batches.",
    features: [
      "Students Limit: Up to 500 Students",
      "Fee & Attendance Tracking: Included",
      "Parent WhatsApp + SMS Alerts: Automated",
      "Staff Logins: Up to 5 Teachers",
      "Exams & Gradebook Report Cards",
    ],
    ctaText: "Launch TCB School",
    ctaHref: "https://techschool.thecodebrains.com",
  },
  {
    name: "Enterprise Academy Plan",
    badge: "Full Power",
    priceText: "₹1,299",
    priceVal: 1299,
    period: "/ month",
    description: "Complete solution for schools & multi-branch education hubs.",
    features: [
      "Students Limit: Unlimited Students",
      "Fee & Attendance Tracking: Included",
      "Parent Notifications: WhatsApp + SMS",
      "Staff Logins: Unlimited Teachers",
      "Custom Domain & Branding Support",
    ],
    ctaText: "Launch TCB School",
    ctaHref: "https://techschool.thecodebrains.com",
  },
];

// 3. TCB AI AGENCY & AUTOMATION PLANS DATA (MAIN HOME PAGE DEFAULT)
const AGENCY_PLANS: PricingPlan[] = [
  {
    name: "AI Workflow Automation",
    badge: "Fast Delivery",
    priceText: "₹9,999",
    priceVal: 9999,
    period: "/ project",
    description: "Automate repetitive manual business workflows using n8n, Make & webhooks.",
    features: [
      "Up to 3 Multi-Step Automated Workflows",
      "WhatsApp & Email API Triggers",
      "CRM & Google Sheets Real-Time 2-Way Sync",
      "Self-Hosted n8n or Cloud Make Setup",
      "Error Alerts & Telegram/Slack Logging",
      "14-Day Free Maintenance & Support",
    ],
    ctaText: "Get Workflow Automation",
    ctaHref: "#contact",
  },
  {
    name: "Autonomous RAG & Chat AI Agent",
    badge: "Most Popular",
    priceText: "₹19,999",
    priceVal: 19999,
    period: "/ project",
    description: "Custom AI chatbot trained on your company data with WhatsApp & Web integration.",
    highlighted: true,
    features: [
      "Custom RAG Vector DB (Pinecone / Qdrant)",
      "24/7 WhatsApp AI Bot + Web Chat Widget",
      "OpenAI GPT-4o / Claude 3.5 Sonnet Integration",
      "Function Calling (Books Meetings & DB Query)",
      "AWS EC2 / Docker 24/7 Deployment",
      "30-Day Post-Launch Maintenance & Monitoring",
    ],
    ctaText: "Deploy AI Agent",
    ctaHref: "#contact",
  },
  {
    name: "Voice Calling & Enterprise Agent",
    badge: "Full Power",
    priceText: "₹39,999",
    priceVal: 39999,
    period: "/ project",
    description: "Human-like inbound/outbound AI phone caller with live transfer & CRM sync.",
    features: [
      "Inbound & Outbound AI Calling (Twilio + Vapi)",
      "Ultra-Realistic Voice (ElevenLabs / Deepgram)",
      "Live Human Call Transfer & Call Recordings",
      "Post-Call WhatsApp Summary & CRM Entry",
      "Full AWS Infrastructure Setup & Source Code",
      "60-Day SLA & Dedicated Lead Engineer",
    ],
    ctaText: "Deploy Voice Agent",
    ctaHref: "#contact",
  },
];

// Infrastructure & Technical Requirements Breakdown for AI Agents
const AGENT_INFRA_REQUIREMENTS = [
  {
    icon: Server,
    title: "AWS Cloud Hosting & Compute",
    badge: "Runs 24/7",
    category: "Server Infrastructure",
    description:
      "Your agent's backend, FastAPI server, and webhook listeners run 24/7 to answer customer queries instantly with 99.95% uptime.",
    requiredStack: "AWS EC2 (t4g.small / t3.medium), AWS Lambda, or Docker VPS",
    estimatedCost: "~$5 - $15 / month (Billed directly by AWS — zero agency markup)",
  },
  {
    icon: Cpu,
    title: "LLM API Tokens (The AI Brain)",
    badge: "Intelligence",
    category: "Language Models",
    description:
      "Powers the cognitive intelligence, natural understanding, intent detection, and contextual problem-solving of your agent.",
    requiredStack: "OpenAI API (GPT-4o, GPT-4o-mini), Anthropic Claude 3.5, or Gemini",
    estimatedCost: "Pay-as-you-go per token (~₹200 - ₹800/mo for typical business volume)",
  },
  {
    icon: Database,
    title: "Vector Database & RAG Knowledge",
    badge: "Memory",
    category: "Custom Knowledge",
    description:
      "Stores your company manuals, product catalogs, PDFs, and FAQs as vector embeddings so the agent never hallucinates facts.",
    requiredStack: "Pinecone, Qdrant Cloud, or Supabase pgvector",
    estimatedCost: "Free tier covers up to 100,000 vectors (~₹0 to ₹800/mo at scale)",
  },
  {
    icon: PhoneCall,
    title: "Voice Telephony & Audio Pipeline",
    badge: "For Voice Agents",
    category: "Phone Calling",
    description:
      "Enables inbound and outbound phone calls with human-like cadence, interruption handling, and ultra-low 350ms latency.",
    requiredStack: "Twilio / Plivo number + Deepgram (STT) + ElevenLabs / Vapi (TTS)",
    estimatedCost: "~$0.05 to $0.09 per minute of calling (pay only for talk time)",
  },
  {
    icon: MessageSquare,
    title: "Official WhatsApp Cloud API",
    badge: "Messaging",
    category: "Meta API",
    description:
      "Official Meta-verified WhatsApp Business connection. No unofficial scraping or bots — zero risk of phone number ban.",
    requiredStack: "Meta for Developers Account & Verified WhatsApp Business Manager",
    estimatedCost: "First 1,000 service conversations every month are 100% FREE by Meta",
  },
  {
    icon: Code2,
    title: "Full Source Code & 100% Ownership",
    badge: "Zero Lock-in",
    category: "Intellectual Property",
    description:
      "Everything is deployed inside your own AWS, GitHub, and Cloud accounts. You own 100% of your code, prompts, and customer data.",
    requiredStack: "GitHub Repository, Dockerfile & Complete Deployment Docs",
    estimatedCost: "Included in Studio Project Fee (No recurring license fee)",
  },
];

interface PricingProps {
  defaultApp?: "store" | "school" | "agency";
  hideToggle?: boolean;
}

export default function Pricing({ defaultApp = "agency", hideToggle = true }: PricingProps) {
  const [selectedApp] = useState<"store" | "school" | "agency">(defaultApp);

  const activePlans =
    selectedApp === "agency"
      ? AGENCY_PLANS
      : selectedApp === "store"
      ? STORE_PLANS
      : SCHOOL_PLANS;

  return (
    <section id="pricing" className="relative overflow-hidden border-t border-slate-200/60 bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-800 shadow-xs">
            <Sparkles className="h-4 w-4 text-brand-500 animate-pulse" />
            Transparent Pricing &amp; Custom Project Packages
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {selectedApp === "agency" ? (
              <span>Transparent Packages for <span className="nuvertos-gradient-text">AI Agents &amp; Automations</span></span>
            ) : selectedApp === "school" ? (
              <span>Transparent Pricing for <span className="nuvertos-gradient-text">TCB School SaaS</span></span>
            ) : (
              <span>Transparent Pricing for <span className="nuvertos-gradient-text">TCB Store &amp; Inventory SaaS</span></span>
            )}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            {selectedApp === "agency"
              ? "Simple, fixed-rate pricing for custom AI agents, n8n workflow automations, and multi-tenant SaaS development."
              : selectedApp === "school"
              ? "Simple, affordable plans for coaching centers and educational institutes. No setup fees."
              : "Flexible subscription plans for retail stock management, POS billing & Udhar Khata."}
          </p>

          {/* Guarantee Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-2xl border border-brand-200 bg-brand-50/50 px-3.5 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-bold text-slate-800 shadow-xs">
            <span className="flex items-center gap-1.5 text-brand-800 font-extrabold">
              <RefreshCw className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-500" />
              100% Fixed Rates
            </span>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1.5 text-zinc-700">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-500" />
              Source Code Ownership
            </span>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1.5 text-zinc-700">
              <Lock className="h-3.5 w-3.5 text-brand-500" />
              Safe &amp; Encrypted
            </span>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-3 lg:items-stretch">
          {activePlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-5 sm:p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-brand-500 bg-brand-50/30 shadow-xl shadow-brand-500/10"
                  : "border border-slate-200 bg-white shadow-xs hover:border-brand-300 hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-extrabold shadow-xs ${
                    plan.highlighted
                      ? "bg-brand-500 text-white"
                      : "bg-slate-900 text-white"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-600 min-h-[36px]">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-slate-900">{plan.priceText}</span>
                  <span className="text-xs font-semibold text-slate-500">{plan.period}</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-brand-500 font-bold" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={plan.ctaHref}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-extrabold transition-all active:scale-95 ${
                    plan.highlighted
                      ? "bg-brand-500 text-white hover:bg-brand-700 shadow-md shadow-brand-500/20"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* AI AGENT ARCHITECTURE & INFRASTRUCTURE BREAKDOWN (FOR AGENCY VIEW) */}
        {selectedApp === "agency" && (
          <div className="mt-16 sm:mt-20 rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-10 lg:p-12 shadow-xs">
            {/* Header */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-800">
                <Server className="h-3.5 w-3.5 text-blue-600" />
                Architecture &amp; Cloud Infrastructure Guide
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                What is required to build &amp; host an AI Agent?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Building an autonomous AI agent requires two parts: Our one-time <strong>Studio Engineering &amp; Setup Fee</strong>, and your direct <strong>Cloud Infrastructure &amp; API Accounts</strong>. Here is the 100% transparent breakdown:
              </p>
            </div>

            {/* Infrastructure Grid */}
            <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {AGENT_INFRA_REQUIREMENTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-brand-300 hover:shadow-sm"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 border border-brand-100">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h4 className="mt-3.5 text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>

                    {/* Stack & Cost Footer */}
                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-3.5 text-[11px]">
                      <div>
                        <span className="font-bold text-slate-700">Tech Stack: </span>
                        <span className="text-slate-600">{item.requiredStack}</span>
                      </div>
                      <div className="rounded-lg bg-slate-50 p-2 text-brand-900 font-medium">
                        <span className="font-bold text-brand-700">Est. Cost: </span>
                        {item.estimatedCost}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary Transparency Banner */}
            <div className="mt-8 grid gap-4 rounded-2xl border border-brand-200/80 bg-white p-5 sm:p-6 sm:grid-cols-2 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <DollarSign className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    1. One-Time Studio Fee (TCB)
                  </h5>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Covers system design, prompt engineering, RAG vector pipeline, tool function calling, AWS cloud deployment, testing, and post-launch maintenance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    2. Direct Cloud &amp; API Running Costs
                  </h5>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    AWS hosting, OpenAI tokens, and Twilio calls are billed directly to your own card. 100% transparency with zero agency markup and zero lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
