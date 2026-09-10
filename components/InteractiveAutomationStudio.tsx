"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Zap,
  PhoneCall,
  Workflow,
  Database,
  CheckCircle2,
  Terminal,
  Activity,
  ArrowRight,
  Sparkles,
  Server,
  Layers,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

type Scenario = {
  id: string;
  title: string;
  badge: string;
  triggerName: string;
  triggerType: string;
  steps: {
    name: string;
    tech: string;
    latency: string;
    desc: string;
  }[];
  logs: string[];
  metrics: {
    speed: string;
    accuracy: string;
    monthlySavings: string;
    eventsPerHour: string;
  };
};

const SCENARIOS: Scenario[] = [
  {
    id: "voice",
    title: "Scenario 01: Autonomous Voice Telephony",
    badge: "Sub-350ms Latency",
    triggerName: "Inbound Customer Call (+1 415-890-XXXX)",
    triggerType: "Twilio SIP Trunk",
    steps: [
      { name: "Streaming STT", tech: "Deepgram Nova-2", latency: "74ms", desc: "Real-time acoustic transcribing" },
      { name: "RAG & Guardrails", tech: "Pinecone + LangChain", latency: "38ms", desc: "Private context retrieval" },
      { name: "Intent Reasoning", tech: "Claude 3.5 / GPT-4o", latency: "142ms", desc: "Contextual decision engine" },
      { name: "Voice Synthesis", tech: "ElevenLabs Turbo v2", latency: "62ms", desc: "Ultra-natural speech audio" },
      { name: "CRM Handshake", tech: "HubSpot / Salesforce", latency: "28ms", desc: "Automatic ticket & call log" },
    ],
    logs: [
      "[00:00.074] SIP_STREAM: Inbound audio frame received via Twilio SIP trunk",
      "[00:00.112] STT_NOVA2: Speech transcribed: 'Need to reschedule today's enterprise demo'",
      "[00:00.150] RAG_VAULT: Vector lookup returned matched calendar ID #CAL-8842 (cos=0.984)",
      "[00:00.292] LLM_CORE: Intent parsed -> 'APPOINTMENT_RESCHEDULE', slot found: Thursday 3 PM PST",
      "[00:00.354] TTS_SYNTH: Synthesizing voice response with warm executive tonality",
      "[00:00.382] SYNC_COMPLETE: Google Calendar & HubSpot record #LD-9912 updated automatically",
    ],
    metrics: {
      speed: "316ms",
      accuracy: "99.8%",
      monthlySavings: "$12,400/mo",
      eventsPerHour: "1,200 calls",
    },
  },
  {
    id: "workflow",
    title: "Scenario 02: Multi-ERP & Invoice Reconciliation",
    badge: "Zero-Touch Pipeline",
    triggerName: "Vendor PDF Invoice Attached to Email",
    triggerType: "AWS S3 Event Stream",
    steps: [
      { name: "Document Parsing", tech: "AWS Textract OCR", latency: "110ms", desc: "Extract line items & tax IDs" },
      { name: "Validation Engine", tech: "Custom Python Worker", latency: "24ms", desc: "PO 3-way matching rules" },
      { name: "Discrepancy Audit", tech: "LLM Reasoning Core", latency: "185ms", desc: "Zero-hallucination verification" },
      { name: "Ledger Update", tech: "SAP / NetSuite API", latency: "88ms", desc: "Authorized payment voucher" },
      { name: "Audit Trail", tech: "PostgreSQL Ledger", latency: "14ms", desc: "Cryptographic immutable log" },
    ],
    logs: [
      "[00:00.110] S3_EVENT: Received vendor invoice 'INV-90214.pdf' (1.4MB)",
      "[00:00.134] OCR_WORKER: Extracted 24 line items totaling $48,250.00 USD",
      "[00:00.319] PO_MATCH: Correlated with Purchase Order #PO-7718 with 100% item matching",
      "[00:00.407] SAP_REST: Invoice passed auto-approval matrix (< $50k threshold)",
      "[00:00.421] LEDGER_COMMITTED: NetSuite payment scheduled with zero manual data entry",
    ],
    metrics: {
      speed: "421ms",
      accuracy: "100.0%",
      monthlySavings: "$18,500/mo",
      eventsPerHour: "14,500 docs",
    },
  },
  {
    id: "rag",
    title: "Scenario 03: Private Vector Knowledge Audit",
    badge: "100% Deterministic RAG",
    triggerName: "Executive Query: 'Cross-border IP compliance risks'",
    triggerType: "Slack / Teams / REST API",
    steps: [
      { name: "Semantic Embedding", tech: "Text-Embedding-3-Large", latency: "32ms", desc: "Dense 3072-dim vectors" },
      { name: "Hybrid Search", tech: "Qdrant / Pinecone", latency: "18ms", desc: "BM25 keyword + dense vector" },
      { name: "Reranker Model", tech: "Cohere Rerank v3", latency: "42ms", desc: "Top-5 definitive citations" },
      { name: "Constitutional LLM", tech: "Claude 3.5 Sonnet", latency: "195ms", desc: "Strict citation-grounded output" },
      { name: "Audit Timestamp", tech: "OpenTelemetry Trace", latency: "8ms", desc: "Full provenance record" },
    ],
    logs: [
      "[00:00.032] EMBED_STREAM: Vectorized 48 tokens into 3,072 dimensions",
      "[00:00.050] VECTOR_QUERY: Searched 1.8M enterprise documentation chunks in 18ms",
      "[00:00.092] RERANK: Isolated Master Services Agreement 2024 Section 14.3 (conf=0.991)",
      "[00:00.287] CONSTITUTIONAL_AUDIT: Answer synthesized strictly with page & clause citations",
      "[00:00.295] TRACE_LOGGED: Query response verified zero hallucination risk",
    ],
    metrics: {
      speed: "295ms",
      accuracy: "99.9%",
      monthlySavings: "$9,800/mo",
      eventsPerHour: "25,000 queries",
    },
  },
];

