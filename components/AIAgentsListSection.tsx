"use client";

import { useState } from "react";
import {
  PhoneCall,
  CreditCard,
  Bot,
  FileCheck,
  Bell,
  TrendingDown,
  FileScan,
  Megaphone,
  Receipt,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Cpu,
} from "lucide-react";

type AIAgentModule = {
  id: string;
  name: string;
  category: "sales" | "education" | "operations" | "finance";
  categoryLabel: string;
  description: string;
  icon: any;
  outcome: string;
  techStack: string;
  status: "Production Ready" | "Enterprise Deploy";
};

const AI_AGENT_MODULES: AIAgentModule[] = [
  {
    id: "voice-agent",
    name: "AI Voice Lead Qualification Agent",
    category: "sales",
    categoryLabel: "Sales & Leads",
    description: "Outbound AI voice calls to website enquiries, qualifying leads & 24/7 instant demo booking directly on calendar.",
    icon: PhoneCall,
    outcome: "Zero missed enquiries & 4x higher demo booking rate",
    techStack: "Twilio / Vapi + OpenAI Realtime + Google Calendar",
    status: "Production Ready",
  },
  {
    id: "fee-reminder-agent",
    name: "Automated Fee Collection & Payment Reminder Agent",
    category: "finance",
    categoryLabel: "Finance & Collections",
    description: "Automated WhatsApp & SMS scheduled due-date reminders with embedded 1-click UPI payment links.",
    icon: CreditCard,
    outcome: "85% reduction in overdue fees & instant payment recovery",
    techStack: "Meta WhatsApp Cloud API + Razorpay / PhonePe UPI",
    status: "Production Ready",
  },
  {
    id: "rag-tutor",
    name: "24/7 RAG-Powered Student AI Tutor",
    category: "education",
    categoryLabel: "Education & Learning",
    description: "Institute-trained custom RAG chatbot providing syllabus-aligned instant homework & doubt resolution 24/7.",
    icon: Bot,
    outcome: "24/7 instant doubt resolution with 100% syllabus accuracy",
    techStack: "Pinecone Vector DB + LangChain + Claude 3.5",
    status: "Production Ready",
  },
  {
    id: "assignment-grader",
    name: "Automated Homework & Assignment Grader",
    category: "education",
    categoryLabel: "Education & Learning",
    description: "AI multi-modal vision evaluation of student answer sheets with score breakdown & instant constructive feedback.",
    icon: FileCheck,
    outcome: "Saves 15+ hours/week for teachers & instant student feedback",
    techStack: "GPT-4o Vision + Multi-modal OCR + Custom Rubrics",
    status: "Production Ready",
  },
  {
    id: "smart-attendance",
    name: "Smart Attendance & Absentee Alert Automation",
    category: "operations",
    categoryLabel: "Operations & Safety",
    description: "Instant WhatsApp notifications dispatched to parents the second student attendance or absence is logged.",
    icon: Bell,
    outcome: "100% parent satisfaction & zero attendance tracking errors",
    techStack: "Biometric Cloud API + WhatsApp Cloud Triggers + Node.js",
    status: "Production Ready",
  },
  {
    id: "dropout-analyzer",
    name: "Predictive Student Dropout & Risk Analyzer",
    category: "education",
    categoryLabel: "Education & Intelligence",
    description: "Early warning predictive AI alerts detecting attendance drops & academic performance decay 30 days early.",
    icon: TrendingDown,
    outcome: "Identify at-risk students 30 days early for proactive intervention",
    techStack: "Python Scikit-Learn + Predictive Analytics Engine",
    status: "Enterprise Deploy",
  },
  {
    id: "ocr-verification",
    name: "Automated Document Verification OCR Agent",
    category: "operations",
    categoryLabel: "Operations & Onboarding",
    description: "Instant OCR scanning, data extraction & fraud verification of student admission forms, Aadhar, and certificates.",
    icon: FileScan,
    outcome: "90% faster student admissions & paperless onboarding",
    techStack: "AWS Textract + Tesseract OCR + Fraud Detection AI",
    status: "Production Ready",
  },
  {
    id: "broadcast-agent",
    name: "AI Social Media & Notice Broadcast Agent",
    category: "sales",
    categoryLabel: "Communication & Marketing",
    description: "1-click multi-channel announcement generation and circular broadcasting across WhatsApp, Telegram & Email.",
    icon: Megaphone,
    outcome: "Broadcast institute circulars to 5,000+ parents in 1 click",
    techStack: "Multi-Platform API + Generative Copywriting Engine",
    status: "Production Ready",
  },
  {
    id: "ledger-reconciliation",
    name: "Automated Invoice & Ledger Reconciliation Bot",
    category: "finance",
    categoryLabel: "Finance & Accounting",
    description: "Seamless financial tracking, bank statement reconciliation, GST ledger balance & automated receipt dispatch.",
    icon: Receipt,
    outcome: "Zero accounting discrepancies & 1-click monthly P&L statements",
    techStack: "n8n / Make Workflow Engine + Tally / Zoho API",
    status: "Enterprise Deploy",
  },
  {
    id: "hr-payroll",
    name: "HR & Staff Payroll Synchronization Workflow",
    category: "operations",
    categoryLabel: "HR & Staff Management",
    description: "Automated staff salary calculation, leave tracking, attendance sync, and tax slip generation in 1 click.",
    icon: Users,
    outcome: "Automate entire monthly staff payroll in under 2 minutes",
    techStack: "Node.js Microservices + Biometric Cloud Sync + Tax Engine",
    status: "Production Ready",
  },
];

