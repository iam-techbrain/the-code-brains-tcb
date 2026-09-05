import EcosystemHeader from "@/components/EcosystemHeader";
import StoreDashboard from "@/components/store/StoreDashboard";
import ComingSoonSection from "@/components/ComingSoonSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Boxes, ArrowRight, Barcode, Store, Wallet } from "lucide-react";

export const metadata = {
  title: "TCB Store SaaS — Retail Inventory, Barcode POS Billing & Credit Ledger",
  description: "Manage retail stock barcode inventories, GST compliant billing, Udhar Khata credit ledgers, and supplier purchase tracking.",
};

export default function StorePage() {
  return (
    <main className="min-h-screen bg-brand-50 text-brand-900 antialiased">
      <EcosystemHeader />
      
      {/* TCB STORE HERO SECTION (CLEAN WHITE BACKGROUND) */}
      <section className="relative overflow-hidden bg-brand-50 px-4 pb-16 pt-12 text-brand-900 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        
        {/* Glow Spheres */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-100/50 blur-[120px]"
        />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          
          {/* Eyebrow Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-xs font-extrabold text-brand-950 shadow-xs">
            <Boxes className="h-4 w-4 text-brand-500" />
            <span>📦 TCB STORE — RETAIL INVENTORY &amp; POS BILLING SAAS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-black tracking-tight text-brand-900 sm:text-5xl md:text-6xl leading-tight">
            Barcode Stock Inventory, POS Billing{" "}
            <span className="block mt-2 text-brand-800">
              &amp; Customer Udhar Khata Ledger
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Scan barcodes in seconds, generate GST compliant customer invoices, track supplier purchases, and maintain digital credit ledgers starting at <span className="text-brand-700 font-extrabold">₹299/month</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#coming-soon"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-brand-500 px-8 py-4 text-xs font-extrabold text-white shadow-md shadow-brand-500/20 transition-all duration-200 hover:bg-brand-600 hover:scale-[1.02] active:scale-95 sm:w-auto"
            >
              <Barcode className="h-5 w-5 text-white" />
              <span>Register For Beta Early Access</span>
              <ArrowRight className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#store-dashboard"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand-500 bg-white px-7 py-4 text-xs font-bold text-brand-500 hover:bg-brand-50 sm:w-auto"
            >
              <span>Explore POS Dashboard ▾</span>
            </a>
          </div>

          {/* 3 Core Pillar Feature Cards inside Hero */}
          <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-brand-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 font-bold mb-3 border border-brand-200">
                <Barcode className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Barcode POS Billing</h3>
              <p className="mt-1 text-xs text-slate-600">Scan barcodes, auto-calculate GST tax, print thermal receipts.</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-brand-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 font-bold mb-3 border border-brand-200">
                <Store className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Real-Time Stock Alerts</h3>
              <p className="mt-1 text-xs text-slate-600">Auto-track low stock inventory and generate AI supplier reorder slips.</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-brand-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 font-bold mb-3 border border-brand-200">
                <Wallet className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Customer Udhar Khata</h3>
              <p className="mt-1 text-xs text-slate-600">Digital credit ledgers with 1-click WhatsApp payment links.</p>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE STORE POS WORKSPACE SECTION */}
      <div id="store-dashboard">
        <StoreDashboard />
      </div>

      {/* STORE & INVENTORY COMING SOON / BETA REGISTRATION SECTION */}
      <ComingSoonSection />

      {/* PRICING PLANS */}
      <Pricing defaultApp="store" hideToggle={true} />

      {/* FAQ */}
      <FAQ />

      <Footer />
    </main>
  );
}
