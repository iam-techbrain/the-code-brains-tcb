import Link from "next/link";
import WorldwideClientsBanner from "@/components/WorldwideClientsBanner";
import EcosystemHeader from "@/components/EcosystemHeader";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";
import { ShieldCheck, Lock, Server, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & Enterprise Data Security | The Code Brains (TCB)",
  description:
    "Learn how The Code Brains (TCB) safeguards your enterprise data, proprietary AI models, and infrastructure with zero third-party data retention and dedicated VPC deployments.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#305eff] selection:text-white">
      <WorldwideClientsBanner />
      <EcosystemHeader />

      <section className="relative border-b border-slate-200/80 bg-gradient-to-b from-blue-50/50 via-white to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#305eff]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#305eff]" />
            Enterprise Privacy &amp; Data Governance
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Privacy Policy &amp; Security Architecture
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed sm:text-lg">
            At The Code Brains (TCB), privacy and intellectual property protection are core engineering principles. We build custom autonomous AI agents and workflow automations deployed exclusively within your infrastructure, ensuring 100% data confidentiality and zero vendor lock-in.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
            <span>Last Updated: October 2026</span>
            <span>&bull;</span>
            <span>Version: 2.4 Enterprise</span>
            <span>&bull;</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              SOC-2 Ready &amp; GDPR Compliant Architectures
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12 text-slate-700 leading-relaxed">
          {/* 1. Core Commitment */}
          <div id="data-privacy" className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 sm:text-2xl">
              <Lock className="h-5 w-5 text-[#305eff]" />
              1. 100% Client Ownership &amp; Zero Data Retention
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
              Unlike packaged SaaS platforms that route your proprietary customer communications and internal documentation through centralized shared servers, <strong>The Code Brains operates as a pure engineering studio</strong>.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                <span><strong>No Model Training:</strong> Your business records, customer transcripts, and vector embeddings are never used to train public or proprietary foundation models.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                <span><strong>Dedicated Client VPC:</strong> All production bots, n8n instances, and microservices are deployed inside your own AWS, GCP, or private Docker cluster.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                <span><strong>Full Source Code Handover:</strong> You retain complete intellectual property ownership, Git repository access, and master credentials.</span>
              </li>
            </ul>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              2. Information We Collect on Our Website
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              When you interact with the TCB website (such as scheduling an enterprise consultation or submitting an inquiry via our interactive forms), we collect:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-600">
              <li><strong>Contact Information:</strong> Full name, corporate email address, international phone number, and company name.</li>
              <li><strong>Project Scope &amp; Requirements:</strong> Desired automation modules, CRM tech stack, budget parameters, and business use-case details.</li>
              <li><strong>Technical Diagnostic Telemetry:</strong> Referral sources, browser environment, and campaign parameters (UTM tags) used exclusively to route your inquiry to the appropriate engineering specialist.</li>
            </ul>
          </div>

          {/* 3. Security & Encryption Standards */}
          <div id="security">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 sm:text-2xl">
              <Server className="h-5 w-5 text-[#305eff]" />
              3. Encryption &amp; Security Standards
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              All data transmitted through our web services and API endpoints adheres to enterprise-grade security protocols:
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                <h3 className="font-bold text-slate-900 text-sm">TLS 1.3 In-Transit Encryption</h3>
                <p className="mt-1 text-xs text-slate-600">Every API call, webhook payload, and lead transmission is secured via modern TLS 1.3 cryptographic suites.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                <h3 className="font-bold text-slate-900 text-sm">AES-256 At-Rest Encryption</h3>
                <p className="mt-1 text-xs text-slate-600">Vector databases (Qdrant/Pinecone) and relational databases (PostgreSQL) use AES-256 block encryption.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                <h3 className="font-bold text-slate-900 text-sm">Ephemeral In-Memory Processing</h3>
                <p className="mt-1 text-xs text-slate-600">Voice streams and real-time audio payloads are processed in memory and immediately discarded after call completion.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                <h3 className="font-bold text-slate-900 text-sm">Granular IAM Policies</h3>
                <p className="mt-1 text-xs text-slate-600">Strict least-privilege IAM roles with time-bound credentials across client cloud environments.</p>
              </div>
            </div>
          </div>

          {/* 4. Compliance */}
          <div id="compliance">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              4. International Compliance (GDPR, CCPA, DPDP)
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              We respect your rights under global privacy laws including the European Union General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and India Digital Personal Data Protection Act (DPDP). You have the right to request access to, correction of, or permanent deletion of any personal data submitted to us.
            </p>
          </div>

          {/* 5. Contact Information */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Questions Regarding Privacy or Security Architecture?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              For security questionnaires, data processing agreements (DPA), or custom compliance reviews, please reach out directly to our engineering leadership team.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#305eff] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#1f47e0] transition-colors"
              >
                <span>Contact Engineering Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:contact@thecodebrains.com"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:border-[#305eff] transition-colors"
              >
                contact@thecodebrains.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <DemoFloatWidget />
    </main>
  );
}
