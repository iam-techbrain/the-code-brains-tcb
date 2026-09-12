"use client";

import { motion } from "motion/react";
import { MessageSquare, PhoneCall, Bot, FileSpreadsheet, Share2, Workflow, CheckCircle2, Zap, Cpu, Sparkles, Layers } from "lucide-react";

export default function ProvenAtScaleBanner() {
  const highLevelPillars = [
    {
      title: "AI & Workflow Automation Fusion",
      category: "Core Architecture",
      badge: "AI + Zapier & Make",
      description:
        "We fuse cognitive AI models directly into multi-app automation pipelines. By combining advanced LLM reasoning with Zapier, Make (Integromat), and n8n, entire business processes run with zero human friction.",
      icon: Layers,
      highlight: "Unified Intelligence",
    },
    {
      title: "Autonomous Voice Calling & Telephony Bots",
      category: "Voice Telephony",
      badge: "Sub-350ms Latency",
      description:
        "Real-time conversational voice agents on live telephone lines. Engineered to answer inbound calls, triage customer inquiries, qualify leads, and book calendar appointments with human-grade natural fluency.",
      icon: PhoneCall,
      highlight: "24/7 Live Reception",
    },
    {
      title: "Custom Autonomous AI Agents",
      category: "Autonomous Intelligence",
      badge: "Custom Engineering",
      description:
        "Purpose-built AI agents tailored to solve unique multi-step operational challenges. Equipped with deterministic guardrails for in-depth research, web scraping, document analysis, and autonomous lead routing.",
      icon: Bot,
      highlight: "Deterministic Execution",
    },
    {
      title: "Complex Problem Solving via Zapier & Make",
      category: "Advanced Integration",
      badge: "Deep Integration",
      description:
        "Specialized in untangling difficult multi-system bottlenecks where off-the-shelf tools fail. We engineer resilient multi-branch logic, custom webhooks, payload formatters, and automatic error-healing workflows.",
      icon: Workflow,
      highlight: "Multi-App Mastery",
    },
    {
      title: "Platform & Google Sheets Sales Intelligence",
      category: "Data & Alert Systems",
      badge: "Real-Time Telemetry",
      description:
        "Connecting custom platforms, billing tools, and databases to Google Sheets with live sales analysis, executive performance tracking, and instant automated alerts across WhatsApp and Slack.",
      icon: FileSpreadsheet,
      highlight: "Live Sales Sync",
    },
    {
      title: "Enterprise WhatsApp & Omnichannel Ops",
      category: "Messaging & Campaigns",
      badge: "Omnichannel Command",
      description:
        "Automated WhatsApp Business API workflows delivering instant customer qualification, order updates, and CRM sync, coupled with centralized hubs to orchestrate social campaigns and ads across channels.",
      icon: MessageSquare,
      highlight: "Instant Engagement",
    },
  ];

  const executiveStats = [
    { value: "40+", label: "Production Deployments Delivered", hint: "Battle-tested systems" },
    { value: "AI + Automation", label: "Unified System Architecture", hint: "Zapier, Make, n8n & LLMs" },
    { value: "24/7", label: "Autonomous Pipeline Execution", hint: "Zero manual intervention" },
    { value: "100%", label: "Direct Source Code & API Ownership", hint: "Your cloud, zero markups" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-slate-900 border-y border-slate-200/80">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[450px] w-full max-w-5xl bg-[radial-gradient(ellipse_at_center,rgba(48,94,255,0.06),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl text-center">
        {/* Eyebrow & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#305eff] mb-3">
            <Zap className="h-3.5 w-3.5 text-[#305eff]" />
            <span>ENTERPRISE AI &amp; WORKFLOW ORCHESTRATION</span>
          </div>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl mx-auto font-display">
            Fusing Custom AI Agents with Intelligent Workflow Automation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We solve complex operational problems by fusing custom autonomous AI agents, voice telephony bots, and enterprise messaging with advanced Zapier &amp; Make multi-app workflows.
          </p>
        </motion.div>

        {/* High-Level Executive Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 mb-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-6 text-left shadow-2xs"
        >
          {executiveStats.map((st, sIdx) => (
            <div key={sIdx} className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#305eff] font-display tracking-tight">
                {st.value}
              </div>
              <div className="text-xs sm:text-[13px] font-bold text-slate-900 mt-1 leading-snug">
                {st.label}
              </div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">
                {st.hint}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 6 High-Level Engineering Capability Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highLevelPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                className="relative flex flex-col items-start justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 text-left shadow-xs hover:border-[#305eff]/40 hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-full flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#305eff] border border-blue-100 group-hover:bg-[#305eff] group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold text-[#305eff]">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#305eff] font-bold mb-1">
                    {pillar.category}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#305eff] transition-colors mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] font-medium text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 w-full flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    <span>{pillar.highlight}</span>
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">Enterprise Grade</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Pill */}
        <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-2.5 text-xs text-slate-600">
          <span className="font-bold text-slate-900">Enterprise AI &amp; Automation Architecture</span>
          <span className="text-slate-400">•</span>
          <span>Zapier, Make (Integromat) &amp; n8n Experts</span>
          <span className="text-slate-400">•</span>
          <span className="text-[#305eff] font-semibold">100% Direct Code &amp; Cloud Ownership</span>
        </div>
      </div>
    </section>
  );
}
