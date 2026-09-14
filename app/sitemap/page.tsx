"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ArrowRight,
  ExternalLink,
  Bot,
  Cpu,
  Layers,
  FileCode2,
  PhoneCall,
  ShieldCheck,
  FileText,
  Workflow,
  Sparkles,
  Zap,
  Globe2,
  CheckCircle2,
  Code2,
  Database,
  Calculator,
  Compass,
  Copy,
  Check,
  Building2,
  ChevronRight,
  Terminal,
} from "lucide-react";
import WorldwideClientsBanner from "@/components/WorldwideClientsBanner";
import EcosystemHeader from "@/components/EcosystemHeader";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";
import { useLeadModal } from "@/components/LeadModalContext";
import { BLOG_POSTS } from "@/data/blogData";

interface SitemapCategory {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: any;
  items: {
    title: string;
    description: string;
    href: string;
    badge?: string;
    badgeColor?: string;
    isExternal?: boolean;
    isAnchor?: boolean;
    meta?: string;
  }[];
}

export default function SitemapPage() {
  const { openLeadModal } = useLeadModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [copiedXml, setCopiedXml] = useState(false);

  const categories: SitemapCategory[] = useMemo(
    () => [
      {
        id: "solutions",
        title: "Autonomous AI Solutions & Production Blueprints",
        description:
          "Mission-critical AI agent architectures engineered for high reliability, enterprise compliance, and low latency.",
        badge: "CORE SOLUTIONS",
        icon: Bot,
        items: [
          {
            title: "Sub-350ms Voice AI Telephony",
            description:
              "Bidirectional WebSocket media streaming with Twilio SIP, Deepgram Nova-2, and ElevenLabs Turbo runtimes.",
            href: "/blog/sub-350ms-voice-ai-telephony",
            badge: "SUB-350MS",
            badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
            meta: "Telephony • WebSockets",
          },
          {
            title: "Deterministic Multi-Agent State Machines",
            description:
              "Production-grade LangGraph finite state machines replacing non-deterministic prompt chains.",
            href: "/blog/deterministic-multi-agent-state-machines",
            badge: "LANGGRAPH",
            badgeColor: "bg-blue-50 text-[#305eff] border-blue-200",
            meta: "Swarm • Multi-Agent",
          },
          {
            title: "Enterprise RAG & Zero-Hallucination Vaults",
            description:
              "Private AWS VPC isolated knowledge vaults using hybrid semantic search and constitutional guardrails.",
            href: "/blog/enterprise-rag-zero-hallucination-architecture",
            badge: "ZERO-HALLUCINATION",
            badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
            meta: "RAG • Vector Search",
          },
          {
            title: "Automated Invoice & Document OCR Pipeline",
            description:
              "AWS Textract and Claude 3.5 Sonnet pipeline with 99.8% precision and two-way ERP matching.",
            href: "/blog/automating-invoice-ocr-reconciliation",
            badge: "99.8% PRECISION",
            badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
            meta: "OCR • NetSuite/QuickBooks",
          },
          {
            title: "Salesforce & n8n Bi-Directional Event Streaming",
            description:
              "Change Data Capture (CDC) streaming into self-hosted n8n clusters with zero per-task execution fees.",
            href: "/blog/salesforce-n8n-event-streaming",
            badge: "CDC STREAMING",
            badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
            meta: "CRM • n8n Queue Mode",
          },
          {
            title: "Enterprise AI ROI & Payback Playbook",
            description:
              "Mathematical framework for calculating payback periods, compute allocation, and operational leverage.",
            href: "/blog/enterprise-ai-roi-playbook",
            badge: "ROI PLAYBOOK",
            badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
            meta: "Economics • C-Suite",
          },
        ],
      },
      {
        id: "platform",
        title: "Core Platform & Ecosystem Navigation",
        description:
          "Explore the primary landing areas, capability showcases, and architectural blueprints across the TCB platform.",
        badge: "PLATFORM",
        icon: Layers,
        items: [
          {
            title: "TCB Home Overview",
            description:
              "Custom AI Agents & Intelligent Workflow Automation Studio master landing interface.",
            href: "/",
            badge: "MAIN HUB",
            badgeColor: "bg-blue-50 text-[#305eff] border-blue-200",
          },
          {
            title: "AI Solutions Catalog",
            description:
              "Comprehensive grid of autonomous sales bots, voice callers, and enterprise automation modules.",
            href: "/#solutions-catalog",
            isAnchor: true,
          },
          {
            title: "Enterprise Tech Stack & Tooling",
            description:
              "Production toolchain covering Python, LangChain, LangGraph, n8n, Make, AWS VPC, and vector databases.",
            href: "/#tech-stack",
            isAnchor: true,
          },
          {
            title: "Real Client Deployments & Proof",
            description:
              "Production case studies, verified ROI metrics, and executive testimonials across global enterprises.",
            href: "/#testimonials",
            isAnchor: true,
          },
          {
            title: "Technical FAQ & Architecture Specs",
            description:
              "Direct answers on client IP ownership, deployment timelines, VPC security, and maintenance SLAs.",
            href: "/#faq",
            isAnchor: true,
          },
        ],
      },
      {
        id: "engineering",
        title: "Engineering Knowledge Hub & Publications",
        description:
          "In-depth research papers, architectural benchmarks, and production-tested Python code snippets.",
        badge: "RESEARCH",
        icon: FileCode2,
        items: [
          {
            title: "Engineering Blog Hub",
            description:
              "Central portal containing all published architectural guides, technical deep-dives, and benchmarks.",
            href: "/blog",
            badge: "ALL ARTICLES",
            badgeColor: "bg-blue-50 text-[#305eff] border-blue-200",
          },
          ...BLOG_POSTS.map((post) => ({
            title: post.title,
            description: post.excerpt,
            href: `/blog/${post.slug}`,
            badge: post.category,
            badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
            meta: `${post.readTime} • ${post.publishDate}`,
          })),
        ],
      },
      {
        id: "engagement",
        title: "Client Engagement & Consultation",
        description:
          "Direct communication channels to scope custom AI agent builds and book technical feasibility audits.",
        badge: "COMMERCIAL",
        icon: Building2,
        items: [
          {
            title: "Contact & Scoping Studio",
            description:
              "Schedule an architectural briefing with our solutions engineering team or request a fixed-bid proposal.",
            href: "/contact",
            badge: "ACTIVE INTAKE",
            badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
          },
          {
            title: "Direct Architectural Inquiries",
            description:
              "Direct communication link for enterprise RFPs, NDA requests, and custom VPC hosting requirements.",
            href: "mailto:contact@thecodebrains.com",
            isExternal: true,
          },
        ],
      },
      {
        id: "protocols",
        title: "Machine Protocols, SEO & Compliance",
        description:
          "Raw machine-readable sitemaps, search crawler directives, and enterprise security frameworks.",
        badge: "MACHINE & LEGAL",
        icon: Terminal,
        items: [
          {
            title: "Raw Machine XML Sitemap",
            description:
              "Official XML Sitemap compliant with Sitemaps.org standard for Google, Bing, and autonomous crawlers.",
            href: "/sitemap.xml",
            badge: "XML PROTOCOL",
            badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
            isExternal: true,
          },
          {
            title: "Search Bot Directives (robots.txt)",
            description:
              "Standard Robots Exclusion Protocol rules specifying public indexing paths and API protection.",
            href: "/robots.txt",
            badge: "ROBOTS.TXT",
            badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
            isExternal: true,
          },
          {
            title: "Multi-Tenant Data Privacy & Isolation",
            description:
              "Zero-data-retention framework guaranteeing proprietary enterprise data never trains external models.",
            href: "/#faq",
            isAnchor: true,
          },
        ],
      },
    ],
    []
  );

  // Filtered categories based on search and selected tab
  const filteredCategories = useMemo(() => {
    return categories
      .filter((cat) => {
        if (selectedFilter === "all") return true;
        return cat.id === selectedFilter;
      })
      .map((cat) => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return cat;

        const filteredItems = cat.items.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            (item.badge && item.badge.toLowerCase().includes(query)) ||
            (item.meta && item.meta.toLowerCase().includes(query))
        );

        return { ...cat, items: filteredItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [categories, selectedFilter, searchQuery]);

  const totalIndexedLinks = useMemo(() => {
    return categories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [categories]);

  const handleCopyXml = () => {
    const fullXmlUrl = `${window.location.origin}/sitemap.xml`;
    navigator.clipboard.writeText(fullXmlUrl);
    setCopiedXml(true);
    setTimeout(() => setCopiedXml(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#305eff] selection:text-white flex flex-col font-sans">
      <WorldwideClientsBanner />
      <EcosystemHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[#305eff] transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-[#305eff]">Directory &amp; Sitemap</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl border border-blue-100 bg-linear-to-br from-white via-blue-50/40 to-indigo-50/30 p-8 sm:p-12 shadow-xs mb-10 overflow-hidden">
          {/* Subtle Grid Accent */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#305eff 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-xs font-bold text-[#305eff] shadow-2xs mb-4">
              <Compass className="h-3.5 w-3.5 text-[#305eff]" />
              Architectural Index &amp; Directory
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Website Structure &amp;{" "}
              <span className="text-[#305eff]">AI Systems Sitemap</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore the complete hierarchy of TCB autonomous AI agent runtimes, enterprise workflow pipelines,
              system blueprints, and machine-readable crawler protocols.
            </p>

            {/* Quick Action Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>{totalIndexedLinks} Verified Endpoints</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 font-semibold text-slate-700 shadow-2xs">
                <Bot className="h-3.5 w-3.5 text-[#305eff]" />
                <span>6 Core AI Blueprints</span>
              </div>
              <button
                onClick={handleCopyXml}
                type="button"
                className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50/80 px-3 py-1.5 font-bold text-[#305eff] hover:bg-blue-100/80 transition-colors shadow-2xs"
              >
                {copiedXml ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>XML URL Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-[#305eff]" />
                    <span>Copy /sitemap.xml Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Filter & Instant Search Toolbar */}
        <div className="sticky top-20 z-20 mb-8 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-md p-3 sm:p-4 shadow-xs">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search any page, architecture (e.g. 'voice', 'rag', 'n8n', 'ocr')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#305eff] focus:bg-white focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {[
                { id: "all", label: "All Sections" },
                { id: "solutions", label: "AI Solutions" },
                { id: "platform", label: "Platform" },
                { id: "engineering", label: "Engineering Hub" },
                { id: "protocols", label: "Crawler Protocols" },
              ].map((filter) => {
                const isActive = selectedFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`shrink-0 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-[#305eff] text-white shadow-xs"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Directory Sections */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
              <Search className="mx-auto h-8 w-8 text-slate-300 mb-3" />
              <h3 className="text-base font-bold text-slate-800">No matching URLs found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for something else like &apos;voice&apos;, &apos;rag&apos;, &apos;invoice&apos;, or reset the filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
                }}
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#305eff] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <section
                  key={category.id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] border border-blue-100 shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                            {category.title}
                          </h2>
                          <span className="hidden sm:inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                            {category.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{category.description}</p>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-slate-400 shrink-0">
                      {category.items.length} {category.items.length === 1 ? "endpoint" : "endpoints"}
                    </span>
                  </div>

                  {/* Links Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#305eff]/40 hover:bg-white hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            {item.badge && (
                              <span
                                className={`rounded px-1.5 py-0.5 text-[9px] font-extrabold border uppercase tracking-wider ${
                                  item.badgeColor || "bg-blue-50 text-[#305eff] border-blue-200"
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                            <div className="text-slate-400 transition-colors group-hover:text-[#305eff] shrink-0 ml-auto">
                              {item.isExternal ? (
                                <ExternalLink className="h-3.5 w-3.5" />
                              ) : (
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                              )}
                            </div>
                          </div>

                          <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#305eff] transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Link Footer Meta */}
                        <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                          <code className="text-[#305eff] font-mono text-[10px] truncate max-w-[180px]">
                            {item.href}
                          </code>
                          {item.meta && (
                            <span className="text-slate-500 font-medium shrink-0 ml-2">
                              {item.meta}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })
          )}
        </div>

        {/* Enterprise Architecture Consultation CTA */}
        <div className="mt-12 rounded-3xl border border-blue-200 bg-linear-to-r from-blue-600 via-[#305eff] to-indigo-700 p-8 sm:p-10 text-white shadow-xl shadow-blue-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold mb-3 backdrop-blur-xs">
                <Sparkles className="h-3 w-3" />
                Custom AI Infrastructure Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Need a Custom AI Agent Built for Your Workflow?
              </h2>
              <p className="mt-2 text-sm text-blue-100 leading-relaxed">
                We design and deploy private, VPC-isolated AI agents and high-throughput workflow automations.
                100% Client Git repository ownership with no recurring SaaS execution markups.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() =>
                  openLeadModal({
                    title: "Custom AI Agent Architecture",
                    source: "Visual Sitemap",
                    defaultNote: "Inquiring about building custom autonomous AI agents / workflows from sitemap.",
                  })
                }
                type="button"
                className="w-full sm:w-auto rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#305eff] hover:bg-blue-50 transition-all shadow-md active:scale-95 text-center"
              >
                Book Architecture Audit
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-xs text-center"
              >
                Contact Studio
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <DemoFloatWidget />
    </div>
  );
}
