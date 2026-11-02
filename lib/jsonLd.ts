import process from "node:process";
import { BLOG_POSTS, type BlogPost } from "@/data/blogData";
import { PROJECTS_LIST } from "@/data/projectsData";

export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://thecodebrains.com").replace(
    /\/+$/,
    ""
  );

/**
 * Global Organization & ProfessionalService schema for Google & AI agents.
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: "The Code Brains",
    alternateName: ["TCB", "The Code Brains AI Studio", "TCB AI Studio"],
    url: SITE_URL,
    logo: `${SITE_URL}/tcb-logo.png`,
    image: `${SITE_URL}/og-image.png`,
    description:
      "TCB (The Code Brains) designs and deploys custom autonomous AI agents, 24/7 RAG chatbots, low-latency AI voice callers, and enterprise workflow automations with 100% source code ownership and zero vendor lock-in.",
    email: "contact@thecodebrains.com",
    priceRange: "$$",
    currenciesAccepted: "USD, INR, EUR, GBP, AED, CAD, AUD",
    paymentAccepted: "Credit Card, Bank Wire, Stripe",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Worldwide" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "South Africa" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Autonomous AI Agents",
      "AI Voice Calling & Telephony",
      "Retrieval-Augmented Generation (RAG)",
      "Workflow Automation (n8n, Make)",
      "Vector Databases (Pinecone, Qdrant)",
      "Large Language Models (OpenAI, Claude, Gemini)",
      "Speech-to-Text & Text-to-Speech (Deepgram, ElevenLabs)",
      "Enterprise Private AWS Cloud Deployment",
      "Document AI & OCR Automation",
    ],
    sameAs: [
      "https://www.linkedin.com/company/145366833/",
      "https://www.facebook.com/profile.php?id=61590711261508",
      "https://www.youtube.com/@TheCodeBrainsHub",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support & Architecture Consultation",
        email: "contact@thecodebrains.com",
        availableLanguage: ["English", "Hindi"],
        areaServed: "Worldwide",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TCB Custom AI Solutions & Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Autonomous AI Agents",
            description:
              "Autonomous AI agents that qualify inbound leads, schedule meetings, triage requests, and interface with CRMs 24/7.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Voice Calling & Telephony Agents",
            description:
              "Sub-350ms latency voice callers powered by Twilio, Deepgram Nova-2, and ElevenLabs with natural human conversation flow.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise RAG Knowledge Vaults",
            description:
              "Vectorized knowledge retrieval systems running on Pinecone/Qdrant delivering hallucination-free domain answers across websites and internal channels.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Step Workflow Automations (n8n & Make)",
            description:
              "Production-grade workflow pipelines integrating CRMs, databases, messaging channels, and internal APIs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Document & Invoice OCR Extraction",
            description:
              "Vision LLM pipelines extracting structured JSON from PDFs, handwritten contracts, bills of lading, and invoices with 99%+ accuracy.",
          },
        },
      ],
    },
  };
}

/**
 * WebSite schema with internal search or action points.
 */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "The Code Brains (TCB)",
    alternateName: "TCB AI Studio",
    description:
      "Custom AI Agents & Intelligent Workflow Automation Services Studio. Automate operations, scale lead generation, and build enterprise AI pipelines.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

/**
 * BreadcrumbList schema helper
 */
export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * FAQPage Schema for Google Rich Snippets & AI Agent Q&A extraction.
 */
