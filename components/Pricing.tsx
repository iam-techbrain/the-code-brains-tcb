"use client";

import { useState } from "react";
import { Check, Sparkles, Store, GraduationCap, ArrowRight, ShieldCheck, Zap, RefreshCw, Lock } from "lucide-react";
import Link from "next/link";

type PricingPlan = {
  name: string;
  badge?: string;
  priceText: string;
  priceVal: number;
  period: string;
  description: string;
  highlighted?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
};

// 1. TCB INVENTORY PLANS DATA (COMING SOON)
const STORE_PLANS: PricingPlan[] = [
  {
    name: "Starter Inventory Tier",
    badge: "Coming Soon",
    priceText: "₹299",
    priceVal: 299,
    period: "/ month",
    description: "Complete barcode stock management & POS billing for retail shops.",
    features: [
      "Barcode Stock Scanning",
      "GST Compliant Invoicing",
      "Customer Credit Ledger",
      "Supplier Purchase Records",
      "WhatsApp Invoice Dispatch",
    ],
    ctaText: "Coming Soon",
    ctaHref: "#coming-soon",
  },
  {
    name: "Pro Warehouse Tier",
    badge: "Coming Soon",
    priceText: "₹599",
    priceVal: 599,
    period: "/ month",
    description: "Multi-counter retail & warehouse stock replenishment system.",
    highlighted: true,
    features: [
      "Multi-Counter POS Terminals",
      "Low Stock Automated Alerts",
      "Warehouse Stock Reordering",
      "Custom GST Invoice Templates",
      "Multi-User Staff Logins",
    ],
    ctaText: "Coming Soon",
    ctaHref: "#coming-soon",
  },
  {
    name: "Enterprise Multi-Branch",
    badge: "Coming Soon",
    priceText: "₹999",
    priceVal: 999,
    period: "/ month",
    description: "Designed for chain retail stores & bulk stock distribution.",
    features: [
      "Multi-Branch Stock Sync",
      "Supplier Purchase Ledger",
      "AI Inventory Forecasting",
      "Priority Cloud Backups",
      "Dedicated Manager Support",
    ],
    ctaText: "Coming Soon",
    ctaHref: "#coming-soon",
  },
];

// 2. TCB SCHOOL PLANS DATA (LIVE)
const SCHOOL_PLANS: PricingPlan[] = [
  {
    name: "Starter Coaching Tier",
    badge: "Live Workspace",
    priceText: "₹499",
    priceVal: 499,
    period: "/ month",
    description: "Ideal for tuition centers & coaching classes up to 150 students.",
    highlighted: true,
    features: [
      "Students Limit: Up to 150 Students",
      "Fee & Attendance Tracking: Included",
      "Parent WhatsApp Alerts: Automated",
      "Staff & Teacher Logins: Included",
      "Digital Student ID Card Generator",
    ],
    ctaText: "Launch TCB School",
    ctaHref: "https://techschool.thecodebrains.com",
  },
  {
    name: "Growth Academy Plan",
    badge: "Popular",
    priceText: "₹799",
    priceVal: 799,
    period: "/ month",
    description: "Designed for growing coaching institutes needing multiple batches.",
    features: [
      "Students Limit: Up to 500 Students",
      "Fee & Attendance Tracking: Included",
      "Parent WhatsApp + SMS Alerts: Automated",
      "Staff Logins: Up to 5 Teachers",
      "Exams & Gradebook Report Cards",
    ],
    ctaText: "Launch TCB School",
    ctaHref: "https://techschool.thecodebrains.com",
  },
  {
    name: "Enterprise Academy Plan",
    badge: "Full Power",
    priceText: "₹1,299",
    priceVal: 1299,
    period: "/ month",
    description: "Complete solution for schools & multi-branch education hubs.",
    features: [
      "Students Limit: Unlimited Students",
      "Fee & Attendance Tracking: Included",
      "Parent Notifications: WhatsApp + SMS",
      "Staff Logins: Unlimited Teachers",
      "Custom Domain & Branding Support",
    ],
    ctaText: "Launch TCB School",
    ctaHref: "https://techschool.thecodebrains.com",
  },
];

