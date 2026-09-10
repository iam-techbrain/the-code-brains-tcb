"use client";

import { useState } from "react";
import {
  Cpu,
  PhoneCall,
  MessageSquare,
  Repeat,
  TrendingUp,
  FileText,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

type AICapability = {
  icon: LucideIcon;
  tag: string;
  category: "Growth" | "Operations" | "Voice" | "Support";
  title: string;
  description: string;
  stat: string;
  statLabel: string;
};

const AI_CAPABILITIES: AICapability[] = [
  {
    icon: TrendingUp,
    tag: "B2B Outreach",
    category: "Growth",
    title: "AI-Powered Sales & Lead Generation",
    description:
      "Scrapes high-intent B2B prospect lists, analyzes company pain points, and dispatches hyper-personalized outreach sequences to book qualified calendar meetings.",
    stat: "4.8x",
    statLabel: "Higher Meeting Booking Rate",
  },
  {
    icon: FileText,
    tag: "Back-Office",
    category: "Operations",
    title: "AI Document & Workflow Automation",
    description:
      "Automates end-to-end data extraction from vendor PDFs, invoices, and contracts. Seamlessly commits records into HubSpot, Salesforce, and spreadsheets.",
    stat: "100%",
    statLabel: "Error-Free OCR Precision",
  },
  {
    icon: MessageSquare,
    tag: "Customer Support",
    category: "Support",
    title: "24/7 Intelligent Support Chatbots",
    description:
      "Trained on your private company documentation, FAQs, and product knowledge to resolve customer inquiries immediately with zero hallucination.",
    stat: "75%+",
    statLabel: "Automated Ticket Resolution",
  },
  {
    icon: Repeat,
    tag: "Content Engine",
    category: "Growth",
    title: "AI Content Pipelines & Repurposing",
    description:
      "Transforms 1 long-form video or podcast episode into dozens of viral short clips, SEO blog articles, and scheduled social media threads automatically.",
    stat: "10x",
    statLabel: "Marketing Output Multiplier",
  },
  {
    icon: PhoneCall,
    tag: "Real-Time Telephony",
    category: "Voice",
    title: "Real-Time Voice AI Telephony Agents",
    description:
      "Human-sounding conversational AI agents answering inbound calls, conducting outbound discovery, and scheduling appointments under 350ms latency.",
    stat: "0.28s",
    statLabel: "Ultra-Low Speech Latency",
  },
  {
    icon: ShieldCheck,
    tag: "Data Privacy",
    category: "Operations",
    title: "Dedicated Private Cloud Deployment",
    description:
      "Deployed directly to your AWS or GCP VPC with 100% full Git source code handover, zero third-party data retention, and zero agency platform markups.",
    stat: "100%",
    statLabel: "Client IP & Code Ownership",
  },
];

export default function Features() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { openLeadModal } = useLeadModal();

  const categories = ["All", "Growth", "Operations", "Voice", "Support"];

  const filteredCapabilities =
    activeCategory === "All"
      ? AI_CAPABILITIES
      : AI_CAPABILITIES.filter((c) => c.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="features" className="relative overflow-hidden border-t border-slate-200/80 bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0066cc] shadow-xs">
            <Cpu className="h-4 w-4 text-[#0066cc]" />
            ENTERPRISE AI CAPABILITIES
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Autonomous Automation Built for <span className="text-[#0066cc]">Operational Scale</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            Every solution is custom-engineered, tested with production data, and deployed directly to your private infrastructure.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 sm:mt-10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 px-1 sm:justify-center sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0066cc] text-white shadow-md shadow-[#0066cc]/25 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-[#0066cc]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#0066cc]/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0066cc] group-hover:bg-[#0066cc] group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-slate-900 font-display block">
                      {cap.stat}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {cap.statLabel}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      openLeadModal({
                        title: `Consultation: ${cap.title}`,
                        source: `Features Grid - ${cap.title}`,
                        planName: cap.title,
                        defaultNote: `Inquiring about ${cap.title} implementation.`,
                      })
                    }
                    className="text-xs font-bold text-[#0066cc] hover:text-[#0052a3] cursor-pointer"
                  >
                    Deploy →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
