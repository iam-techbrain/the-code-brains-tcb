"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Search,
  Zap,
  Globe,
  Server,
  Layers,
  Code2,
  ShieldCheck,
  Cpu,
  Database,
  ExternalLink,
  X,
  FileCode2,
  Terminal,
  Clock,
  Quote,
  LayoutGrid,
} from "lucide-react";
import WorldwideClientsBanner from "@/components/WorldwideClientsBanner";
import EcosystemHeader from "@/components/EcosystemHeader";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";
import { useLeadModal } from "@/components/LeadModalContext";
import JsonLd from "@/components/JsonLd";
import { getProjectsPageJsonLd } from "@/lib/jsonLd";
import {
  PROJECTS_LIST,
  PROJECT_CATEGORIES,
  type ProjectItem,
} from "@/data/projectsData";

export default function ProjectsShowcasePage() {
  const { openLeadModal } = useLeadModal();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return PROJECTS_LIST.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortSnippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.clientIndustry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full bg-white text-slate-900 antialiased selection:bg-[#305eff] selection:text-white">
      <JsonLd data={getProjectsPageJsonLd()} />
      {/* 0. Top Worldwide Ticker & Header */}
      <WorldwideClientsBanner />
      <EcosystemHeader />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-white px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8 border-b border-slate-200/80">
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(48,94,255,0.08)_0%,rgba(0,192,243,0.03)_50%,transparent_70%)] blur-2xl"
        />

        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6"
          >
            <Link href="/" className="hover:text-[#305eff] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#305eff] font-bold">Projects &amp; Web Applications</span>
          </motion.div>

          {/* Headline and Intro */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#305eff] shadow-2xs mb-5"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
              <span>ADVANCED WEB APPS &amp; ENTERPRISE AI SYSTEMS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl font-display leading-[1.12]"
            >
              Advanced Web Applications, Custom SaaS &amp;{" "}
              <span className="text-[#305eff]">Autonomous AI Systems</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl"
            >
              Hum high-performance <strong>Full-Stack Web Applications</strong>, real-time AI dashboards, custom SaaS platforms, aur autonomous agent orchestration pipelines develop karte hain. Kisi bhi project card par click karke uska complete architecture aur details dekhein.
            </motion.p>

            {/* Core Capability Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <span className="flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
                <Code2 className="h-4 w-4 text-[#305eff]" />
                Next.js 15 &amp; React 19 Web Apps
              </span>
              <span className="flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
                <Server className="h-4 w-4 text-[#305eff]" />
                Direct AWS / Cloud Private VPC
              </span>
              <span className="flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
                <ShieldCheck className="h-4 w-4 text-[#305eff]" />
                100% Client Source Code Ownership
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs and Search Bar */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1 pt-0.5">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#305eff] text-white shadow-sm shadow-[#305eff]/25"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#305eff] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#305eff]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Square Box Grid Section */}
      <section className="bg-slate-50/60 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Grid Count & Help Label */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600">
              <LayoutGrid className="h-4 w-4 text-[#305eff]" />
              <span>
                Showing {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "Project" : "Projects"}
              </span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline-block">
              Click any square box to inspect the full technical blueprint
            </span>
          </div>

          {/* Square Box Modern Cards Layout */}
          {filteredProjects.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center my-8">
              <Search className="mx-auto h-10 w-10 text-slate-300 mb-3" />
              <h3 className="text-base font-bold text-slate-900">
                No matching projects found
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Try searching for another keyword like &quot;Next.js&quot;, &quot;Voice&quot;, or &quot;OCR&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full bg-[#305eff] px-4 py-2 text-xs font-bold text-white shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layoutId={`project-card-${project.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#305eff]/60 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden aspect-auto min-h-[400px]"
                >
                  {/* Top Ambient Glow on Hover */}
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#305eff]/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 duration-500" />

                  {/* Card Content Top */}
                  <div>
                    {/* Badges Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-[#305eff] border border-blue-200">
                        <Sparkles className="h-3 w-3 text-[#305eff]" />
                        {project.badge}
                      </span>
                      {project.isAdvanceWebApp && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-emerald-700 border border-emerald-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Web App
                        </span>
                      )}
                    </div>

                    {/* Client Industry */}
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      {project.clientIndustry}
                    </p>

                    {/* Project Title */}
                    <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#305eff] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Snippet */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {project.shortSnippet}
                    </p>
                  </div>

                  {/* Card Content Bottom */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-4">
                    {/* Key Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                          <span className="text-sm sm:text-base font-extrabold text-slate-900 font-display">
                            {m.value}
                          </span>
                          <span className="text-[9.5px] font-medium text-slate-500 truncate">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills (First 3) */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white px-2 py-1 text-[10.5px] font-semibold text-slate-700 border border-slate-200/90 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10.5px] font-bold text-slate-600">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between text-xs font-bold text-[#305eff] pt-1">
                      <span>Click to view full details</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#305eff] transition-transform group-hover:translate-x-1 group-hover:bg-[#305eff] group-hover:text-white">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Advanced Web Application Development Value Proposition Band */}
      <section className="bg-white border-t border-slate-200/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/60 via-white to-slate-50 p-8 sm:p-12 lg:p-16 shadow-lg shadow-blue-500/5">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1 text-xs font-bold text-[#305eff] mb-4">
                <Code2 className="h-3.5 w-3.5 text-[#305eff]" />
                CUSTOM WEB APP ENGINEERING
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display leading-tight">
                Advance Web Applications banate hain jo aapke business ko scale karti hain
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                TCB sirf templates nahi banata—hum enterprise-grade Full-Stack Web Apps develop karte hain. Next.js 15, React 19, TypeScript, dynamic WebSockets, multi-tenant databases, aur integrated AI agent microservices ke sath. Har project ka 100% source code aapke GitHub/AWS me direct deploy hota hai.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] mb-4">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Modern Full-Stack Stack
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Next.js App Router, React Server Components, Python FastAPI microservices, and PostgreSQL for instantaneous response times.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Real-Time &amp; WebSocket Telemetry
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Live streaming charts, real-time telephony visualizers, and interactive state machines with under 100ms sync latency.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#305eff] mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  100% IP &amp; Code Ownership
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Zero recurring platform fees. We transfer all Git repositories, Docker compose scripts, and infrastructure directly to you.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                Want a custom web application designed for your operations?
              </span>
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: "Custom Web Application Consultation",
                    source: "Projects Page Web App Band",
                    defaultNote: "Requesting custom Next.js/React full-stack web application development.",
                  })
                }
                className="rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Discuss Web Application Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-200 z-10 my-auto"
            >
              {/* Close Button Top Right */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-5 right-5 sm:top-6 sm:right-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Top Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#305eff] border border-blue-200">
                  <Sparkles className="h-3 w-3 text-[#305eff]" />
                  {selectedProject.badge}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  {selectedProject.clientIndustry}
                </span>
                {selectedProject.isAdvanceWebApp && (
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                    ⚡ Advance Full-Stack Web Application
                  </span>
                )}
              </div>

              {/* Title & Timeline */}
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                {selectedProject.title}
              </h2>
              <div className="mt-2 flex items-center gap-3 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#305eff]" />
                  Turnaround: {selectedProject.timeline}
                </span>
                <span>&bull;</span>
                <span className="text-emerald-700 font-bold">100% Production Ready</span>
              </div>

              {/* Key Metrics Highlight Grid */}
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-gradient-to-r from-blue-50/80 to-slate-50 p-4 border border-blue-100">
                {selectedProject.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <span className="block font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                      {metric.value}
                    </span>
                    <span className="block text-[11px] sm:text-xs font-medium text-slate-600 mt-0.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Problem & Solution Two-Column Row */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-amber-200/80 bg-amber-50/30 p-5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Business Challenge &amp; Problem
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200/80 bg-blue-50/30 p-5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#305eff] flex items-center gap-1.5 mb-2">
                    <span className="h-2 w-2 rounded-full bg-[#305eff]" />
                    Engineered Custom Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Web App Core Features Checklist */}
              <div className="mt-8">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-[#305eff]" />
                  Web Application &amp; UI Architecture Capabilities
                </h3>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {selectedProject.webAppFeatures.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#305eff] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Architecture Breakdown */}
              <div className="mt-8 rounded-2xl bg-slate-900 p-5 sm:p-6 text-white">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#668fff] mb-4 flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[#305eff]" />
                  Technical Stack &amp; Architecture Blueprint
                </h3>
                <div className="grid gap-3 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400 font-mono text-xs">Frontend Web App</span>
                    <span className="font-semibold text-slate-100">{selectedProject.architecture.frontend}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400 font-mono text-xs">Backend Microservices</span>
                    <span className="font-semibold text-slate-100">{selectedProject.architecture.backend}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400 font-mono text-xs">Database &amp; Cache</span>
                    <span className="font-semibold text-slate-100">{selectedProject.architecture.database}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400 font-mono text-xs">AI &amp; Orchestration</span>
                    <span className="font-semibold text-slate-100">{selectedProject.architecture.aiOrchestration}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-slate-400 font-mono text-xs">Cloud Deployment</span>
                    <span className="font-semibold text-slate-100">{selectedProject.architecture.cloudDeploy}</span>
                  </div>
                </div>
              </div>

              {/* Verified Client Feedback Quote */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#305eff]">
                  <Quote className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed">
                    &ldquo;{selectedProject.clientFeedback.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-slate-900">
                    {selectedProject.clientFeedback.author}{" "}
                    <span className="font-normal text-slate-500">
                      &bull; {selectedProject.clientFeedback.role}
                    </span>
                  </p>
                </div>
              </div>

              {/* Modal Bottom CTA Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-semibold text-slate-500">
                  Ready to deploy a similar architecture for your organization?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const projectTitle = selectedProject.title;
                    setSelectedProject(null);
                    openLeadModal({
                      title: `Architecture Review: ${projectTitle}`,
                      source: "Projects Details Modal CTA",
                      defaultNote: `Requesting custom architecture review and proposal based on: ${projectTitle}`,
                    });
                  }}
                  className="w-full sm:w-auto rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all active:scale-95 cursor-pointer text-center"
                >
                  Request Similar Project Architecture
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <DemoFloatWidget />
    </main>
  );
}

