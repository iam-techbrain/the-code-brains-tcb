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

  // Duplicate 3x for seamless infinite marquee loop
  const displayCountries = [...countries, ...countries, ...countries];

  return (
    <div className="relative z-50 w-full overflow-hidden bg-[#eff4ff] text-slate-800 border-b border-[#d0ddfd] py-1.5 px-3 sm:px-6 shadow-2xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between sm:justify-center gap-2.5 text-[11px] font-semibold sm:text-xs">
        {/* Fixed Label on Left with subtle badge background */}
        <div className="flex items-center gap-1.5 text-[#305eff] font-bold shrink-0 bg-[#eff4ff] z-10 pr-1">
          <Globe className="h-3.5 w-3.5 text-[#305eff] shrink-0" />
          <span className="hidden sm:inline">Serving Clients Worldwide:</span>
          <span className="sm:hidden">Worldwide:</span>
        </div>

        {/* Automatic Infinite Scrolling Marquee */}
        <div className="relative overflow-hidden min-w-0 flex-1">
          <div className="animate-marquee-worldwide flex items-center gap-2.5 py-0.5">
            {displayCountries.map((c, index) => (
              <React.Fragment key={`${c.code}-${index}`}>
                <span className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-[#305eff] transition-colors shrink-0 whitespace-nowrap">
                  <span className="text-xs">{c.flag}</span>
                  <span>{c.name}</span>
                </span>
                <span className="text-slate-300 text-[10px] shrink-0">&bull;</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
