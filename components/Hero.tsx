"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Layers, Zap } from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
      {/* Subtle clean grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-bold text-zinc-800 shadow-xs">
          <Sparkles className="h-4 w-4 text-emerald-600" />
          <span>TCB Ecosystem · Enterprise Micro-SaaS Cloud Operating System</span>
        </div>

        {/* Main Enterprise Headline — SOLID TEXT, NO FADING GRADIENT */}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
          The Business Operating System for <span className="text-emerald-600">Modern Enterprises</span>
        </h1>

        {/* Enterprise Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          TCB delivers specialized, high-performance Micro-SaaS applications designed for retail commerce, academies, healthcare, and service industries — all unified under one global cloud platform.
        </p>

        {/* Product Suite CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#ecosystem-apps"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-7 py-3.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-emerald-500 hover:shadow-md border border-emerald-600 sm:w-auto"
          >
            <Layers className="h-4 w-4 text-white" />
            <span>Explore Ecosystem Apps</span>
            <ArrowRight className="h-4 w-4 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
          </a>
          
          <a
            href="#showcase"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-7 py-3.5 text-xs font-bold text-zinc-700 transition-all duration-200 hover:border-emerald-500 hover:text-emerald-600 hover:bg-zinc-50 shadow-2xs sm:w-auto"
          >
            <Zap className="h-4 w-4 text-emerald-600" />
            <span>View Interactive Demo</span>
          </a>
        </div>

        {/* Enterprise Highlight Bullets */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-zinc-600">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            Multi-Tenant Global Infrastructure
          </span>
          <span className="hidden text-zinc-300 sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            Specialized Vertical Workflows
          </span>
          <span className="hidden text-zinc-300 sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            Instant Cloud Deployment
          </span>
        </div>
      </div>

      {/* Dashboard Preview Mockup */}
      <div className="mt-14 sm:mt-16">
        <DashboardMockup />
      </div>
    </section>
  );
}