export default function AIAgentsListSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredAgents =
    activeCategory === "all"
      ? AI_AGENT_MODULES
      : AI_AGENT_MODULES.filter((agent) => agent.category === activeCategory);

  return (
    <section id="ai-agents-catalog" className="relative overflow-hidden border-t border-slate-200/60 bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
      
      {/* Radial Background Accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-800 shadow-xs">
            <Cpu className="h-4 w-4 text-brand-500 animate-pulse" />
            TCB Autonomous AI Agent &amp; Workflow Suite
          </div>
          
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            18 Production-Grade <span className="nuvertos-gradient-text">AI Agents &amp; Automation Modules</span>
          </h2>
          
          <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            Deploy pre-engineered AI voice caller agents, WhatsApp fee collection bots, 24/7 RAG tutors, and automated financial ledgers designed for modern businesses &amp; institutes.
          </p>
        </div>

        {/* Category Filter Tabs - Horizontal Swipeable on Mobile */}
        <div className="mt-8 sm:mt-10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 px-1 sm:justify-center sm:flex-wrap">
          {[
            { id: "all", label: "All AI Agents" },
            { id: "sales", label: "Sales & Marketing" },
            { id: "education", label: "Education & Learning" },
            { id: "operations", label: "Operations & HR" },
            { id: "finance", label: "Finance & Collections" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/20 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* AI Agents Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAgents.map((agent) => {
            const IconComp = agent.icon;
            return (
              <div
                key={agent.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-500/10"
              >

                <div>
                  {/* Header Row: Icon + Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 border border-brand-200/80 transition-transform group-hover:scale-105">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-extrabold text-brand-800 border border-brand-200">
                      {agent.status}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {agent.categoryLabel}
                  </span>

                  {/* Agent Name */}
                  <h3 className="mt-1 text-lg font-black text-slate-900 group-hover:text-brand-700 transition-colors">
                    {agent.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {agent.description}
                  </p>

                  {/* Outcome Box */}
                  <div className="mt-4 rounded-xl border border-brand-200/60 bg-brand-50/50 p-3">
                    <span className="text-[10px] font-extrabold uppercase text-brand-800 block">
                      ⚡ Key Outcome:
                    </span>
                    <span className="text-xs font-bold text-slate-800 mt-0.5 block">
                      {agent.outcome}
                    </span>
                  </div>
                </div>

                {/* Tech Stack & Action Footer */}
                <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-medium text-slate-400 truncate max-w-[170px]" title={agent.techStack}>
                    {agent.techStack}
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-extrabold text-brand-700 hover:text-brand-800 group/btn"
                  >
                    <span>Deploy Agent</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
