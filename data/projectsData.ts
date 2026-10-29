export interface ProjectItem {
  id: string;
  title: string;
  category: "web-apps" | "ai-agents" | "voice-ai" | "document-ocr" | "workflow" | "saas";
  categoryLabel: string;
  badge: string;
  clientIndustry: string;
  shortSnippet: string;
  isAdvanceWebApp: boolean;
  tags: string[];
  metrics: { value: string; label: string }[];
  problem: string;
  solution: string;
  webAppFeatures: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    aiOrchestration: string;
    cloudDeploy: string;
  };
  deliverables: string[];
  timeline: string;
  clientFeedback: {
    quote: string;
    author: string;
    role: string;
  };
}

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web-apps", label: "Advanced Web Applications" },
  { id: "saas", label: "Custom SaaS & Cloud Platforms" },
  { id: "ai-agents", label: "Autonomous AI Agents" },
  { id: "voice-ai", label: "Voice AI & Telephony" },
  { id: "document-ocr", label: "Document & OCR Extraction" },
  { id: "workflow", label: "Enterprise Workflow Hubs" },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "enterprise-b2b-saas-webapp",
    title: "Enterprise Multi-Tenant B2B SaaS Web Application",
    category: "web-apps",
    categoryLabel: "Advanced Web Application",
    badge: "Production SaaS • Next.js 15",
    clientIndustry: "FinTech & Corporate Operations",
    shortSnippet: "High-performance full-stack web application with role-based access, real-time analytics dashboards, and Stripe automated billing.",
    isAdvanceWebApp: true,
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Stripe API"],
    metrics: [
      { value: "99.99%", label: "Web App Uptime" },
      { value: "0.24s", label: "Core Web Vitals FCP" },
      { value: "14,500+", label: "Active Organizations" },
    ],
    problem:
      "Client needed a high-performance web app capable of onboarding enterprise clients, supporting multi-tenant databases, handling complex team permissions (RBAC), and processing recurring subscription billing with enterprise SSO.",
    solution:
      "Engineered an advanced full-stack web application with Next.js 15 App Router, React Server Components for sub-second page loads, unified REST & WebSocket APIs, and isolated multi-tenant PostgreSQL partitions.",
    webAppFeatures: [
      "Ultra-fast React Server Components (RSC) with optimistic UI mutations",
      "Multi-tenant database schema isolation with automated tenant provisioning",
      "Interactive data visualization charts using high-throughput SVG/Canvas",
      "Comprehensive Role-Based Access Control (SuperAdmin, OrgAdmin, Member)",
      "Automated Stripe Billing Portal with seat-based & usage-based metering",
      "Enterprise SAML/SSO & OAuth2 (Google, Microsoft Azure AD, Okta)",
    ],
    architecture: {
      frontend: "Next.js 15, React 19, TypeScript, Tailwind CSS, TanStack Query",
      backend: "Node.js Microservices + Python FastAPI for compute-heavy tasks",
      database: "PostgreSQL with connection pooling (PgBouncer) + Redis Cache",
      aiOrchestration: "Built-in AI Assistant Copilot with streaming text responses",
      cloudDeploy: "Docker Containerized deployment on AWS ECS Fargate & CloudFront CDN",
    },
    deliverables: [
      "100% Client Source Code Git Repository Transfer",
      "Automated CI/CD GitHub Actions deployment pipeline",
      "Admin Backoffice Dashboard for monitoring subscriptions and logs",
      "Comprehensive Swagger/OpenAPI documentation & test suites",
    ],
    timeline: "4 Weeks Delivery",
    clientFeedback: {
      quote: "The web app they delivered is lightning fast. Our enterprise prospects love the UI and our onboarding speed increased by 300%.",
      author: "David Vance",
      role: "VP of Product, FinTech Horizon",
    },
  },
  {
    id: "ai-copilot-analytics-dashboard",
    title: "Real-Time AI Operations Command Center & Web App",
    category: "web-apps",
    categoryLabel: "Advanced Web Application",
    badge: "Mission Control • WebSockets",
    clientIndustry: "Logistics & Global Supply Chain",
    shortSnippet: "Real-time interactive web application featuring streaming event telemetry, interactive map tracking, and autonomous AI dispatching.",
    isAdvanceWebApp: true,
    tags: ["Next.js", "WebSockets", "FastAPI", "Mapbox GL", "Redis Pub/Sub", "Docker"],
    metrics: [
      { value: "100k+", label: "Daily Live Events" },
      { value: "<60ms", label: "WebSocket Latency" },
      { value: "42%", label: "Fuel & Route Savings" },
    ],
    problem:
      "Logistics dispatchers were managing 400+ freight vehicles through disconnected spreadsheets and antiquated desktop software, leading to constant blind spots and shipping delays.",
    solution:
      "Created a centralized, responsive web application that displays real-time GPS telemetry, monitors fleet statuses via bidirectional WebSockets, and automatically alerts drivers to re-route around traffic jams via AI reasoning.",
    webAppFeatures: [
      "Live interactive vector map rendering with Mapbox GL and real-time vehicle markers",
      "Bi-directional WebSockets pipeline for instantaneous dispatch status updates",
      "Dynamic filtering by carrier, trailer type, cargo temperature, and transit ETA",
      "Exportable regulatory compliance PDF reports generated server-side in under 1 second",
      "Dark / Light theme optimized for 24/7 command center monitor banks",
    ],
    architecture: {
      frontend: "Next.js, TypeScript, Tailwind CSS, Zustand, Mapbox GL",
      backend: "Python FastAPI with AsyncIO event loop & WebSockets",
      database: "TimescaleDB (Time-series PostgreSQL) + Redis for live caching",
      aiOrchestration: "Custom Route Optimization Algorithm + LangGraph Dispatch Agent",
      cloudDeploy: "AWS EKS (Kubernetes) with auto-scaling node groups",
    },
    deliverables: [
      "Full web app source code and Kubernetes Helm charts",
      "End-to-end integration with vehicle ELD hardware APIs",
      "Dispatcher operator manuals and training walkthrough video series",
    ],
    timeline: "5 Weeks Delivery",
    clientFeedback: {
      quote: "Our command center runs seamlessly on their web app. The live map and instant alerts cut down our dispatcher stress completely.",
      author: "Elena Rostova",
      role: "Chief Operating Officer, TransGlobal Freight",
    },
  },
  {
    id: "voice-ai-telephony-portal",
    title: "Autonomous Voice AI Telephony & Call Analytics Portal",
    category: "voice-ai",
    categoryLabel: "Voice AI & Web Portal",
    badge: "Sub-350ms Voice Telephony",
    clientIndustry: "Healthcare & Patient Intake",
    shortSnippet: "Full-stack web application connecting inbound telephony to conversational voice AI with real-time call transcript visualizer.",
    isAdvanceWebApp: true,
    tags: ["Next.js", "Twilio SIP", "Deepgram", "ElevenLabs", "WebRTC", "PostgreSQL"],
    metrics: [
      { value: "0.28s", label: "Audio Stream Latency" },
      { value: "24/7", label: "Zero Missed Calls" },
      { value: "98.4%", label: "Appointment Accuracy" },
    ],
    problem:
      "Medical clinic network missed over 35% of inbound booking calls during peak morning hours, leading to patient dissatisfaction and lost appointment revenue.",
    solution:
      "Engineered an autonomous voice agent integrated with Twilio SIP and streaming neural speech synthesis, coupled with a clinician web app dashboard to inspect recordings, live sentiment, and confirmed appointments.",
    webAppFeatures: [
      "Real-time audio frequency visualizer and live streaming call transcript HUD",
      "One-click audio playback with interactive synchronized transcript scrub bar",
      "Automated calendar conflict resolution and patient appointment slot booking",
      "Detailed sentiment analysis scorecard for every completed phone call",
    ],
    architecture: {
      frontend: "Next.js 15, Web Audio API, Tailwind CSS, Lucide Icons",
      backend: "Node.js WebSocket streaming gateway + Python FastAPI voice router",
      database: "PostgreSQL with HIPAA-compliant encrypted column storage",
      aiOrchestration: "Twilio Voice + Deepgram Nova-2 STT + ElevenLabs Turbo v2",
      cloudDeploy: "Private AWS VPC with KMS hardware security module encryption",
    },
    deliverables: [
      "Full web portal and telephony microservice source code",
      "HIPAA Business Associate compliance documentation",
      "Direct integration with Epic / Cerner EHR appointment endpoints",
    ],
    timeline: "3 Weeks Delivery",
    clientFeedback: {
      quote: "Patients are shocked by how natural the voice agent sounds, and our staff loves the clean web dashboard.",
      author: "Dr. Marcus Chen",
      role: "Managing Director, Apex Health Group",
    },
  },
  {
    id: "document-ocr-invoice-engine",
    title: "AI Document & Financial Invoice Extraction Web Application",
    category: "document-ocr",
    categoryLabel: "Document Automation Web App",
    badge: "100% Automated OCR",
    clientIndustry: "Accounting & Global Trade",
    shortSnippet: "Drag-and-drop web application that extracts multi-currency line items from vendor PDFs and automatically reconciles against ERP.",
    isAdvanceWebApp: true,
    tags: ["Next.js", "AWS Textract", "Claude 3.5", "QuickBooks API", "Tailwind CSS"],
    metrics: [
      { value: "12,000+", label: "Monthly Invoices Parsed" },
      { value: "0%", label: "Manual Keying Errors" },
      { value: "15s", label: "Processing per 50-Page PDF" },
    ],
    problem:
      "Accounting firm team of 8 accountants spent 30+ hours weekly manually transcribing irregular international invoices, customs receipts, and bills of lading into QuickBooks.",
    solution:
      "Developed a custom document automation web app where operators upload bulk PDFs; our AI visual parser extracts tables, cross-checks PO numbers, and automatically syncs balanced ledger entries.",
    webAppFeatures: [
      "Drag-and-drop bulk file uploader with real-time multi-file progress tracking",
      "Split-screen interactive verification viewer (original PDF on left, parsed data on right)",
      "One-click field correction with instant automated learning memory",
      "Automated reconciliation status badges (Matched, Discrepancy, ERP Sync Pending)",
    ],
    architecture: {
      frontend: "Next.js 15, PDF.js rendering canvas, Tailwind CSS",
      backend: "Python Celery background workers + AWS Lambda serverless OCR runners",
      database: "MongoDB for flexible JSON document storage + PostgreSQL audit log",
      aiOrchestration: "AWS Textract + Claude 3.5 Sonnet extraction schema parser",
      cloudDeploy: "AWS S3 encrypted buckets + EC2 private compute nodes",
    },
    deliverables: [
      "Complete web application codebase with full source code ownership",
      "Pre-configured QuickBooks and SAP bi-directional API connectors",
      "Staff onboarding guides and automated failure alerting webhook setup",
    ],
    timeline: "3 Weeks Delivery",
    clientFeedback: {
      quote: "What used to take an entire accounting team days now finishes automatically while we sleep. It paid for itself in 30 days.",
      author: "Sarah Lindemann",
      role: "Head of Finance, Nordic Import Hub",
    },
  },
  {
    id: "b2b-autonomous-sales-agent",
    title: "Autonomous B2B Lead Prospecting & Outreach Web Platform",
    category: "ai-agents",
    categoryLabel: "AI Agent Web App",
    badge: "Autonomous SDR",
    clientIndustry: "B2B SaaS & Tech Agencies",
    shortSnippet: "Self-driving sales development web portal that discovers high-intent prospects, writes hyper-personalized emails, and fills sales calendars.",
    isAdvanceWebApp: true,
    tags: ["Next.js", "LangChain", "Apollo API", "HubSpot", "OpenAI GPT-4o"],
    metrics: [
      { value: "4.8×", label: "Higher Meeting Rate" },
      { value: "18,000", label: "Verified Leads Discovered" },
      { value: "85%", label: "Sales Rep Hours Saved" },
    ],
    problem:
      "Founders and SDRs spent excessive time manual scraping LinkedIn, writing generic cold outreach templates, and recording follow-ups, yielding low conversion rates.",
    solution:
      "Built an AI-driven outreach web platform with autonomous agents that conduct deep company prospect research, synthesize tailored value propositions, and manage follow-ups.",
    webAppFeatures: [
      "Dynamic prospect search criteria builder (by headcount, funding round, tech stack)",
      "Live preview sandbox to review and approve generated email drafts before sending",
      "Email health and deliverability monitoring dashboard (SPF/DKIM/DMARC warmup scores)",
      "Direct integration with Google Workspace, Outlook 365, and HubSpot CRM",
    ],
    architecture: {
      frontend: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
      backend: "FastAPI with asynchronous message queue (BullMQ + Redis)",
      database: "Supabase PostgreSQL with Row Level Security",
      aiOrchestration: "LangChain agents + Claude 3.5 Sonnet + Web search scrapers",
      cloudDeploy: "Vercel Enterprise + AWS worker nodes",
    },
    deliverables: [
      "Turnkey web platform deployment to client domain",
      "Domain warmup configuration with automated secondary sending inboxes",
      "Customized objection-handling agent rules tailored to client offerings",
    ],
    timeline: "2.5 Weeks Delivery",
    clientFeedback: {
      quote: "Our sales team calendar is consistently packed with enterprise leads without our reps burning out on manual research.",
      author: "Alex Tremblay",
      role: "CRO, CloudScale Systems",
    },
  },
  {
    id: "enterprise-rag-knowledge-portal",
    title: "Secure Enterprise RAG Vector Knowledge Vault & Search Web App",
    category: "saas",
    categoryLabel: "Enterprise AI Web App",
    badge: "Zero Data Retention",
    clientIndustry: "Legal & Corporate Compliance",
    shortSnippet: "Private corporate intelligence search portal allowing teams to query tens of thousands of contracts and policies with citation links.",
    isAdvanceWebApp: true,
    tags: ["Next.js", "Pinecone", "LlamaIndex", "AES-256", "FastAPI"],
    metrics: [
      { value: "0.18s", label: "Semantic Search Speed" },
      { value: "100%", label: "Private VPC Isolation" },
      { value: "0%", label: "Hallucination via Citations" },
    ],
    problem:
      "Legal counsel and operations teams needed to cross-reference 50,000+ proprietary NDA contracts, vendor agreements, and compliance standards without leaking confidential IP to public AI models.",
    solution:
      "Engineered an on-premise / private cloud web portal with hybrid vector search (Pinecone) that returns answers with page-level highlighted PDF citations and strict air-gapped security.",
    webAppFeatures: [
      "Lightning-fast natural language semantic query engine with autocomplete suggestions",
      "Interactive inline document viewer highlighting exact excerpt sources and page numbers",
      "Role-based document access restrictions preventing unauthorized department access",
      "Exportable legal audit memo generator with timestamped citations",
    ],
    architecture: {
      frontend: "Next.js 15, TypeScript, Tailwind CSS, Radix UI",
      backend: "Python FastAPI with high-concurrency vector embedding pipeline",
      database: "Pinecone Vector Store + PostgreSQL metadata store",
      aiOrchestration: "LlamaIndex hybrid RAG + Private Bedrock Claude 3.5 Sonnet",
      cloudDeploy: "Client AWS VPC with VPC Endpoints and AES-256 KMS encryption",
    },
    deliverables: [
      "Full web portal source code and vector embedding scripts",
      "Security compliance certification audit report",
      "Document ingestion CLI for scheduled nightly indexing",
    ],
    timeline: "3 Weeks Delivery",
    clientFeedback: {
      quote: "Our attorneys find the exact clause across 50,000 documents in seconds. The accuracy and citation links give us 100% confidence.",
      author: "Rachel Sterling",
      role: "Partner & General Counsel, Sterling & Croft LLP",
    },
  },
  {
    id: "multi-agent-inventory-swarm",
    title: "Autonomous Multi-Agent Swarm for Supply Chain & Inventory Web App",
    category: "workflow",
    categoryLabel: "Swarm Orchestration Web App",
    badge: "Self-Healing Swarm",
    clientIndustry: "E-Commerce & Omnichannel Retail",
    shortSnippet: "High-tech web app monitoring an autonomous swarm of AI agents handling cross-border inventory balancing and purchase order dispatch.",
    isAdvanceWebApp: true,
    tags: ["Next.js", "LangGraph", "Python", "Kubernetes", "PostgreSQL"],
    metrics: [
      { value: "6,800+", label: "Daily Autonomous Actions" },
      { value: "99.98%", label: "Self-Healing Pipeline Uptime" },
      { value: "3.2x", label: "Inventory Turnover Speed" },
    ],
    problem:
      "Omnichannel retailer suffered frequent stockouts across 4 fulfillment hubs due to disconnected Shopify, Amazon, and ERP spreadsheets.",
    solution:
      "Architected a collaborative swarm of specialized agents (Supervisor, Inventory Auditor, Supplier Negotiator, Dispatch Bot) managed via an executive monitoring web application.",
    webAppFeatures: [
      "Visual real-time state machine visualizer showing agent inter-communication steps",
      "Live kill-switch and human-in-the-loop manual override controls",
      "Automated supplier replenishment triggers with algorithmic margin threshold checks",
      "Comprehensive telemetry log stream with latency, token usage, and cost tracking",
    ],
    architecture: {
      frontend: "Next.js, Tailwind CSS, Motion, Recharts",
      backend: "Python with LangGraph state machines + Celery workers",
      database: "PostgreSQL with read replicas + Redis state queues",
      aiOrchestration: "LangGraph Multi-Agent Hierarchy (Supervisor + Worker agents)",
      cloudDeploy: "Private AWS EKS Cluster with Prometheus and Grafana monitoring",
    },
    deliverables: [
      "Full web dashboard and agent swarm codebases",
      "Self-healing error retry scripts and webhook receivers",
      "Comprehensive runbook documentation for client engineering team",
    ],
    timeline: "4.5 Weeks Delivery",
    clientFeedback: {
      quote: "Our stockouts dropped to virtually zero. The web dashboard gives us complete peace of mind that the agents are executing reliably.",
      author: "Tariq Mansoor",
      role: "VP of Supply Chain, Omnix Retail Group",
    },
  },
  {
    id: "advanced-custom-crm-automation-hub",
    title: "Next-Gen Intelligent CRM & Omnichannel Communication Web App",
    category: "web-apps",
    categoryLabel: "Advanced Web Application",
    badge: "Omnichannel Hub",
    clientIndustry: "Real Estate & Luxury Brokerage",
    shortSnippet: "Custom web app unifying WhatsApp Business API, SMS, voice calls, and CRM pipeline tracking into a single unified client communication inbox.",
    isAdvanceWebApp: true,
    tags: ["Next.js 15", "WhatsApp API", "Twilio", "Tailwind CSS", "PostgreSQL", "WebSockets"],
    metrics: [
      { value: "45s", label: "Average Lead Response Time" },
      { value: "100%", label: "Omnichannel Sync" },
      { value: "$2.4M", label: "Additional Pipeline Closed" },
    ],
    problem:
      "Real estate brokerage agents were losing hot buyer inquiries across WhatsApp, email, and portal inquiries because leads were not consolidated in one place.",
    solution:
      "Constructed a high-speed unified web app that centralizes multi-channel chats, automatically drafts AI responses based on property listings, and alerts agents instantly.",
    webAppFeatures: [
      "Unified shared inbox for WhatsApp, Email, SMS, and website chat with live typing indicators",
      "Interactive Kanban pipeline with drag-and-drop deal stage progression",
      "AI Smart Replies trained on active property inventory catalogs and neighborhood data",
      "Automated property tour booking with calendar invites and reminder sequences",
    ],
    architecture: {
      frontend: "Next.js 15, React 19, Tailwind CSS, WebSockets client",
      backend: "Node.js WebSocket gateway + FastAPI webhook dispatcher",
      database: "PostgreSQL with Realtime extensions + Redis message buffer",
      aiOrchestration: "Meta Graph API (WhatsApp Cloud) + Claude 3.5 Sonnet",
      cloudDeploy: "Docker containers on AWS Lightsail / ECS with SSL terminator",
    },
    deliverables: [
      "Full production web application with 100% source code handover",
      "WhatsApp Business API official verification and template management setup",
      "Staff training workshop and dedicated SLA handover",
    ],
    timeline: "3.5 Weeks Delivery",
    clientFeedback: {
      quote: "Our agents responded to luxury buyers 10x faster. The web app is super intuitive and eliminated all our spreadsheet chaos.",
      author: "Camilla DeLuca",
      role: "Managing Broker, DeLuca Prime Estates",
    },
  },
];

