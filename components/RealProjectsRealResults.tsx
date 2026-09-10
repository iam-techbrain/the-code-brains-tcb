"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  Layers,
  PhoneCall,
  FileSpreadsheet,
  Share2,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  Bot,
  Database,
  Terminal,
} from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

type FilterTab = "all" | "sales" | "documents" | "voice" | "rag" | "swarms";

interface ProjectCardData {
  id: string;
  category: FilterTab;
  categoryLabel: string;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  diagramType: "pipeline" | "hub" | "radar" | "cluster" | "chart" | "triad";
  metrics: { label: string; value: string; hint: string }[];
  techStack: string[];
  clientQuote: string;
}

const PROJECTS_DATA: ProjectCardData[] = [
  {
    id: "p1",
    category: "sales",
    categoryLabel: "Sales & Prospecting",
    industry: "B2B SaaS & Tech",
    title: "Autonomous B2B Lead Prospecting & Multi-Channel Outreach Agent",
    problem:
      "Sales development reps were spending 25+ hours weekly manually scraping LinkedIn, drafting cold emails, and logging CRM touchpoints with dismal 1.2% reply rates.",
    solution:
      "Built a self-driving SDR agent that scrapes verified leads via Apollo/LinkedIn, conducts deep account research with Claude 3.5, and sends hyper-personalized sequences that book calls directly into calendar.",
    diagramType: "pipeline",
    metrics: [
      { value: "4.8×", label: "Meeting Rate", hint: "vs manual SDRs" },
      { value: "14,200+", label: "Leads Qualified", hint: "Monthly autopilot" },
      { value: "85%", label: "Time Saved", hint: "Zero manual prospecting" },
    ],
    techStack: ["Python", "LangChain", "Apollo API", "HubSpot CRM", "FastAPI"],
    clientQuote: "Our calendar is booked 3 weeks out without our founders writing a single cold email.",
  },
  {
    id: "p2",
    category: "documents",
    categoryLabel: "Document Automation",
    industry: "Global Logistics & Freight",
    title: "Intelligent Multi-Format Invoice & Bill-of-Lading Extraction Engine",
    problem:
      "Ops team of 12 people was manually reviewing 10,000+ unstructured PDFs, invoices, and customs receipts monthly, causing 48-hour delays and frequent billing discrepancies.",
    solution:
      "Engineered an automated OCR pipeline utilizing AWS Textract and fine-tuned extraction models. It parses line items, cross-checks PO numbers against ERP, and syncs directly into QuickBooks with 0 human touch.",
    diagramType: "hub",
    metrics: [
      { value: "99.8%", label: "Data Accuracy", hint: "Zero manual entry" },
      { value: "3.4s", label: "Extraction Speed", hint: "Per multi-page PDF" },
      { value: "$74K/yr", label: "Labor Saved", hint: "Eliminated back-office backlog" },
    ],
    techStack: ["AWS Textract", "Python", "n8n", "PostgreSQL", "QuickBooks"],
    clientQuote: "Invoices that took 2 days now reconcile in under 4 seconds with 100% accounting audit compliance.",
  },
  {
    id: "p3",
    category: "voice",
    categoryLabel: "Voice AI Telephony",
    industry: "Multi-Location Healthcare",
    title: "Real-Time Sub-300ms Conversational Voice Triage & Booking Agent",
    problem:
      "Clinics were dropping over 38% of inbound phone calls during peak hours, creating patient frustration and losing tens of thousands in lost consultation bookings.",
    solution:
      "Deployed low-latency bidirectional voice telephony bots via Twilio SIP, Deepgram Nova-2 streaming STT, and ElevenLabs neural voices that answer instantly, triage symptoms, and schedule appointments on live phone lines.",
    diagramType: "radar",
    metrics: [
      { value: "280ms", label: "Voice Latency", hint: "Human-grade conversation" },
      { value: "94.2%", label: "Resolution Rate", hint: "Zero dropped calls" },
      { value: "24/7/365", label: "Instant Answer", hint: "Handles 100 concurrent calls" },
    ],
    techStack: ["Twilio SIP", "Deepgram Nova-2", "ElevenLabs", "FastAPI", "Redis"],
    clientQuote: "Patients cannot tell they are speaking to an AI agent. Our appointment no-show rate dropped by 28%.",
  },
  {
    id: "p4",
    category: "rag",
    categoryLabel: "RAG Knowledge Vault",
    industry: "FinTech & Wealth Management",
    title: "Zero-Hallucination 24/7 Enterprise Knowledge & Support Assistant",
    problem:
      "Tier-1 support staff were overwhelmed by 1,400+ daily regulatory, tax, and portfolio queries, leading to 6-hour average ticket resolution times and compliance risks.",
    solution:
      "Architected a secure private RAG knowledge vault connecting 5,000+ policy docs, compliance circulars, and FAQs into a Qdrant vector database with strict anti-hallucination verification guardrails.",
    diagramType: "cluster",
    metrics: [
      { value: "78%", label: "Ticket Deflection", hint: "Resolved autonomously" },
      { value: "0.00%", label: "Hallucination", hint: "Rigorous citation guardrails" },
      { value: "< 1.2s", label: "Response Time", hint: "Instant verified answers" },
    ],
    techStack: ["Qdrant", "LlamaIndex", "GPT-4o", "Docker", "Next.js"],
    clientQuote: "Gives accurate, cited answers with zero guesswork. We cut support ticket turnaround from 6 hours to 8 seconds.",
  },
  {
    id: "p5",
    category: "all",
    categoryLabel: "Content Engine",
    industry: "B2B Media & Education",
    title: "High-Volume Content Repurposing & Multi-Channel Syndication Pipeline",
    problem:
      "Content creators spent 40+ hours per episode editing shorts, writing SEO articles, drafting newsletters, and creating carousels across 6 social media channels.",
    solution:
      "Constructed an automated processing engine that ingests 1 raw video file, transcribes with Whisper, isolates viral clips via hook detection, generates 20+ derivative assets, and queues them in Make.com.",
    diagramType: "chart",
    metrics: [
      { value: "10×", label: "Asset Multiplier", hint: "1 Video → 28 Assets" },
      { value: "15 mins", label: "Turnaround", hint: "vs 4 days manual editing" },
      { value: "+340%", label: "Reach Growth", hint: "Consistent daily posting" },
    ],
    techStack: ["Whisper AI", "FFmpeg", "Claude 3.5", "Make.com", "Python"],
    clientQuote: "We publish 30 high-impact assets every week from just one podcast recording. Our audience tripled in 90 days.",
  },
  {
    id: "p6",
    category: "swarms",
    categoryLabel: "Multi-Agent Swarm",
    industry: "E-Commerce & Supply Chain",
    title: "Distributed Multi-Agent Swarm for Automated ERP & Inventory Ops",
    problem:
      "Cross-border inventory adjustments, supplier re-orders, and price parity checks were stuck in disjointed spreadsheets, causing frequent stockouts and lost margins.",
    solution:
      "Engineered an autonomous multi-agent hierarchy (Supervisor Agent + Inventory Agent + Pricing Agent + Dispatch Agent) coordinating asynchronous tasks and syncing with ERP with complete failover redundancy.",
    diagramType: "triad",
    metrics: [
      { value: "6,800+", label: "Ops Executed/Day", hint: "Fully autonomous" },
      { value: "100%", label: "Private VPC", hint: "Zero 3rd-party data retention" },
      { value: "99.98%", label: "Pipeline Uptime", hint: "Self-healing error retry" },
    ],
    techStack: ["LangGraph", "Python", "Kubernetes", "AWS VPC", "PostgreSQL"],
    clientQuote: "Our inventory reconciles itself across 4 international warehouses without human dispatchers.",
  },
];

