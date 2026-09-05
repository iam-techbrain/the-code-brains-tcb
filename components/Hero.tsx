"use client";

import {
  ArrowRight,
  Boxes,
  ShieldCheck,
  CheckCircle2,
  Bot,
  Workflow,
  ChevronRight,
} from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";
import AgentReportPanel from "@/components/AgentReportPanel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 text-slate-900 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-24 h-96 w-96 rounded-full bg-violet-300/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl rounded-[2rem] border border-white/80 bg-white/50 p-5 shadow-soft backdrop-blur-md sm:p-8 lg:p-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Next-Gen AI Automation &amp; Multi-SaaS Engineering Studio
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
              Let AI do the work.{" "}
              <span className="headline-glow mt-1 block">
                Agents that run. Workflows that finish.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
              We design, build, and deploy autonomous AI agents, advanced n8n &amp; Make automation pipelines, and specialized AI-driven SaaS solutions. Eliminate manual overhead and scale your business with intelligent autonomous systems.
            </p>

            <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
              {[
                "AI Agent & Workflow Engineering",
                "Enterprise Multi-Tenant SaaS",
                "Eliminate Repetitive Manual Work",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-3 text-xs font-semibold sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-3.5 py-3 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Bot className="h-4 w-4" />
                </span>
                Autonomous AI Agents
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-3.5 py-3 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Workflow className="h-4 w-4" />
                </span>
                n8n &amp; Make Workflows
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-3.5 py-3 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Boxes className="h-4 w-4" />
                </span>
                Custom RAG &amp; LLMs
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-3.5 py-3 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                Voice AI &amp; Telephony
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-indigo-500 to-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:brightness-110"
              >
                Get Custom AI Solution
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#ai-agents-catalog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-200 bg-white/90 px-6 py-3.5 text-sm font-semibold text-brand-600 shadow-sm transition hover:border-brand-400 hover:bg-white"
              >
                <Bot className="h-4 w-4" />
                Browse 10 AI Agents Catalog
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="pointer-events-none absolute -inset-3 rounded-[2rem] glow-ring opacity-70 blur-xl" />
            <div className="animate-float-slow absolute -left-3 top-10 z-20 hidden rounded-2xl border border-white bg-white px-3 py-2 shadow-card sm:block">
              <p className="text-[10px] font-semibold text-slate-500">Agent runs</p>
              <p className="font-display text-sm font-bold text-brand-600">13.4k today</p>
            </div>
            <div className="animate-float absolute -right-2 bottom-24 z-20 hidden rounded-2xl border border-white bg-white px-3 py-2 shadow-card sm:block">
              <p className="text-[10px] font-semibold text-emerald-600">n8n live</p>
              <p className="font-display text-sm font-bold text-slate-900">98.6% success</p>
            </div>
            <div className="relative origin-center transition-transform duration-500 lg:rotate-[1.75deg] lg:hover:rotate-0">
              <AgentReportPanel />
            </div>
          </div>
        </div>

        <div className="relative mt-12 rounded-[1.75rem] border border-white/80 bg-white/60 p-4 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Live SaaS Workspace &amp; AI Dashboard Preview
              </span>
            </div>
            <a
              href="https://techschool.thecodebrains.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 sm:flex"
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
