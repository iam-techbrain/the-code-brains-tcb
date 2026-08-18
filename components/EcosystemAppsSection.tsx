import Link from "next/link";
import {
  Store,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Receipt,
  Users,
  MessageSquare,
  BarChart3,
  Clock,
  UserCheck,
  Smartphone,
  ChevronRight,
  BadgeCheck,
  Layers,
} from "lucide-react";

export default function EcosystemAppsSection() {
  return (
    <section id="ecosystem-apps" className="relative border-t border-zinc-200/60 bg-gradient-to-b from-zinc-50/80 via-white to-zinc-50/50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      
      {/* Background Decorative Radial Accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-12 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-emerald-50/90 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-xs">
            <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
            TCB Micro-SaaS Product Ecosystem
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Sleek, Purpose-Built Apps for Your Business &amp; Institute
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Choose between our high-performance retail store suite or our modular coaching school platform.
          </p>
        </div>

        {/* Gorgeous Dual App Showcase Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          
          {/* ========================================================== */}
          {/* CARD 1: TCB STORE (RETAIL POS & MONEY MANAGER) */}
          {/* ========================================================== */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.18)]">
            
            {/* Top Gradient Shimmer Bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600" />

            <div>
              {/* Header Row: Icon Avatar + Badges */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#059669] to-emerald-800 text-white shadow-md shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
                    <Store className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-zinc-900 group-hover:text-emerald-700">
                      TCB Store
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Dual-Mode SaaS Platform
                    </div>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-700 shadow-2xs">
                  Retail &amp; Personal
                </span>
              </div>

              {/* Card Description */}
              <p className="mt-5 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                Complete retail solution featuring barcode scanning, 1-click GST invoice generation, customer credit ledger, and a built-in personal money manager.
              </p>

              {/* Micro Dashboard UI Mockup inside Card */}
              <div className="mt-6 rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-zinc-50 to-emerald-50/30 p-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-zinc-200/80 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-bold text-zinc-800">Live Store Counter #01</span>
                  </div>
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                    ₹18,450 Sales Today
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl border border-zinc-200 bg-white p-2.5 shadow-2xs">
                    <span className="text-[10px] text-zinc-400 font-medium block">POS Billing</span>
                    <span className="font-extrabold text-emerald-600 text-xs">0.2s Speed</span>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-2.5 shadow-2xs">
                    <span className="text-[10px] text-zinc-400 font-medium block">Credit Ledger</span>
                    <span className="font-extrabold text-amber-600 text-xs">WhatsApp Alert</span>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-2.5 shadow-2xs">
                    <span className="text-[10px] text-zinc-400 font-medium block">Personal Spend</span>
                    <span className="font-extrabold text-zinc-900 text-xs">Money Manager</span>
                  </div>
                </div>
              </div>

              {/* Mode Switcher Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-700 px-3 py-1 text-xs font-bold text-white shadow-2xs">
                  <Receipt className="h-3.5 w-3.5 text-emerald-400" />
                  Mode A: Store POS &amp; Billing
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-700" />
                  Mode B: Personal Expense Tracker
                </span>
              </div>

              {/* Checklist */}
              <div className="mt-6 grid gap-2 sm:grid-cols-2 border-t border-zinc-100 pt-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Barcode stock master</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>GST printer receipt format</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>WhatsApp payment reminders</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Household savings calculator</span>
                </div>
              </div>
            </div>

            {/* Launch Action Button */}
            <div className="mt-8">
              <Link
                href="/store"
                className="group/btn flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 py-3.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:from-emerald-500 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <span>Launch TCB Store Workspace</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ========================================================== */}
          {/* CARD 2: TCB SCHOOL (COACHING & FEE TRACKER) */}
          {/* ========================================================== */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-9 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.18)]">
            
            {/* Top Gradient Shimmer Bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400" />

            <div>
              {/* Header Row: Icon Avatar + Badges */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-md shadow-emerald-600/20 transition-transform duration-300 group-hover:scale-105">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-zinc-900 group-hover:text-emerald-700">
                      TCB School
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Education Institute Suite
                    </div>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-700 shadow-2xs">
                  Coaching &amp; Tuition
                </span>
              </div>

              {/* Card Description */}
              <p className="mt-5 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                Built specifically for coaching institutes, tuition centers, and schools to maintain student directories, mark daily attendance registers, and trigger WhatsApp parent fee alerts.
              </p>

              {/* Micro Dashboard UI Mockup inside Card */}
              <div className="mt-6 rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-zinc-50 to-emerald-50/30 p-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-zinc-200/80 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-bold text-zinc-800">Institute Roll Call Active</span>
                  </div>
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                    94% Attendance Today
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl border border-zinc-200 bg-white p-2.5 shadow-2xs">
                    <span className="text-[10px] text-zinc-400 font-medium block">Directory</span>
                    <span className="font-extrabold text-zinc-900 text-xs">Enrolled Batches</span>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-2.5 shadow-2xs">
                    <span className="text-[10px] text-zinc-400 font-medium block">Attendance</span>
                    <span className="font-extrabold text-emerald-600 text-xs">1-Click Marker</span>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-2.5 shadow-2xs">
                    <span className="text-[10px] text-zinc-400 font-medium block">Fee Alerts</span>
                    <span className="font-extrabold text-red-600 text-xs">Parent WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Mode Switcher Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-700 px-3 py-1 text-xs font-bold text-white shadow-2xs">
                  <Users className="h-3.5 w-3.5 text-emerald-400" />
                  Student Directory
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  <Clock className="h-3.5 w-3.5 text-emerald-700" />
                  Attendance Register
                </span>
              </div>

              {/* Checklist */}
              <div className="mt-6 grid gap-2 sm:grid-cols-2 border-t border-zinc-100 pt-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Student &amp; Batch roll numbers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>1-Click Present/Absent toggle</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Guardian WhatsApp fee reminders</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>New student enrolment modal</span>
                </div>
              </div>
            </div>

            {/* Launch Action Button */}
            <div className="mt-8">
              <Link
                href="/school"
                className="group/btn flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 py-3.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:from-emerald-500 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <span>Launch TCB School Workspace</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

        {/* ========================================================== */}
        {/* FUTURE EXPANSION ROADMAP — 8+ MODULAR SAAS APPS */}
        {/* ========================================================== */}
        <div className="mt-16 rounded-3xl border border-emerald-200/80 bg-emerald-50/40 p-6 sm:p-10">
          <div className="flex flex-col gap-2 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between border-b border-emerald-200/80 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                <Layers className="h-4 w-4 text-emerald-600" />
                <span>Micro-SaaS Platform Roadmap</span>
              </div>
              <h3 className="mt-1 text-2xl font-black text-zinc-900 sm:text-3xl">
                Built for 8+ Specialized SaaS Modules
              </h3>
              <p className="text-xs text-zinc-600 mt-1">
                One scalable codebase architecture supporting unlimited industry verticals.
              </p>
            </div>
            <span className="self-center sm:self-auto rounded-full bg-emerald-700 px-4 py-1.5 text-xs font-bold text-white shadow-xs">
              Upcoming Vertical Modules
            </span>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs transition-all hover:border-emerald-300">
              <div className="flex items-center gap-2 font-bold text-xs text-zinc-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">🏥</span>
                <span>TCB Health</span>
              </div>
              <p className="mt-1.5 text-[11px] text-zinc-500">Clinic EMR &amp; Pharmacy POS</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs transition-all hover:border-emerald-300">
              <div className="flex items-center gap-2 font-bold text-xs text-zinc-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">🏋️</span>
                <span>TCB Fitness</span>
              </div>
              <p className="mt-1.5 text-[11px] text-zinc-500">Gym Biometrics &amp; Member Dues</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs transition-all hover:border-emerald-300">
              <div className="flex items-center gap-2 font-bold text-xs text-zinc-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">🏨</span>
                <span>TCB Stay</span>
              </div>
              <p className="mt-1.5 text-[11px] text-zinc-500">Hotel Desk &amp; Room Booking</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xs transition-all hover:border-emerald-300">
              <div className="flex items-center gap-2 font-bold text-xs text-zinc-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">🍽️</span>
                <span>TCB Dine</span>
              </div>
              <p className="mt-1.5 text-[11px] text-zinc-500">Restaurant QR &amp; Kitchen KOT</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