export default function Pricing() {
  const [selectedApp, setSelectedApp] = useState<"store" | "school">("store");

  const activePlans = selectedApp === "store" ? STORE_PLANS : SCHOOL_PLANS;

  return (
    <section id="pricing" className="relative border-t border-slate-200/60 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-xs">
            <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
            TCB Subscription Plans &amp; Transparent Pricing
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Flexible Plans for <span className="nuvertos-gradient-text">TCB Inventory &amp; TCB School</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Choose a subscription plan for TCB School (Live Workspace) or preview upcoming TCB Inventory tiers.
          </p>

          {/* Guarantee Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 px-5 py-2.5 text-xs font-bold text-slate-800 shadow-xs">
            <span className="flex items-center gap-1.5 text-emerald-800 font-extrabold">
              <RefreshCw className="h-4 w-4 text-emerald-600" />
              Cancel Anytime (No Lock-in)
            </span>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1.5 text-zinc-700">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              No Hidden Charges
            </span>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1.5 text-zinc-700">
              <Lock className="h-3.5 w-3.5 text-emerald-600" />
              Safe &amp; Secure Cloud
            </span>
          </div>
        </div>

        {/* UNIFIED LIGHT EMERALD APP TOGGLE SELECTOR */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-2xl border border-emerald-200 bg-emerald-50/50 p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setSelectedApp("school")}
              className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition-all sm:text-sm ${
                selectedApp === "school"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20 scale-105"
                  : "bg-white text-slate-700 hover:bg-emerald-100/50"
              }`}
            >
              <GraduationCap className={`h-4.5 w-4.5 ${selectedApp === "school" ? "text-white" : "text-emerald-600"}`} />
              <span>TCB School Plans (Live)</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedApp("store")}
              className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition-all sm:text-sm ${
                selectedApp === "store"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20 scale-105"
                  : "bg-white text-slate-700 hover:bg-emerald-100/50"
              }`}
            >
              <Store className={`h-4.5 w-4.5 ${selectedApp === "store" ? "text-white" : "text-emerald-600"}`} />
              <span>TCB Inventory Plans (Soon)</span>
            </button>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {activePlans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col justify-between rounded-3xl border p-8 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] transition-all duration-300 ${
                plan.highlighted
                  ? "nuvertos-card-selected lg:-translate-y-2 border-emerald-300"
                  : "nuvertos-card shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">{plan.name}</h3>
                    <span className="mt-1 inline-block text-[11px] font-bold text-emerald-700">
                      Subscription Plan
                    </span>
                  </div>

                  {plan.badge && (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-extrabold shadow-2xs ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      }`}
                    >
                      {plan.highlighted && <Sparkles className="h-3 w-3 text-white" />}
                      {plan.badge}
                    </span>
                  )}
                </div>
                
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-1.5 border-b border-slate-200/80 pb-5">
                  <span className="font-extrabold text-4xl tracking-tight text-slate-900">
                    {plan.priceText}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {plan.period}
                  </span>
                </div>

                {/* Features Checklist */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600 font-bold" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BUTTONS */}
              <div className="mt-8">
                <Link
                  href={plan.ctaHref}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold transition-all shadow-2xs ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-md shadow-emerald-600/20 hover:scale-105"
                      : "bg-emerald-700 text-white hover:bg-emerald-600 hover:shadow-md"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-3 text-center text-[11px] font-semibold text-emerald-700 flex items-center justify-center gap-1">
                  <RefreshCw className="h-3 w-3 text-emerald-600" />
                  Cancel anytime · No long-term lock-in
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILED FEATURE COMPARISON TABLE */}
        <div className="mt-20 rounded-3xl border border-emerald-200/80 bg-emerald-50/30 p-4 sm:p-8 shadow-xs">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-200 pb-4">
            <div>
              <h3 className="text-lg font-bold text-zinc-900">
                Detailed Plan Feature Matrix — {selectedApp === "store" ? "TCB Store" : "TCB School"}
              </h3>
              <p className="text-xs text-zinc-500">Subscription plans feature breakdown and limit comparison</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              Cancel Anytime · Instant Activation
            </span>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500 font-extrabold uppercase tracking-wider">
                  <th className="pb-3 pt-1">Feature / Capability</th>
                  <th className="pb-3 pt-1">Starter Tier</th>
                  <th className="pb-3 pt-1 text-emerald-700 whitespace-nowrap">Pro Plan (Best Seller)</th>
                  <th className="pb-3 pt-1">Enterprise Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/60 font-medium text-zinc-700">
                  {selectedApp === "store" ? (
                    <>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Monthly Price</td>
                        <td className="py-3 text-zinc-600">₹99 / month</td>
                        <td className="py-3 font-extrabold text-emerald-600 whitespace-nowrap">₹299 / month</td>
                        <td className="py-3 text-zinc-600">₹799 / month</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Monthly Sales Invoices</td>
                        <td className="py-3">Up to 300 Invoices</td>
                        <td className="py-3 font-bold text-zinc-900">Up to 2,000 Invoices</td>
                        <td className="py-3 font-extrabold text-emerald-700">Unlimited Invoices</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Barcode Scanning POS</td>
                        <td className="py-3 text-zinc-400">Basic USB Only</td>
                        <td className="py-3 font-bold text-zinc-900">Full Camera &amp; USB Scanner</td>
                        <td className="py-3 font-bold text-zinc-900">Multi-Counter POS Engine</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">WhatsApp PDF Receipts</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Inventory Low Stock Alerts</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">GST Tax &amp; HSN Reports</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Staff &amp; Cashier Accounts</td>
                        <td className="py-3 text-zinc-600">1 Owner Account</td>
                        <td className="py-3 font-extrabold text-emerald-700 whitespace-nowrap">Up to 3 Users</td>
                        <td className="py-3 font-bold text-zinc-900">Unlimited Staff Accounts</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Multi-Device Sync</td>
                        <td className="py-3 text-zinc-600">Single Device</td>
                        <td className="py-3 font-extrabold text-emerald-700 whitespace-nowrap">Priority Cloud Sync</td>
                        <td className="py-3 font-bold text-zinc-900">Real-Time Cloud Mesh</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Subscription Commitment</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Monthly Subscription</td>
                        <td className="py-3 text-zinc-600">₹199 / month</td>
                        <td className="py-3 font-extrabold text-emerald-600 whitespace-nowrap">₹499 / month</td>
                        <td className="py-3 text-zinc-600">₹1,299 / month</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Active Enrolled Students</td>
                        <td className="py-3">Up to 100 Students</td>
                        <td className="py-3 text-emerald-600 font-extrabold whitespace-nowrap">Unlimited Students</td>
                        <td className="py-3 font-extrabold text-emerald-700">Unlimited Multi-Branch</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Daily Attendance Marking</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">WhatsApp Absent / Fee Alerts</td>
                        <td className="py-3 text-zinc-600">Manual Links</td>
                        <td className="py-3 text-emerald-700 font-bold whitespace-nowrap">Automated WhatsApp</td>
                        <td className="py-3 text-emerald-700 font-extrabold whitespace-nowrap">Automated WhatsApp + SMS</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Teacher &amp; Staff Accounts</td>
                        <td className="py-3 text-zinc-600">Up to 3 Teachers</td>
                        <td className="py-3 text-emerald-600 font-extrabold whitespace-nowrap">Unlimited Teachers</td>
                        <td className="py-3 font-bold text-zinc-900">Unlimited Staff Accounts</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Exam Gradebook &amp; Report Cards</td>
                        <td className="py-3 text-zinc-600">Basic PDF Cards</td>
                        <td className="py-3 text-emerald-600 font-extrabold whitespace-nowrap">Advanced Excel/PDF Reports</td>
                        <td className="py-3 font-bold text-zinc-900">Custom Report Designer</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-zinc-900">Subscription Commitment</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                        <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
          </div>
        </div>

      </div>
    </section>
  );
}
