"use client";

import { useState } from "react";
import {
  Package,
  Plus,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  ShoppingCart,
  Send,
  Filter,
  Sparkles,
  Barcode,
  Layers,
  ChevronDown,
  Tag,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export type ProductCardItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  costPrice: number;
  stock: number;
  minStock: number;
  sku: string;
  gstRate: number;
  badge?: string;
  iconBg: string;
  accentBorder: string;
};

const MASTER_PRODUCT_DROPDOWN: ProductCardItem[] = [
  {
    id: "p-1",
    name: "Fortune Sunflower Oil (1L)",
    category: "Grocery",
    price: 165,
    costPrice: 140,
    stock: 42,
    minStock: 10,
    sku: "OIL-1001",
    gstRate: 5,
    badge: "Best Seller",
    iconBg: "bg-amber-50 text-amber-700 border-amber-200",
    accentBorder: "border-amber-200 hover:border-amber-400",
  },
  {
    id: "p-2",
    name: "India Gate Basmati Rice (5kg)",
    category: "Grocery",
    price: 620,
    costPrice: 530,
    stock: 7,
    minStock: 12,
    sku: "RICE-502",
    gstRate: 5,
    badge: "Low Stock Alert",
    iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accentBorder: "border-emerald-200 hover:border-emerald-400",
  },
  {
    id: "p-3",
    name: "Amul Pasteurized Butter (500g)",
    category: "Dairy",
    price: 275,
    costPrice: 240,
    stock: 4,
    minStock: 8,
    sku: "DAIRY-004",
    gstRate: 0,
    badge: "Reorder Soon",
    iconBg: "bg-blue-50 text-blue-700 border-blue-200",
    accentBorder: "border-blue-200 hover:border-blue-400",
  },
  {
    id: "p-4",
    name: "Tata Vaccum Salt (1kg)",
    category: "Grocery",
    price: 28,
    costPrice: 22,
    stock: 120,
    minStock: 20,
    sku: "SALT-101",
    gstRate: 0,
    badge: "High Turnover",
    iconBg: "bg-zinc-100 text-zinc-800 border-zinc-200",
    accentBorder: "border-zinc-200 hover:border-emerald-400",
  },
  {
    id: "p-5",
    name: "Wireless Barcode Scanner (USB)",
    category: "Electronics",
    price: 1850,
    costPrice: 1400,
    stock: 15,
    minStock: 5,
    sku: "DEV-BAR-99",
    gstRate: 18,
    badge: "POS Hardware",
    iconBg: "bg-purple-50 text-purple-700 border-purple-200",
    accentBorder: "border-purple-200 hover:border-purple-400",
  },
  {
    id: "p-6",
    name: "Class 10 Science & Maths Book Bundle",
    category: "Education",
    price: 1200,
    costPrice: 900,
    stock: 25,
    minStock: 10,
    sku: "EDU-BND-10",
    gstRate: 0,
    badge: "TCB School Kit",
    iconBg: "bg-rose-50 text-rose-700 border-rose-200",
    accentBorder: "border-rose-200 hover:border-rose-400",
  },
  {
    id: "p-7",
    name: "Thermal Receipt Paper Roll (80mm)",
    category: "Electronics",
    price: 45,
    costPrice: 30,
    stock: 200,
    minStock: 30,
    sku: "PAP-80MM",
    gstRate: 12,
    badge: "Bulk Stock",
    iconBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    accentBorder: "border-cyan-200 hover:border-cyan-400",
  },
];