export default function InteractiveAutomationStudio() {
  const { openLeadModal } = useLeadModal();
  const [activeScenarioId, setActiveScenarioId] = useState<string>("voice");
  const [activeStep, setActiveStep] = useState<number>(2);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  // Auto-cycle through the 5 steps continuously for high-energy motion
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(timer);
  }, [activeScenarioId]);

  return (
    <section className="relative overflow-hidden bg-[#071726] text-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-y border-white/10 tech-grid-dark">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-full max-w-5xl bg-[radial-gradient(ellipse_at_center,rgba(0,192,243,0.18),transparent_70%)] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold text-[#38bdf8] uppercase tracking-widest mb-4 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            <span>ENTERPRISE COMMAND CENTER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-display"
          >
            The Autonomous AI Orchestration Matrix
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Witness how our intent-driven multi-agent architecture executes mission-critical business workflows with sub-second latency and zero human error.
          </motion.p>
        </div>

        {/* Interactive Scenario Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {SCENARIOS.map((sc) => {
            const isActive = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => {
                  setActiveScenarioId(sc.id);
                  setActiveStep(0);
                }}
                className={`relative px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? "bg-[#0066cc] text-white shadow-lg shadow-[#0066cc]/40 border border-sky-400/40 scale-102"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                <span>{sc.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
                  }`}
                >
                  {sc.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Visual Pipeline Node Graph */}
        <div className="rounded-3xl border border-white/15 bg-[#0a1e32]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                TRIGGER: <strong className="text-white">{scenario.triggerName}</strong>
              </span>
              <span className="rounded bg-sky-500/20 text-[#38bdf8] px-2 py-0.5 text-[10px] font-mono">
                {scenario.triggerType}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span>● PROTOCOL: TLS 1.3</span>
              <span>● ENCRYPTION: AES-256</span>
              <span className="text-emerald-400 font-bold">● HEALTH: 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Connected 5-Node Interactive Pathway */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {scenario.steps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <div key={idx} className="relative flex flex-col items-center">
                  {/* Node Card */}
                  <div
                    onClick={() => setActiveStep(idx)}
                    className={`w-full rounded-2xl p-4 sm:p-5 transition-all cursor-pointer border text-left flex flex-col justify-between min-h-[145px] relative ${
                      isCurrent
                        ? "bg-[#0066cc]/30 border-[#00c0f3] shadow-lg shadow-[#00c0f3]/25 scale-103"
                        : isPassed
                        ? "bg-white/5 border-emerald-500/40 text-slate-300"
                        : "bg-white/[0.02] border-white/10 text-slate-400 opacity-60"
                    }`}
                  >
                    {isCurrent && (
                      <span className="absolute -top-2.5 right-3 bg-[#00c0f3] text-slate-950 font-black text-[9px] uppercase px-2 py-0.5 rounded-full shadow-xs">
                        Active Node
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-slate-400">
                          NODE 0{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-[#38bdf8] font-bold">
                          {step.latency}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {step.name}
                      </h4>
                      <div className="mt-1 text-[11px] font-semibold text-[#38bdf8]">
                        {step.tech}
                      </div>
                    </div>

                    <p className="mt-3 text-[10px] text-slate-300 leading-tight">
                      {step.desc}
                    </p>
                  </div>

                  {/* Horizontal Connecting Arrow / Laser Indicator for Desktop */}
                  {idx < 4 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-sky-400 pointer-events-none">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Execution Telemetry: Real-time Terminal Log & Performance Gauges */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 border-t border-white/10">
            {/* Live Terminal Log (Left Col) */}
            <div className="lg:col-span-8 rounded-2xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-slate-300 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-[#38bdf8]" />
                  <span>LIVE EXECUTION STREAM (JSON-RPC)</span>
                </div>
                <span className="text-emerald-400 font-bold">STREAM ACTIVE</span>
              </div>

              <div className="space-y-2 overflow-x-auto text-[11px] leading-relaxed">
                {scenario.logs.map((log, lIdx) => (
                  <div
                    key={lIdx}
                    className={`transition-colors ${
                      lIdx === activeStep ? "text-[#38bdf8] font-bold bg-white/5 px-2 py-0.5 rounded" : "text-slate-400"
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Gauges (Right Col) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <div className="grid grid-cols-2 gap-3 h-full">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400">End-to-End Speed</span>
                  <div className="text-2xl font-black text-white font-mono">{scenario.metrics.speed}</div>
                  <span className="text-[9px] text-emerald-400">⚡ 94% faster than human</span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Intent Precision</span>
                  <div className="text-2xl font-black text-[#38bdf8] font-mono">{scenario.metrics.accuracy}</div>
                  <span className="text-[9px] text-slate-400">Zero-hallucination</span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Client Cost Saved</span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">{scenario.metrics.monthlySavings}</div>
                  <span className="text-[9px] text-slate-400">Direct labor offset</span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Throughput Scale</span>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono">{scenario.metrics.eventsPerHour}</div>
                  <span className="text-[9px] text-sky-300">Auto-scaling VPS</span>
                </div>
              </div>

              {/* Consultation Trigger Button */}
              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    title: `Deploy: ${scenario.title}`,
                    source: `Interactive Studio - ${scenario.title}`,
                    defaultNote: `Interested in deploying this architecture pipeline for my business.`,
                  })
                }
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] py-3 text-xs font-bold text-white shadow-lg shadow-[#0066cc]/30 transition-all cursor-pointer"
              >
                <span>Deploy This Architecture on Your Cloud</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
