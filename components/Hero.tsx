import Link from "next/link";
import { ArrowRight, Store, GraduationCap, Sparkles, ShieldCheck, CheckCircle2, Cloud, Lock, Zap } from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8">
      {/* Subtle clean radial grid background with #059669 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#059669_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-15 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-5xl text-center">
        {/* Eyebrow Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/90 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-emerald-100/90">
          <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
          <Sparkles className="h-4 w-4 text-emerald-600" />
          <span>#1 India-Specific Micro-SaaS Ecosystem — Retail &amp; Education Suite</span>
        </div>

        {/* Main Brand Gradient Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Manage retail stores &amp; coaching institutes{" "}
          <span className="nuvertos-gradient-text block mt-1">
            with 1 Unified Cloud SaaS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Empowering modern Indian businesses with high-speed POS billing, inventory tracking (<span className="text-emerald-700 font-bold">TCB Store</span>) and coaching centers with automated attendance &amp; fee collection (<span className="text-emerald-700 font-bold">TCB School</span>).
        </p>

        {/* Hero Badges Grid */}
        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 max-w-3xl mx-auto">
          <div className="hero-badge justify-center">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>ABDM Ready</span>
          </div>
          <div className="hero-badge justify-center">
            <Cloud className="h-4 w-4 text-emerald-600" />
            <span>AWS 99.95% Uptime</span>
          </div>
          <div className="hero-badge justify-center">
            <Lock className="h-4 w-4 text-emerald-600" />
            <span>HIPAA &amp; ISO Security</span>
          </div>
          <div className="hero-badge justify-center">
            <Zap className="h-4 w-4 text-emerald-600" />
            <span>WhatsApp Billing</span>
          </div>
        </div>

        {/* Dual Launch CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/store"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#059669] px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 sm:w-auto"
          >
            <Store className="h-4 w-4 text-white" />
            <span>Launch TCB Store App</span>
            <ArrowRight className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/school"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border-2 border-slate-900 bg-slate-900 px-7 py-3.5 text-xs font-bold text-white shadow-lg transition-all duration-200 hover:bg-slate-800 hover:border-slate-800 hover:shadow-xl hover:-translate-y-0.5 sm:w-auto"
          >
            <GraduationCap className="h-4 w-4 text-emerald-400" />
            <span>Launch TCB School App</span>
            <ArrowRight className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Highlight Bullets */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Free 7-Day Trial
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Instant WhatsApp PDF Alerts
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            GST &amp; Barcode Ready
          </span>
        </div>
      </div>

      {/* Dashboard Preview Mockup with Emerald Glow */}
      <div className="mt-14 sm:mt-16 relative">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-emerald-600/20 to-emerald-500/20 blur-xl opacity-70" />
        <DashboardMockup />
      </div>
    </section>
  );
}


