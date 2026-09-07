"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
  Zap,
  ShieldCheck,
  Clock,
  Settings2,
} from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";
import AgentReportPanel from "@/components/AgentReportPanel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 text-slate-900 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8">
      {/* Refined subtle ambient background grid & radial light (No harsh watercolor blobs) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[560px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_65%)]"
      />

      {/* Main Hero Container Card */}
      <div className="relative z-10 mx-auto max-w-7xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-5 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 backdrop-blur-xl">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">

          {/* Left Column: Core Value Proposition & Messaging */}
          <div className="flex flex-col justify-center lg:col-span-7">

            {/* Main Headline */}
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
              Custom AI Agents Built Your Way.{" "}
              <span className="mt-1.5 block bg-gradient-to-r from-[#305eff] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Or Deploy Instantly.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 sm:mt-5 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-base sm:leading-7">
              We build custom autonomous agents tailored to your exact workflow — or deploy our 18 battle-tested pre-built agents today for immediate results.
            </p>

            {/* Dual Offering Comparison Cards */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {/* Card 1: Custom AI Agents */}
              <div className="group relative rounded-2xl border border-[#d0ddfd] bg-gradient-to-b from-[#eff4ff]/60 to-white p-4 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#305eff] hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#305eff] text-white shadow-xs">
                    <Settings2 className="h-4 w-4" />
                  </span>
                  <span className="rounded-full bg-[#eff4ff] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#305eff] border border-[#d0ddfd]">
                    100% Tailored
                  </span>
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-slate-900">
                  Custom-Built To Your Vision
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Architected around your exact business logic, custom prompts, internal databases, and favorite CRMs.
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-[#305eff]">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Your Rules &bull; Your Stack &bull; End-to-End</span>
                </div>
              </div>

              {/* Card 2: Ready-Made Agents */}
              <div className="group relative rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50/50 to-white p-4 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
                    <Zap className="h-4 w-4" />
                  </span>
                  <span className="rounded-full bg-emerald-100/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    Instant Launch
                  </span>
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-slate-900">
                  Pre-Built Battle-Tested Agents
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Deploy our proprietary in-house agents today for voice calling, WhatsApp follow-ups, and lead routing.
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Zero Wait &bull; High-Speed &bull; Proven Uptime</span>
                </div>
              </div>
            </div>

            {/* Quick Feature Pillars */}
            <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 sm:grid-cols-4 sm:gap-2.5">
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50/80 px-2.5 py-1.5">
                <Clock className="h-3.5 w-3.5 text-[#305eff]" />
                <span className="text-[11px] font-semibold text-slate-800">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50/80 px-2.5 py-1.5">
                <Cpu className="h-3.5 w-3.5 text-[#305eff]" />
                <span className="text-[11px] font-semibold text-slate-800">Advanced LLMs</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50/80 px-2.5 py-1.5">
                <Workflow className="h-3.5 w-3.5 text-[#305eff]" />
                <span className="text-[11px] font-semibold text-slate-800">n8n &amp; Make Sync</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50/80 px-2.5 py-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-[11px] font-semibold text-slate-800">Enterprise Grade</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-[#305eff] hover:bg-[#1f47e0] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#305eff]/30 transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                <Sparkles className="h-4 w-4" />
                <span>Build My Custom AI Agent</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#ai-agents-catalog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs transition-all duration-200 hover:border-[#305eff]/60 hover:bg-[#eff4ff]/40 active:scale-95"
              >
                <Bot className="h-4 w-4 text-[#305eff]" />
                <span>Explore AI Agents</span>
              </a>
            </div>

            {/* Micro-Trust Line */}
            <p className="mt-3 text-[11px] text-slate-500">
              ⚡ Ultra-fast delivery &bull; 18 Bespoke &amp; pre-built agents &bull; 36 live n8n workflows
            </p>
          </div>

          {/* Right Column: Live Agent Ops Monitor */}
          <div className="relative flex flex-col justify-center lg:col-span-5">
            {/* Elegant, clean ambient backlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#305eff]/15 via-blue-500/10 to-transparent blur-2xl"
            />

            {/* Floating Metric 1 */}
            <div className="animate-float-slow absolute -left-3 top-8 z-20 hidden rounded-2xl border border-slate-200/80 bg-white/95 px-3.5 py-2 shadow-md backdrop-blur-md sm:block">
              <p className="text-[10px] font-semibold text-slate-500">Fleet Capacity</p>
              <p className="font-display text-sm font-bold text-[#305eff]">18 Custom Agents Built</p>
            </div>

            {/* Floating Metric 2 */}
            <div className="animate-float absolute -right-2 bottom-20 z-20 hidden rounded-2xl border border-slate-200/80 bg-white/95 px-3.5 py-2 shadow-md backdrop-blur-md sm:block">
              <p className="text-[10px] font-semibold text-emerald-600">Active Workflows</p>
              <p className="font-display text-sm font-bold text-slate-900">36 n8n Routes &bull; 13 Bots</p>
            </div>

            {/* Visual Panel */}
            <div className="relative origin-center transition-transform duration-500 lg:rotate-[1deg] lg:hover:rotate-0">
              <AgentReportPanel />
            </div>
          </div>
        </div>

        {/* Bottom Section: Live SaaS Workspace & AI Dashboard Preview */}
        <div className="relative mt-12 rounded-[1.75rem] border border-slate-200/80 bg-slate-50/70 p-4 shadow-xs sm:p-6">
          <div className="mb-4 flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#305eff] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Live SaaS Workspace &amp; AI Dashboard Preview
              </span>
            </div>
            <a
              href="https://techschool.thecodebrains.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 text-xs font-semibold text-[#305eff] hover:text-[#1f47e0] sm:flex"
            >
              Explore Live Workspace
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
