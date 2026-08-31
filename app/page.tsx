import EcosystemHeader from "@/components/EcosystemHeader";
import Hero from "@/components/Hero";
import TechStackShowcase from "@/components/TechStackShowcase";
import SchoolManagementFeature from "@/components/SchoolManagementFeature";
import TrustBadgesTicker from "@/components/TrustBadgesTicker";
import Features from "@/components/Features";
import ProductCardShowcase from "@/components/ProductCardShowcase";
import HowItWorks from "@/components/HowItWorks";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import EcosystemAppsSection from "@/components/EcosystemAppsSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DemoFloatWidget from "@/components/DemoFloatWidget";

export const metadata = {
  title: "TCB — AI Agents, Workflows & School SaaS Ecosystem",
  description:
    "Custom AI Agent Automations, TCB School (Coaching & Tuition Management at techschool.thecodebrains.com), and TCB Inventory System. Built with Python, n8n, Make.com, OpenAI & RAG.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#059669] selection:text-white">
      <CustomCursor />
      <EcosystemHeader />
      <Hero />
      
      {/* 1. Tech Stack & Tools Showcase Section */}
      <TechStackShowcase />

      {/* 2. Core Service: School & Coaching Management System (Live Feature) */}
      <SchoolManagementFeature />

      <TrustBadgesTicker />
      <Features />
      <ProductCardShowcase />
      <HowItWorks />
      <InteractiveShowcase />
      <EcosystemAppsSection />

      {/* 3. Coming Soon Section (Advanced Automation & Storage Suite) */}
      <ComingSoonSection />

      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
      <DemoFloatWidget />
    </main>
  );
}
