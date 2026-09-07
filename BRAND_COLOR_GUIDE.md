# 🔵 TCB Master Brand — Royal Blue (`rgb(48, 94, 255)`) Design System & Color Guide

This document defines the official **Global Brand Identity**, color codes, component patterns, and UI guidelines for the entire **TCB Ecosystem** (including TCB Store, TCB School, TCB Platform, and all future TCB micro-SaaS products).

---

## 🎨 1. Global Core Brand Color Palette

| Token Role | Tailwind Class / CSS | HEX / RGB Code | Purpose & Universal Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand Accent** | `brand-500` / `brand-600` | `rgb(48, 94, 255)` / `#305EFF` | Primary CTAs, active buttons, active tabs, floating triggers. |
| **Primary Hover / Dark** | `brand-700` | `#1F47E0` / `rgb(31, 71, 224)` | Hover states for primary buttons, active pressed states. |
| **Deep Dark Contrast** | `brand-900` / `brand-950` | `#061229` / `#030A19` | Master headers, developer API code blocks, dark contrast chips. |
| **Light Tint Background** | `brand-50` / `brand-100` | `#F4F7FF` / `#EFF4FF` | Page tint backgrounds, card fills, active row highlights. |
| **Border / Outline** | `brand-200` | `#D0DDFD` | Card borders, input field outlines, inactive button borders. |
| **Medium Border / Focus** | `brand-300` / `brand-400` | `#96B4FF` / `#618DFF` | Focus ring on input fields, hover outlines. |

---

## 🛠️ 2. Official Utility Classes (`app/globals.css`)

Applicable across all TCB Web Applications:

### A. Primary Solid Button (`.btn-brand` / `.btn-blue`)
Used for primary user actions across all TCB modules.
```css
.btn-brand {
  @apply bg-[#305eff] hover:bg-[#1f47e0] text-white font-extrabold border border-[#305eff] shadow-sm shadow-[#305eff]/25 active:scale-95 transition-all;
}
```

### B. Secondary / Inactive Outlined Button (`.btn-light`)
Used for inactive tab switches, outline buttons, and secondary options.
```css
.btn-light {
  @apply bg-white border border-brand-200 text-slate-900 font-bold hover:bg-brand-50 hover:border-brand-400 hover:text-brand-600 active:scale-95 transition-all;
}
```

### C. Standard Card Container (`.card-bordered`)
Used for standard data cards, forms, and modules.
```css
.card-bordered {
  @apply rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-brand-300 hover:shadow-md;
}
```

### D. Hero Metric Card (`.card-hero-brand`)
Used for top banner summary metrics, hero cards, and status panels.
```css
.card-hero-brand {
  @apply rounded-2xl border border-brand-200 bg-brand-50/80 p-5 shadow-xs;
}
```

---

## 🎯 3. Universal TCB UI Rules

1. **Active State Rule**:
   * Any active tab, selected filter, or primary trigger **MUST** use `bg-[#305eff] text-white border-[#305eff]`.
2. **Inactive State Rule**:
   * Any inactive tab, secondary option, or outline button **MUST** use `bg-white border-brand-200 text-slate-900 hover:bg-brand-50`.
3. **Form & Input Controls**:
   * All form inputs **MUST** use `border border-brand-200 bg-white text-slate-900 focus:border-[#305eff] focus:outline-none`.
4. **Modals & Overlays**:
   * Modal backdrops use `bg-slate-950/50 backdrop-blur-sm`.

---

## 📱 4. Responsiveness Standard

* **Navbar & Tabs**: Collapsible horizontal scroll bars (`overflow-x-auto scrollbar-none`) on mobile screens (`<768px`).
* **Tables & Grids**: Enclosed in responsive scroll containers with rounded blue borders.

---

*Last Updated: 2026-09-07 • TCB Global Brand Design System Standard (`rgb(48, 94, 255)`)*

