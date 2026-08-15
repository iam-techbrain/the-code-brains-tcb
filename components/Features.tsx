"use client";

import { useState } from "react";
import {
  PackageSearch,
  FileCheck2,
  MessageCircleMore,
  Barcode,
  Users,
  TrendingUp,
  GraduationCap,
  CheckSquare,
  CreditCard,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  tag: string;
  appBadge: "TCB Store" | "TCB School";
  title: string;
  description: string;
  stat: string;
  statLabel: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: PackageSearch,
    tag: "Inventory",
    appBadge: "TCB Store",
    title: "Real-Time Stock Sync",
    description:
      "Stock levels automatically update with every barcode scan or POS sale so you never run out or oversell.",
    stat: "100%",
    statLabel: "Accuracy across stores",
  },
  {
    icon: FileCheck2,
    tag: "Invoicing",
    appBadge: "TCB Store",
    title: "1-Click GST Billing",
    description:
      "Create professional, GST-compliant invoices in under 5 seconds. Share via WhatsApp, SMS, or print receipts.",
    stat: "5 sec",
    statLabel: "Average billing speed",
  },
  {
    icon: GraduationCap,
    tag: "Education",
    appBadge: "TCB School",
    title: "Student & Batch Directory",
    description:
      "Maintain complete student profiles, roll numbers, class batches (Science, Commerce, Maths), and guardian contacts.",
    stat: "100%",
    statLabel: "Organized student records",
  },
  {
    icon: CheckSquare,
    tag: "Education",
    appBadge: "TCB School",
    title: "Daily Attendance Register",
    description:
      "1-Click daily attendance marker for students (Present, Absent, Late) with automated instant SMS/WhatsApp alerts.",
    stat: "1-Click",
    statLabel: "Daily roll-call speed",
  },
  {
    icon: CreditCard,
    tag: "Education",
    appBadge: "TCB School",
    title: "Pending Fee Dues Ledger",
    description:
      "Track pending tuition fees, uncollected dues, and send 1-click WhatsApp payment reminders to parents & guardians.",
    stat: "3x Faster",
    statLabel: "Fee collection rate",
  },
  {
    icon: MessageCircleMore,
    tag: "Collections",
    appBadge: "TCB Store",
    title: "Automated WhatsApp Reminders",
    description:
      "Send smart, polite payment reminder messages with embedded UPI links directly to customer WhatsApp chats.",
    stat: "3x Faster",
    statLabel: "Payment recovery rate",
  },
  {
    icon: Barcode,
    tag: "POS System",
    appBadge: "TCB Store",
    title: "Smart Barcode & Mobile POS",
    description:
      "Use your phone camera or hardware scanner to add items, scan product barcodes, and checkout customers lightning fast.",
    stat: "0.2s",
    statLabel: "Instant barcode lookup",
  },
  {
    icon: TrendingUp,
    tag: "Analytics",
    appBadge: "TCB Store",
    title: "Profit & Daily Sales Reports",
    description:
      "Get real-time insights into top-selling products, gross margin profits, peak store hours, and cash balances.",
    stat: "Real-time",
    statLabel: "Automated P&L dashboard",
  },
];

export default function Features() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "TCB Store", "TCB School", "Invoicing", "Education", "Analytics"];

  const filteredBenefits =
    activeCategory === "All"
      ? BENEFITS
      : BENEFITS.filter((b) =>
          b.appBadge.toLowerCase() === activeCategory.toLowerCase() ||
          b.tag.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section id="features" className="relative border-t border-zinc-100 bg-zinc-50/60 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            Core Benefits &amp; Ecosystem Capabilities
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Architected for Performance &amp; Seamless Multi-SaaS Scale
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
            Enterprise-grade capabilities engineered specifically for retail commerce, institutes, clinics, and modern business workflows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-zinc-600 hover:bg-zinc-200/70 border border-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        benefit.appBadge === "TCB School"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {benefit.appBadge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-zinc-900 group-hover:text-emerald-700">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-zinc-100 pt-4">
                  <div className="text-lg font-extrabold text-zinc-900">{benefit.stat}</div>
                  <div className="text-[11px] font-medium text-zinc-400">{benefit.statLabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
