"use client";

import {
  ShieldCheck,
  Cloud,
  Award,
  Lock,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Activity,
  Zap,
} from "lucide-react";

const FOOTER_NAV = [
  {
    heading: "Micro-SaaS Apps",
    links: [
      { name: "TCB School Workspace", href: "https://techschool.thecodebrains.com", badge: "LIVE", badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
      { name: "TCB Inventory & POS System", href: "/store", badge: "SOON", badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
      { name: "TCB Health Cloud", href: "/#ecosystem-apps", badge: "SOON", badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
      { name: "WhatsApp Reminders Engine", href: "/#features" },
      { name: "Multi-Tenant Cloud", href: "/#school-feature" },
    ],
  },
  {
    heading: "AI Agent Studio",
    links: [
      { name: "WhatsApp AI Billing Agent", href: "/#ai-agents-catalog" },
      { name: "Voice & Call AI Agent", href: "/#ai-agents-catalog" },
      { name: "Autonomous Support Bot", href: "/#ai-agents-catalog" },
      { name: "RAG Knowledge Pipeline", href: "/#features" },
      { name: "Custom Workflow Automation", href: "/#features" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About TCB Ecosystem", href: "/#features" },
      { name: "Partner Program", href: "/#pricing" },
      { name: "Client Case Studies", href: "/#testimonials" },
      { name: "Careers", href: "#", badge: "HIRING", badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { name: "Contact & Support", href: "#" },
    ],
  },
  {
    heading: "Security & Legal",
    links: [
      { name: "Multi-Tenant Data Privacy", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Data Security Policy", href: "#" },
      { name: "Trust & Compliance Center", href: "#" },
    ],
  },
];

const SOCIALS = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

const GLOBAL_MARKETS = [
  { flag: "🇺🇸", code: "USA" },
  { flag: "🇨🇦", code: "Canada" },
  { flag: "🇦🇪", code: "Dubai" },
  { flag: "🇸🇦", code: "Saudi Arabia" },
  { flag: "🇪🇺", code: "Europe" },
  { flag: "🇦🇺", code: "Australia" },
  { flag: "🇿🇦", code: "South Africa" },
  { flag: "🇮🇳", code: "India" },
];

import { useLeadModal } from "@/components/LeadModalContext";

export default function Footer() {
  const { openLeadModal } = useLeadModal();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300 pt-16 pb-32 sm:pb-24 lg:pb-16 border-t border-slate-800/80">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#305eff]/60 to-transparent" />

      {/* Decorative Background Mesh Blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#305eff]/10 blur-[125px]" />
      <div className="pointer-events-none absolute top-1/2 right-10 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Executive CTA Banner inside Footer */}
        <div className="mb-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                Enterprise AI Transformation
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Ready to automate your enterprise with Custom AI Agents?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Join 1,200+ businesses and academies streamlining billing, customer ops, and inventory workflows with TCB.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: "Schedule Free Enterprise AI Audit",
                    source: "Footer Banner CTA",
                    defaultNote: "Requesting free AI audit and architecture review.",
                  })
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#305eff] to-[#1f47e0] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#305eff]/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-[#305eff]/40 cursor-pointer"
              >
                Schedule Free AI Audit
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://techschool.thecodebrains.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Explore Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Main Grid: Brand Column + Link Columns */}
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand & Ecosystem Information Column (2 cols) */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 group">
              <div className="rounded-xl border border-white/20 bg-white p-2 shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/tcb-logo.png"
                  alt="TCB Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                  THE CODE BRAINS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#618dff]">
                  AI Agents &amp; Micro-SaaS Ecosystem
                </span>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-400">
              Autonomous AI agent studio &amp; vertical Micro-SaaS ecosystem powering automated billing, RAG pipelines, voice agents, and multi-tenant business software.
            </p>

            {/* Compliance & Security Pill Badges */}
            <div className="mt-5 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-200">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-blue-200 backdrop-blur-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                ABDM Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-blue-200 backdrop-blur-xs">
                <Award className="h-3.5 w-3.5 text-blue-400" />
                ISO 27001 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-blue-200 backdrop-blur-xs">
                <Cloud className="h-3.5 w-3.5 text-blue-400" />
                AWS 99.95% Uptime
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-blue-200 backdrop-blur-xs">
                <Lock className="h-3.5 w-3.5 text-blue-400" />
                SOC 2 Ready
              </span>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-[#305eff] hover:bg-[#305eff] hover:text-white hover:shadow-lg hover:shadow-[#305eff]/30"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Link Columns (4 cols) */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading} className="lg:col-span-1">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#305eff]" />
                {col.heading}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-xs text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white font-medium"
                    >
                      <span className="transition-colors group-hover:text-blue-400">{link.name}</span>
                      {link.badge && (
                        <span
                          className={`rounded px-1.5 py-0.5 text-[9px] font-extrabold border uppercase tracking-wider ${link.badgeColor}`}
                        >
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Footprint & Government Registered Glass Card */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Left: Global Markets Served */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-xs w-full lg:w-auto">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#618dff] shrink-0">
                <Globe2 className="h-4 w-4 text-[#618dff]" />
                Serving Clients Worldwide:
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-[11px] font-semibold">
                {GLOBAL_MARKETS.map(({ flag, code }) => (
                  <span
                    key={code}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-slate-900/80 px-2.5 py-1 text-slate-300 transition-colors hover:border-white/20 hover:text-white"
                  >
                    <span>{flag}</span>
                    <span>{code}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Technical & Registration Proof Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-[11px] font-semibold text-blue-200">
                <Zap className="h-3.5 w-3.5 text-blue-400" />
                Meta, Google &amp; OpenAI AI Stack
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-bold text-emerald-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Government Registered Entity
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Operational Status */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} The Code Brains (TCB) Platform. All rights reserved. | Government Registered Entity
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              All Systems Operational
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Activity className="h-3.5 w-3.5 text-[#618dff]" />
              99.95% SLA Uptime Guarantee
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}



