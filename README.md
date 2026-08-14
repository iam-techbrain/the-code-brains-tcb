# TCB — Industry-Specific Micro-SaaS Ecosystem

The Code Brains (TCB) Micro-SaaS Platform Landing Page is a modern, high-conversion web application showcasing specialized business management solutions tailored for Retail Stores, Personal Finance, and Educational Institutes.

---

## Overview

TCB Ecosystem powers multi-mode operations for modern businesses and educational institutions with dedicated dashboards and real-time management tools:

- **TCB Store (Retail POS & Expense Management)**: Point of Sale (POS), inventory tracking, expense management, and Party Khata ledgers.
- **TCB School (Educational & Coaching Management)**: Student management, attendance tracking, automated fee reminders, and performance analytics for coaching centers and schools.

---

## Key Features

- **Emerald & Clean Modern UI**: High-contrast, accessibility-first design language built with Tailwind CSS.
- **Fully Responsive Layout**: Seamless user experience across mobile, tablet, and desktop viewports.
- **Next.js 14 App Router**: Server-rendered performance and optimized SEO metadata.
- **Interactive Showcase**: Real-time interactive previews of TCB Store and TCB School dashboards.
- **Flexible Pricing**: Transparent pricing models for solo business owners, growing teams, and enterprise institutes.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Inter / Modern System UI

---

## Getting Started

### Prerequisites

Ensure you have **Node.js 18.x** or higher installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Afzalalam-Afzuu/tcb-micro-saas-platform-landing-page.git
   cd tcb-micro-saas-platform-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Structure

```text
├── app/
│   ├── globals.css         # Global Tailwind styles & emerald theme tokens
│   ├── layout.tsx          # Root layout & SEO Metadata
│   ├── page.tsx            # Main TCB Ecosystem landing page
│   ├── school/page.tsx     # TCB School dedicated view
│   └── store/page.tsx      # TCB Store dedicated view
├── components/
│   ├── EcosystemHeader.tsx # Top navigation banner
│   ├── Hero.tsx            # Main hero section
│   ├── Features.tsx        # Core features breakdown
│   ├── InteractiveShowcase.tsx # Live interactive dashboard preview
│   ├── Pricing.tsx         # Subscription plans
│   ├── Footer.tsx          # Modern footer with branding
│   └── school/ & store/    # Specialized dashboard mockups
├── public/                 # Static assets & logos
├── package.json
└── tailwind.config.ts
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server at `localhost:3000` |
| `npm run build` | Builds the production bundle |
| `npm run start` | Runs the built production server |
| `npm run lint` | Runs ESLint checks across the codebase |

---

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page.

---

## License

Designed and developed by **The Code Brains (TCB)**.
