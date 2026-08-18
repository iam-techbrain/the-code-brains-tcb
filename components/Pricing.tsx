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

// 1. TCB STORE PLANS DATA
const STORE_PLANS: PricingPlan[] = [
  {
    name: "7 Days Free Trial",
    badge: "Trial Plan",
    priceText: "₹0",
    priceVal: 0,
    period: "for 7 days",
    description: "Full access to TCB Commerce POS & Inventory features for 7 days.",
    features: [
      "Products Limit: Unlimited",
      "Invoicing / Billing: Unlimited",
      "Personal Expense Mode: Included",
      "Barcode Scanning: Included",
      "WhatsApp & Email Alerts: Included",
      "Staff Accounts: 1 User",
      "Data Backup: Cloud Sync",
    ],
    ctaText: "Start 7-Day Free Trial",
    ctaHref: "/store",
  },
  {
    name: "Pro Plan",
    badge: "Best Seller",
    priceText: "₹299",
    priceVal: 299,
    period: "/ month",
    description: "Perfect for single retail shop owners & personal money tracking.",
    highlighted: true,
    features: [
      "Products Limit: Unlimited",
      "Invoicing / Billing: Unlimited",
      "Personal Expense Mode: Included",
      "Barcode Scanning: Included",
      "WhatsApp & Email Alerts: Included",
      "Staff Accounts: 1 User",
      "Data Backup: Cloud Sync",
    ],
    ctaText: "Get Pro Plan",
    ctaHref: "/store",
  },
  {
    name: "Business Plan",
    badge: "Multi-User",
    priceText: "₹599",
    priceVal: 599,
    period: "/ month",
    description: "Designed for busy retail stores needing up to 3 staff logins.",
    features: [
      "Products Limit: Unlimited",
      "Invoicing / Billing: Unlimited",
      "Personal Expense Mode: Included",
      "Barcode Scanning: Included",
      "WhatsApp & Email Alerts: Included",
      "Staff Accounts: Up to 3 Users",
      "Data Backup: Priority Cloud Sync",
    ],
    ctaText: "Get Business Plan",
    ctaHref: "/store",
  },
];

