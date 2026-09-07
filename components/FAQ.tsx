"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const FAQS: FAQItem[] = [
  {
    question: "How do custom AI agents integrate with my existing CRM and databases?",
    answer:
      "Our AI agents connect directly via RESTful APIs, Webhooks, n8n, and Make.com pipelines. Whether you use HubSpot, Salesforce, Zoho, Google Sheets, or custom SQL databases, we establish bi-directional sync with zero disruption to your daily operations.",
    category: "Integrations & APIs",
  },
  {
    question: "How fast can TCB build and deploy a custom AI agent for my business?",
    answer:
      "Pre-built agents (such as WhatsApp fee collection or lead qualifiers) can be configured and launched in under 48 hours. Custom RAG vector agents and complex voice caller workflows typically ship in 5 to 10 business days.",
    category: "Deployment & Speed",
  },
  {
    question: "Are my internal documents and company data secure with RAG AI?",
    answer:
      "100% secure. We deploy dedicated vector databases (Pinecone / Qdrant) with enterprise-grade encryption. Your proprietary PDFs, manuals, and customer records are never used to train public LLM models.",
    category: "Data Privacy & Security",
  },
  {
    question: "How do AI Voice Caller agents handle inbound and outbound phone calls?",
    answer:
      "Voice agents utilize low-latency speech-to-text (Deepgram/Twilio), high-speed LLM intent reasoning, and natural voice synthesis (ElevenLabs/Vapi) to converse in under 350ms with seamless live human transfer.",
    category: "Voice Telephony",
  },
  {
    question: "What are the ongoing running costs for hosting and LLM API tokens?",
    answer:
      "We believe in 100% transparency. AWS cloud hosting (~$5-$15/mo) and OpenAI API tokens (~₹200-₹800/mo) are billed directly to your own accounts. Zero agency markup, zero hidden fees.",
    category: "Pricing & Cloud Costs",
  },
  {
    question: "Do I get full source code ownership after project completion?",
    answer:
      "Yes. Every custom agent, n8n workflow JSON, and Docker deployment script is handed over to your GitHub repository and cloud accounts. You own 100% of your code and IP with zero vendor lock-in.",
    category: "Source Code & IP",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden border-t border-slate-200/60 bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d0ddfd] bg-[#eff4ff] px-3.5 py-1 text-xs font-bold text-[#305eff] shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#305eff]" />
            Got Questions? We Have Answers
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            Everything you need to know about custom AI agents, n8n workflow automations, RAG pipelines, and project delivery.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-200 hover:border-brand-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6"
                >
                  <span className="flex items-center gap-3 pr-4 text-base font-semibold text-zinc-900 sm:text-lg">
                    <HelpCircle className="h-5 w-5 shrink-0 text-brand-500" />
                    {faq.question}
                  </span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-transform duration-200 ${isOpen ? "rotate-180 bg-brand-100 text-brand-700" : "text-zinc-500"}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-zinc-100 bg-zinc-50/50 px-5 py-5 sm:px-6 sm:py-6">
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {faq.answer}
                    </p>
                    <div className="mt-4 inline-block rounded-md border border-zinc-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-zinc-500">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900">Have a specific question not answered here?</h4>
              <p className="text-xs text-zinc-500">Our customer support team is available 24/7 on WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919999999999?text=Hi%20TCB%20Store,%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#305eff] hover:bg-[#1f47e0] px-4 py-2.5 text-xs font-bold text-white transition-all shadow-md shadow-[#305eff]/25 active:scale-95"
          >
            Chat with Support
          </a>
        </div>
      </div>
    </section>
  );
}
