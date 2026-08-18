# 🟢 TCB Master Brand — Emerald Green Design System & Color Guide

This document defines the official **Global Brand Identity**, color codes, component patterns, and UI guidelines for the entire **TCB Ecosystem** (including TCB Store, TCB School, TCB Platform, and all future TCB micro-SaaS products).

---

## 🎨 1. Global Core Brand Color Palette

| Token Role | Tailwind Class | HEX Code | Purpose & Universal Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand Accent** | `emerald-600` | `#059669` | Primary CTAs, active buttons, active tabs, floating triggers. |
| **Primary Hover / Dark** | `emerald-700` | `#047857` | Hover states for primary buttons, pressed states. |
| **Deep Brand Accent** | `emerald-900` / `emerald-950` | `#064e3b` / `#022c22` | Master headers, main title text, dark contrast chips. |
| **Light Tint Background** | `emerald-50` | `#ecfdf5` | Page tint backgrounds, card fills, active row highlights. |
| **Border / Outline** | `emerald-200` | `#a7f3d0` | Card borders, input field outlines, inactive button borders. |
| **Medium Border / Focus** | `emerald-300` / `emerald-500` | `#6ee7b7` / `#10b981` | Focus ring on input fields, hover outlines. |

---

## 🛠️ 2. Official Utility Classes (`app/globals.css`)

Applicable across all TCB Web Applications:

### A. Primary Solid Button (`.btn-emerald`)
Used for primary user actions across all TCB modules.
```css
.btn-emerald {
  @apply bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold border border-emerald-600 shadow-sm shadow-emerald-600/20 active:scale-95 transition-all;
}
```

### B. Secondary / Inactive Outlined Button (`.btn-light`)
Used for inactive tab switches, outline buttons, and secondary options.
```css
.btn-light {
  @apply bg-white border border-emerald-200 text-emerald-950 font-bold hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-700 active:scale-95 transition-all;
}
```

### C. Standard Card Container (`.card-bordered`)
Used for standard data cards, forms, and modules.
```css
.card-bordered {
  @apply rounded-2xl border border-emerald-200 bg-white p-5 shadow-xs;
}
```

### D. Hero Metric Card (`.card-hero-emerald`)
Used for top banner summary metrics, hero cards, and status panels.
```css
.card-hero-emerald {
  @apply rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-xs;
}
```

---

## 🎯 3. Universal TCB UI Rules

1. **Active State Rule**:
   * Any active tab, selected filter, or primary trigger **MUST** use `bg-emerald-600 text-white border-emerald-600`.
2. **Inactive State Rule**:
   * Any inactive tab, secondary option, or outline button **MUST** use `bg-white border-emerald-200 text-emerald-950 hover:bg-emerald-50`.
3. **Form & Input Controls**:
   * All form inputs **MUST** use `border border-emerald-200 bg-white text-zinc-900 focus:border-emerald-600 focus:outline-none`.
4. **Modals & Overlays**:
   * Modal backdrops use `bg-emerald-950/40 backdrop-blur-sm`.

---

## 📱 4. Responsiveness Standard

* **Navbar & Tabs**: Collapsible horizontal scroll bars (`overflow-x-auto scrollbar-none`) on mobile screens (`<768px`).
* **Tables & Grids**: Enclosed in responsive scroll containers with rounded emerald borders.

---

*Last Updated: 2026-08-16 • TCB Global Brand Design System Standard*
