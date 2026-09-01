"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Boxes, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Bot, 
  Workflow, 
  Activity, 
  Gauge, 
  Clock, 
  Building2,
  ChevronRight
} from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-12 text-slate-900 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
      {/* Ambient Glowing Background Accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-100/60 via-teal-100/40 to-cyan-100/30 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-10 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-200/30 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-teal-200/30 blur-[110px]"
      />

      {/* Modern Engineering Dot Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#059669_0.7px,transparent_0.7px)] [background-size:28px_28px] opacity-15"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Main Hero Container */}
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Eyebrow Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-300 bg-emerald-50/90 px-4 py-1.5 text-xs font-extrabold text-emerald-900 shadow-xs backdrop-blur-md transition-all hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span>🚀 Next-Gen AI Automation &amp; Multi-SaaS Engineering Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]">
            Scale Faster, Work Less:{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent block mt-2">
              Custom AI Agents &amp; Automated Workflows
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We design, build, and deploy autonomous AI agents, advanced n8n &amp; Make automation pipelines, and specialized AI-driven SaaS solutions. Eliminate manual overhead and scale your business with intelligent autonomous systems.
          </p>

          {/* Core Feature Pillars Badges */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl mx-auto text-xs font-bold">
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-200/80 bg-white/90 px-3.5 py-3 text-slate-800 shadow-xs hover:border-emerald-400 hover:bg-emerald-50/50 transition-all hover:-translate-y-0.5">
              <Bot className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Autonomous AI Agents</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-200/80 bg-white/90 px-3.5 py-3 text-slate-800 shadow-xs hover:border-emerald-400 hover:bg-emerald-50/50 transition-all hover:-translate-y-0.5">
              <Workflow className="h-4 w-4 text-teal-600 shrink-0" />
              <span>n8n &amp; Make Workflows</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-200/80 bg-white/90 px-3.5 py-3 text-slate-800 shadow-xs hover:border-emerald-400 hover:bg-emerald-50/50 transition-all hover:-translate-y-0.5">
              <Boxes className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Custom RAG &amp; LLMs</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-200/80 bg-white/90 px-3.5 py-3 text-slate-800 shadow-xs hover:border-emerald-400 hover:bg-emerald-50/50 transition-all hover:-translate-y-0.5">
              <ShieldCheck className="h-4 w-4 text-teal-600 shrink-0" />
              <span>Voice AI &amp; Telephony</span>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-8 py-4 text-xs font-extrabold text-white shadow-xl shadow-emerald-600/25 transition-all duration-200 hover:scale-105 active:scale-95 sm:w-auto"
            >
              <Sparkles className="h-5 w-5 text-white" />
              <span>Get Custom AI Solution</span>
              <ArrowRight className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#ai-agents-catalog"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-emerald-300 bg-emerald-50/90 px-7 py-4 text-xs font-extrabold text-emerald-950 shadow-sm transition-all duration-200 hover:bg-emerald-100 active:scale-95 sm:w-auto"
            >
              <Bot className="h-4.5 w-4.5 text-emerald-700" />
              <span>Browse 10 AI Agents Catalog</span>
              <span className="rounded bg-emerald-600 px-2 py-0.5 text-[10px] font-extrabold text-white">
                CATALOG
              </span>
            </a>
          </div>

          {/* Highlight Bullets */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              AI Agent &amp; Workflow Engineering
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Enterprise Multi-Tenant SaaS
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-teal-600" />
              Eliminate Repetitive Manual Work
            </span>
          </div>

          {/* High-Impact Proof Counter Bar */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="text-center border-r border-slate-100 last:border-r-0">
              <div className="flex items-center justify-center gap-1 text-emerald-700 font-extrabold text-lg sm:text-xl">
                <Activity className="h-4 w-4 text-emerald-600" />
                <span>50,000+</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 mt-0.5">Automated Actions</p>
            </div>

            <div className="text-center border-r border-slate-100 last:border-r-0">
              <div className="flex items-center justify-center gap-1 text-emerald-700 font-extrabold text-lg sm:text-xl">
                <Gauge className="h-4 w-4 text-teal-600" />
                <span>99.95%</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 mt-0.5">AWS Cloud Uptime</p>
            </div>

            <div className="text-center border-r border-slate-100 last:border-r-0">
              <div className="flex items-center justify-center gap-1 text-emerald-700 font-extrabold text-lg sm:text-xl">
                <Clock className="h-4 w-4 text-emerald-600" />
                <span>&lt; 500ms</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 mt-0.5">Webhook Latency</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-700 font-extrabold text-lg sm:text-xl">
                <Building2 className="h-4 w-4 text-teal-600" />
                <span>1 Unified</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 mt-0.5">Multi-SaaS Studio</p>
            </div>
          </div>

        </div>

        {/* Dashboard Preview Section with Header Badge */}
        <div className="mt-14 relative max-w-6xl mx-auto">
          
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Live SaaS Workspace &amp; AI Dashboard Preview
              </span>
            </div>
            <a 
              href="https://techschool.thecodebrains.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
            >
              <span>Explore Live Workspace</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-emerald-500/25 via-teal-500/25 to-cyan-500/25 blur-xl opacity-70" />
            <DashboardMockup />
          </div>
        </div>

      </div>
    </section>
  );
}
