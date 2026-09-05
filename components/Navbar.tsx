"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Interactive Demo", href: "#showcase" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a slightly stronger border/shadow once the user scrolls,
  // so the glass effect reads as "lifted" off the page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "border-zinc-200 bg-white/80 shadow-sm shadow-zinc-900/[0.03]"
          : "border-transparent bg-white/60"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white transition-transform duration-200 group-hover:scale-105">
            <Zap className="h-4 w-4 fill-brand-400 text-brand-400" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
              TCB Store
            </span>
            <span className="text-[11px] font-medium tracking-wide text-zinc-400">
              TCB
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-zinc-600 transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#signin"
            className="rounded-md px-3.5 py-2 text-sm font-medium text-zinc-600 transition-colors duration-150 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
          >
            Sign In
          </a>
          <a
            href="#trial"
            className="inline-flex items-center gap-1 rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-600 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 active:scale-[0.98]"
          >
            <span>Start Free Trial</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden border-b border-zinc-200 bg-white/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-4 pt-2 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-zinc-100 pt-3">
            <a
              href="#signin"
              className="rounded-md px-3 py-2.5 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              Sign In
            </a>
            <a
              href="#trial"
              className="flex items-center justify-center gap-1 rounded-md bg-brand-500 px-3 py-2.5 text-sm font-semibold text-white transition-transform hover:bg-brand-600 active:scale-[0.98]"
            >
              Start Free Trial
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
