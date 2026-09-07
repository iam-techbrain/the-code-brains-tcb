"use client";

import React from "react";
import { Globe, ShieldCheck, Cpu, Zap, CheckCircle2, Award, Sparkles, Building2 } from "lucide-react";

export default function WorldwidePresenceSection() {
  const regions = [
    {
      flag: "🇺🇸",
      country: "USA",
      region: "North America",
      specialty: "Enterprise AI Agents & Custom LLM Workflows",
      status: "Active Fleet",
    },
    {
      flag: "🇨🇦",
      country: "Canada",
      region: "North America",
      specialty: "SaaS Systems & Automated Cloud Operations",
      status: "Active Fleet",
    },
    {
      flag: "🇦🇪",
      country: "Dubai",
      region: "UAE & Middle East",
      specialty: "Autonomous Voice Callers & Multi-lingual Bots",
      status: "Active Fleet",
    },
    {
      flag: "🇸🇦",
      country: "Saudi Arabia",
      region: "Middle East",
      specialty: "Government & Business Process Automation",
      status: "Active Fleet",
    },
    {
      flag: "🇪🇺",
      country: "Europe",
      region: "European Union",
      specialty: "GDPR Compliant AI Pipelines & RAG Chatbots",
      status: "Active Fleet",
    },
    {
      flag: "🇦🇺",
      country: "Australia",
      region: "Oceania",
      specialty: "24/7 Intelligent Support & Customer Workflows",
      status: "Active Fleet",
    },
    {
      flag: "🇿🇦",
      country: "South Africa",
      region: "Africa",
      specialty: "EdTech & POS Retail Automation Systems",
      status: "Active Fleet",
    },
    {
      flag: "🇮🇳",
      country: "India",
      region: "Asia Pacific",
      specialty: "ABDM Health Cloud & Multi-Tenant SaaS Hub",
      status: "HQ & Core R&D",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#061229] via-[#081736] to-[#061229] text-white">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(48,94,255,0.22),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#305eff]/40 bg-[#305eff]/15 px-4 py-1.5 text-xs font-bold text-[#618dff] shadow-inner">
            <Globe className="h-4 w-4 text-[#618dff] animate-pulse" />
            <span>GLOBAL FOOTPRINT & ENTERPRISE COMPLIANCE</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Serving Clients <span className="bg-gradient-to-r from-[#618dff] via-blue-400 to-indigo-300 bg-clip-text text-transparent">Worldwide</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Delivering cutting-edge AI Agent architectures and robust system automations across top international markets.
          </p>
        </div>

        {/* Powered By & Government Registered Highlight Banner */}
        <div className="mt-8 mx-auto max-w-4xl rounded-2xl border border-[#305eff]/40 bg-gradient-to-r from-[#0a1b3d] via-[#061229] to-[#0d224d] p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#305eff]/20 text-[#618dff] border border-[#305eff]/40">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2 justify-center md:justify-start">
                  <span>Powered by Advanced Meta, Google, AI-Agents &amp; System Automation</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  State-of-the-art Llama 3, Gemini 1.5, OpenAI GPT-4o &amp; n8n enterprise workflows.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 px-4 py-2.5 text-xs font-extrabold text-emerald-300 shadow-md">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span>Government Registered Entity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Countries Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((item) => (
            <div
              key={item.country}
              className="group relative rounded-2xl border border-slate-800 bg-[#08152e]/90 p-4.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#305eff] hover:bg-[#0a1c3e] hover:shadow-xl hover:shadow-[#305eff]/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl transition-transform duration-300 group-hover:scale-125">{item.flag}</span>
                  <div>
                    <h4 className="font-display text-base font-extrabold text-white group-hover:text-[#618dff]">
                      {item.country}
                    </h4>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {item.region}
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-[10px] font-bold text-slate-300 group-hover:bg-[#305eff]/30 group-hover:text-blue-200 group-hover:border-[#305eff]/60">
                  {item.status}
                </span>
              </div>

              <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-snug font-medium">
                  {item.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Ribbons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-400" />
            <span>International Standard Security</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-indigo-400" />
            <span>Officially Registered &amp; Verified</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span>24/7 Global Uptime Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
