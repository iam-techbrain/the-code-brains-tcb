import EcosystemHeader from "@/components/EcosystemHeader";
import SchoolDashboard from "@/components/school/SchoolDashboard";
import SchoolManagementFeature from "@/components/SchoolManagementFeature";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import AIAgentsListSection from "@/components/AIAgentsListSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { GraduationCap, ArrowRight, CheckCircle2, Users, Send } from "lucide-react";

export const metadata = {
  title: "TCB School SaaS — Coaching Institute & School Management Software",
  description: "Automated student attendance tracking, fee recovery ledgers, WhatsApp parent notifications, and digital student ID cards for coaching centers.",
};

export default function SchoolPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <EcosystemHeader />
      
      {/* TCB SCHOOL HERO SECTION (CLEAN WHITE BACKGROUND) */}
      <section className="relative overflow-hidden bg-white px-4 pb-16 pt-12 text-slate-900 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        
        {/* Glow Spheres */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-100/50 blur-[120px]"
        />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          
          {/* Eyebrow Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-xs font-extrabold text-emerald-950 shadow-xs">
            <GraduationCap className="h-4 w-4 text-emerald-600" />
            <span>🎓 TCB SCHOOL — COACHING INSTITUTE MANAGEMENT PLATFORM</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-tight">
            Automate Attendance, Fees &amp; Parent Alerts{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent block mt-2">
              For Coaching Institutes &amp; Academies
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Maintain student rosters, mark 1-click daily attendance registers, track unpaid tuition dues, and dispatch instant parent WhatsApp alerts — starting at <span className="text-emerald-700 font-extrabold">₹499/month</span> with zero setup overhead.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://techschool.thecodebrains.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-8 py-4 text-xs font-extrabold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:scale-105 active:scale-95 sm:w-auto"
            >
              <GraduationCap className="h-5 w-5 text-white" />
              <span>Launch Live TCB School Workspace</span>
              <ArrowRight className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#school-dashboard"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-50 px-7 py-4 text-xs font-bold text-emerald-950 hover:bg-emerald-100 sm:w-auto"
            >
              <span>Explore Student Register ▾</span>
            </a>
          </div>

          {/* 3 Core Pillar Feature Cards inside Hero */}
          <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold mb-3 border border-emerald-200">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Student Directory &amp; Batches</h3>
              <p className="mt-1 text-xs text-slate-600">Store student profiles, roll numbers, guardian contacts &amp; batches.</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700 font-bold mb-3 border border-teal-200">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">1-Click Daily Attendance</h3>
              <p className="mt-1 text-xs text-slate-600">Mark Present/Absent instantly and trigger automated WhatsApp alerts.</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold mb-3 border border-emerald-200">
                <Send className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">WhatsApp Fee Recovery</h3>
              <p className="mt-1 text-xs text-slate-600">Send 1-click tuition due reminders directly to guardian WhatsApp.</p>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE DEMO WORKSPACE SECTION */}
      <div id="school-dashboard">
        <SchoolDashboard />
      </div>

      {/* SCHOOL MANAGEMENT DETAILED FEATURES */}
      <SchoolManagementFeature />

      {/* INTERACTIVE FEATURE TOUR & LIVE SYSTEM DEMO */}
      <InteractiveShowcase />

      {/* 10 PRODUCTION-GRADE AI AGENTS & AUTOMATION MODULES */}
      <AIAgentsListSection />

      {/* PRICING PLANS */}
      <Pricing defaultApp="school" hideToggle={true} />

      {/* FAQ */}
      <FAQ />

      <Footer />
    </main>
  );
}
