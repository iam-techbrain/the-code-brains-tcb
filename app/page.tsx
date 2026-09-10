import WorldwideClientsBanner from "@/components/WorldwideClientsBanner";
import WorldwidePresenceSection from "@/components/WorldwidePresenceSection";
import EcosystemHeader from "@/components/EcosystemHeader";
import Hero from "@/components/Hero";
import SubHeroTrioCards from "@/components/SubHeroTrioCards";
import TwoColumnSpotlight from "@/components/TwoColumnSpotlight";
import InteractiveAutomationStudio from "@/components/InteractiveAutomationStudio";
import ExecutiveCredibilityRow from "@/components/ExecutiveCredibilityRow";
import StrategicPillarsRow from "@/components/StrategicPillarsRow";
import ProvenAtScaleBanner from "@/components/ProvenAtScaleBanner";
import AIAgentsListSection from "@/components/AIAgentsListSection";
import RealProjectsRealResults from "@/components/RealProjectsRealResults";
import TechStackShowcase from "@/components/TechStackShowcase";
import TrustBadgesTicker from "@/components/TrustBadgesTicker";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import MultiToneCardsBand from "@/components/MultiToneCardsBand";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";
import DemoFloatWidget from "@/components/DemoFloatWidget";

export const metadata = {
  title: "TCB — Custom AI Agents & Intelligent Workflow Orchestration Studio",
  description:
    "Deliver services at scale with intent-driven AI Orchestration. We design and deploy custom autonomous AI agents, voice telephony systems, 24/7 RAG knowledge vaults, and enterprise workflow automations tailored for your infrastructure.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full bg-[#f8fafc] text-slate-900 antialiased selection:bg-[#0066cc] selection:text-white">
      {/* 0. Top Worldwide Ticker & Registration Banner */}
      <WorldwideClientsBanner />

      {/* 1. Corporate Utility Bar + Header with Solid Blue Pill CTA */}
      <EcosystemHeader />
      
      {/* 2. Hero: Breadcrumb + Enterprise Headline + Blue Pill CTA + Parametric 3D Wave Geometry + Live Telemetry HUD */}
      <Hero />

      {/* 3. Sub-Hero Trio Cards: 3 Value Prop Cards Directly Beneath Hero */}
      <SubHeroTrioCards />

      {/* 4. Dual Dark Spotlight Cards (MDSO & Voice AI Telephony with Live Frequency Visualizer) */}
      <TwoColumnSpotlight />

      {/* 5. World-Class Interactive Automation Studio: The Live Orchestration Matrix */}
      <InteractiveAutomationStudio />

      {/* 6. Executive Credibility Row (Case Study Narrative + Leadership / Architect Trio) */}
      <ExecutiveCredibilityRow />

      {/* 7. Strategic Pillars (3-Column Thin-Line Icon Features) */}
      <StrategicPillarsRow />

      {/* 8. Proven At Scale Deep Ocean Navy Banner (85% / 90% / 50%+ Metrics) */}
      <ProvenAtScaleBanner />

      {/* 9. Featured Production Solutions Catalog */}
      <AIAgentsListSection />

      {/* 10. Real Projects, Real Results Showcase (Interactive Schematics & Live Metrics) */}
      <RealProjectsRealResults />

      {/* 11. Global Footprint & Serving Worldwide Clients Section */}
      <WorldwidePresenceSection />
      
      {/* 11. Tech Stack & AI Engineering Infrastructure */}
      <TechStackShowcase />

      {/* 12. Enterprise Trust Badges */}
      <TrustBadgesTicker />

      {/* 13. Core AI Architecture Capabilities */}
      <Features />

      {/* 14. AI Transformation Methodology (4-Step Lifecycle) */}
      <HowItWorks />

      {/* 15. Executive Testimonials & Verified Client Impact */}
      <Testimonials />

      {/* 16. Clean Horizontal Accordion FAQ */}
      <FAQ />

      {/* 17. Multi-Tone 4-Card Progressive Blue Footer Band */}
      <MultiToneCardsBand />

      {/* 18. Contact Consultation Band & Global Corporate Footer */}
      <ContactBand />
      <Footer />
      <DemoFloatWidget />
    </main>
  );
}
