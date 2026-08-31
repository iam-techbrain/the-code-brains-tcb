"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Boxes,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Dumbbell,
  Hotel,
  Utensils,
  Grid,
  Zap,
  ArrowUpRight,
  Globe,
  Mic,
  ExternalLink,
} from "lucide-react";

// SCALABLE GLOBAL SAAS PRODUCTS DATA
const ECOSYSTEM_APPS = [
  {
    id: "school",
    name: "TCB School (Academy Hub)",
    category: "Education & Coaching Institute",
    description: "Student roster, daily attendance & automated tuition alerts.",
    href: "https://techschool.thecodebrains.com",
    icon: GraduationCap,
    status: "Live",
    active: true,
    external: true,
  },
  {
    id: "inventory",
    name: "TCB Inventory System",
    category: "Retail & Stock Management",
    description: "Barcode stock master, automated invoices & credit ledger.",
    href: "#coming-soon",
    icon: Boxes,
    status: "Soon",
    active: false,
    external: false,
  },
  {
    id: "health",
    name: "TCB Health Cloud",
    category: "Healthcare & EHR",
    description: "Doctor consultations, patient EHR & pharmacy billing.",
    href: "#coming-soon",
    icon: Stethoscope,
    status: "Soon",
    active: false,
    external: false,
  },
  {
    id: "fitness",
    name: "TCB Fitness Suite",
    category: "Gym & Club Platform",
    description: "Biometric access, trainer scheduling & automated dues.",
    href: "#coming-soon",
    icon: Dumbbell,
    status: "Soon",
    active: false,
    external: false,
  },
  {
    id: "hotel",
    name: "TCB Stay & Desk",
    category: "Hospitality & Desk",
    description: "Reservation engine, guest front desk & room service.",
    href: "#coming-soon",
    icon: Hotel,
    status: "Soon",
    active: false,
    external: false,
  },
  {
    id: "dine",
    name: "TCB Dine POS",
    category: "Restaurant & KOT",
    description: "Table QR ordering, kitchen display sync & delivery POS.",
    href: "#coming-soon",
    icon: Utensils,
    status: "Soon",
    active: false,
    external: false,
  },
];

export default function EcosystemHeader() {
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
    { label: "AI Tech Stack", href: "#tech-stack" },
    { label: "TCB School (Live)", href: "#school-feature" },
    { label: "Features", href: "#features" },
    { label: "Demo Showcase", href: "#showcase" },
    { label: "Coming Soon", href: "#coming-soon" },
    { label: "Pricing", href: "#pricing" },
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
          ? "border-slate-200/90 bg-white/95 shadow-md shadow-slate-900/5"
          : "border-slate-200/60 bg-white/85"
      }`}
    >
      {/* Sleek Professional White Navbar */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-slate-900">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/tcb-logo.png"
            alt="TCB Logo"
            style={{ height: "32px", width: "auto" }}
            className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
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
                  ? "bg-emerald-50 text-emerald-800"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Grid className="h-3.5 w-3.5 text-emerald-600" />
              <span>Products</span>
              <ChevronDown className={`h-3.5 w-3.5 text-slate-500 transition-transform ${productsOpen ? "rotate-180 text-emerald-700" : ""}`} />
            </button>

            {/* Products Grid Dropdown Menu */}
            {productsOpen && (
              <div className="absolute left-0 top-full mt-1 w-[480px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    TCB Micro-SaaS Product Suite
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                    1 Live Platform
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {ECOSYSTEM_APPS.map((app) => {
                    const IconComp = app.icon;
                    return (
                      <a
                        key={app.id}
                        href={app.href}
                        target={app.external ? "_blank" : "_self"}
                        rel={app.external ? "noopener noreferrer" : ""}
                        onClick={() => setProductsOpen(false)}
                        className={`group flex items-start gap-3 rounded-xl p-2.5 transition-all ${
                          app.active
                            ? "hover:bg-emerald-50/80 border border-emerald-200 bg-emerald-50/40"
                            : "hover:bg-slate-50 opacity-70 border border-transparent"
                        }`}
                      >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-bold transition-transform group-hover:scale-105 ${
                          app.active
                            ? "bg-emerald-600 text-white shadow-xs"
                            : "bg-slate-100 text-slate-500"
                        }`}>
                          <IconComp className="h-4.5 w-4.5" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                              {app.name}
                            </span>
                            {app.status === "Live" ? (
                              <span className="rounded bg-emerald-100 px-1.5 py-0.2 text-[9px] font-extrabold text-emerald-800 border border-emerald-200 shrink-0">
                                LIVE
                              </span>
                            ) : (
                              <span className="rounded bg-slate-100 px-1.5 py-0.2 text-[9px] font-semibold text-slate-500 border border-slate-200 shrink-0">
                                SOON
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-500 line-clamp-1">
                            {app.category}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Enterprise SaaS Codebase Architecture
                  </span>
                  <a
                    href="https://techschool.thecodebrains.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setProductsOpen(false)}
                    className="flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    <span>Open TCB School</span>
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
              className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Header CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://techschool.thecodebrains.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-105 hover:shadow-emerald-600/30 active:scale-95"
          >
            <Zap className="h-4 w-4 text-white" />
            <span>Launch TCB School</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-white shadow-2xs hover:bg-slate-800 active:scale-95 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-b border-slate-800 bg-slate-950 p-4 shadow-xl md:hidden text-white">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Ecosystem Product Suite
            </span>

            <div className="grid gap-2">
              {ECOSYSTEM_APPS.map((app) => {
                const IconComp = app.icon;
                return (
                  <a
                    key={app.id}
                    href={app.href}
                    target={app.external ? "_blank" : "_self"}
                    rel={app.external ? "noopener noreferrer" : ""}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl p-3 text-xs font-bold border transition-colors ${
                      app.active
                        ? "bg-emerald-950 border-emerald-500/50 text-white"
                        : "bg-slate-900/60 border-slate-800 text-slate-400"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComp className={`h-4 w-4 ${app.active ? "text-emerald-400" : "text-slate-500"}`} />
                      <div>
                        <div>{app.name}</div>
                        <div className="text-[10px] font-normal opacity-80">{app.category}</div>
                      </div>
                    </div>
                    {app.active ? (
                      <span className="rounded bg-emerald-500 px-2 py-0.5 text-[9px] font-extrabold text-slate-950">
                        LIVE
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-slate-500">Soon</span>
                    )}
                  </a>
                );
              })}
            </div>

            <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://techschool.thecodebrains.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-extrabold text-slate-950 shadow-md"
            >
              <Zap className="h-4 w-4" />
              <span>Launch TCB School Workspace</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