export default function ProductCardShowcase() {
  const [selectedDropdownId, setSelectedDropdownId] = useState<string>(MASTER_PRODUCT_DROPDOWN[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Cards currently active in the list view
  const [activeCards, setActiveCards] = useState<ProductCardItem[]>([
    MASTER_PRODUCT_DROPDOWN[0],
    MASTER_PRODUCT_DROPDOWN[1],
    MASTER_PRODUCT_DROPDOWN[2],
    MASTER_PRODUCT_DROPDOWN[4],
  ]);

  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  // Add selected product from dropdown into active cards list
  const handleAddFromDropdown = () => {
    const found = MASTER_PRODUCT_DROPDOWN.find((p) => p.id === selectedDropdownId);
    if (!found) return;

    if (activeCards.some((card) => card.id === found.id)) {
      setNotificationMsg(`"${found.name}" is already active in your card view!`);
      setTimeout(() => setNotificationMsg(null), 3000);
      return;
    }

    setActiveCards((prev) => [found, ...prev]);
    setNotificationMsg(`Added "${found.name}" to Card Showcase!`);
    setTimeout(() => setNotificationMsg(null), 3000);
  };

  // Remove card from list
  const handleRemoveCard = (id: string) => {
    setActiveCards((prev) => prev.filter((card) => card.id !== id));
  };

  // Filter cards by category
  const filteredCards =
    selectedCategory === "All"
      ? activeCards
      : activeCards.filter((card) => card.category === selectedCategory);

  return (
    <section id="products-catalog" className="relative border-t border-zinc-200/60 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-xs">
            <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
            Interactive Product Catalog &amp; Card Manager
          </div>
          <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Select products to render in your live card list
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Pick any product item from the dropdown menu to instantly generate high-resolution inventory cards.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DROPDOWN SELECTOR BAR — PREMIUM WHITE CARD */}
        {/* ========================================================================= */}
        <div className="mt-12 rounded-3xl border border-zinc-200/90 bg-gradient-to-r from-zinc-50/80 via-white to-zinc-50/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            
            {/* Dropdown Selector */}
            <div className="flex-1">
              <label className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-zinc-700">
                <Layers className="h-4 w-4 text-emerald-600" />
                Select Product Item from Menu:
              </label>
              <div className="relative">
                <select
                  value={selectedDropdownId}
                  onChange={(e) => setSelectedDropdownId(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-zinc-300 bg-white px-4 py-3.5 pr-10 text-xs font-bold text-zinc-900 shadow-xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  {MASTER_PRODUCT_DROPDOWN.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      📦 {prod.name} — ₹{prod.price} ({prod.category} | Stock: {prod.stock})
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-4 h-4 w-4 text-zinc-400" />
              </div>
            </div>

            {/* Action Button: Add to List */}
            <button
              onClick={handleAddFromDropdown}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#059669] to-emerald-700 px-7 py-3.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:from-emerald-500 hover:to-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <Plus className="h-4 w-4" />
              <span>Add Product to Card List</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200/80 pt-5">
            <div className="flex items-center gap-2">
              <Filter className="h-3.5 w-3.5 text-zinc-400" />
              <span className="text-xs font-bold text-zinc-700">Filter Cards:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Grocery", "Dairy", "Electronics", "Education"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white text-zinc-600 hover:bg-zinc-200/60 border border-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Toast Notification Banner */}
          {notificationMsg && (
            <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-emerald-100 p-3.5 text-xs font-bold text-emerald-800 border border-emerald-300 shadow-2xs">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
              <span>{notificationMsg}</span>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* CARDS GRID DISPLAY (HIGH-END CARD DESIGN) */}
        {/* ========================================================================= */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
              Active Product Cards ({filteredCards.length})
            </span>
            <span className="text-xs text-emerald-600 font-semibold">
              ✨ Dynamic Live Cards
            </span>
          </div>

          {filteredCards.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-zinc-300 p-12 text-center bg-zinc-50/50">
              <Package className="mx-auto h-12 w-12 text-zinc-300" />
              <h3 className="mt-3 text-sm font-bold text-zinc-700">No Cards in this view</h3>
              <p className="mt-1 text-xs text-zinc-400">Select an item from the dropdown menu above and click Add Product.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCards.map((card) => {
                const isLowStock = card.stock <= card.minStock;
                const profitMargin = card.price - card.costPrice;

                return (
                  <div
                    key={card.id}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.15)] ${card.accentBorder}`}
                  >
                    {/* Top Pill Header */}
                    <div>
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                        <span className="rounded-lg bg-zinc-100 px-2.5 py-1 text-[11px] font-extrabold text-zinc-800">
                          {card.category}
                        </span>

                        {isLowStock ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-900 border border-amber-200">
                            <AlertTriangle className="h-3 w-3 text-amber-700" /> Low Stock ({card.stock})
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-900 border border-emerald-200">
                            <CheckCircle2 className="h-3 w-3 text-emerald-700" /> Stock: {card.stock} units
                          </span>
                        )}
                      </div>

                      {/* Product Avatar & Title */}
                      <div className="mt-4 flex items-start gap-3.5">
                        <div
                          className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border font-black text-sm shadow-2xs ${card.iconBg}`}
                        >
                          <Package className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-base font-extrabold tracking-tight text-zinc-900 group-hover:text-emerald-700">
                            {card.name}
                          </h3>
                          <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                            <span>SKU: {card.sku}</span>
                            <span>•</span>
                            <span>GST: {card.gstRate}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Specs Row */}
                      <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-zinc-50/80 p-3 text-xs border border-zinc-100">
                        <div>
                          <span className="text-[10px] font-medium text-zinc-400 block">Retail Price</span>
                          <span className="font-black text-emerald-600 text-base">₹{card.price}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-medium text-zinc-400 block">Gross Profit</span>
                          <span className="font-extrabold text-zinc-800 text-sm">+ ₹{profitMargin}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                      <button
                        onClick={() => {
                          setNotificationMsg(`Added "${card.name}" to 1-click POS receipt!`);
                          setTimeout(() => setNotificationMsg(null), 3000);
                        }}
                        className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white transition-all hover:bg-emerald-500 shadow-2xs"
                      >
                        <ShoppingCart className="h-3.5 w-3.5 text-emerald-400" />
                        POS Bill Add
                      </button>

                      <button
                        onClick={() => handleRemoveCard(card.id)}
                        className="flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-red-500"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
