"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, Zap } from "lucide-react";
import { useLeadModal } from "@/components/LeadModalContext";

// High-fidelity brand SVG icons for tools not provided in PNG
function BrandLogo({ id, className = "h-5 w-5" }: { id: string; className?: string }) {
  switch (id) {
    case "bedrock":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#00a4a6" />
          <path
            d="M7 12h10M12 7v10M8.5 8.5l7 7M15.5 8.5l-7 7"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pytorch":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#ee4c2c">
          <path d="M12.8 3.5a7 7 0 0 0-4.6 1.7l1.4 1.4a5 5 0 0 1 3.2-1.1c2.8 0 5 2.2 5 5 0 2.8-2.2 5-5 5a5 5 0 0 1-4.8-3.6H5.9a7 7 0 0 0 6.9 5.6c3.9 0 7-3.1 7-7s-3.1-7-7-7zm2.4 1.8a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
        </svg>
      );
    case "django":
      return (
        <div className="font-serif font-black text-sm text-[#092e20]">
          django
        </div>
      );
    case "flask":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#111827" strokeWidth="2">
          <path d="M9 3h6M10 3v5l-4 8a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-4-8V3" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#00d8ff" strokeWidth="1.75">
          <ellipse cx="12" cy="12" rx="4" ry="10" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#00d8ff" />
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#ea4b71">
          <circle cx="6" cy="12" r="4" />
          <circle cx="18" cy="7" r="3" />
          <circle cx="18" cy="17" r="3" />
          <path d="M10 12h5M10 12l5-4M10 12l5 4" stroke="#ea4b71" strokeWidth="2" />
        </svg>
      );
    case "make":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#6d28d9">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "twilio":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#f22f46">
          <circle cx="12" cy="12" r="10" />
          <circle cx="9" cy="9" r="2" fill="#fff" />
          <circle cx="15" cy="9" r="2" fill="#fff" />
          <circle cx="9" cy="15" r="2" fill="#fff" />
          <circle cx="15" cy="15" r="2" fill="#fff" />
        </svg>
      );
    case "elevenlabs":
      return (
        <div className="flex items-center gap-0.5 bg-black text-white px-1.5 py-0.5 rounded text-[10px] font-mono font-bold">
          <span>II</span>
        </div>
      );
    case "deepgram":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#13ef93">
          <path d="M4 4h8a8 8 0 0 1 8 8 8 8 0 0 1-8 8H4V4zm4 4v8h4a4 4 0 0 0 4-4 4 4 0 0 0-4-4H8z" />
        </svg>
      );
    case "pinecone":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#000">
          <path d="M12 2L4 9h16L12 2zm0 6l-6 5h12l-6-5zm0 6l-4 4h8l-4-4z" />
        </svg>
      );
    case "hubspot":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#ff7a59">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" fill="#fff" />
          <circle cx="19" cy="8" r="2" fill="#ff7a59" />
        </svg>
      );
    case "salesforce":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#00a1e0">
          <path d="M19.3 10.04a4.4 4.4 0 0 0-4.05-2.69 4.3 4.3 0 0 0-3.32 1.54 5.3 5.3 0 0 0-5.11 3.55A3.7 3.7 0 0 0 4 19.5h15a3.5 3.5 0 0 0 .3-7.46z" />
        </svg>
      );
    case "zapier":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#ff4f00">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M6 12h12M7.76 7.76l8.48 8.48M7.76 16.24l8.48-8.48" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#25d366">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 11.5c.5 1.5 2 3 3.5 3.5l1.5-1.5c.3-.3.8-.4 1.2-.2 1.2.5 2.5.5 3.8.3.5-.1 1 .3 1 .8v2.5c0 .6-.5 1-1.1 1-6.5 0-11.8-5.3-11.8-11.8 0-.6.4-1.1 1-1.1h2.5c.5 0 .9.5.8 1-.2 1.3-.2 2.6.3 3.8.2.4.1.9-.2 1.2L8 11.5z" fill="#ffffff" />
        </svg>
      );
    case "sheets":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#0f9d58">
          <rect x="4" y="3" width="16" height="18" rx="2" fill="#0f9d58" />
          <path d="M8 8h8M8 12h8M8 16h8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 8v8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "aws":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#ff9900">
          <path d="M18.8 14.5c-2.4 1.8-5.9 2.8-8.9 2.8-4.2 0-8-1.5-10.9-4-.2-.2 0-.5.2-.3 3.1 2.2 7 3.5 11.1 3.5 2.7 0 5.8-.8 8.3-2.3.4-.2.6.2.2.3z" />
          <path d="M19.6 13.5c-.3-.4-1.9-.2-2.7 0-.2 0-.3-.2-.1-.3 1.1-.9 2.9-.6 3.2-.2.3.4-.1 2.2-1.2 3.1-.2.1-.3 0-.3-.1.3-.8 1.4-2.1 1.1-2.5z" />
        </svg>
      );
    default:
      return <Zap className={className} />;
  }
}

