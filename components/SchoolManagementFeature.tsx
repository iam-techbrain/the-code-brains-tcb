"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  CalendarCheck,
  CreditCard,
  BookOpenCheck,
  Clock,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  AlertCircle,
  FileSpreadsheet,
  BadgePercent,
  Check,
} from "lucide-react";

type FeatureModule = {
  id: string;
  name: string;
  shortDesc: string;
  icon: any;
  badgeText: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  mockData: {
    title: string;
    subTitle: string;
    items: { col1: string; col2: string; status: string; tag: string }[];
  };
};

const SCHOOL_MODULES: FeatureModule[] = [
  {
    id: "students-staff",
    name: "Student & Staff Management",
    shortDesc:
      "Maintain 360-degree digital profiles for students, teachers, and administrative staff across multiple batches and branches.",
    icon: Users,
    badgeText: "Directory & Profiles",
    metrics: [
      { label: "Profile Setup Speed", value: "< 30 sec" },
      { label: "Batch Capacity", value: "Unlimited" },
      { label: "Search Accuracy", value: "100% Instant" },
    ],
    bulletPoints: [
      "Complete student profiles with photo, Guardian WhatsApp contact, and Roll Numbers",
      "Assign students to custom batches (e.g., Class 10 Science, JEE Mains 2026)",
      "Staff directory with subjects taught, salary status, and emergency contacts",
      "Bulk CSV import & 1-click PDF student ID card generator",
    ],
    mockData: {
      title: "Student Roster — Class 12 Science (Batch A)",
      subTitle: "Active Students: 48 / Enrolled This Month: +12",
      items: [
        { col1: "Aarav Sharma (Roll #101)", col2: "Parent: +91 98765 43210", status: "Active", tag: "JEE Batch" },
        { col1: "Priya Verma (Roll #102)", col2: "Parent: +91 98123 45678", status: "Active", tag: "NEET Batch" },
        { col1: "Rohan Gupta (Roll #103)", col2: "Parent: +91 97654 32109", status: "Fees Due", tag: "Board Batch" },
      ],
    },
  },
  {
    id: "attendance",
    name: "Daily Attendance Tracker",
    shortDesc:
      "1-Click daily attendance register with automated instant WhatsApp notifications sent directly to guardians.",
    icon: CalendarCheck,
    badgeText: "Real-time Roll Call",
    metrics: [
      { label: "Roll Call Speed", value: "1-Click" },
      { label: "Alert Latency", value: "< 2 sec" },
      { label: "Monthly Summary", value: "Auto Ledger" },
    ],
    bulletPoints: [
      "Mark Present, Absent, Late, or On Leave with a single tap on phone or laptop",
      "Auto-trigger WhatsApp / SMS notifications to parents when a student is absent",
      "Monthly attendance percentage reports per student for parent-teacher meetings",
      "Teacher attendance register for payroll calculation",
    ],
    mockData: {
      title: "Daily Roll Call — 31 Aug 2026",
      subTitle: "Present: 44 | Absent: 3 | Late: 1 | Attendance: 91.6%",
      items: [
        { col1: "Aarav Sharma", col2: "Marked Present (08:55 AM)", status: "Present", tag: "WhatsApp Sent" },
        { col1: "Priya Verma", col2: "Marked Present (09:01 AM)", status: "Present", tag: "WhatsApp Sent" },
        { col1: "Rohan Gupta", col2: "Absent — Notification Triggered", status: "Absent", tag: "Parent Alerted" },
      ],
    },
  },
  {
    id: "fees",
    name: "Fees & Dues Ledger",
    shortDesc:
      "Track monthly tuition fees, issue GST compliant receipts, and auto-send WhatsApp payment links for uncollected dues.",
    icon: CreditCard,
    badgeText: "Fee Recovery",
    metrics: [
      { label: "Collection Speedup", value: "3x Faster" },
      { label: "Default Reduction", value: "-85%" },
      { label: "UPI Receipts", value: "Automated" },
    ],
    bulletPoints: [
      "Maintain detailed fee structures (Monthly Tuition, Admission Fee, Test Series)",
      "Instant WhatsApp PDF fee receipt generation with custom institute logo",
      "Automated reminder alerts for upcoming due dates with embedded UPI payment link",
      "Discount management (Scholarship, Sibling Discount, Early Bird)",
    ],
    mockData: {
      title: "Fee Collection Ledger — August 2026 Dues",
      subTitle: "Collected: ₹1,85,000 | Pending Dues: ₹22,000",
      items: [
        { col1: "Aarav Sharma", col2: "₹4,500 Paid via UPI", status: "Paid", tag: "Receipt #402" },
        { col1: "Priya Verma", col2: "₹4,500 Paid via Cash", status: "Paid", tag: "Receipt #403" },
        { col1: "Rohan Gupta", col2: "₹4,500 Due (Due Date: 05 Aug)", status: "Pending Dues", tag: "Remind Sent" },
      ],
    },
  },
  {
    id: "exams",
    name: "Exams & Gradebook",
    shortDesc:
      "Create weekly unit tests or semester exams, record marks, and auto-generate clean digital report cards for parents.",
    icon: BookOpenCheck,
    badgeText: "Assessment Hub",
    metrics: [
      { label: "Report Card Gen", value: "Instant" },
      { label: "Subject Analytics", value: "Automated" },
      { label: "Rank Publishing", value: "1-Click" },
    ],
    bulletPoints: [
      "Schedule unit tests, mock exams, and quarterly board practice papers",
      "Enter subject marks (Physics, Chemistry, Maths, Biology, English)",
      "Automated grade calculation, percentile ranking, and class toppers list",
      "Share digital report card PDFs directly with parents over WhatsApp",
    ],
    mockData: {
      title: "Mock Test #4 Results — Physics & Chemistry",
      subTitle: "Batch Average: 78.4% | Class Rank List Generated",
      items: [
        { col1: "Aarav Sharma", col2: "Score: 192 / 200 (96%)", status: "Rank #1", tag: "Grade A+" },
        { col1: "Priya Verma", col2: "Score: 184 / 200 (92%)", status: "Rank #2", tag: "Grade A+" },
        { col1: "Rohan Gupta", col2: "Score: 140 / 200 (70%)", status: "Rank #14", tag: "Grade B" },
      ],
    },
  },
  {
    id: "timetable",
    name: "Timetable & Class Schedule",
    shortDesc:
      "Design clash-free weekly lecture timetables for batches and classrooms with instant substitution management.",
    icon: Clock,
    badgeText: "Class Scheduling",
    metrics: [
      { label: "Conflict Checks", value: "Automated" },
      { label: "Faculty Alerts", value: "Instant SMS" },
      { label: "Room Utilization", value: "100% Optimized" },
    ],
    bulletPoints: [
      "Visual grid builder for Monday–Saturday coaching class schedules",
      "Assign classrooms (Hall A, Lab 1, Room 102) without double-booking conflicts",
      "Teacher substitution toggle if a faculty member is on leave",
      "Student app / web view to check daily lecture timings and homework notes",
    ],
    mockData: {
      title: "Today's Coaching Schedule — Room 101",
      subTitle: "4 Lectures Scheduled | Next Class: 04:00 PM (Mathematics)",
      items: [
        { col1: "03:00 PM - 04:00 PM", col2: "Physics (Prof. Kapoor) — Hall A", status: "Ongoing", tag: "Batches 10-A" },
        { col1: "04:00 PM - 05:00 PM", col2: "Maths (Prof. Sharma) — Hall A", status: "Next Up", tag: "Batches 10-A" },
        { col1: "05:15 PM - 06:15 PM", col2: "Chemistry Lab (Dr. Mehta)", status: "Scheduled", tag: "Lab 2" },
      ],
    },
  },
  {
    id: "multitenant",
    name: "Low-Cost Multi-Tenant Cloud Architecture",
    shortDesc:
      "Enterprise-grade multi-tenant platform designed to give every coaching center zero-hassle isolation on a budget.",
    icon: Building2,
    badgeText: "SaaS Architecture",
    metrics: [
      { label: "Tenant Setup", value: "Instant" },
      { label: "Cost Saving", value: "80% Lower" },
      { label: "Data Security", value: "Isolated DB" },
    ],
    bulletPoints: [
      "Zero infrastructure overhead: Manage 10 to 5,000+ students effortlessly",
      "Isolated institute database schemas ensuring complete privacy of student data",
      "Custom branding: Add your institute logo, receipt header, and colors",
      "Budget-friendly pricing tailored for small coaching centers and home tuition providers",
    ],
    mockData: {
      title: "TCB School Multi-Tenant Dashboard",
      subTitle: "Active Institute Domain: apexcoaching.tcbschool.com",
      items: [
        { col1: "Data Isolation", col2: "Encrypted PostgreSQL Schema per Tenant", status: "Active", tag: "Isolated" },
        { col1: "Subscription Plan", col2: "Starter Coaching Tier (₹499/mo)", status: "Active Plan", tag: "Low Cost" },
        { col1: "Uptime & Backups", col2: "AWS Cloud 99.95% + Daily Automated Backups", status: "Protected", tag: "Cloud SSL" },
      ],
    },
  },
];

