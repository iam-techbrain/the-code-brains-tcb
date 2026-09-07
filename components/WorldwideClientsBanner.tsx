"use client";

import React from "react";
import { Globe, ShieldCheck, Sparkles, Cpu } from "lucide-react";

export default function WorldwideClientsBanner() {
  const countries = [
    { code: "USA", name: "USA", flag: "🇺🇸" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "AE", name: "Dubai", flag: "🇦🇪" },
    { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
    { code: "EU", name: "Europe", flag: "🇪🇺" },
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "ZA", name: "South Africa", flag: "🇿🇦" },
    { code: "IN", name: "India", flag: "🇮🇳" },
  ];

  return (
    <div className="relative z-50 w-full overflow-hidden bg-slate-950 text-white border-b border-slate-800/80 shadow-md">
      {/* Subtle ambient lighting line */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#305eff]/20 via-blue-500/20 to-indigo-600/20 opacity-70" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-2.5 px-3 py-2 sm:px-6 md:flex-row md:py-2.5">
        
        {/* Left Section: Serving Clients Worldwide + Country Flags Ticker/Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:justify-start">
          <span className="flex items-center gap-1.5 rounded-full bg-[#305eff]/20 px-2.5 py-0.5 text-[11px] font-bold text-blue-300 border border-[#305eff]/40 shrink-0">
            <Globe className="h-3.5 w-3.5 text-[#618dff] animate-spin-slow" />
            Serving Clients Worldwide
          </span>

          {/* Country Flags List */}
          <div className="flex flex-wrap items-center gap-1 text-[11px] font-medium text-slate-300">
            {countries.map((c, index) => (
              <React.Fragment key={c.code}>
                <span className="inline-flex items-center gap-1 rounded-md bg-slate-900/80 px-2 py-0.5 text-[11px] font-semibold text-slate-200 border border-slate-800 hover:border-[#305eff]/60 hover:bg-slate-800 transition-all">
                  <span className="text-sm">{c.flag}</span>
                  <span>{c.name}</span>
                </span>
                {index < countries.length - 1 && (
                  <span className="text-slate-600 text-[10px] hidden sm:inline">&bull;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Section: Powered by Meta & Google AI + Government Registered */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] md:justify-end shrink-0">
          <span className="flex items-center gap-1.5 rounded-full bg-[#305eff]/15 px-2.5 py-0.5 font-medium text-blue-200 border border-[#305eff]/30">
            <Sparkles className="h-3 w-3 text-[#618dff]" />
            <span>Powered by <strong className="text-white font-semibold">Advanced Meta &amp; Google AI-Agents &amp; System Automation</strong></span>
          </span>

          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-bold text-emerald-300 border border-emerald-500/30">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Government Registered Entity</span>
          </span>
        </div>

      </div>
    </div>
  );
}