// 2. TCB SCHOOL PLANS DATA
const SCHOOL_PLANS: PricingPlan[] = [
  {
    name: "7 Days Free Trial",
    badge: "Trial Plan",
    priceText: "₹0",
    priceVal: 0,
    period: "for 7 days",
    description: "Full access to student directory & attendance tracking.",
    features: [
      "Students Limit: Unlimited",
      "Fee & Attendance Tracking: Included",
      "Parent Notifications: Included",
      "Staff / Teacher Logins: Included",
      "Report Generation: Included",
    ],
    ctaText: "Start 7-Day Free Trial",
    ctaHref: "/school",
  },
  {
    name: "Growth Academy Plan",
    badge: "Most Popular",
    priceText: "₹499",
    priceVal: 499,
    period: "/ month",
    description: "Ideal for coaching centers & tuition institutes up to 150 students.",
    highlighted: true,
    features: [
      "Students Limit: Up to 150 Students",
      "Fee & Attendance Tracking: Included",
      "Parent Notifications: Automated WhatsApp & Email",
      "Staff / Teacher Logins: Up to 2 Teachers",
      "Report Generation: Standard PDF Reports",
    ],
    ctaText: "Get Growth Plan",
    ctaHref: "/school",
  },
  {
    name: "Enterprise Academy Plan",
    badge: "Full Power",
    priceText: "₹999",
    priceVal: 999,
    period: "/ month",
    description: "Complete solution for schools & large educational centers.",
    features: [
      "Students Limit: Unlimited Students",
      "Fee & Attendance Tracking: Included",
      "Parent Notifications: Automated WhatsApp + SMS",
      "Staff / Teacher Logins: Unlimited Teachers",
      "Report Generation: Advanced Excel/PDF Reports",
    ],
    ctaText: "Get Enterprise Plan",
    ctaHref: "/school",
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
            Flexible Plans for <span className="nuvertos-gradient-text">TCB Store &amp; TCB School</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Choose a monthly subscription plan tailored for your store or institute. Start with a 7-day free trial.
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

        {/* UNIFIED EMERALD APP TOGGLE SELECTOR — ZERO BLACK BUTTONS */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-2xl border border-emerald-200 bg-emerald-50/50 p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setSelectedApp("store")}
              className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition-all sm:text-sm ${
                selectedApp === "store"
                  ? "bg-[#059669] text-white shadow-md shadow-emerald-600/25 scale-105"
                  : "bg-white text-slate-700 hover:bg-emerald-100/50"
              }`}
            >
              <Store className={`h-4.5 w-4.5 ${selectedApp === "store" ? "text-white" : "text-emerald-600"}`} />
              <span>TCB Store Subscription Plans</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedApp("school")}
              className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition-all sm:text-sm ${
                selectedApp === "school"
                  ? "bg-[#059669] text-white shadow-md shadow-emerald-600/25 scale-105"
                  : "bg-white text-slate-700 hover:bg-emerald-100/50"
              }`}
            >
              <GraduationCap className={`h-4.5 w-4.5 ${selectedApp === "school" ? "text-white" : "text-emerald-600"}`} />
              <span>TCB School Subscription Plans</span>
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
                  ? "nuvertos-card-selected lg:-translate-y-2"
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
                          ? "bg-emerald-700 text-white"
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
                      ? "bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/20"
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
            {selectedApp === "store" ? (
              /* STORE TABLE */
              <table className="w-full min-w-[650px] text-left text-xs">
                <thead>
                  <tr className="border-b border-zinc-200 text-zinc-500 font-bold">
                    <th className="pb-3 pt-1 whitespace-nowrap">Feature</th>
                    <th className="pb-3 pt-1 whitespace-nowrap">7 Days Free Trial</th>
                    <th className="pb-3 pt-1 text-emerald-700 whitespace-nowrap">Pro Plan (Best Seller)</th>
                    <th className="pb-3 pt-1 whitespace-nowrap">Business Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/80">
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Monthly Price</td>
                    <td className="py-3 text-zinc-600 font-semibold whitespace-nowrap">₹0 (For 7 days)</td>
                    <td className="py-3 font-extrabold text-emerald-600 whitespace-nowrap">₹299 / month</td>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">₹599 / month</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Products Limit</td>
                    <td className="py-3 text-zinc-700 font-semibold whitespace-nowrap">Unlimited</td>
                    <td className="py-3 text-zinc-700 font-semibold whitespace-nowrap">Unlimited</td>
                    <td className="py-3 text-zinc-700 font-semibold whitespace-nowrap">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Invoicing / Billing</td>
                    <td className="py-3 text-zinc-700 font-semibold whitespace-nowrap">Unlimited</td>
                    <td className="py-3 text-zinc-700 font-semibold whitespace-nowrap">Unlimited</td>
                    <td className="py-3 text-zinc-700 font-semibold whitespace-nowrap">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Personal Expense Mode</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Barcode Scanning</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">WhatsApp Reminders</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Staff Accounts</td>
                    <td className="py-3 text-zinc-600 whitespace-nowrap">1 User</td>
                    <td className="py-3 text-zinc-600 font-semibold whitespace-nowrap">1 User</td>
                    <td className="py-3 font-extrabold text-emerald-700 whitespace-nowrap">Up to 3 Users</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Data Backup</td>
                    <td className="py-3 text-zinc-600 whitespace-nowrap">Cloud Sync</td>
                    <td className="py-3 text-zinc-600 font-semibold whitespace-nowrap">Cloud Sync</td>
                    <td className="py-3 font-extrabold text-emerald-700 whitespace-nowrap">Priority Cloud Sync</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Cancellation Policy</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              /* SCHOOL TABLE */
              <table className="w-full min-w-[650px] text-left text-xs">
                <thead>
                  <tr className="border-b border-zinc-200 text-zinc-500 font-bold">
                    <th className="pb-3 pt-1 whitespace-nowrap">Feature</th>
                    <th className="pb-3 pt-1 whitespace-nowrap">7 Days Free Trial</th>
                    <th className="pb-3 pt-1 text-emerald-700 whitespace-nowrap">Growth Coaching Plan</th>
                    <th className="pb-3 pt-1 whitespace-nowrap">Enterprise School Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/80">
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Monthly Price</td>
                    <td className="py-3 text-zinc-600 font-semibold whitespace-nowrap">₹0 (For 7 days)</td>
                    <td className="py-3 font-extrabold text-emerald-600 whitespace-nowrap">₹499 / month</td>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">₹999 / month</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Students Limit</td>
                    <td className="py-3 text-zinc-700 font-semibold whitespace-nowrap">Unlimited</td>
                    <td className="py-3 text-amber-700 font-bold whitespace-nowrap">Up to 150 Students</td>
                    <td className="py-3 text-emerald-600 font-extrabold whitespace-nowrap">Unlimited Students</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Fee &amp; Attendance Tracking</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">✓ Included</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Parent Notifications</td>
                    <td className="py-3 text-zinc-600 whitespace-nowrap">Included</td>
                    <td className="py-3 text-emerald-700 font-bold whitespace-nowrap">Automated WhatsApp</td>
                    <td className="py-3 text-emerald-700 font-extrabold whitespace-nowrap">Automated WhatsApp + SMS</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Staff / Teacher Logins</td>
                    <td className="py-3 text-zinc-600 whitespace-nowrap">Included</td>
                    <td className="py-3 text-zinc-700 font-semibold whitespace-nowrap">Up to 2 Teachers</td>
                    <td className="py-3 text-emerald-600 font-extrabold whitespace-nowrap">Unlimited Teachers</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Report Generation</td>
                    <td className="py-3 text-zinc-600 whitespace-nowrap">Included</td>
                    <td className="py-3 text-zinc-700 font-semibold whitespace-nowrap">Standard PDF Reports</td>
                    <td className="py-3 text-emerald-600 font-extrabold whitespace-nowrap">Advanced Excel/PDF Reports</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">Cancellation Policy</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                    <td className="py-3 text-emerald-600 font-bold whitespace-nowrap">Cancel Anytime</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
