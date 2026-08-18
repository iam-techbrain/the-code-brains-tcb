import EcosystemHeader from "@/components/EcosystemHeader";
import Hero from "@/components/Hero";
import TrustBadgesTicker from "@/components/TrustBadgesTicker";
import Features from "@/components/Features";
import ProductCardShowcase from "@/components/ProductCardShowcase";
import HowItWorks from "@/components/HowItWorks";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import EcosystemAppsSection from "@/components/EcosystemAppsSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DemoFloatWidget from "@/components/DemoFloatWidget";

export const metadata = {
  title: "TCB — Industry-Specific Micro-SaaS Ecosystem",
  description: "TCB Store (Retail POS & Personal Expense) and TCB School (Coaching Institutes, Attendance & Fee Tracker).",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#059669] selection:text-white">
      <CustomCursor />
      <EcosystemHeader />
      <Hero />
      <TrustBadgesTicker />
      <Features />
      <ProductCardShowcase />
      <HowItWorks />
      <InteractiveShowcase />
      <EcosystemAppsSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
      <DemoFloatWidget />
    </main>
  );
}