export default function SchoolManagementFeature() {
  const [activeTab, setActiveTab] = useState<string>("students-staff");

  const currentModule =
    SCHOOL_MODULES.find((m) => m.id === activeTab) || SCHOOL_MODULES[0];

  return (
    <section
      id="school-feature"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      {/* Decorative Radial Backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header Badge & Title */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-100/70 px-4 py-1.5 text-xs font-bold text-emerald-900 shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-ping" />
            <GraduationCap className="h-4 w-4 text-emerald-700" />
            <span>Flagship SaaS Solution — Live Feature</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            School &amp; Coaching Management System{" "}
            <span className="nuvertos-gradient-text block mt-1">
              Built for Institutes on a Budget
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Empower your tuition center, coaching institute, or school with a modern, low-cost multi-tenant SaaS platform that streamlines daily operations, fees, and attendance without expensive software costs.
          </p>
        </div>

        {/* Highlighted Value Proposition Pill Grid */}
        <div className="mt-10 grid gap-3 grid-cols-2 sm:grid-cols-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-white p-3.5 shadow-2xs">
            <BadgePercent className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <div className="text-xs font-extrabold text-slate-900">Ultra Affordable</div>
              <div className="text-[10px] text-slate-500">Low-cost monthly SaaS</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-white p-3.5 shadow-2xs">
            <Building2 className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <div className="text-xs font-extrabold text-slate-900">Multi-Tenant Cloud</div>
              <div className="text-[10px] text-slate-500">Instant tenant setup</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-white p-3.5 shadow-2xs">
            <Zap className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <div className="text-xs font-extrabold text-slate-900">WhatsApp Integrated</div>
              <div className="text-[10px] text-slate-500">Instant alerts &amp; receipts</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-white p-3.5 shadow-2xs">
            <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <div className="text-xs font-extrabold text-slate-900">100% Data Isolated</div>
              <div className="text-[10px] text-slate-500">Private institute schema</div>
            </div>
          </div>
        </div>

        {/* Feature Interactive Navigation Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {SCHOOL_MODULES.map((mod) => {
            const IconComponent = mod.icon;
            const isActive = activeTab === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#059669] text-white shadow-lg shadow-emerald-600/25 scale-105"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-400 hover:bg-emerald-50/50"
                }`}
              >
                <IconComponent className={`h-4 w-4 ${isActive ? "text-white" : "text-emerald-600"}`} />
                <span>{mod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Module Interactive Showcase Box */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-emerald-200 bg-white p-6 sm:p-10 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-100 border border-emerald-300/80 px-3 py-1 text-xs font-bold text-emerald-900">
                  {currentModule.badgeText}
                </span>
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                  Live Operational Module
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                {currentModule.name}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                {currentModule.shortDesc}
              </p>

              {/* Metrics Pill Row */}
              <div className="grid grid-cols-3 gap-3 border-y border-slate-100 py-4">
                {currentModule.metrics.map((met, idx) => (
                  <div key={idx} className="rounded-xl bg-emerald-50/60 p-3 text-center border border-emerald-100">
                    <div className="text-base font-black text-emerald-800">{met.value}</div>
                    <div className="text-[10px] font-semibold text-slate-500">{met.label}</div>
                  </div>
                ))}
              </div>

              {/* Bullet Features List */}
              <div className="space-y-2.5">
                {currentModule.bulletPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Launch & Demo Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://techschool.thecodebrains.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#059669] px-6 py-3.5 text-xs font-extrabold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Launch TCB School Workspace</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#showcase"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-emerald-600 bg-white px-6 py-3.5 text-xs font-bold text-emerald-900 transition-all hover:bg-emerald-50"
                >
                  <span>View Live Feature Demo</span>
                </a>
              </div>
            </div>

            {/* Right Live UI Mockup Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-5 shadow-2xl relative overflow-hidden">
                {/* Top UI Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs font-bold text-slate-300">
                      TCB School OS (techschool.thecodebrains.com)
                    </span>
                  </div>
                  <span className="rounded bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                    LIVE SYSTEM PREVIEW
                  </span>
                </div>

                {/* Mock Card Header */}
                <div>
                  <h4 className="text-sm font-extrabold text-emerald-400">
                    {currentModule.mockData.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {currentModule.mockData.subTitle}
                  </p>
                </div>

                {/* Mock Data Table List */}
                <div className="mt-4 space-y-2.5">
                  {currentModule.mockData.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl bg-slate-800/80 border border-slate-700/80 p-3 text-xs"
                    >
                      <div>
                        <div className="font-bold text-white">{item.col1}</div>
                        <div className="text-[11px] text-slate-400">{item.col2}</div>
                      </div>
                      <div className="flex items-center gap-2 text-right">
                        <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-300 border border-slate-700">
                          {item.tag}
                        </span>
                        <span
                          className={`rounded-md px-2 py-1 text-[10px] font-extrabold ${
                            item.status === "Active" || item.status === "Present" || item.status === "Paid" || item.status === "Rank #1"
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                              : item.status === "Absent" || item.status === "Pending Dues"
                              ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                              : "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-5 border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Multi-tenant data isolated
                  </span>
                  <span className="font-semibold text-emerald-400">
                    Budget Tier Active
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Budget Comparison Banner */}
        <div className="mt-16 rounded-3xl border border-emerald-300/80 bg-gradient-to-r from-emerald-900 via-emerald-950 to-slate-900 p-8 text-white shadow-xl relative overflow-hidden">
          <div className="grid gap-6 md:grid-cols-12 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300">
                <BadgePercent className="h-4 w-4 text-emerald-400" />
                <span>Why Choose TCB School Multi-Tenant SaaS?</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Save Up to 80% Compared to Traditional Software ERPs
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Legacy school management systems charge astronomical setup fees (₹50,000+) and require local servers. TCB School runs instantly on the cloud with simple, budget-friendly subscription plans for tuition classes &amp; coaching institutes.
              </p>
            </div>

            <div className="md:col-span-4 text-center md:text-right">
              <a
                href="https://techschool.thecodebrains.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 text-xs font-extrabold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-400 hover:scale-105"
              >
                <span>Launch TCB School Workspace</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
