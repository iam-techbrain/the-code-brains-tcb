import Link from "next/link";
import { ArrowRight, Store, GraduationCap, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
      {/* Subtle clean grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-xs">
          <Sparkles className="h-4 w-4 text-emerald-600" />
          <span>TCB Micro-SaaS Platform — Retail &amp; Education Suite</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Manage your retail shop &amp; coaching school{" "}
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-zinc-900 bg-clip-text text-transparent">
            with 1 unified platform
          </span>
        </h1>

        {/* Subtitle mentioning BOTH TCB Store and TCB School */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          Whether you run a retail store requiring <strong>POS billing, inventory &amp; money management</strong> (<span className="text-emerald-700 font-bold">TCB Store</span>) or a coaching institute managing <strong>students, daily attendance &amp; fee alerts</strong> (<span className="text-emerald-700 font-bold">TCB School</span>), TCB provides purpose-built Micro-SaaS solutions.
        </p>

        {/* Dual Launch CTA Buttons — Both Crisp Outline Style */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/store"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-300/80 bg-white px-6 py-3.5 text-xs font-bold text-emerald-900 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50/60 hover:shadow-sm sm:w-auto"
          >
            <Store className="h-4 w-4 text-emerald-600" />
            <span>Launch TCB Store App</span>
            <ArrowRight className="h-4 w-4 text-emerald-600 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          
          <Link
            href="/school"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-300/80 bg-white px-6 py-3.5 text-xs font-bold text-emerald-900 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50/60 hover:shadow-sm sm:w-auto"
          >
            <GraduationCap className="h-4 w-4 text-emerald-600" />
            <span>Launch TCB School App</span>
            <ArrowRight className="h-4 w-4 text-emerald-600 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Highlight Bullets */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-zinc-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            No credit card required
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Instant WhatsApp Alerts
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            GST &amp; Barcode Ready
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
