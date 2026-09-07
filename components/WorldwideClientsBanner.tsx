"use client";

import React from "react";
import { Globe } from "lucide-react";

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
    <div className="relative z-50 w-full bg-[#eff4ff] text-slate-800 border-b border-[#d0ddfd] py-1.5 px-3 sm:px-6 shadow-2xs">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-[11px] font-semibold sm:text-xs">
        <span className="flex items-center gap-1.5 text-[#305eff] font-bold shrink-0">
          <Globe className="h-3.5 w-3.5 text-[#305eff] animate-pulse" />
          <span>Serving Clients Worldwide:</span>
        </span>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {countries.map((c, index) => (
            <React.Fragment key={c.code}>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-[#305eff] transition-colors shrink-0">
                <span className="text-xs">{c.flag}</span>
                <span>{c.name}</span>
              </span>
              {index < countries.length - 1 && (
                <span className="text-slate-300 text-[10px] shrink-0">&bull;</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