export function getFAQPageJsonLd() {
  const faqs = [
    {
      question:
        "How does TCB's AI Orchestration integrate with our legacy enterprise systems?",
      answer:
        "Our AI orchestration engine connects directly to your existing tech stack via secure enterprise RESTful APIs, bidirectional webhooks, event-driven message brokers (Kafka/RabbitMQ), and n8n pipelines. Whether you rely on Salesforce, SAP, Oracle, custom SQL data warehouses, or bespoke proprietary tools, we integrate with zero downtime and strict adherence to your network boundary policies.",
    },
    {
      question:
        "How fast can an enterprise-grade AI agent or workflow be built and deployed?",
      answer:
        "Standard operational workflows (such as multi-channel lead qualification or automated billing dispute triage) are typically ready for staging within 3 to 5 business days. Complex multi-agent RAG vector architectures, autonomous voice telephony systems, and custom ERP synchronizations typically achieve full production deployment within 2 to 3 weeks.",
    },
    {
      question:
        "How is our proprietary corporate data protected during LLM reasoning?",
      answer:
        "Security and compliance are non-negotiable. We deploy isolated, tenant-dedicated vector datastores (Pinecone / Qdrant) with end-to-end AES-256 and TLS 1.3 encryption. We utilize enterprise zero-data-retention agreements with LLM providers—ensuring your customer records, internal code, and business intelligence are never stored or used to train third-party public foundation models.",
    },
    {
      question:
        "What latency and natural conversational capabilities do AI Voice agents provide?",
      answer:
        "Our autonomous voice systems achieve ultra-low response latency under 350ms using optimized streaming neural speech-to-text (Deepgram/Twilio), high-throughput LLM reasoning, and natural emotional voice synthesis (ElevenLabs/Vapi). Systems intelligently handle ambient noise, mid-sentence human interruptions, dynamic CRM lookups, and deterministic escalation to human agents.",
    },
    {
      question:
        "What are the recurring cloud hosting and LLM token operational costs?",
      answer:
        "We operate on a 100% transparent direct-infrastructure model. AWS/GCP cloud resources and direct LLM API usage tokens are billed directly to your corporate accounts. We never apply agency markups or hidden margin fees on your compute or tokens.",
    },
    {
      question:
        "Do we retain full intellectual property and source code ownership?",
      answer:
        "Yes, completely. Upon final delivery and sign-off, all custom agent source code, workflow definitions, Docker deployment manifests, and vector schema configurations are transferred directly to your organization's internal GitHub repositories. You maintain 100% IP ownership with zero vendor lock-in.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Home Page combined schema
 */
export function getHomePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "TCB — Custom AI Agents & Intelligent Workflow Automation Studio",
        description:
          "We design and deploy custom autonomous AI agents, voice telephony systems, 24/7 RAG knowledge vaults, and enterprise workflow automations tailored for your infrastructure.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en-US",
      },
      getFAQPageJsonLd(),
    ],
  };
}

/**
 * Projects / Portfolio Page schema (CollectionPage & ItemList)
 */
export function getProjectsPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects#webpage`,
        url: `${SITE_URL}/projects`,
        name: "Enterprise Projects & AI Applications Portfolio | TCB",
        description:
          "Explore production AI agents, voice telephony bots, document OCR pipelines, and advanced web applications deployed by TCB.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
      },
      {
        "@type": "ItemList",
        name: "TCB Production Deployments & Case Studies",
        itemListElement: PROJECTS_LIST.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            applicationCategory: project.categoryLabel,
            operatingSystem: "Cloud, AWS, Web",
            description: `${project.shortSnippet} Solution: ${project.solution}`,
            keywords: project.tags.join(", "),
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          },
        })),
      },
      getBreadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Projects", url: "/projects" },
      ]),
    ],
  };
}

/**
 * Blog Hub Page schema
 */
export function getBlogPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blog#webpage`,
        url: `${SITE_URL}/blog`,
        name: "TCB Engineering Blog — AI Agents, Voice Telephony & Automation",
        description:
          "Technical guides, architecture breakdowns, and production benchmarks on autonomous AI agents, RAG systems, voice callers, and enterprise automations.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
      },
      {
        "@type": "ItemList",
        name: "TCB AI Engineering Articles",
        itemListElement: BLOG_POSTS.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/blog/${post.slug}`,
          name: post.title,
        })),
      },
      getBreadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
      ]),
    ],
  };
}

/**
 * Individual Blog Post schema (BlogPosting / TechArticle)
 */
export function getBlogPostJsonLd(post: BlogPost) {
  const publishedDateIso = new Date(post.publishDate).toISOString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/blog/${post.slug}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${post.slug}`,
          url: `${SITE_URL}/blog/${post.slug}`,
          name: post.title,
        },
        headline: post.title,
        description: post.excerpt,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: publishedDateIso,
        dateModified: publishedDateIso,
        inLanguage: "en-US",
        articleSection: post.category,
        keywords: post.tags.join(", "),
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        image: `${SITE_URL}/og-image.png`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${post.slug}`,
        },
      },
      getBreadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${post.slug}` },
      ]),
    ],
  };
}

/**
 * Contact Page schema
 */
export function getContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: "Contact & Architecture Consultation | The Code Brains (TCB)",
        description:
          "Schedule a free enterprise AI audit or discuss custom autonomous AI agents, voice callers, and workflow automations with TCB engineers.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      getBreadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" },
      ]),
    ],
  };
}

