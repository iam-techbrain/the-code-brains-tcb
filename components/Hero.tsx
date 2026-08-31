"use client";

import Link from "next/link";
import { ArrowRight, Boxes, GraduationCap, Sparkles, ShieldCheck, CheckCircle2, Cloud, Lock, Zap } from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-20 pt-16 text-slate-900 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
      {/* Dynamic Glowing Spheres */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-100/50 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-teal-100/40 blur-[100px]"
      />

      {/* Grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#059669_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-10"
      />

      <div className="mx-auto max-w-5xl text-center relative z-10">
        {/* Eyebrow Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-xs backdrop-blur-md transition-all hover:scale-105">
          <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-ping" />
          <Sparkles className="h-4 w-4 text-emerald-600" />
          <span>TCB AI Agents &amp; Micro-SaaS Ecosystem</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Automate Your Business &amp; School{" "}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent block mt-2">
            With 1 Unified AI SaaS Cloud
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Powering modern coaching centers and institutes with automated attendance &amp; fee recovery (<span className="text-emerald-700 font-bold">TCB School</span>) and custom AI agent workflows (<span className="text-slate-500 font-bold">TCB Inventory Soon</span>).
        </p>

        {/* Hero Badges Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl mx-auto text-xs font-semibold">
          <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-slate-700 shadow-xs">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Isolated Tenant Cloud</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-slate-700 shadow-xs">
            <Cloud className="h-4 w-4 text-emerald-600" />
            <span>AWS 99.95% Uptime</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-slate-700 shadow-xs">
            <Lock className="h-4 w-4 text-emerald-600" />
            <span>Encrypted Data Privacy</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-slate-700 shadow-xs">
            <Zap className="h-4 w-4 text-emerald-600" />
            <span>WhatsApp Billing &amp; Alerts</span>
          </div>
        </div>

        {/* Dual Launch CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* TCB School Live Launch Link */}
          <a
            href="https://techschool.thecodebrains.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-8 py-4 text-xs font-extrabold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:scale-105 sm:w-auto"
          >
            <GraduationCap className="h-5 w-5 text-white" />
            <span>Launch TCB School Workspace</span>
            <ArrowRight className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* TCB Inventory Disabled / Coming Soon */}
          <a
            href="#coming-soon"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-slate-300 bg-slate-50 px-7 py-4 text-xs font-bold text-slate-800 shadow-xs transition-all duration-200 hover:border-emerald-400 hover:bg-white sm:w-auto"
          >
            <Boxes className="h-4 w-4 text-slate-600" />
            <span>TCB Inventory</span>
            <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-extrabold text-amber-800 border border-amber-200">
              SOON
            </span>
          </a>
        </div>

        {/* Highlight Bullets */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Live at techschool.thecodebrains.com
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Instant Parent WhatsApp Alerts
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-teal-600" />
            Low-Cost Multi-Tenant Architecture
          </span>
        </div>
      </div>

      {/* Dashboard Preview Mockup with Emerald Glow */}
      <div className="mt-14 sm:mt-16 relative max-w-6xl mx-auto">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-2xl opacity-60" />
        <DashboardMockup />
      </div>
    </section>
  );
}
