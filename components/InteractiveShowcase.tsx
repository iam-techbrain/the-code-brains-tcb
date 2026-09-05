"use client";

import { useState } from "react";
import {
  GraduationCap,
  Users,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Bot,
} from "lucide-react";

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<"school" | "whatsapp" | "ai">("school");

  return (
    <section id="showcase" className="relative border-t border-slate-100 bg-white px-4 py-20 text-slate-900 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-800 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-brand-500" />
            <span>Platform Feature Tour</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            See How TCB Cloud SaaS Powers Your Operations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            High-performance modules designed for speed, low cloud costs, and instant WhatsApp updates.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-10 flex justify-center overflow-x-auto no-scrollbar px-2 pb-2">
          <div className="flex flex-nowrap shrink-0 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("school")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-extrabold transition-all sm:text-sm whitespace-nowrap ${
                activeTab === "school"
                  ? "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/20"
                  : "text-slate-700 hover:text-slate-900 hover:bg-white"
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              <span>TCB School Live System</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("whatsapp")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-extrabold transition-all sm:text-sm whitespace-nowrap ${
                activeTab === "whatsapp"
                  ? "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/20"
                  : "text-slate-700 hover:text-slate-900 hover:bg-white"
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Automation Engine</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-extrabold transition-all sm:text-sm whitespace-nowrap ${
                activeTab === "ai"
                  ? "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/20"
                  : "text-slate-700 hover:text-slate-900 hover:bg-white"
              }`}
            >
              <Bot className="h-4 w-4" />
              <span>AI Agents &amp; RAG Architecture</span>
            </button>
          </div>
        </div>

        {/* Tab 1: TCB School Showcase Preview */}
        {activeTab === "school" && (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10 shadow-xs">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-extrabold text-brand-800 border border-brand-200">
                  LIVE WORKSPACE AT TECHSCHOOL.THECODEBRAINS.COM
                </span>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  Coaching Institute Management System
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Manage student profiles, daily attendance registers, and monthly tuition fee collections with zero complex setup. Isolated database schemas ensure total tenant data protection.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                    <span>Instant student enrolment with Guardian WhatsApp number</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                    <span>1-Click attendance marking with automated parent alert</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                    <span>Automated UPI payment links sent to parents via WhatsApp</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://techschool.thecodebrains.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-500 via-brand-600 to-brand-800 px-7 py-3.5 text-xs font-extrabold text-white transition-all hover:scale-105 shadow-md shadow-brand-500/20"
                  >
                    <Zap className="h-4 w-4" />
                    <span>Open TCB School Workspace</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Visual Dashboard Card Preview */}
              <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900">Class 12 Batch — Today&apos;s Roll Call</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-brand-800 bg-brand-100 px-2 py-0.5 rounded border border-brand-200">
                    96% Present
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-xs border border-slate-200">
                    <div>
                      <div className="font-bold text-slate-900">Aarav Sharma (Roll #101)</div>
                      <div className="text-[10px] text-slate-500">Parent: +91 98765 43210</div>
                    </div>
                    <span className="rounded bg-brand-100 px-2 py-1 text-[10px] font-extrabold text-brand-800 border border-brand-200">
                      Present (WhatsApp Alert Sent)
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-xs border border-slate-200">
                    <div>
                      <div className="font-bold text-slate-900">Priya Verma (Roll #102)</div>
                      <div className="text-[10px] text-slate-500">Parent: +91 98123 45678</div>
                    </div>
                    <span className="rounded bg-brand-100 px-2 py-1 text-[10px] font-extrabold text-brand-800 border border-brand-200">
                      Present (Fee Receipt Paid)
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-xs border border-slate-200">
                    <div>
                      <div className="font-bold text-slate-900">Rohan Gupta (Roll #103)</div>
                      <div className="text-[10px] text-slate-500">Parent: +91 97654 32109</div>
                    </div>
                    <span className="rounded bg-rose-100 px-2 py-1 text-[10px] font-extrabold text-rose-800 border border-rose-200">
                      Absent — Nudge Dispatched
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: WhatsApp Reminders Showcase */}
        {activeTab === "whatsapp" && (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10 shadow-xs">
            <div className="mx-auto max-w-xl">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="flex items-center gap-3 border-b border-brand-700 bg-gradient-to-r from-brand-500 to-brand-700 p-4 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-black text-brand-700 border border-brand-200">
                    TCB
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white">TCB WhatsApp Automation Engine</div>
                    <div className="text-[11px] text-brand-100">Verified Business Cloud API</div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 bg-slate-50 p-5">
                  <div className="self-center rounded-full bg-slate-200 px-3 py-1 text-[10px] font-bold text-slate-700">
                    Automated Instant Alert
                  </div>

                  <div className="max-w-[90%] self-start rounded-2xl rounded-tl-none bg-white p-4 text-xs leading-relaxed text-slate-700 border border-slate-200 shadow-xs">
                    <p className="font-bold text-brand-700">
                      Dear Guardian, 👋
                    </p>
                    <p className="mt-2 text-slate-700">
                      Tuition fee for <span className="font-bold text-slate-900">August 2026</span> (Amount: <span className="font-extrabold text-slate-900">₹4,500</span>) for student <span className="font-bold text-slate-900">Aarav Sharma</span> is pending.
                    </p>
                    <p className="mt-2 text-slate-500">
                      Pay instantly with 1-click UPI to receive official PDF receipt:
                    </p>

                    <div className="mt-3 rounded-xl border border-brand-200 bg-brand-50 p-3 text-center">
                      <span className="text-[10px] font-extrabold uppercase text-brand-800 block mb-1">
                        1-Click UPI Payment Link Active
                      </span>
                      <div className="w-full rounded-lg bg-brand-500 py-2 text-xs font-black text-white shadow-xs">
                        Pay ₹4,500 via UPI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: AI Workflow Agents */}
        {activeTab === "ai" && (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10 shadow-xs">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
                <Bot className="h-6 w-6 text-brand-500" />
                <h4 className="text-sm font-extrabold text-slate-900">RAG Query Agent</h4>
                <p className="text-xs text-slate-600">
                  Instant answer engine for student doubts &amp; syllabus notes based on custom course vector store.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
                <BarChart3 className="h-6 w-6 text-brand-500" />
                <h4 className="text-sm font-extrabold text-slate-900">Fee Recovery Bot</h4>
                <p className="text-xs text-slate-600">
                  Schedules polite, automated reminder sequences over WhatsApp without manual follow-up staff.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
                <ShieldCheck className="h-6 w-6 text-brand-500" />
                <h4 className="text-sm font-extrabold text-slate-900">Tenant Cloud Privacy</h4>
                <p className="text-xs text-slate-600">
                  Row-level security and schema isolation so your institute data never leaks to third parties.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
