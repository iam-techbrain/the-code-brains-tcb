"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Globe, ChevronDown, Check, X } from "lucide-react";

export type CountryOption = {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  currency: string;
  symbol: string;
  multiplier: number;
  samplePhone: string;
};

export const GLOBAL_COUNTRIES: CountryOption[] = [
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳", currency: "INR", symbol: "₹", multiplier: 1, samplePhone: "98765 43210" },
  { code: "US", name: "USA & Global", dialCode: "+1", flag: "🇺🇸", currency: "USD", symbol: "$", multiplier: 0.0125, samplePhone: "(555) 000-0000" },
  { code: "AE", name: "UAE / Dubai", dialCode: "+971", flag: "🇦🇪", currency: "AED", symbol: "AED ", multiplier: 0.045, samplePhone: "50 123 4567" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦", currency: "SAR", symbol: "SAR ", multiplier: 0.046, samplePhone: "50 123 4567" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧", currency: "GBP", symbol: "£", multiplier: 0.0098, samplePhone: "7911 123456" },
  { code: "EU", name: "Europe", dialCode: "+49", flag: "🇪🇺", currency: "EUR", symbol: "€", multiplier: 0.0115, samplePhone: "151 12345678" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦", currency: "CAD", symbol: "C$", multiplier: 0.0165, samplePhone: "(416) 000-0000" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺", currency: "AUD", symbol: "A$", multiplier: 0.0185, samplePhone: "412 345 678" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦", currency: "ZAR", symbol: "R ", multiplier: 0.225, samplePhone: "82 123 4567" },
];

type GlobalCountryContextType = {
  selectedCountry: CountryOption;
  setSelectedCountry: (country: CountryOption) => void;
  formatPrice: (baseInr: number) => string;
};

const GlobalCountryContext = createContext<GlobalCountryContextType | undefined>(undefined);

export function GlobalCountryProvider({ children }: { children: React.ReactNode }) {
  const [selectedCountry, setSelectedCountryState] = useState<CountryOption>(GLOBAL_COUNTRIES[0]);

  // Read saved preference from localStorage if available
  useEffect(() => {
    try {
      const savedCode = localStorage.getItem("tcb_country_code");
      if (savedCode) {
        const found = GLOBAL_COUNTRIES.find((c) => c.code === savedCode);
        if (found) setSelectedCountryState(found);
      }
    } catch (e) {}
  }, []);

  const setSelectedCountry = (country: CountryOption) => {
    setSelectedCountryState(country);
    try {
      localStorage.setItem("tcb_country_code", country.code);
    } catch (e) {}
  };

  const formatPrice = (baseInr: number): string => {
    if (!baseInr) return "";
    if (selectedCountry.code === "IN") {
      return `₹${baseInr.toLocaleString("en-IN")}`;
    }
    const converted = Math.round(baseInr * selectedCountry.multiplier);
    return `${selectedCountry.symbol}${converted.toLocaleString("en-US")}`;
  };

  return (
    <GlobalCountryContext.Provider value={{ selectedCountry, setSelectedCountry, formatPrice }}>
      {children}
      {/* Floating Universal Country Switcher Widget on Right Side */}
      <UniversalFloatingCountryWidget />
    </GlobalCountryContext.Provider>
  );
}

export function useGlobalCountry() {
  const context = useContext(GlobalCountryContext);
  if (!context) {
    throw new Error("useGlobalCountry must be used within a GlobalCountryProvider");
  }
  return context;
}

// Soft, Ultra-Professional Floating Country & Currency Capsule Widget
function UniversalFloatingCountryWidget() {
  const { selectedCountry, setSelectedCountry } = useGlobalCountry();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-3 sm:right-5 top-28 z-[9999] flex flex-col items-end">
      {/* Soft Glass Capsule Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3.5 py-2 text-xs font-bold text-slate-800 shadow-xl shadow-slate-300/40 backdrop-blur-xl transition-all duration-200 hover:border-[#305eff] hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
        title="Change Currency & Country"
      >
        <span className="text-base leading-none">{selectedCountry.flag}</span>
        <span className="font-extrabold text-slate-900 group-hover:text-[#305eff] transition-colors">
          {selectedCountry.currency} ({selectedCountry.symbol.trim()})
        </span>
        <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:text-[#305eff] ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Soft Glass Dropdown List */}
      {isOpen && (
        <div className="mt-2.5 w-60 rounded-2xl border border-slate-200/90 bg-white/98 p-2.5 shadow-2xl backdrop-blur-2xl animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="mb-2 border-b border-slate-100 pb-2 px-2 flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-[#305eff]" /> Global Currency &amp; Region
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-slate-100 p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </div>

          <div className="flex flex-col gap-1 max-h-64 overflow-y-auto pr-1">
            {GLOBAL_COUNTRIES.map((country) => {
              const isSelected = country.code === selectedCountry.code;
              return (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#eff4ff] text-[#1f47e0] font-bold border border-[#d0ddfd] shadow-xs"
                      : "text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{country.flag}</span>
                    <span>{country.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-extrabold text-slate-600">{country.currency}</span>
                    {isSelected && <Check className="h-3.5 w-3.5 text-[#305eff]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
