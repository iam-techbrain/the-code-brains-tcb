import EcosystemHeader from "@/components/EcosystemHeader";
import Hero from "@/components/Hero";
import TechStackShowcase from "@/components/TechStackShowcase";
import AIAgentsListSection from "@/components/AIAgentsListSection";
import TrustBadgesTicker from "@/components/TrustBadgesTicker";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import EcosystemAppsSection from "@/components/EcosystemAppsSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";

export const metadata = {
  title: "TCB — Custom AI Agents, Workflow Automation & Multi-SaaS Studio",
  description:
    "We build custom autonomous AI agents, n8n & Make workflow automation pipelines, and specialized cloud SaaS applications. Powered by Python, LangChain, OpenAI, RAG & AWS.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#059669] selection:text-white">
      <EcosystemHeader />
      
      {/* 1. Hero: AI Agent & Automation Engine */}
      <Hero />
      
      {/* 2. Tech Stack & AI Engineering Tools */}
      <TechStackShowcase />

      {/* 3. 10 Production-Grade AI Agents & Automation Catalog */}
      <AIAgentsListSection />

      {/* 4. Enterprise Client Trust Badges */}
      <TrustBadgesTicker />

      {/* 5. Core AI Automation Capabilities */}
      <Features />

      {/* 6. AI Transformation Process (4 Steps) */}
      <HowItWorks />

      {/* 7. Vertical SaaS Apps Showcase (Links to /school, /store, etc.) */}
      <EcosystemAppsSection />

      {/* 8. Upcoming SaaS Modules Roadmap */}
      <ComingSoonSection />

      {/* 9. Social Proof & Testimonials */}
      <Testimonials />

      {/* 10. AI Studio & Custom Automation Packages */}
      <Pricing />

      {/* 11. FAQ */}
      <FAQ />

      <Footer />
      <DemoFloatWidget />
    </main>
  );
}
