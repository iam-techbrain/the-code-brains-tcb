import WorldwideClientsBanner from "@/components/WorldwideClientsBanner";
import WorldwidePresenceSection from "@/components/WorldwidePresenceSection";
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
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";

export const metadata = {
  title: "TCB — Custom AI Agents & Intelligent Workflow Automation Studio",
  description:
    "Your Business. Your Challenges. Our AI Agents. We design and deploy custom autonomous AI agents, voice callers, 24/7 RAG chatbots, and enterprise workflow automations built around how your business actually works.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full bg-[#f8fafc] text-slate-900 antialiased selection:bg-brand-500 selection:text-white">
      {/* 0. Top Worldwide Ticker & Government Registration Banner */}
      <WorldwideClientsBanner />

      <EcosystemHeader />
      
      {/* 1. Hero: AI Agent & Automation Engine */}
      <Hero />

      {/* 2. Global Footprint & Serving Worldwide Clients Section */}
      <WorldwidePresenceSection />
      
      {/* 3. Tech Stack & AI Engineering Tools */}
      <TechStackShowcase />

      {/* 4. 10 Production-Grade AI Agents & Automation Catalog */}
      <AIAgentsListSection />

      {/* 5. Enterprise Client Trust Badges */}
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

      <ContactBand />
      <Footer />
      <DemoFloatWidget />
    </main>
  );
}
