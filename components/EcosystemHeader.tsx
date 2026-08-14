"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Zap,
  Store,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function EcosystemHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Interactive Demo", href: "#showcase" },
    { label: "Ecosystem Apps", href: "#ecosystem-apps" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-zinc-200 bg-white/95 shadow-xs"
          : "border-zinc-200/80 bg-white/85"
      }`}
    >
      {/* Top Pure White Announcement Bar */}
      <div className="border-b border-zinc-100 bg-emerald-50/70 px-4 py-1.5 text-xs text-zinc-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-emerald-800">TCB Micro-SaaS Ecosystem</span>
            <span className="hidden text-zinc-500 sm:inline">— Retail Store &amp; Coaching School Management Software</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/store"
              className={`flex items-center gap-1 hover:text-emerald-700 transition-colors ${
                pathname.startsWith("/store") ? "text-emerald-700 font-bold" : "text-zinc-600 font-semibold"
              }`}
            >
              <Store className="h-3.5 w-3.5 text-emerald-600" />
              <span>TCB Store</span>
            </Link>
            <span className="text-zinc-300">|</span>
            <Link
              href="/school"
              className={`flex items-center gap-1 hover:text-emerald-700 transition-colors ${
                pathname.startsWith("/school") ? "text-emerald-700 font-bold" : "text-zinc-600 font-semibold"
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5 text-emerald-600" />
              <span>TCB School (Coaching)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Navbar */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo: TCB Logo Image + Sub-Text Below */}
        <Link href="/" className="flex flex-col items-start justify-center group">
          <img
            src="/tcb-logo.png"
            alt="TCB Logo"
            style={{ height: "32px", width: "auto" }}
            className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="mt-0.5 text-[10px] font-bold tracking-tight text-emerald-600">
            Micro-SaaS Platform
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          
          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-xs font-bold text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-emerald-700"
            >
              <span>Products</span>
              <ChevronDown className={`h-3.5 w-3.5 text-zinc-400 transition-transform ${productsOpen ? "rotate-180 text-emerald-600" : ""}`} />
            </button>

            {/* Products Dropdown Menu Card */}
            {productsOpen && (
              <div className="absolute left-0 top-full w-80 rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl backdrop-blur-md">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Select Ecosystem Application
                </div>

                <Link
                  href="/store"
                  onClick={() => setProductsOpen(false)}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-emerald-50/80"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                    <Store className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold text-zinc-900">TCB Store</div>
                    <div className="text-[11px] text-zinc-500">Retail Inventory, POS Billing &amp; Personal Expense</div>
                  </div>
                </Link>

                <Link
                  href="/school"
                  onClick={() => setProductsOpen(false)}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-emerald-50/80"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold text-zinc-900">TCB School</div>
                    <div className="text-[11px] text-zinc-500">Coaching Institutes, Attendance &amp; Parent Fee Alerts</div>
                  </div>
                </Link>
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

        {/* Right CTA Launch Buttons with Dynamic Active Pathname State */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/store"
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all shadow-xs ${
              pathname.startsWith("/store")
                ? "bg-emerald-600 text-white shadow-emerald-600/20 hover:bg-emerald-500"
                : "border border-emerald-300/80 bg-white text-zinc-800 hover:border-emerald-400 hover:bg-emerald-50/60"
            }`}
          >
            <Store className={`h-4 w-4 ${pathname.startsWith("/store") ? "text-white" : "text-emerald-600"}`} />
            <span>TCB Store</span>
          </Link>

          <Link
            href="/school"
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all shadow-xs ${
              pathname.startsWith("/school")
                ? "bg-emerald-600 text-white shadow-emerald-600/20 hover:bg-emerald-500"
                : "border border-emerald-300/80 bg-white text-zinc-800 hover:border-emerald-400 hover:bg-emerald-50/60"
            }`}
          >
            <GraduationCap className={`h-4 w-4 ${pathname.startsWith("/school") ? "text-white" : "text-emerald-600"}`} />
            <span>TCB School</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-b border-zinc-200 bg-white p-4 md:hidden">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              Applications &amp; Products
            </span>
            <Link
              href="/store"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl bg-emerald-50/60 p-3 text-xs font-bold text-emerald-900"
            >
              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-emerald-600" />
                <span>TCB Store (Inventory &amp; POS)</span>
              </div>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/school"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl bg-emerald-50/60 p-3 text-xs font-bold text-emerald-900"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-emerald-600" />
                <span>TCB School (Coaching &amp; Fees)</span>
              </div>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-100"
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