// High-tech diagram schematics matching the dark blueprint cards in user reference
function DiagramSchematic({ type }: { type: ProjectCardData["diagramType"] }) {
  if (type === "pipeline") {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#070d1e] p-3.5 border border-cyan-500/20 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] text-cyan-400/90 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            PIPELINE_EXEC: ACTIVE
          </span>
          <span className="text-slate-400">FPS: 60 &bull; SYNC: 100%</span>
        </div>

        {/* Node Flow Diagram */}
        <div className="relative flex items-center justify-between gap-2 my-auto px-1">
          {/* Node 1: Ingest */}
          <div className="flex flex-col items-center gap-1.5 z-10">
            <div className="h-10 w-10 rounded-lg bg-blue-950/90 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Database className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono text-slate-300">Scrape Leads</span>
          </div>

          <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-500/50 to-indigo-500/50 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
          </div>

          {/* Node 2: Claude Intent */}
          <div className="flex flex-col items-center gap-1.5 z-10">
            <div className="h-11 w-11 rounded-lg bg-indigo-950/90 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shadow-[0_0_18px_rgba(99,102,241,0.3)]">
              <Cpu className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono text-indigo-300 font-semibold">Intent AI</span>
          </div>

          <div className="h-[2px] flex-1 bg-gradient-to-r from-indigo-500/50 to-emerald-500/50 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8] animate-pulse" />
          </div>

          {/* Node 3: Dispatch & CRM */}
          <div className="flex flex-col items-center gap-1.5 z-10">
            <div className="h-10 w-10 rounded-lg bg-emerald-950/90 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono text-emerald-400">Booked CRM</span>
          </div>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
          <span>BATCH: 2,500 PROSPECTS</span>
          <span className="text-emerald-400 font-semibold">REPLY VELOCITY: +380%</span>
        </div>
      </div>
    );
  }

  if (type === "hub") {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#070d1e] p-3.5 border border-indigo-500/20 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] text-indigo-400 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            OCR_ORCHESTRATOR
          </span>
          <span className="text-slate-400">PARITY: 100%</span>
        </div>

        {/* Central Hub with Orbiting Satellites */}
        <div className="relative flex items-center justify-center my-auto">
          {/* Concentric Pulse Rings */}
          <div className="absolute h-28 w-28 rounded-full border border-indigo-500/20 animate-pulse" />
          <div className="absolute h-20 w-20 rounded-full border border-cyan-500/30" />

          {/* Satellite Left: PDF Ingest */}
          <div className="absolute left-6 flex items-center gap-1 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[9px] font-mono text-cyan-300">
            <FileSpreadsheet className="h-3 w-3" />
            <span>PDF/Scan</span>
          </div>

          {/* Center Brain */}
          <div className="relative z-10 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-600 to-indigo-600 p-0.5 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            <div className="h-full w-full rounded-full bg-[#070d1e] flex items-center justify-center text-cyan-300">
              <Cpu className="h-6 w-6" />
            </div>
          </div>

          {/* Satellite Right: ERP Sync */}
          <div className="absolute right-6 flex items-center gap-1 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[9px] font-mono text-emerald-300">
            <CheckCircle2 className="h-3 w-3" />
            <span>ERP / Ledger</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
          <span>PARSER: TEXTRACT OCR</span>
          <span className="text-cyan-400">LATENCY: 3.4s / 18 PAGES</span>
        </div>
      </div>
    );
  }

  if (type === "radar") {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#070d1e] p-3.5 border border-emerald-500/20 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] text-emerald-400 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            VOICE_TELEPHONY_STREAM
          </span>
          <span className="text-slate-400">280ms ROUND-TRIP</span>
        </div>

        {/* Audio Wave / Radar Visualizer */}
        <div className="relative flex items-center justify-center my-auto gap-1">
          {[35, 60, 25, 85, 45, 95, 70, 40, 80, 100, 65, 45, 90, 30, 75, 50].map(
            (height, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${height}%`, `${Math.max(15, (height * 1.3) % 100)}%`, `${height}%`] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                className="w-1.5 rounded-full bg-gradient-to-t from-emerald-600 via-cyan-400 to-sky-300"
                style={{ height: `${height}%`, minHeight: "8px" }}
              />
            )
          )}
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
          <span>CODEC: OPUS 24KHZ</span>
          <span className="text-emerald-400">HUMAN TRANSFER: ZERO DELAY</span>
        </div>
      </div>
    );
  }

  if (type === "cluster") {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#070d1e] p-3.5 border border-purple-500/20 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] text-purple-400 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-ping" />
            QDRANT_VECTOR_CLUSTER
          </span>
          <span className="text-slate-400">DIM: 1536 &bull; CITATIONS: 100%</span>
        </div>

        {/* Neural Vector Cluster Nodes */}
        <div className="relative flex items-center justify-around my-auto px-4">
          <div className="h-9 w-9 rounded-full bg-purple-950 border border-purple-400/40 flex items-center justify-center text-purple-300 text-[10px] font-mono">
            V1
          </div>
          <div className="h-12 w-12 rounded-full bg-indigo-950 border border-cyan-400/50 flex items-center justify-center text-cyan-300 text-xs font-mono shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <Bot className="h-6 w-6" />
          </div>
          <div className="h-9 w-9 rounded-full bg-purple-950 border border-purple-400/40 flex items-center justify-center text-purple-300 text-[10px] font-mono">
            V2
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
          <span>GUARDRAIL: STRICT CITATION</span>
          <span className="text-purple-400">HALLUCINATIONS: 0.00%</span>
        </div>
      </div>
    );
  }

  if (type === "chart") {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#070d1e] p-3.5 border border-amber-500/20 flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] text-amber-400 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            DISTRIBUTION_VELOCITY
          </span>
          <span className="text-slate-400">1 → 28 ASSETS</span>
        </div>

        {/* Bar Chart Representation */}
        <div className="flex items-end justify-between gap-3 h-20 px-3 my-auto">
          {[20, 38, 55, 72, 88, 100].map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="w-full rounded-t bg-gradient-to-t from-amber-600 via-orange-500 to-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
              />
              <span className="text-[9px] font-mono text-slate-400">W{i + 1}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
          <span>ENGINE: WHISPER + MAKE</span>
          <span className="text-amber-400">+340% REACH GROWTH</span>
        </div>
      </div>
    );
  }

  // Triad: Multi-Agent Swarm
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#070d1e] p-3.5 border border-sky-500/20 flex flex-col justify-between">
      <div className="flex items-center justify-between text-[11px] text-sky-400 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
          MULTI_AGENT_SWARM
        </span>
        <span className="text-slate-400">LANGGRAPH RUNTIME</span>
      </div>

      {/* Triad Cluster Flow */}
      <div className="relative flex flex-col items-center justify-center my-auto">
        <div className="h-8 px-3 rounded-full bg-sky-950 border border-sky-400/50 flex items-center justify-center text-[10px] font-mono text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
          Supervisor Agent
        </div>
        <div className="flex items-center gap-12 mt-3">
          <div className="h-7 px-2.5 rounded-md bg-slate-900 border border-slate-700 flex items-center text-[9px] font-mono text-cyan-400">
            Inventory
          </div>
          <div className="h-7 px-2.5 rounded-md bg-slate-900 border border-slate-700 flex items-center text-[9px] font-mono text-indigo-400">
            Billing
          </div>
          <div className="h-7 px-2.5 rounded-md bg-slate-900 border border-slate-700 flex items-center text-[9px] font-mono text-emerald-400">
            Dispatch
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
        <span>INFRA: AWS VPC + K8S</span>
        <span className="text-sky-400">99.98% OPS UPTIME</span>
      </div>
    </div>
  );
}

export default function RealProjectsRealResults() {
  const { openLeadModal } = useLeadModal();
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const filterTabs: { id: FilterTab; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "sales", label: "Sales & Prospecting" },
    { id: "documents", label: "Document Automation" },
    { id: "voice", label: "Voice AI Telephony" },
    { id: "rag", label: "RAG Knowledge" },
    { id: "swarms", label: "Agent Swarms" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section
      id="real-projects"
      className="relative overflow-hidden bg-[#030712] py-20 sm:py-28 text-slate-100 border-t border-slate-800"
    >
      {/* High-Tech Background Glowing Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[850px] rounded-full bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subheading Matching the Uploaded Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>PROVEN ENTERPRISE DELIVERABLES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-display text-white"
          >
            Real Projects,{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Real Results
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            Inspect the live system blueprints, high-concurrency benchmarks, and business outcomes engineered across our custom production client deployments.
          </motion.p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                      : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Real Projects Production Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/90 bg-[#090f22]/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]"
              >
                {/* Subtle Card Ambient Glow on Hover */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Top Metadata Strip */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300">
                      <Zap className="h-3 w-3 text-cyan-400" />
                      {project.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Industry: <span className="text-slate-200 font-semibold">{project.industry}</span>
                    </span>
                  </div>

                  {/* Architecture Schematic Blueprint Canvas */}
                  <div className="mb-6">
                    <DiagramSchematic type={project.diagramType} />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug font-display">
                    {project.title}
                  </h3>

                  {/* Challenge & Solution Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    {project.solution}
                  </p>

                  {/* Verified Client Testimonial Callout */}
                  <div className="mt-4 rounded-xl bg-slate-900/70 border border-slate-800/80 p-3 text-xs italic text-slate-300/80 flex items-start gap-2.5">
                    <span className="text-cyan-400 text-base font-serif leading-none">&ldquo;</span>
                    <p className="leading-snug">{project.clientQuote}&rdquo;</p>
                  </div>
                </div>

                {/* Bottom Impact Telemetry Metrics Strip */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-lg bg-slate-900/60 p-2 border border-slate-800/60"
                      >
                        <div className="text-lg sm:text-xl font-extrabold font-mono text-cyan-400 tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-[11px] font-bold text-white mt-0.5">
                          {metric.label}
                        </div>
                        <div className="text-[9px] text-slate-400 truncate mt-0.5">
                          {metric.hint}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills & Deploy CTA Action */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] font-mono text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        openLeadModal({
                          title: `Deploy Architecture: ${project.title}`,
                          source: `Real Projects Card (${project.categoryLabel})`,
                          defaultNote: `Requesting a system architecture blueprint and quote similar to ${project.title} (${project.industry}).`,
                        })
                      }
                      className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                    >
                      <span>Deploy Similar</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner with Direct Code Handover Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/95 via-[#07112c]/95 to-slate-900/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shrink-0">
              <Terminal className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Have a Complex or Proprietary Business Workflow?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                We engineer bespoke autonomous workflows for your legacy databases, internal APIs, and specific compliance mandates. 100% private cloud deployment with full Git repository handover.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              openLeadModal({
                title: "Custom AI Architecture & Feasibility Audit",
                source: "Real Projects Bottom Banner",
                defaultNote: "I want an architectural feasibility assessment for our proprietary internal workflow.",
              })
            }
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Request Architecture Audit</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
