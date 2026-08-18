"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Store,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Dumbbell,
  Hotel,
  Utensils,
  Grid,
  Zap,
  ArrowUpRight,
  Globe,
  Mic,
} from "lucide-react";

// SCALABLE GLOBAL SAAS PRODUCTS DATA
const ECOSYSTEM_APPS = [
  {
    id: "store",
    name: "TCB Commerce POS",
    category: "Retail & Inventory POS",
    description: "Barcode stock management, automated invoices & credit ledger.",
    href: "/store",
    icon: Store,
    status: "Live",
    active: true,
  },
  {
    id: "school",
    name: "TCB Academy Hub",
    category: "Education & Learning",
    description: "Student roster, daily attendance & automated tuition alerts.",
    href: "/school",
    icon: GraduationCap,
    status: "Live",
    active: true,
  },
  {
    id: "health",
    name: "TCB Health Cloud",
    category: "Healthcare & EHR",
    description: "Doctor consultations, patient EHR & pharmacy billing.",
    href: "#ecosystem-apps",
    icon: Stethoscope,
    status: "Roadmap",
    active: false,
  },
  {
    id: "fitness",
    name: "TCB Fitness Suite",
    category: "Gym & Club Platform",
    description: "Biometric access, trainer scheduling & automated dues.",
    href: "#ecosystem-apps",
    icon: Dumbbell,
    status: "Roadmap",
    active: false,
  },
  {
    id: "hotel",
    name: "TCB Stay & Desk",
    category: "Hospitality & Desk",
    description: "Reservation engine, guest front desk & room service.",
    href: "#ecosystem-apps",
    icon: Hotel,
    status: "Roadmap",
    active: false,
  },
  {
    id: "dine",
    name: "TCB Dine POS",
    category: "Restaurant & KOT",
    description: "Table QR ordering, kitchen display sync & delivery POS.",
    href: "#ecosystem-apps",
    icon: Utensils,
    status: "Roadmap",
    active: false,
  },
];

export default function EcosystemHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [launchDropdownOpen, setLaunchDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Interactive Demo", href: "#showcase" },
    { label: "Ecosystem Apps", href: "#ecosystem-apps" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleMouseEnterProducts = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-zinc-200/90 bg-white/95 shadow-xs"
          : "border-zinc-200/60 bg-white/80"
      }`}
    >
      {/* Sleek Global Header Navbar */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/tcb-logo.png"
            alt="TCB Logo"
            style={{ height: "30px", width: "auto" }}
            className="h-7.5 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-bold text-zinc-700 border border-zinc-200">
            <Globe className="h-3 w-3 text-emerald-600" /> Cloud Ecosystem
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          
          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnterProducts}
            onMouseLeave={handleMouseLeaveProducts}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold transition-colors ${
                productsOpen
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-900"
              }`}
            >
              <Grid className="h-3.5 w-3.5 text-emerald-600" />
              <span>Products</span>
              <ChevronDown className={`h-3.5 w-3.5 text-zinc-400 transition-transform ${productsOpen ? "rotate-180 text-zinc-900" : ""}`} />
            </button>

            {/* Products Grid Dropdown Menu */}
            {productsOpen && (
              <div className="absolute left-0 top-full mt-1 w-[460px] rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5 mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">
                    TCB Micro-SaaS Applications
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-bold text-zinc-700 border border-zinc-200">
                    Global Suite
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {ECOSYSTEM_APPS.map((app) => {
                    const IconComp = app.icon;
                    return (
                      <Link
                        key={app.id}
                        href={app.href}
                        onClick={() => setProductsOpen(false)}
                        className={`group flex items-start gap-3 rounded-xl p-2.5 transition-all ${
                          app.active
                            ? "hover:bg-zinc-50 border border-transparent hover:border-zinc-200"
                            : "hover:bg-zinc-50/50 opacity-80"
                        }`}
                      >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-bold transition-transform group-hover:scale-105 ${
                          app.active
                            ? "bg-zinc-900 text-white"
                            : "bg-zinc-100 text-zinc-600"
                        }`}>
                          <IconComp className="h-4.5 w-4.5" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-zinc-900 group-hover:text-emerald-600 truncate">
                              {app.name}
                            </span>
                            {app.status === "Live" ? (
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                            ) : (
                              <span className="rounded bg-zinc-100 px-1 py-0.2 text-[9px] font-medium text-zinc-500 shrink-0">
                                Soon
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-zinc-500 line-clamp-1">
                            {app.category}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3">
                  <span className="text-[11px] text-zinc-500 font-medium">
                    Designed for global enterprise scalability
                  </span>
                  <a
                    href="#ecosystem-apps"
                    onClick={() => setProductsOpen(false)}
                    className="flex items-center gap-1 text-xs font-bold text-zinc-900 hover:text-emerald-600"
                  >
                    <span>View Platform Roadmap</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Standard Navigation Links */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Header CTA — SLEEK GLOBAL BUTTON */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#showcase"
            className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs font-bold text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-2xs"
          >
            <Mic className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
            <span>Voice AI</span>
          </a>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLaunchDropdownOpen((v) => !v)}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-500 border border-emerald-600"
            >
              <Zap className="h-4 w-4 text-white" />
              <span>Launch App</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${launchDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {launchDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl backdrop-blur-md">
                <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">
                  Select App Workspace
                </div>

                {ECOSYSTEM_APPS.filter(app => app.active).map((app) => {
                  const IconComp = app.icon;
                  return (
                    <Link
                      key={app.id}
                      href={app.href}
                      onClick={() => setLaunchDropdownOpen(false)}
                      className="flex items-center justify-between rounded-xl p-2.5 transition-colors hover:bg-zinc-50 group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white">
                          <IconComp className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-xs font-bold text-zinc-900 group-hover:text-emerald-600">
                            {app.name}
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            {app.category}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-2xs hover:bg-zinc-50 active:scale-95 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5 text-zinc-900" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-b border-zinc-200 bg-white p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              Ecosystem Product Suite
            </span>

            <div className="grid gap-2">
              {ECOSYSTEM_APPS.map((app) => {
                const IconComp = app.icon;
                return (
                  <Link
                    key={app.id}
                    href={app.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl p-3 text-xs font-bold border transition-colors ${
                      app.active
                        ? "bg-zinc-900 border-zinc-900 text-white"
                        : "bg-zinc-50/70 border-zinc-200 text-zinc-600"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComp className={`h-4 w-4 ${app.active ? "text-emerald-400" : "text-zinc-500"}`} />
                      <div>
                        <div>{app.name}</div>
                        <div className="text-[10px] font-normal opacity-80">{app.category}</div>
                      </div>
                    </div>
                    {app.active ? (
                      <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <span className="text-[10px] font-medium text-zinc-400">Soon</span>
                    )}
                  </Link>
                );
              })}
            </div>

            <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