type TechItem =
  | {
      type: "image";
      name: string;
      imageSrc: string;
      width: number;
      height: number;
    }
  | {
      type: "vector";
      name: string;
      logoId: string;
      colorClass: string;
    };

type TechRow = {
  category: string;
  items: TechItem[];
};

// Directly incorporates the uploaded images & exact layout from the user's reference
const TECH_STACK_TABLE_ROWS: TechRow[] = [
  {
    category: "Integration Provider",
    items: [
      { type: "image", name: "Gemini", imageSrc: "/logos/gemini.png", width: 110, height: 32 },
      { type: "image", name: "Open AI", imageSrc: "/logos/openai.png", width: 115, height: 32 },
      { type: "image", name: "ChatGPT", imageSrc: "/logos/chatgpt.png", width: 120, height: 32 },
      { type: "image", name: "Amazon Bedrock", imageSrc: "/logos/bedrock.png", width: 130, height: 32 },
      { type: "image", name: "Perplexity", imageSrc: "/logos/perplexity.png", width: 125, height: 32 },
    ],
  },
  {
    category: "Programming Languages & Frameworks",
    items: [
      { type: "image", name: "Python", imageSrc: "/logos/python.png", width: 105, height: 32 },
      { type: "image", name: "Pytorch", imageSrc: "/logos/pytorch.png", width: 105, height: 32 },
      { type: "image", name: "django", imageSrc: "/logos/django.png", width: 100, height: 32 },
      {
        type: "vector",
        name: "Flask",
        logoId: "flask",
        colorClass: "text-slate-900",
      },
      { type: "image", name: "React", imageSrc: "/logos/react.png", width: 95, height: 32 },
    ],
  },
  {
    category: "AI & RAG Frameworks",
    items: [
      { type: "image", name: "Langchain", imageSrc: "/logos/langchain.png", width: 115, height: 32 },
      { type: "image", name: "LlamaIndex", imageSrc: "/logos/llamaindex.png", width: 120, height: 32 },
      { type: "image", name: "Haystack", imageSrc: "/logos/haystack.png", width: 115, height: 32 },
      { type: "image", name: "Embedchain", imageSrc: "/logos/embedchain.png", width: 130, height: 32 },
      { type: "image", name: "Unstructured", imageSrc: "/logos/unstructured.png", width: 130, height: 32 },
    ],
  },
  {
    category: "Vector Databases & Storage",
    items: [
      { type: "image", name: "Pinecone", imageSrc: "/logos/pinecone.png", width: 115, height: 32 },
      { type: "image", name: "Qdrant", imageSrc: "/logos/qdrant.png", width: 105, height: 32 },
      { type: "image", name: "Chroma", imageSrc: "/logos/chroma.png", width: 105, height: 32 },
      { type: "image", name: "Weaviate", imageSrc: "/logos/weaviate.png", width: 115, height: 32 },
      { type: "image", name: "MongoDB", imageSrc: "/logos/mongodb.png", width: 115, height: 32 },
    ],
  },
  {
    category: "Workflow Automation & Multi-App Engines",
    items: [
      {
        type: "vector",
        name: "Make (Integromat)",
        logoId: "make",
        colorClass: "text-[#6d28d9]",
      },
      {
        type: "vector",
        name: "Zapier",
        logoId: "zapier",
        colorClass: "text-[#ff4f00]",
      },
      {
        type: "vector",
        name: "n8n Workflows",
        logoId: "n8n",
        colorClass: "text-[#ea4b71]",
      },
      {
        type: "vector",
        name: "WhatsApp Cloud API",
        logoId: "whatsapp",
        colorClass: "text-[#25d366]",
      },
      {
        type: "vector",
        name: "Google Sheets API",
        logoId: "sheets",
        colorClass: "text-[#0f9d58]",
      },
    ],
  },
  {
    category: "Cloud & DevOps Infrastructure",
    items: [
      { type: "image", name: "AWS", imageSrc: "/logos/aws.png", width: 85, height: 32 },
      { type: "image", name: "Docker", imageSrc: "/logos/docker.png", width: 105, height: 32 },
      { type: "image", name: "Google Cloud", imageSrc: "/logos/gcp.png", width: 120, height: 32 },
      { type: "image", name: "Azure", imageSrc: "/logos/azure.png", width: 95, height: 32 },
      { type: "image", name: "Kubernetes", imageSrc: "/logos/kubernetes.png", width: 125, height: 32 },
    ],
  },
];

