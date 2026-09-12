"use client";

import React from "react";
import { Globe, ShieldCheck, Cpu, Zap, CheckCircle2, Award, Sparkles, Building2 } from "lucide-react";

export default function WorldwidePresenceSection() {
  const regions = [
    {
      code: "US",
      country: "USA",
      region: "North America",
      specialty: "Enterprise AI Agents & Custom LLM Workflows",
      status: "Active Fleet",
    },
    {
      code: "CA",
      country: "Canada",
      region: "North America",
      specialty: "SaaS Systems & Automated Cloud Operations",
      status: "Active Fleet",
    },
    {
      code: "AE",
      country: "Dubai",
      region: "UAE & Middle East",
      specialty: "Autonomous Voice Callers & Multi-lingual Bots",
      status: "Active Fleet",
    },
    {
      code: "SA",
      country: "Saudi Arabia",
      region: "Middle East",
      specialty: "Government & Business Process Automation",
      status: "Active Fleet",
    },
    {
      code: "EU",
      country: "Europe",
      region: "European Union",
      specialty: "GDPR Compliant AI Pipelines & RAG Chatbots",
      status: "Active Fleet",
    },
    {
      code: "AU",
      country: "Australia",
      region: "Oceania",
      specialty: "24/7 Intelligent Support & Customer Workflows",
      status: "Active Fleet",
    },
    {
      code: "ZA",
      country: "South Africa",
      region: "Africa",
      specialty: "EdTech & POS Retail Automation Systems",
      status: "Active Fleet",
    },
    {
      code: "IN",
      country: "India",
      region: "Asia Pacific",
      specialty: "ABDM Health Cloud & Multi-Tenant SaaS Hub",
      status: "HQ & Core R&D",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 border-t border-b border-slate-200/80">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(48,94,255,0.06),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d0ddfd] bg-[#eff4ff] px-4 py-1.5 text-xs font-bold text-[#305eff] shadow-xs">
            <Globe className="h-4 w-4 text-[#305eff]" />
            <span>GLOBAL FOOTPRINT &amp; ENTERPRISE COMPLIANCE</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
            Serving Clients <span className="text-[#305eff]">Worldwide</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Delivering cutting-edge AI Agent architectures and robust system automations across top international markets.
          </p>
        </div>

        {/* Powered By & Government Registered Highlight Banner */}
        <div className="mt-8 mx-auto max-w-4xl rounded-2xl border border-[#d0ddfd] bg-white p-5 shadow-sm backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff4ff] text-[#305eff] border border-[#d0ddfd]">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 justify-center md:justify-start">
                  <span>Powered by Advanced Meta, Google, AI-Agents &amp; System Automation</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  State-of-the-art Llama 3, Gemini 1.5, OpenAI GPT-4o &amp; n8n enterprise workflows.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2.5 text-xs font-extrabold text-emerald-800 shadow-xs">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span>Government Registered Entity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Countries Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {regions.map((item) => (
            <div
              key={item.country}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#305eff] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Styled Country Code Badge Box */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eff4ff] text-[#305eff] font-extrabold text-xs border border-[#d0ddfd] shadow-2xs group-hover:scale-105 transition-transform">
                      {item.code}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-extrabold text-slate-900 group-hover:text-[#305eff] transition-colors">
                        {item.country}
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                        {item.region}
                      </span>
                    </div>
                  </div>

                  <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-snug font-medium">
                    {item.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Ribbons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-semibold">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-[#305eff]" />
            <span>International Standard Security</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[#305eff]" />
            <span>Officially Registered &amp; Verified</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald-600" />
            <span>24/7 Global Uptime Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
