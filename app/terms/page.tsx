import Link from "next/link";
import WorldwideClientsBanner from "@/components/WorldwideClientsBanner";
import EcosystemHeader from "@/components/EcosystemHeader";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";
import { ShieldCheck, FileText, CheckCircle2, ArrowRight, Scale } from "lucide-react";

export const metadata = {
  title: "Terms of Service & Engagement | The Code Brains (TCB)",
  description:
    "Standard terms of service, engagement agreements, intellectual property transfer, and service level assurances for The Code Brains (TCB) AI engineering clients.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#305eff] selection:text-white">
      <WorldwideClientsBanner />
      <EcosystemHeader />

      <section className="relative border-b border-slate-200/80 bg-gradient-to-b from-blue-50/50 via-white to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#305eff]">
            <Scale className="h-3.5 w-3.5 text-[#305eff]" />
            Enterprise Engagement Agreement
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Terms of Service &amp; Engagement
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed sm:text-lg">
            These terms define our custom AI engineering services model, intellectual property guarantees, payment schedules, and support guarantees between The Code Brains (TCB) and our enterprise clients.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
            <span>Effective Date: October 2026</span>
            <span>&bull;</span>
            <span>Governing Jurisdiction: Applicable Enterprise SOW &amp; Mutual Jurisdiction</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12 text-slate-700 leading-relaxed">
          {/* 1. Services Scope */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              1. Services Scope &amp; Deliverables
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed">
              The Code Brains provides professional custom software development and AI engineering services, including autonomous AI agents, telephony bots, RAG pipelines, and enterprise workflow automations. Each client engagement is governed by an agreed-upon Statement of Work (SOW) outlining technical specifications, milestones, and deliverables.
            </p>
          </div>

          {/* 2. Intellectual Property (IP) Ownership */}
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 sm:text-2xl">
              <ShieldCheck className="h-5 w-5 text-[#305eff]" />
              2. 100% Intellectual Property &amp; Code Ownership
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
              Upon settlement of milestone invoices for completed deliverables, <strong>all custom-developed application source code, configuration scripts, prompt definitions, and workflows belong exclusively to the client</strong>.
            </p>
            <ul className="mt-4 space-y-2 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                <span>Zero recurring platform lock-in fees or proprietary studio licensing barriers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                <span>Client retains the unilateral right to host, modify, scale, or fork the codebase independently.</span>
              </li>
            </ul>
          </div>

          {/* 3. Third-Party Infrastructure & API Keys */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              3. Cloud Infrastructure &amp; Third-Party API Keys
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed">
              To guarantee complete data privacy and eliminate agency markup, production systems run directly on the client&apos;s cloud infrastructure (e.g., AWS, GCP, Azure, or private VPS). Clients maintain their own direct billing relationships with third-party providers such as OpenAI, Anthropic, Twilio, Deepgram, and Pinecone.
            </p>
          </div>

          {/* 4. Service Level & Support */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              4. Warranty &amp; Handover Support
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed">
              Every production deployment includes a dedicated hypercare warranty window during which our engineering team monitors system health, adjusts LLM prompt thresholds, and verifies end-to-end data pipeline integrity at zero additional cost. Optional ongoing maintenance retainers are available upon request.
            </p>
          </div>

          {/* 5. Contact Section */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Need a Custom Master Services Agreement (MSA)?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              If your procurement or legal team requires an enterprise MSA or custom NDA prior to technical discovery, please contact us.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#305eff] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#1f47e0] transition-colors"
              >
                <span>Request Enterprise NDA / MSA</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <DemoFloatWidget />
    </main>
  );
}
