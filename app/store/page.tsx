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
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <EcosystemHeader />
      
      {/* TCB STORE HERO SECTION (CLEAN WHITE BACKGROUND) */}
      <section className="relative overflow-hidden bg-white px-4 pb-16 pt-12 text-slate-900 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        
        {/* Glow Spheres */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-teal-100/50 blur-[120px]"
        />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          
          {/* Eyebrow Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-xs font-extrabold text-emerald-950 shadow-xs">
            <Boxes className="h-4 w-4 text-emerald-600" />
            <span>📦 TCB STORE — RETAIL INVENTORY &amp; POS BILLING SAAS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-tight">
            Barcode Stock Inventory, POS Billing{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent block mt-2">
              &amp; Customer Udhar Khata Ledger
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Scan barcodes in seconds, generate GST compliant customer invoices, track supplier purchases, and maintain digital credit ledgers starting at <span className="text-emerald-700 font-extrabold">₹299/month</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#coming-soon"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-8 py-4 text-xs font-extrabold text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:scale-105 active:scale-95 sm:w-auto"
            >
              <Barcode className="h-5 w-5 text-white" />
              <span>Register For Beta Early Access</span>
              <ArrowRight className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#store-dashboard"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-50 px-7 py-4 text-xs font-bold text-emerald-950 hover:bg-emerald-100 sm:w-auto"
            >
              <span>Explore POS Dashboard ▾</span>
            </a>
          </div>

          {/* 3 Core Pillar Feature Cards inside Hero */}
          <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700 font-bold mb-3 border border-teal-200">
                <Barcode className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Barcode POS Billing</h3>
              <p className="mt-1 text-xs text-slate-600">Scan barcodes, auto-calculate GST tax, print thermal receipts.</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold mb-3 border border-emerald-200">
                <Store className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Real-Time Stock Alerts</h3>
              <p className="mt-1 text-xs text-slate-600">Auto-track low stock inventory and generate AI supplier reorder slips.</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700 font-bold mb-3 border border-teal-200">
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
