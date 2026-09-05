"use client";

import { useState } from "react";
import {
  Cpu,
  PhoneCall,
  MessageSquare,
  Zap,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Bot,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type AICapability = {
  icon: LucideIcon;
  tag: string;
  category: "Agents" | "Workflows" | "RAG" | "Analytics";
  title: string;
  description: string;
  stat: string;
  statLabel: string;
};

const AI_CAPABILITIES: AICapability[] = [
  {
    icon: Bot,
    tag: "Knowledge Engine",
    category: "RAG",
    title: "Custom RAG Knowledge Vaults",
    description:
      "Connect private institute documents, PDFs & database tables to custom LLM agents for 100% accurate, hallucination-free answers.",
    stat: "100%",
    statLabel: "Context Accuracy",
  },
  {
    icon: PhoneCall,
    tag: "Telephony AI",
    category: "Agents",
    title: "AI Voice Lead Qualification",
    description:
      "Real-time voice agents make outbound calls to website leads, answer questions & book live demos directly on your calendar.",
    stat: "4x",
    statLabel: "Higher Demo Conversion",
  },
  {
    icon: MessageSquare,
    tag: "Messaging API",
    category: "Workflows",
    title: "WhatsApp & SMS Automation",
    description:
      "Meta Cloud API workflows for instant parent fee reminders, digital receipts, attendance alerts, and interactive chatbots.",
    stat: "85%",
    statLabel: "Faster Fee Recovery",
  },
  {
    icon: Zap,
    tag: "Integration",
    category: "Workflows",
    title: "n8n & Make Node Workflows",
    description:
      "Connect CRMs, ERPs, Google Sheets & custom REST APIs in real time with autonomous webhook execution pipelines.",
    stat: "0.2s",
    statLabel: "Webhook Execution Speed",
  },
  {
    icon: TrendingUp,
    tag: "Machine Learning",
    category: "Analytics",
    title: "Predictive Risk Analytics",
    description:
      "Machine learning algorithms detect student dropout risks & inventory stockouts 30 days before they happen.",
    stat: "30 Days",
    statLabel: "Early Risk Detection",
  },
  {
    icon: ShieldCheck,
    tag: "Cloud Security",
    category: "Agents",
    title: "Enterprise AWS Security",
    description:
      "Isolated tenant cloud infrastructure with 256-bit AES encryption, automated backups, and 99.95% uptime SLA.",
    stat: "99.95%",
    statLabel: "Guaranteed Uptime",
  },
];

export default function Features() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Agents", "Workflows", "RAG", "Analytics"];

  const filteredCapabilities =
    activeCategory === "All"
      ? AI_CAPABILITIES
      : AI_CAPABILITIES.filter((c) => c.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="features" className="relative overflow-hidden border-t border-slate-200/60 bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-800 shadow-xs">
            <Cpu className="h-4 w-4 text-brand-500 animate-pulse" />
            AI AGENT ENGINEERING &amp; WORKFLOW ENGINE
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Autonomous AI Capabilities Built for <span className="nuvertos-gradient-text">Modern Business Scale</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            Deploy pre-engineered AI voice caller agents, RAG knowledge bots, n8n workflow triggers, and real-time financial automation pipelines.
          </p>
        </div>

        {/* Category Filters - Horizontal Swipeable on Mobile */}
        <div className="mt-8 sm:mt-10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 px-1 sm:justify-center sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 whitespace-nowrap rounded-xl px-4 py-2 sm:px-5 text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/20 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCapabilities.map((capability) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={capability.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 border border-brand-200/80 transition-transform group-hover:scale-105">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-600 border border-slate-200">
                      {capability.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {capability.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <div className="text-xl font-black text-brand-700">{capability.stat}</div>
                    <div className="text-[10px] font-semibold text-slate-500">{capability.statLabel}</div>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
