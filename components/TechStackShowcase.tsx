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
    gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-600/20",
    borderColor: "group-hover:border-emerald-400",
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
    gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-600/20",
    borderColor: "group-hover:border-emerald-400",
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
    gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-600/20",
    borderColor: "group-hover:border-emerald-400",
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
    gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-600/20",
    borderColor: "group-hover:border-emerald-400",
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
      className="relative overflow-hidden bg-white py-24 text-slate-900 sm:py-32 border-t border-slate-100"
    >
      {/* Background Radial Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#059669_0.6px,transparent_0.6px)] [background-size:32px_32px] opacity-10"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title & Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-xs">
            <Cpu className="h-4 w-4 animate-spin text-emerald-600" style={{ animationDuration: '8s' }} />
            <span>Tech Stack &amp; Automation Engine</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
            Powering Custom AI Agents &amp;{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Enterprise Workflows
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We combine robust programming languages, visual automation platforms, cutting-edge LLMs, and RAG pipelines to build intelligent business systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20 scale-105"
                  : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300 hover:bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredTools.map((tool) => {
            const isSelected = selectedTool.id === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                className={`group relative cursor-pointer flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${
                  isSelected
                    ? "border-emerald-500 shadow-lg shadow-emerald-600/15 ring-2 ring-emerald-500/20"
                    : `border-slate-200/90 hover:border-emerald-300 hover:shadow-md`
                }`}
              >
                <div className="relative z-10">
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-700 shadow-xs group-hover:scale-110 transition-transform">
                      {tool.iconType === "code" && <Code2 className="h-6 w-6 text-emerald-600" />}
                      {tool.iconType === "workflow" && <Workflow className="h-6 w-6 text-emerald-600" />}
                      {tool.iconType === "ai" && <Sparkles className="h-6 w-6 text-emerald-600" />}
                      {tool.iconType === "api" && <Globe className="h-6 w-6 text-emerald-600" />}
                    </div>

                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-extrabold text-emerald-800">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {tool.description}
                  </p>
                </div>

                {/* Features List Pill */}
                <div className="relative z-10 mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-700">
                    <span className="flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-emerald-600" />
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
        <div className="mt-12 rounded-3xl border border-emerald-200 bg-slate-50/80 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-100 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800">
                <Layers className="h-3.5 w-3.5" />
                <span>Selected Architecture Tool</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                {selectedTool.name}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedTool.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Key Technical Highlights:
                </h4>
                {selectedTool.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://techschool.thecodebrains.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
                >
                  <Zap className="h-4 w-4" />
                  <span>Build Custom AI Pipeline</span>
                </a>
                <span className="text-xs font-semibold text-slate-500">
                  ⚡ Fully scalable cloud architecture
                </span>
              </div>
            </div>

            {/* Right Terminal Snippet Column */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#020617] shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{selectedTool.id}-agent-pipeline.ts</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    LIVE SPEC
                  </span>
                </div>

                {/* Terminal Code Block */}
                <div className="p-4 sm:p-5 overflow-x-auto text-xs font-mono text-emerald-300 leading-relaxed bg-[#020617]">
                  <pre>
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
