"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  ChevronRight,
} from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

export default function EcosystemHeader() {
  const pathname = usePathname();
  const { openLeadModal } = useLeadModal();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "Home", href: "/", sectionId: "home" },
    { label: "Projects", href: "/projects", sectionId: "projects" },
    { label: "Automations", href: "/#automations", sectionId: "automations" },
    { label: "Services", href: "/#services", sectionId: "services" },
    { label: "Case Studies", href: "/#case-studies", sectionId: "case-studies" },
    { label: "Integrations", href: "/#integrations", sectionId: "integrations" },
    { label: "How It Works", href: "/#how-it-works", sectionId: "how-it-works" },
    { label: "Blog", href: "/blog", sectionId: "blog" },
    { label: "FAQ", href: "/#faq", sectionId: "faq" },
    { label: "Contact", href: "/#contact", sectionId: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      if (pathname === "/") {
        const sections = [
          "automations",
          "services",
          "case-studies",
          "integrations",
          "how-it-works",
          "faq",
          "contact",
        ];
        let foundSec = "";

        for (const secId of sections) {
          const el = document.getElementById(secId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              foundSec = secId;
              break;
            }
          }
        }

        if (foundSec) {
          setActiveSection(foundSec);
        } else if (window.scrollY < 200) {
          setActiveSection("");
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isNavActive = (link: (typeof navLinks)[0]) => {
    if (link.href === "/blog") {
      return pathname.startsWith("/blog");
    }
    if (link.href === "/projects") {
      return pathname.startsWith("/projects");
    }
    if (link.sectionId === "contact") {
      if (pathname.startsWith("/contact")) return true;
      if (pathname === "/") return activeSection === "contact";
      return false;
    }
    if (link.href === "/") {
      return pathname === "/" && (!activeSection || activeSection === "home");
    }
    if (pathname === "/") {
      return activeSection === link.sectionId;
    }
    return pathname === link.href;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/90"
          : "bg-white border-b border-slate-100"
      }`}
    >
      {/* Top Thin Corporate Utility Bar */}
      <div className="hidden border-b border-slate-100 bg-slate-50/80 px-4 py-1.5 text-[11px] font-medium text-slate-600 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5 text-[#305eff]" />
              Enterprise AI Architecture &bull; Direct AWS Deployment &bull; 100% Client Code Ownership
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span className="hover:text-[#305eff] cursor-pointer">Global Deployment</span>
            <span>&bull;</span>
            <span className="hover:text-[#305eff] cursor-pointer">Security Center</span>
            <span>&bull;</span>
            <button
              type="button"
              onClick={() =>
                openLeadModal({
                  title: "Direct Client Support & Audit",
                  source: "Top Bar Link",
                })
              }
              className="text-[#305eff] font-semibold hover:underline cursor-pointer"
            >
              Contact Solutions Architect
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/tcb-logo.png"
            alt="TCB Logo"
            style={{ height: "32px", width: "auto" }}
            className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isNavActive(link);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-2 xl:px-3 py-2 text-[12.5px] xl:text-[13px] font-semibold transition-colors duration-150 ${
                  active
                    ? "text-[#305eff]"
                    : "text-slate-700 hover:text-[#305eff]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-2 right-2 xl:left-3 xl:right-3 h-0.5 bg-[#305eff] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button - Reference Style Solid Blue Pill */}
        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            onClick={() =>
              openLeadModal({
                title: "Schedule Architecture Consultation",
                source: "Header Primary Pill CTA",
                defaultNote: "Requesting custom enterprise AI agent & workflow orchestration consultation.",
              })
            }
            className="rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-5 py-2 text-xs font-bold text-white shadow-sm transition-all hover:shadow-md active:scale-95 cursor-pointer"
          >
            Explore Solutions
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() =>
              openLeadModal({
                title: "Schedule Architecture Consultation",
                source: "Mobile Header Pill",
              })
            }
            className="rounded-full bg-[#305eff] px-3.5 py-1.5 text-[11px] font-bold text-white shadow-xs"
          >
            Consult
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => {
              const active = isNavActive(link);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-xs font-semibold ${
                    active
                      ? "bg-slate-100 text-[#305eff] font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              openLeadModal({
                title: "Schedule Architecture Consultation",
                source: "Mobile Drawer CTA",
              });
            }}
            className="w-full rounded-full bg-[#305eff] py-2.5 text-xs font-bold text-white shadow-sm text-center"
          >
            Schedule Architecture Consultation
          </button>
        </div>
      )}
    </header>
  );
}
