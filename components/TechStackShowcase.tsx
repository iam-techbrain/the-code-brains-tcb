"use client";

import { useState } from "react";
import {
  Code2,
  Cpu,
  Workflow,
  Sparkles,
  Zap,
  Globe,
  Database,
  Terminal,
  Server,
  ArrowRight,
  CheckCircle2,
  Layers,
  Bot,
  Box,
} from "lucide-react";

type ToolItem = {
  id: string;
  name: string;
  category: "Programming" | "Automation" | "AI & RAG" | "Backend & APIs";
  description: string;
  iconType: string;
  features: string[];
  gradient: string;
  borderColor: string;
  shadowGlow: string;
  badge: string;
  codeSnippet?: string;
};

const TECH_TOOLS: ToolItem[] = [
  {
    id: "python-ts",
    name: "Python & JavaScript / TypeScript",
    category: "Programming",
    description:
      "Core foundation languages for building asynchronous AI agent runtimes, custom data parsers, high-concurrency web scrapers, and type-safe frontends.",
    iconType: "code",
    features: [
      "Asynchronous AsyncIO & Node.js execution engines",
      "Type-safe TypeScript schemas with Zod validation",
      "Python PyTorch, LangChain & LlamaIndex integrations",
      "Ultra-fast API execution with FastAPI & Next.js",
    ],
    gradient: "from-brand-400/20 via-brand-500/20 to-brand-700/20",
    borderColor: "group-hover:border-brand-400",
    shadowGlow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
    badge: "Core Engine",
    codeSnippet: `// Custom Async AI Tool Execution Engine
import { OpenAI } from "openai";
import { z } from "zod";

export async function executeAgentTask(prompt: string) {
  const agent = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await agent.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "system", content: "You are an autonomous workflow agent." }, { role: "user", content: prompt }]
  });
  return response.choices[0].message.content;
}`,
  },
  {
    id: "n8n-make",
    name: "n8n & Make.com Workflow Automation",
    category: "Automation",
    description:
      "Self-hosted & cloud workflow orchestrators that interconnect hundreds of business tools, CRM systems, webhooks, and AI models into zero-latency pipelines.",
    iconType: "workflow",
    features: [
      "Visual low-code workflow pipeline builder",
      "Self-hosted n8n instance with 100% data privacy",
      "Make.com complex branching & router logic",
      "Automatic error catching & webhook retries",
    ],
    gradient: "from-brand-400/20 via-brand-500/20 to-brand-700/20",
    borderColor: "group-hover:border-brand-400",
    shadowGlow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
    badge: "Visual Automation",
    codeSnippet: `// n8n Workflow Webhook Receiver Node
{
  "nodes": [
    { "name": "Webhook Trigger", "type": "n8n-nodes-base.webhook", "position": [100, 300] },
    { "name": "AI Agent Routing", "type": "n8n-nodes-base.openAi", "position": [350, 300] },
    { "name": "WhatsApp Alert", "type": "n8n-nodes-base.httpRequest", "position": [600, 300] }
  ]
}`,
  },
  {
    id: "openai-rag",
    name: "OpenAI / LLMs & RAG Pipelines",
    category: "AI & RAG",
    description:
      "Cutting-edge Large Language Models (GPT-4o, Claude 3.5, Gemini 1.5) connected with Pinecone & Qdrant vector databases for instant knowledge retrieval.",
    iconType: "ai",
    features: [
      "Retrieval-Augmented Generation (RAG) over company PDFs",
      "Custom Fine-tuned LLM agents & System Prompts",
      "High-speed semantic vector embeddings (OpenAI text-embedding-3)",
      "Context-aware memory with hybrid vector search",
    ],
    gradient: "from-brand-400/20 via-brand-500/20 to-brand-700/20",
    borderColor: "group-hover:border-brand-400",
    shadowGlow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
    badge: "GenAI & Knowledge",
    codeSnippet: `// Vector Search & RAG Context Retrieval
import { VectorStore } from "@/lib/vector";

export async function queryRAGPipeline(userQuery: string) {
  const embedding = await generateEmbeddings(userQuery);
  const contextDocs = await VectorStore.similaritySearch(embedding, { topK: 5 });
  const answer = await synthesizeAnswer(userQuery, contextDocs);
  return { answer, sources: contextDocs.map(d => d.metadata.source) };
}`,
  },
  {
    id: "apis-webhooks-node",
    name: "APIs, Webhooks & Node.js Architecture",
    category: "Backend & APIs",
    description:
      "Enterprise RESTful & GraphQL APIs, real-time WebSockets, automated webhook listeners, and event-driven Node.js microservices.",
    iconType: "api",
    features: [
      "Real-time bi-directional WebSockets for live status updates",
      "Secure OAuth2 & JWT HMAC signature authentication",
      "Event-driven queue processing with Redis & BullMQ",
      "High throughput Node.js microservice architecture",
    ],
    gradient: "from-brand-400/20 via-brand-500/20 to-brand-700/20",
    borderColor: "group-hover:border-brand-400",
    shadowGlow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
    badge: "Integration Layer",
    codeSnippet: `// Secure Webhook Listener & Event Producer
import express from 'express';
import { verifyHmacSignature } from './auth';

const app = express();
app.post('/api/v1/webhooks/incoming', verifyHmacSignature, async (req, res) => {
  const event = req.body;
  await eventQueue.add('process-automation', event);
  return res.status(200).json({ received: true });
});`,
  },
];

