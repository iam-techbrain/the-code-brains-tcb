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
    id: "sales-lead-gen",
    number: "01",
    category: "Autonomous B2B Growth",
    badge: "High ROI",
    title: "AI-Powered Sales & Lead Generation Agents",
    shortDescription:
      "Automate your B2B prospecting. Our custom AI agents scrape target leads, analyze their business needs, and send hyper-personalized cold emails or LinkedIn messages to book meetings on autopilot.",
    keyBenefits: [
      "24/7 automated lead outreach.",
      "Higher response rates through personalized AI messaging.",
      "Saves hundreds of hours of manual prospecting time.",
    ],
    techStack: "Apollo API + GPT-4o + Lemlist / Smartlead",
    icon: TrendingUp,
  },
  {
    id: "document-workflow",
    number: "02",
    category: "Operations & Back-Office",
    badge: "Zero-Touch",
    title: "AI Document & Workflow Automation",
    shortDescription:
      "Eliminate manual data entry. We build smart workflows that automatically extract data from PDFs, invoices, and receipts, syncing them instantly into your CRM (like HubSpot) or spreadsheets.",
    keyBenefits: [
      "100% error-free data extraction.",
      "Instant processing of invoices and reports.",
      "Seamless integration with tools like HubSpot, Google Sheets, and Slack.",
    ],
    techStack: "AWS Textract OCR + n8n Pipelines + HubSpot API",
    icon: FileText,
  },
  {
    id: "support-chatbots",
    number: "03",
    category: "Customer Experience",
    badge: "24/7/365",
    title: "24/7 Intelligent Customer Support Bots",
    shortDescription:
      "Give your customers instant answers. We integrate custom AI chatbots trained specifically on your company data, website FAQs, and documents to resolve queries instantly.",
    keyBenefits: [
      "Available 24/7/365 for global customers.",
      "Reduces customer support operational costs.",
      "Quick setup using secure website iframe integrations.",
    ],
    techStack: "Pinecone Vector RAG + Claude 3.5 + Secure Iframe",
    icon: MessageSquare,
  },
  {
    id: "content-pipelines",
    number: "04",
    category: "Media & Brand Scaling",
    badge: "Viral Growth",
    title: "AI Content Pipelines & Repurposing",
    shortDescription:
      "Turn one piece of content into a month’s worth of marketing. Our AI system converts long-form videos or podcasts into viral shorts, blogs, and social media threads automatically.",
    keyBenefits: [
      "Maximize social media presence with zero extra effort.",
      "Automatic scheduling and multi-platform posting.",
      "Rapid content scaling for brands and creators.",
    ],
    techStack: "Whisper AI + FFmpeg + Multi-Platform API",
    icon: Repeat,
  },
  {
    id: "voice-ai",
    number: "05",
    category: "Telephony & Conversational AI",
    badge: "Sub-350ms Latency",
    title: "Real-Time Voice AI Agents",
    shortDescription:
      "Human-sounding AI voice assistants that handle inbound and outbound phone calls, qualify leads, and schedule appointments seamlessly.",
    keyBenefits: [
      "Never miss a customer call again.",
      "Natural, real-time conversational voice experience.",
      "Ideal for local businesses, clinics, and service providers.",
    ],
    techStack: "Twilio SIP + Deepgram + ElevenLabs Turbo",
    icon: PhoneCall,
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
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0066cc]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#0066cc]" />
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
                className={`group relative flex flex-col justify-between rounded-3xl p-7 shadow-md transition-all ${
                  isFeatured
                    ? "border-2 border-[#0066cc] bg-gradient-to-b from-blue-50/50 via-white to-white md:col-span-2 lg:col-span-1 shadow-blue-500/10"
                    : "border border-slate-200/90 bg-white hover:border-[#0066cc]/40 hover:shadow-xl"
                }`}
              >
                <div>
                  {/* Top Bar: Service Number + Category + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0066cc] group-hover:bg-[#0066cc] group-hover:text-white transition-colors duration-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        SERVICE #{service.number}
                      </span>
                    </div>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-[#0066cc] border border-blue-200">
                      {service.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066cc] block mb-1">
                    {service.category}
                  </span>

                  {/* Website Heading */}
                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#0066cc] transition-colors">
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
                    className="inline-flex shrink-0 items-center gap-1.5 font-bold text-[#0066cc] hover:text-[#0052a3] group/btn cursor-pointer py-1"
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
