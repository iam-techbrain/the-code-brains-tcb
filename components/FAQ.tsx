"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowRight, Sparkles } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const FAQS: FAQItem[] = [
  {
    question: "How does TCB's AI Orchestration integrate with our legacy enterprise systems?",
    answer:
      "Our AI orchestration engine connects directly to your existing tech stack via secure enterprise RESTful APIs, bidirectional webhooks, event-driven message brokers (Kafka/RabbitMQ), and n8n pipelines. Whether you rely on Salesforce, SAP, Oracle, custom SQL data warehouses, or bespoke proprietary tools, we integrate with zero downtime and strict adherence to your network boundary policies.",
    category: "Architecture & Integration",
  },
  {
    question: "How fast can an enterprise-grade AI agent or workflow be built and deployed?",
    answer:
      "Standard operational workflows (such as multi-channel lead qualification or automated billing dispute triage) are typically ready for staging within 3 to 5 business days. Complex multi-agent RAG vector architectures, autonomous voice telephony systems, and custom ERP synchronizations typically achieve full production deployment within 2 to 3 weeks.",
    category: "Deployment Timelines",
  },
  {
    question: "How is our proprietary corporate data protected during LLM reasoning?",
    answer:
      "Security and compliance are non-negotiable. We deploy isolated, tenant-dedicated vector datastores (Pinecone / Qdrant) with end-to-end AES-256 and TLS 1.3 encryption. We utilize enterprise zero-data-retention agreements with LLM providers—ensuring your customer records, internal code, and business intelligence are never stored or used to train third-party public foundation models.",
    category: "Data Privacy & Governance",
  },
  {
    question: "What latency and natural conversational capabilities do AI Voice agents provide?",
    answer:
      "Our autonomous voice systems achieve ultra-low response latency under 350ms using optimized streaming neural speech-to-text (Deepgram/Twilio), high-throughput LLM reasoning, and natural emotional voice synthesis (ElevenLabs/Vapi). Systems intelligently handle ambient noise, mid-sentence human interruptions, dynamic CRM lookups, and deterministic escalation to human agents.",
    category: "Voice Telephony & Real-Time AI",
  },
  {
    question: "What are the recurring cloud hosting and LLM token operational costs?",
    answer:
      "We operate on a 100% transparent direct-infrastructure model. AWS/GCP cloud resources and direct LLM API usage tokens are billed directly to your corporate accounts. We never apply agency markups or hidden margin fees on your compute or tokens.",
    category: "Cost & Infrastructure",
  },
  {
    question: "Do we retain full intellectual property and source code ownership?",
    answer:
      "Yes, completely. Upon final delivery and sign-off, all custom agent source code, workflow definitions, Docker deployment manifests, and vector schema configurations are transferred directly to your organization's internal GitHub repositories. You maintain 100% IP ownership with zero vendor lock-in.",
    category: "Intellectual Property & Handover",
  },
];

export default function FAQ() {
  const { openLeadModal } = useLeadModal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-white border-t border-slate-200/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066cc] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Enterprise Architecture FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Essential operational insights into our custom AI agents, multi-domain workflow orchestration, enterprise data security, and full IP handover.
          </p>
        </motion.div>

        {/* Clean Enterprise Horizontal Border Accordion with Motion.dev */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="transition-colors duration-150 hover:bg-slate-50/60"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between py-6 px-3 sm:px-4 text-left transition-all group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="pr-6 flex-1">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0066cc] mb-1.5">
                      {faq.category}
                    </span>
                    <h3 className={`text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-[#0066cc]" : "text-slate-900 group-hover:text-[#0066cc]"}`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 ${isOpen ? "bg-[#0066cc] text-white border-[#0066cc]" : "border-slate-300 text-slate-500 group-hover:border-[#0066cc] group-hover:text-[#0066cc]"}`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-4 pb-6 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100 bg-slate-50/40">
                        <p className="max-w-4xl">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Executive Inquiries CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#071f34] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-900/10"
        >
          <div>
            <h4 className="text-lg font-bold text-white">Have a proprietary architecture or custom security requirement?</h4>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Our enterprise solution architects evaluate your existing infrastructure, data residency constraints, and API topologies under strict NDA.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              openLeadModal({
                title: "Schedule Technical Consultation",
                source: "FAQ Architecture Help Banner",
                defaultNote: "Inquiring about custom enterprise AI orchestration and compliance requirements.",
              })
            }
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-semibold transition-all shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer"
          >
            Consult a Lead Architect
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