export default function TechStackShowcase() {
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TECH_TOOLS[2]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI & RAG", "Automation", "Programming", "Backend & APIs"];

  const filteredTools =
    activeCategory === "All"
      ? TECH_TOOLS
      : TECH_TOOLS.filter((t) => t.category === activeCategory);

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-white py-14 sm:py-24 text-slate-900 border-t border-slate-100 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Radial Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#00A4E4_0.6px,transparent_0.6px)] [background-size:32px_32px] opacity-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-800 shadow-xs mb-4">
            <Cpu className="h-4 w-4 text-brand-500" />
            <span>AI Tech Stack &amp; Developer Tools</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Powering Custom AI Agents &amp;{" "}
            <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-800 bg-clip-text text-transparent">
              Enterprise Workflows
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            We combine robust programming languages, visual automation platforms, cutting-edge LLMs, and RAG pipelines to build intelligent business systems.
          </p>
        </div>

        {/* Category Filters - Horizontal Swipeable on Mobile */}
        <div className="mt-8 sm:mt-10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 px-1 sm:justify-center sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 sm:px-5 text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/20 scale-105"
                  : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-300 hover:bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTools.map((tool) => {
            const isSelected = selectedTool.id === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                className={`group relative cursor-pointer flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${
                  isSelected
                    ? "border-brand-500 shadow-lg shadow-brand-500/15 ring-2 ring-brand-500/20"
                    : `border-slate-200/90 hover:border-brand-300 hover:shadow-md`
                }`}
              >
                <div className="relative z-10">
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-700 shadow-xs group-hover:scale-110 transition-transform">
                      {tool.iconType === "code" && <Code2 className="h-6 w-6 text-brand-500" />}
                      {tool.iconType === "workflow" && <Workflow className="h-6 w-6 text-brand-500" />}
                      {tool.iconType === "ai" && <Sparkles className="h-6 w-6 text-brand-500" />}
                      {tool.iconType === "api" && <Globe className="h-6 w-6 text-brand-500" />}
                    </div>

                    <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[10px] font-extrabold text-brand-800">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {tool.description}
                  </p>
                </div>

                {/* Features List Pill */}
                <div className="relative z-10 mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-brand-700">
                    <span className="flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-brand-500" />
                      {tool.features.length} Enterprise Capabilities
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tool Interactive Deep Dive & Code Terminal */}
        <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl border border-brand-200 bg-[#f4f7ff] p-4 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-lg bg-white border border-[#d0ddfd] px-3 py-1 text-xs font-bold text-[#305eff]">
                <Layers className="h-3.5 w-3.5 text-[#305eff]" />
                <span>Selected Architecture Tool</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                {selectedTool.name}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedTool.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#305eff]">
                  Key Technical Highlights:
                </h4>
                {selectedTool.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#305eff] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://techschool.thecodebrains.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#305eff] hover:bg-[#1f47e0] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#305eff]/25 transition-all hover:scale-105"
                >
                  <Zap className="h-4 w-4" />
                  <span>Build Custom AI Pipeline</span>
                </a>
                <span className="text-xs font-semibold text-slate-500">
                  ⚡ Fully scalable cloud architecture
                </span>
              </div>
            </div>

            {/* Right Terminal Snippet Column - Emulating Razorpay Developer Code Editor */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#061229] shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#030a19] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-[#305eff]" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <Terminal className="h-3.5 w-3.5 text-[#618dff]" />
                    <span>{selectedTool.id}-agent-pipeline.ts</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#618dff] bg-[#305eff]/20 px-2 py-0.5 rounded border border-[#305eff]/40">
                    LIVE SPEC
                  </span>
                </div>

                {/* Terminal Code Block */}
                <div className="p-4 sm:p-5 max-w-full overflow-x-auto text-xs font-mono text-[#96b4ff] leading-relaxed bg-[#061229]">
                  <pre className="max-w-full overflow-x-auto whitespace-pre font-mono text-[11px] sm:text-xs text-blue-200">
                    <code>{selectedTool.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
