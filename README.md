# The Code Brains (TCB) — Custom AI Agents & Intelligent Workflow Automation Services Studio

**The Code Brains (TCB)** is a modern, high-conversion engineering agency web application showcasing specialized autonomous AI agents, voice telephony bots, 24/7 RAG knowledge vaults, and enterprise workflow automations.

Built with **Next.js 16 (Turbopack)**, **TypeScript**, **Tailwind CSS**, and **Motion**, engineered for sub-second page performance, high conversion rate optimization (CRO), and enterprise brand credibility.

---

## 🚀 Overview & Value Proposition

TCB operates as a pure **AI Engineering & Custom Workflow Services Studio** with a distinct business model:
- **100% Client Code Ownership:** Zero recurring SaaS platform markups or vendor lock-in. Full Git repository and architecture handover.
- **Dedicated Private Cloud Deployment:** Workflows and autonomous agents run directly inside the client's AWS, GCP, or private VPS infrastructure.
- **Enterprise-Grade Privacy:** Client documents, customer conversations, and internal databases are never used to train external public foundation models.

---

## 🛠️ Core Services & Capabilities

1. **WhatsApp Business Automation & CRM Workflows**
   - WhatsApp Cloud API + Make.com / n8n pipelines for instant replies, lead triage, automated appointment scheduling, and two-way CRM sync.
2. **Real-Time Voice AI Calling & Reception Bots**
   - Sub-350ms low-latency bidirectional telephony agents powered by Twilio SIP, Deepgram Nova-2 streaming STT, and ElevenLabs neural voices.
3. **Custom Autonomous AI Agents & Lead Generation**
   - Self-driving SDR workflows: scraping verified leads via Apollo/LinkedIn, account research via Claude 3.5 / GPT-4o, and personalized outreach sequences.
4. **Platform & Google Sheets Sync with Sales Alerts**
   - Real-time data sync from custom platforms, Shopify, or stripe into Google Sheets with automated threshold triggers to Slack, Telegram, or WhatsApp.
5. **Unified Social Media & Ads Management Automation**
   - Central control center to schedule, broadcast, and monitor campaigns across multiple social networks simultaneously.
6. **Complex Zapier & Make (n8n) Workflow Orchestration**
   - Enterprise multi-branch conditional routing, auto-retries, webhook transformations, and error handling for critical business systems.
7. **Zero-Hallucination Enterprise RAG Knowledge Vaults**
   - Hybrid semantic search vaults using Qdrant / Pinecone vector databases with constitutional citation guardrails for 24/7 customer and employee support.
8. **AI Document & Invoice OCR Extraction Engine**
   - Automated parsing of multi-page invoices, bills of lading, and contracts via AWS Textract and custom pipelines into QuickBooks / ERP.

---

## 💻 Tech Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Animation:** Motion (framer-motion v13)
- **Icons:** Lucide React
- **CRM Integration:** HubSpot CRM API & Optional Custom Webhooks
- **Voice Telephony Pipeline:** Twilio SIP, Deepgram Nova-2, ElevenLabs, WebSockets
- **Agent Orchestration:** LangChain, LangGraph, Python, n8n, Make.com

---

## 📂 Project Structure

```text
├── app/
│   ├── api/
│   │   ├── leads/route.ts      # Multi-channel lead intake (HubSpot CRM + Webhook + JSON backup)
│   │   └── voice-ai/route.ts   # Interactive voice assistant demo API
│   ├── blog/                   # Technical architectural deep-dive guides
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── contact/page.tsx        # Enterprise consultation booking page
│   ├── privacy/page.tsx        # Privacy policy & data security architecture
│   ├── terms/page.tsx          # Terms of service & IP engagement agreement
│   ├── sitemap/page.tsx        # Visual sitemap & blueprint browser
│   ├── sitemap.ts              # Dynamic search engine XML sitemap
│   ├── robots.ts               # Robots.txt crawler directives
│   ├── layout.tsx              # Root layout, analytics & global providers
│   └── page.tsx                # Main TCB landing page
├── components/
│   ├── AIAgentsListSection.tsx # Production Solutions Catalog
│   ├── ContactBand.tsx         # Quick consultation call-out band
│   ├── DemoFloatWidget.tsx     # Floating voice / demo assistant launcher
│   ├── EcosystemHeader.tsx     # Responsive corporate navigation header
│   ├── Features.tsx            # Core capabilities & architecture matrix
│   ├── Footer.tsx              # Corporate footer with socials & legal links
│   ├── GlobalCountryContext.tsx# Country selector with international dial codes
│   ├── Hero.tsx                # Hero section with 3D waves & live telemetry
│   ├── InteractiveAutomationStudio.tsx # Live pipeline orchestration matrix
│   ├── LeadModalContext.tsx    # Modal lead capture with UTM tracking
│   ├── RealProjectsRealResults.tsx # Case studies with interactive schematics
│   ├── TechStackShowcase.tsx   # Enterprise infrastructure showcase
│   ├── Testimonials.tsx        # Verified client case studies
│   ├── TwoColumnSpotlight.tsx  # Dual dark cards (MDSO & Voice AI)
│   ├── VoiceAssistant.tsx      # Real-time voice simulation modal
│   └── WorldwideClientsBanner.tsx # Top corporate ticker
├── data/
│   ├── blogData.ts             # 6 technical architecture articles
│   ├── leads.json              # Local fallback lead backup
│   └── tcb-knowledge.json      # Structured agency knowledge base
├── public/                     # Brand graphics, icons & assets
├── package.json
└── tailwind.config.ts
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory based on `.env.example`:

```env
# Optional: HubSpot CRM API Key or Access Token for direct lead creation
HUBSPOT_ACCESS_KEY=your_hubspot_token

# Optional: Webhook URL (Make.com, n8n, Slack, or Google Sheets) for real-time lead dispatch
LEADS_WEBHOOK_URL=https://hook.make.com/your-endpoint

# Optional: Google Gemini API key for interactive voice assistant simulation
GEMINI_ACCESS_API_KEY=your_gemini_key
```

*Note: The website works out of the box even without API keys; leads are safely backed up locally to `data/leads.json`.*

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure **Node.js 18.x** or higher is installed.

### 2. Installation
```bash
git clone https://github.com/Afzalalam-Afzuu/tcb-landing-page.git
cd tcb-landing-page
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

### 5. Check Types & Routes
```bash
npm run lint
```

---

## 🌐 Official Channels & Social Links

- **Website:** [The Code Brains](https://thecodebrains.com)
- **LinkedIn:** [The Code Brains on LinkedIn](https://www.linkedin.com/company/145366833/)
- **Facebook:** [The Code Brains on Facebook](https://www.facebook.com/profile.php?id=61590711261508)
- **YouTube:** [@TheCodeBrainsHub](https://www.youtube.com/@TheCodeBrainsHub)
- **Inquiries:** [contact@thecodebrains.com](mailto:contact@thecodebrains.com)

---

## 📄 License & Intellectual Property

Designed and engineered by **The Code Brains (TCB)**. All client deployments receive 100% full source code ownership under bilateral master service agreements.
