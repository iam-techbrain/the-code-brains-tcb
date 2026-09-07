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

// Sleek Floating Universal Country & Currency Switcher on Right Side
function UniversalFloatingCountryWidget() {
  const { selectedCountry, setSelectedCountry } = useGlobalCountry();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-3 top-24 z-[9999] flex flex-col items-end">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 border-brand-500/30"
        title="Universal Currency & Country Switcher"
      >
        <span className="text-sm">{selectedCountry.flag}</span>
        <span className="font-extrabold">{selectedCountry.currency}</span>
        <span className="text-[10px] text-slate-400 font-semibold">{selectedCountry.dialCode}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-slate-300 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Floating Dropdown List */}
      {isOpen && (
        <div className="mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl backdrop-blur-2xl animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="mb-1.5 border-b border-slate-100 pb-1.5 px-2.5 flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <Globe className="h-3 w-3 text-[#305eff]" /> Global Currency
            </span>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-700">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex flex-col gap-0.5 max-h-60 overflow-y-auto pr-0.5">
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
                  className={`flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-[#eff4ff] text-[#1f47e0] font-bold border border-[#d0ddfd]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{country.flag}</span>
                    <span>{country.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-bold text-slate-500">{country.currency}</span>
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