export default function TechStackShowcase() {
  const { openLeadModal } = useLeadModal();

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-t border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading & Subheading Matching the Uploaded Screenshot */}
        <div className="max-w-4xl mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem] font-display"
          >
            Tech-Stack Used by Our AI Automation Agency
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            We are equipped with a powerful and advanced stack of AI/ML frameworks, tools and technologies, including:
          </motion.p>
        </div>

        {/* Tabular Matrix Card Layout Matching Reference Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5"
        >
          <div className="divide-y divide-slate-100">
            {TECH_STACK_TABLE_ROWS.map((row, rIdx) => (
              <div
                key={rIdx}
                className="flex flex-col md:flex-row items-stretch transition-colors hover:bg-slate-50/40"
              >
                {/* Left Column: Subtle Light Cell */}
                <div className="w-full md:w-80 shrink-0 bg-slate-50/80 p-5 sm:p-6 flex items-center border-b md:border-b-0 md:border-r border-slate-100">
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {row.category}
                  </span>
                </div>

                {/* Right Column: Horizontal Logo Strip with Direct Uploaded PNGs and Vector Badges */}
                <div className="flex-1 p-5 sm:p-6 flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10 bg-white">
                  {row.items.map((item, tIdx) => {
                    if (item.type === "image") {
                      return (
                        <div
                          key={tIdx}
                          className="group flex items-center transition-transform hover:scale-105 cursor-default"
                          title={item.name}
                        >
                          <Image
                            src={item.imageSrc}
                            alt={item.name}
                            width={item.width}
                            height={item.height}
                            className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-xs"
                          />
                        </div>
                      );
                    }

                    return (
                      <div
                        key={tIdx}
                        className="group flex items-center gap-2.5 transition-transform hover:scale-105 cursor-default"
                      >
                        <div className="flex h-7 w-7 items-center justify-center shrink-0">
                          <BrandLogo id={item.logoId} className="h-5 w-5 object-contain" />
                        </div>
                        <span
                          className={`text-sm sm:text-base font-bold ${item.colorClass} group-hover:opacity-90`}
                        >
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Guarantee Strip */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#305eff] text-white shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                100% Client-Owned Direct API Accounts &amp; Private Cloud
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                We never resell generic wrappers. Your OpenAI, AWS, Twilio, and n8n instances run inside your own corporate cloud.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              openLeadModal({
                title: "Custom Tech Stack Architecture Review",
                source: "Tech Stack Table Banner",
                defaultNote: "Inquiring about tech stack integrations with our existing business systems.",
              })
            }
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#305eff] hover:bg-[#1f47e0] px-6 py-2.5 text-xs font-bold text-white shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <span>Discuss Architecture</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
