"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, RefreshCw, Lock, Bot, Workflow, Cpu } from "lucide-react";

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

// 1. TCB INVENTORY PLANS DATA (ONLY FOR /store PAGE)
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

// 2. TCB SCHOOL PLANS DATA (ONLY FOR /school PAGE)
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

// 3. TCB AI AGENCY & AUTOMATION PLANS DATA (MAIN HOME PAGE DEFAULT)
const AGENCY_PLANS: PricingPlan[] = [
  {
    name: "AI Workflow Automation",
    badge: "Fast Delivery",
    priceText: "₹9,999",
    priceVal: 9999,
    period: "/ project",
    description: "Automate repetitive manual business workflows using n8n, Make & webhooks.",
    features: [
      "Up to 3 Multi-Step Automated Workflows",
      "WhatsApp & Email API Triggers",
      "CRM & Google Sheets Real-Time Sync",
      "Error Alerts & Logging Pipeline",
      "14-Day Free Maintenance & Support",
    ],
    ctaText: "Get Workflow Automation",
    ctaHref: "#contact",
  },
  {
    name: "Autonomous AI Agent",
    badge: "Most Popular",
    priceText: "₹14,999",
    priceVal: 14999,
    period: "/ project",
    description: "Custom AI voice caller or RAG chatbot trained on your company data.",
    highlighted: true,
    features: [
      "Custom RAG Vector DB (Pinecone / Qdrant)",
      "24/7 AI Voice Caller or WhatsApp Chatbot",
      "OpenAI GPT-4o / Claude 3.5 Fine-Tuning",
      "24/7 Instant Lead Booking & Qualification",
      "AWS 99.95% Deployment & 30-Day Support",
    ],
    ctaText: "Deploy AI Agent",
    ctaHref: "#contact",
  },
  {
    name: "Enterprise Multi-SaaS Cloud",
    badge: "Full Custom Studio",
    priceText: "₹59,999",
    priceVal: 59999,
    period: "/ project",
    description: "Complete custom micro-SaaS application built from scratch for your industry.",
    features: [
      "Multi-Tenant SaaS Architecture",
      "Custom React / Next.js + Tailwind UI",
      "Supabase / PostgreSQL Database Vault",
      "Full Source Code & IP Ownership",
      "Dedicated Lead Engineer & SLA",
    ],
    ctaText: "Build Custom SaaS",
    ctaHref: "#contact",
  },
];

interface PricingProps {
  defaultApp?: "store" | "school" | "agency";
  hideToggle?: boolean;
}

export default function Pricing({ defaultApp = "agency", hideToggle = true }: PricingProps) {
  const [selectedApp] = useState<"store" | "school" | "agency">(defaultApp);

  const activePlans =
    selectedApp === "agency"
      ? AGENCY_PLANS
      : selectedApp === "store"
      ? STORE_PLANS
      : SCHOOL_PLANS;

  return (
    <section id="pricing" className="relative border-t border-slate-200/60 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-800 shadow-xs">
            <Sparkles className="h-4 w-4 text-brand-500 animate-pulse" />
            Transparent Pricing &amp; Custom Project Packages
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {selectedApp === "agency" ? (
              <span>Transparent Packages for <span className="nuvertos-gradient-text">AI Agents &amp; Automations</span></span>
            ) : selectedApp === "school" ? (
              <span>Transparent Pricing for <span className="nuvertos-gradient-text">TCB School SaaS</span></span>
            ) : (
              <span>Transparent Pricing for <span className="nuvertos-gradient-text">TCB Store &amp; Inventory SaaS</span></span>
            )}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {selectedApp === "agency"
              ? "Simple, fixed-rate pricing for custom AI agents, n8n workflow automations, and multi-tenant SaaS development."
              : selectedApp === "school"
              ? "Simple, affordable plans for coaching centers and educational institutes. No setup fees."
              : "Flexible subscription plans for retail stock management, POS billing & Udhar Khata."}
          </p>

          {/* Guarantee Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-brand-200 bg-brand-50/50 px-5 py-2.5 text-xs font-bold text-slate-800 shadow-xs">
            <span className="flex items-center gap-1.5 text-brand-800 font-extrabold">
              <RefreshCw className="h-4 w-4 text-brand-500" />
              100% Fixed Rates (No Hidden Costs)
            </span>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1.5 text-zinc-700">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-500" />
              Source Code Ownership
            </span>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center gap-1.5 text-zinc-700">
              <Lock className="h-3.5 w-3.5 text-brand-500" />
              Safe &amp; Encrypted AI Cloud
            </span>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {activePlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-brand-500 bg-brand-50/30 shadow-xl shadow-brand-500/10 scale-102"
                  : "border border-slate-200 bg-white shadow-xs hover:border-brand-300 hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-extrabold shadow-xs ${
                    plan.highlighted
                      ? "bg-brand-500 text-white"
                      : "bg-slate-900 text-white"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-600 min-h-[36px]">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-slate-900">{plan.priceText}</span>
                  <span className="text-xs font-semibold text-slate-500">{plan.period}</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-brand-500 font-bold" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={plan.ctaHref}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-extrabold transition-all active:scale-95 ${
                    plan.highlighted
                      ? "bg-brand-500 text-white hover:bg-brand-700 shadow-md shadow-brand-500/20"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
