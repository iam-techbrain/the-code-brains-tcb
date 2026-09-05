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
  Stethoscope,
  Dumbbell,
  Hotel,
  Utensils,
  Globe,
} from "lucide-react";

// SCALABLE GLOBAL SAAS PRODUCTS DATA FOR DROPDOWN HUB
const ECOSYSTEM_APPS = [
  {
    id: "school",
    name: "TCB School (Academy Hub)",
    category: "Education & Coaching Institute",
    description: "Student roster, daily attendance & automated tuition alerts.",
    price: "₹499/mo",
    href: "/school",
    icon: GraduationCap,
    status: "Live",
    active: true,
    external: false,
  },
  {
    id: "inventory",
    name: "TCB Inventory System",
    category: "Retail & Stock Management",
    description: "Barcode stock master, automated invoices & credit ledger.",
    price: "₹299/mo",
    href: "/store",
    icon: Boxes,
    status: "Soon",
    active: true,
    external: false,
  },
  {
    id: "health",
    name: "TCB Health Cloud",
    category: "Healthcare & EHR Platform",
    description: "Doctor consultations, patient EHR & pharmacy billing.",
    price: "₹699/mo",
    href: "/health",
    icon: Stethoscope,
    status: "Soon",
    active: true,
    external: false,
  },
  {
    id: "fitness",
    name: "TCB Fitness Suite",
    category: "Gym & Club Platform",
    description: "Biometric access, trainer scheduling & automated dues.",
    price: "₹399/mo",
    href: "/fitness",
    icon: Dumbbell,
    status: "Soon",
    active: true,
    external: false,
  },
  {
    id: "hotel",
    name: "TCB Stay & Desk",
    category: "Hospitality & Front Desk",
    description: "Reservation engine, guest front desk & room service.",
    price: "₹899/mo",
    href: "/hotel",
    icon: Hotel,
    status: "Soon",
    active: true,
    external: false,
  },
  {
    id: "dine",
    name: "TCB Dine POS",
    category: "Restaurant & KOT",
    description: "Table QR ordering, kitchen display sync & delivery POS.",
    price: "₹499/mo",
    href: "/dine",
    icon: Utensils,
    status: "Soon",
    active: true,
    external: false,
  },
];

export default function EcosystemHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [rightProductsOpen, setRightProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const rightProductsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { label: "AI Studio", href: "/", sectionId: "" },
    { label: "10 AI Agents Catalog", href: "/#ai-agents-catalog", sectionId: "ai-agents-catalog" },
    { label: "AI Capabilities", href: "/#features", sectionId: "features" },
    { label: "SaaS Portfolio", href: "/#ecosystem-apps", sectionId: "ecosystem-apps" },
    { label: "Pricing", href: "/#pricing", sectionId: "pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      if (pathname === "/") {
        const sections = ["ai-agents-catalog", "features", "ecosystem-apps", "pricing"];
        let foundSec = "";

        for (const secId of sections) {
          const el = document.getElementById(secId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 220 && rect.bottom >= 220) {
              foundSec = secId;
              break;
            }
          }
        }

        if (foundSec) {
          setActiveSection(foundSec);
        } else if (window.scrollY < 300) {
          setActiveSection("");
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleMouseEnterRightProducts = () => {
    if (rightProductsTimeoutRef.current) clearTimeout(rightProductsTimeoutRef.current);
    setRightProductsOpen(true);
  };

  const handleMouseLeaveRightProducts = () => {
    rightProductsTimeoutRef.current = setTimeout(() => {
      setRightProductsOpen(false);
    }, 150);
  };

  const isNavActive = (link: typeof navLinks[0]) => {
    if (pathname === "/") {
      if (link.sectionId === "") {
        return activeSection === "";
      }
      return activeSection === link.sectionId;
    }
    return pathname === link.href;
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex h-[62px] max-w-7xl items-center justify-between rounded-2xl border border-white/80 bg-white/85 px-4 text-slate-900 shadow-nav backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          scrolled ? "bg-white/95 shadow-soft" : ""
        }`}
      >

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/tcb-logo.png"
            alt="TCB Logo"
            style={{ height: "32px", width: "auto" }}
            className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/80 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
            <Globe className="h-3 w-3 text-brand-500" /> Multi-SaaS Platform
          </span>
        </Link>

        {/* Center Desktop Navigation with Dynamic Active Highlighting */}
        <div className="hidden items-center gap-1.5 md:flex">
          {navLinks.map((link) => {
            const active = isNavActive(link);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-[13px] transition-colors duration-200 ${
                  active
                    ? "bg-brand-50 font-semibold text-brand-700"
                    : "font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Header CTA - All SaaS Projects Hub Switcher */}
        <div
          className="relative hidden items-center gap-3 md:flex"
          onMouseEnter={handleMouseEnterRightProducts}
          onMouseLeave={handleMouseLeaveRightProducts}
        >
          <button
            type="button"
            onClick={() => setRightProductsOpen(!rightProductsOpen)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-lift hover:brightness-110 active:scale-95 transition-all"
          >
            <Sparkles className="h-4 w-4 text-white" />
            <span>Browse All Apps</span>
            <ChevronDown
              className={`h-3.5 w-3.5 text-white transition-transform duration-200 ${
                rightProductsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* SaaS Products Dropdown Hub */}
          {rightProductsOpen && (
            <div className="absolute right-0 top-full z-50 mt-3 w-80 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-soft backdrop-blur-2xl">
              <div className="mb-2 border-b border-slate-100 pb-2 px-1 flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                  TCB SaaS Verticals Hub
                </span>
                <span className="text-[10px] font-bold text-brand-700">6 Products</span>
              </div>

              <div className="flex flex-col gap-1 max-h-[360px] overflow-y-auto pr-1">
                {ECOSYSTEM_APPS.map((app) => {
                  const IconComp = app.icon;
                  const isAppActive = pathname === app.href;
                  return (
                    <Link
                      key={app.id}
                      href={app.href}
                      onClick={() => setRightProductsOpen(false)}
                      className={`group flex items-start gap-3 rounded-xl p-2.5 transition-all ${
                        isAppActive
                          ? "bg-brand-50 border border-brand-200"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800 font-bold transition-transform group-hover:scale-110">
                        <IconComp className="h-4.5 w-4.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-brand-700 truncate">
                            {app.name}
                          </span>
                          <span className="text-[10px] font-black text-brand-700 shrink-0">
                            {app.price}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 truncate mt-0.5">
                          {app.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/80 bg-white/95 px-4 pb-6 pt-4 shadow-soft md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isNavActive(link);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                    active
                      ? "bg-brand-500 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
