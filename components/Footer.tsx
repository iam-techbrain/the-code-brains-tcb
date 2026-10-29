"use client";

import {
  ShieldCheck,
  Cloud,
  Award,
  Lock,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Activity,
  Zap,
} from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

const FOOTER_NAV = [
  {
    heading: "AI Services & Solutions",
    links: [
      { name: "AI Sales & Lead Generation", href: "/#solutions-catalog" },
      { name: "AI Voice Calling Agents", href: "/#solutions-catalog" },
      { name: "Custom RAG Knowledge Vaults", href: "/#features" },
      { name: "AI Document & Workflow Automation", href: "/#solutions-catalog" },
      { name: "n8n & Make Workflow Automations", href: "/#tech-stack" },
    ],
  },
  {
    heading: "AI Agent Studio",
    links: [
      { name: "Autonomous Sales Agents", href: "/#solutions-catalog" },
      { name: "Voice & Call AI Telephony", href: "/#solutions-catalog" },
      { name: "24/7 Support Intelligence Bots", href: "/#solutions-catalog" },
      { name: "RAG Knowledge Pipeline", href: "/#features" },
      { name: "Enterprise Workflow Automation", href: "/#tech-stack" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About TCB Ecosystem", href: "/#features" },
      { name: "Engineering Blog", href: "/blog", badge: "NEW", badgeColor: "bg-blue-50 text-[#305eff] border-blue-200" },
      { name: "Client Case Studies", href: "/#testimonials" },
      { name: "Partner Program", href: "mailto:contact@thecodebrains.com" },
      { name: "Careers", href: "/contact", badge: "HIRING", badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200" },
      { name: "Contact & Support", href: "/contact" },
    ],
  },
  {
    heading: "Security & Legal",
    links: [
      { name: "Multi-Tenant Data Privacy", href: "/privacy#data-privacy" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Data Security Policy", href: "/privacy#security" },
      { name: "Trust & Compliance Center", href: "/privacy#compliance" },
      { name: "Visual Sitemap", href: "/sitemap" },
      { name: "XML Sitemap", href: "/sitemap.xml" },
    ],
  },
];

const SOCIALS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/145366833/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590711261508",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@TheCodeBrainsHub",
  },
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

export default function Footer() {
  const { openLeadModal } = useLeadModal();

  return (
    <footer className="relative overflow-hidden bg-white text-slate-600 pt-16 pb-24 sm:pb-20 lg:pb-16 border-t border-slate-200/90">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Executive CTA Banner inside Footer */}
        <div className="mb-14 rounded-3xl border border-slate-200/90 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#305eff]">
                <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
                Enterprise AI Transformation
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                Ready to automate your enterprise with Custom AI Agents?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Join 40+ forward-thinking businesses automating customer communications, voice telephony, WhatsApp workflows, and Zapier/Make pipelines with TCB.
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#305eff] hover:bg-[#1f47e0] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#305eff]/25 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Schedule Free AI Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#ai-agents-catalog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-3 text-xs sm:text-sm font-bold text-slate-800 transition-all duration-200 shadow-2xs"
              >
                Explore AI Agents
              </a>
            </div>
          </div>
        </div>

        {/* Main Grid: Brand Column + Link Columns */}
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand & Ecosystem Information Column (2 cols) */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 group">
              <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-2xs transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/tcb-logo.png"
                  alt="TCB Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-slate-900 group-hover:text-[#305eff] transition-colors">
                  THE CODE BRAINS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#305eff]">
                  Custom AI Agents &amp; Automation Studio
                </span>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-600">
              Autonomous AI agent studio &amp; intelligent workflow automation agency engineering custom voice callers, sales outreach agents, RAG knowledge systems, and business process automations.
            </p>

            {/* Compliance & Security Badges */}
            <div className="mt-5 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-800">
                <ShieldCheck className="h-3.5 w-3.5 text-[#305eff]" />
                ABDM Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-800">
                <Cloud className="h-3.5 w-3.5 text-[#305eff]" />
                AWS 99.95% Uptime
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-800">
                <Lock className="h-3.5 w-3.5 text-[#305eff]" />
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:border-[#305eff] hover:bg-[#305eff] hover:text-white"
                >
                  <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Link Columns (4 cols) */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading} className="lg:col-span-1">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                <span className="h-1.5 w-1.5 rounded-full bg-[#305eff]" />
                {col.heading}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-xs text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-[#305eff] font-medium"
                    >
                      <span className="transition-colors group-hover:text-[#305eff]">{link.name}</span>
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

        {/* Global Footprint & Government Registered Card */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-2xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Left: Global Markets Served */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-xs w-full lg:w-auto">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#305eff] shrink-0">
                <Globe2 className="h-4 w-4 text-[#305eff]" />
                Serving Clients Worldwide:
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-[11px] font-semibold">
                {GLOBAL_MARKETS.map(({ flag, code }) => (
                  <span
                    key={code}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-slate-700 shadow-2xs transition-colors hover:border-[#305eff] hover:text-[#305eff]"
                  >
                    <span>{flag}</span>
                    <span>{code}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Technical & Registration Proof Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[11px] font-bold text-[#305eff]">
                <Zap className="h-3.5 w-3.5 text-[#305eff]" />
                Meta, Google &amp; OpenAI AI Stack
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-[11px] font-bold text-emerald-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Government Registered Entity
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Operational Status */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} The Code Brains (TCB) Platform. All rights reserved. | Government Registered Entity
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-emerald-800">
              <span className="inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              All Systems Operational
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-slate-600">
              <Activity className="h-3.5 w-3.5 text-[#305eff]" />
              99.95% SLA Uptime Guarantee
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
