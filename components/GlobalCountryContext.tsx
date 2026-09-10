"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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
