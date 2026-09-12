"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  FileText,
  MessageSquare,
  Repeat,
  PhoneCall,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

type AIServiceItem = {
  id: string;
  number: string;
  category: string;
  badge: string;
  title: string;
  shortDescription: string;
  keyBenefits: string[];
  techStack: string;
  icon: any;
  featured?: boolean;
};

const CORE_SERVICES: AIServiceItem[] = [
  {
    id: "whatsapp-automation",
    number: "01",
    category: "Customer Communication & CRM",
    badge: "Enterprise Messaging API",
    title: "WhatsApp Business Automation & CRM Workflows",
    shortDescription:
      "Automate your customer conversations on WhatsApp. Instant automated replies, lead capture, 24/7 client triage, catalog inquiries, and direct CRM sync.",
    keyBenefits: [
      "Instant response time on WhatsApp for zero missed customer inquiries.",
      "Automated lead qualification and live notification alerts.",
      "Seamless sync with Google Sheets, CRMs, and payment confirmations.",
    ],
    techStack: "WhatsApp Cloud API + Make.com / n8n + Webhooks",
    icon: MessageSquare,
    featured: true,
  },
  {
    id: "voice-ai",
    number: "02",
    category: "Telephony & Conversational AI",
    badge: "Sub-350ms Telephony",
    title: "Real-Time Voice AI Calling & Reception Bots",
    shortDescription:
      "Natural-sounding AI voice agents that handle inbound client phone calls, answer customer questions, qualify leads, and book calendar appointments 24/7.",
    keyBenefits: [
      "Answers phone calls instantly without human operators on standby.",
      "Low-latency natural conversational voice flow on live telephone lines.",
      "Automatic calendar booking & lead record update after every call.",
    ],
    techStack: "Twilio SIP + ElevenLabs Turbo + Deepgram + Python",
    icon: PhoneCall,
    featured: true,
  },
  {
    id: "custom-ai-agents",
    number: "03",
    category: "Autonomous Intelligence",
    badge: "Autonomous Reasoning",
    title: "Custom Autonomous AI Agents",
    shortDescription:
      "Custom-engineered autonomous agents tailored to your business operations. Solves multi-step research, automated decision logic, scraping, and lead processing.",
    keyBenefits: [
      "Tailored 100% to your specific business logic and workflows.",
      "Autonomous multi-step execution with deterministic verification guardrails.",
      "Full source code ownership with zero recurring agency markups.",
    ],
    techStack: "Python + LangChain / LangGraph + Claude 3.5 + OpenAI",
    icon: TrendingUp,
  },
  {
    id: "sheets-sales-alerts",
    number: "04",
    category: "Data Sync & Business Intelligence",
    badge: "Live Data Intelligence",
    title: "Platform & Google Sheets Sync with Sales Analytics & Alerts",
    shortDescription:
      "Connect disparate websites and platforms into automated Google Sheets. Live sales tracking, automated daily revenue analysis, and instant Slack/WhatsApp alerts.",
    keyBenefits: [
      "Real-time bi-directional sync between your platform and Google Sheets.",
      "Automated sales trend analysis and threshold-based alert triggers.",
      "Eliminates hours of manual bookkeeping, data re-entry, and error checking.",
    ],
    techStack: "Google Sheets API + Custom Webhooks + Python + Telegram/Slack Alert API",
    icon: FileText,
  },
  {
    id: "social-media-ads",
    number: "05",
    category: "Marketing Automation",
    badge: "Unified Control Hub",
    title: "Unified Social Media & Ads Management Automation",
    shortDescription:
      "One centralized control center to manage, schedule, and automate posts, creatives, and ad campaigns across multiple channels without logging into separate accounts.",
    keyBenefits: [
      "Schedule and broadcast content across multiple social platforms simultaneously.",
      "Centralized ad monitoring and campaign status triggers from one dashboard.",
      "Saves dozens of hours weekly on multi-channel content operations.",
    ],
    techStack: "Meta Graph API + Multi-Platform REST APIs + Make.com Hub",
    icon: Repeat,
  },
  {
    id: "zapier-make-complex",
    number: "06",
    category: "Enterprise Integration",
    badge: "Complex Workflow Specialist",
    title: "Complex Zapier & Make (Integromat) Workflow Orchestration",
    shortDescription:
      "Specialized in solving high-complexity automation challenges. When standard native integrations break or fall short, we build robust custom logic pipelines.",
    keyBenefits: [
      "Multi-branch conditional routing with automatic error handling and retries.",
      "Transforms messy payloads and disparate data models cleanly across apps.",
      "Production-ready pipelines that run seamlessly behind the scenes 24/7.",
    ],
    techStack: "Zapier Webhooks + Make.com (Integromat) + Custom API Scripts",
    icon: Zap,
    featured: true,
  },
];

export default function AIAgentsListSection() {
  const { openLeadModal } = useLeadModal();

  return (
    <section
      id="solutions-catalog"
      className="relative border-t border-slate-200/80 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div id="ai-agents-catalog" className="absolute -top-24" />
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#305eff]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
            Enterprise Services Catalog
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-display"
          >
            Our Core AI Services &amp; Automation Pipelines
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600"
          >
            We architect and deploy custom-tailored autonomous AI agents and intelligent workflows designed around your exact business model. 100% private cloud deployment with zero vendor lock-in.
          </motion.p>
        </div>

        {/* 5 Core Services Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CORE_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const isFeatured = service.featured;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 shadow-xs hover:shadow-xl transition-all ${
                  isFeatured
                    ? "border border-[#305eff]/50 bg-gradient-to-b from-blue-50/40 via-white to-white md:col-span-2 lg:col-span-1 shadow-blue-500/5 hover:border-[#305eff]"
                    : "border border-slate-200/90 bg-white hover:border-[#305eff]/40"
                }`}
              >
                <div>
                  {/* Top Bar: Service Number + Category + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] group-hover:bg-[#305eff] group-hover:text-white transition-colors duration-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        SERVICE #{service.number}
                      </span>
                    </div>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-[#305eff] border border-blue-200">
                      {service.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#305eff] block mb-1">
                    {service.category}
                  </span>

                  {/* Website Heading */}
                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#305eff] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Key Benefits List */}
                  <div className="mt-6 space-y-2.5 rounded-2xl bg-slate-50/80 p-4 border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Key Business Benefits:
                    </span>
                    {service.keyBenefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack + Direct Consultation CTA */}
                <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[170px]" title={service.techStack}>
                    {service.techStack}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      openLeadModal({
                        title: `Commission: ${service.title}`,
                        source: `Services Catalog - ${service.title}`,
                        planName: service.title,
                        defaultNote: `Requesting custom architecture review for ${service.title}.`,
                      })
                    }
                    className="inline-flex shrink-0 items-center gap-1.5 font-bold text-[#305eff] hover:text-[#1f47e0] group/btn cursor-pointer py-1"
                  >
                    <span>Get Service</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
