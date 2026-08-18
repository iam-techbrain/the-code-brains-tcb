"use client";

import { useState } from "react";
import {
  Receipt,
  Package,
  MessageSquare,
  Plus,
  Printer,
  Send,
  Search,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Check,
} from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  gst: number;
};

const SAMPLE_PRODUCTS = [
  { id: "p1", name: "Ergonomic Wireless Mouse", price: 49, gst: 8 },
  { id: "p2", name: "Mechanical RGB Keyboard", price: 129, gst: 8 },
  { id: "p3", name: "UltraWide 4K Monitor Stand", price: 89, gst: 8 },
  { id: "p4", name: "Thunderbolt 4 Hub (10-in-1)", price: 145, gst: 8 },
  { id: "p5", name: "Noise Cancelling Headset", price: 199, gst: 8 },
];

const INITIAL_STOCK = [
  { id: "s1", name: "Ergonomic Wireless Mouse", sku: "PERIPHERAL-101", stock: 45, minStock: 10, category: "Hardware" },
  { id: "s2", name: "Mechanical RGB Keyboard", sku: "KEYBOARD-502", stock: 8, minStock: 15, category: "Hardware" },
  { id: "s3", name: "UltraWide 4K Monitor Stand", sku: "ACCESSORY-04", stock: 3, minStock: 10, category: "Displays" },
  { id: "s4", name: "Thunderbolt 4 Hub (10-in-1)", sku: "CABLE-12", stock: 120, minStock: 25, category: "Accessories" },
  { id: "s5", name: "Noise Cancelling Headset", sku: "AUDIO-90", stock: 18, minStock: 20, category: "Audio" },
];

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<"pos" | "stock" | "whatsapp">("pos");

  // POS Demo state
  const [cart, setCart] = useState<CartItem[]>([
    { id: "p1", name: "Ergonomic Wireless Mouse", price: 49, qty: 2, gst: 8 },
    { id: "p2", name: "Mechanical RGB Keyboard", price: 129, qty: 1, gst: 8 },
  ]);
  const [customerName, setCustomerName] = useState("Acme Enterprise");
  const [billSent, setBillSent] = useState(false);

  // Stock Demo state
  const [stockSearch, setStockSearch] = useState("");
  const [stockFilter, setStockFilter] = useState<"all" | "low">("all");
  const [stockItems, setStockItems] = useState(INITIAL_STOCK);

  // WhatsApp Demo state
  const [reminderSent, setReminderSent] = useState(false);

  // POS Helper calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalGst = cart.reduce((acc, item) => acc + (item.price * item.qty * item.gst) / 100, 0);
  const grandTotal = Math.round(subtotal + totalGst);

  const addToCart = (product: typeof SAMPLE_PRODUCTS[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setBillSent(false);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
    setBillSent(false);
  };

  const reorderStock = (id: string) => {
    setStockItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, stock: item.stock + 50 } : item))
    );
  };

  return (
    <section id="showcase" className="relative border-t border-zinc-100 bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            Live Interactive Demo
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Test Drive Our Micro-SaaS Applications Live
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
            Experience instant billing workflows, inventory automation, and customer alerts in real-time.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-12 flex justify-center overflow-x-auto no-scrollbar px-2 pb-2">
          <div className="flex flex-nowrap shrink-0 rounded-2xl border border-zinc-200 bg-zinc-50 p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("pos")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm whitespace-nowrap ${
                activeTab === "pos"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Receipt className="h-4 w-4 shrink-0" />
              1-Click GST POS
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("stock")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm whitespace-nowrap ${
                activeTab === "stock"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Package className="h-4 w-4 shrink-0" />
              Inventory Tracker
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("whatsapp")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm whitespace-nowrap ${
                activeTab === "whatsapp"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <MessageSquare className="h-4 w-4 shrink-0" />
              WhatsApp Reminders
            </button>
          </div>
        </div>

        {/* Tab 1: POS Billing Interactive Container */}
        {activeTab === "pos" && (
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 sm:p-8 shadow-sm">
            <div className="mb-6 flex flex-col gap-4 border-b border-zinc-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-600">Terminal #01 — Active Sale</span>
                <h3 className="text-lg font-bold text-zinc-900">Store Counter Checkout</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-zinc-500 shrink-0">Customer Name:</span>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 focus:border-emerald-500 focus:outline-none shadow-xs"
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
              {/* Product Selection List */}
              <div className="lg:col-span-7">
                <span className="mb-3 block text-xs font-bold text-zinc-700">
                  Tap items to add to POS bill:
                </span>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {SAMPLE_PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => addToCart(prod)}
                      className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-3.5 text-left transition-all hover:border-emerald-500 hover:shadow-md active:scale-98"
                    >
                      <div>
                        <div className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700">
                          {prod.name}
                        </div>
                        <div className="mt-1 text-[11px] text-zinc-400">
                          GST: {prod.gst}%
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-sm font-extrabold text-emerald-600">
                          ${prod.price}
                        </span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-800 transition-transform group-hover:scale-110">
                          <Plus className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Invoice Cart */}
              <div className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 lg:col-span-5 shadow-xs">
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                      Live Cloud Invoice
                    </span>
                    <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-bold text-zinc-700 border border-zinc-200">
                      TAX ID: US-9840219
                    </span>
                  </div>

                  {/* Cart Items Table */}
                  <div className="mt-4 flex max-h-48 flex-col gap-2 overflow-y-auto pr-1">
                    {cart.length === 0 ? (
                      <div className="py-8 text-center text-xs text-zinc-400">
                        No items added yet. Click items on the left.
                      </div>
                    ) : (
                      cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between rounded-lg bg-zinc-50 p-2.5 text-xs border border-zinc-100"
                        >
                          <div className="flex-1 font-semibold text-zinc-800 pr-2 truncate">
                            {item.name}
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <div className="flex items-center gap-1.5 rounded border border-zinc-300 bg-white px-1.5 py-0.5 text-zinc-700">
                              <button
                                type="button"
                                onClick={() => updateQty(item.id, -1)}
                                className="hover:text-black font-bold px-1"
                              >
                                -
                              </button>
                              <span className="font-bold text-zinc-900">
                                {item.qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQty(item.id, 1)}
                                className="hover:text-black font-bold px-1"
                              >
                                +
                              </button>
                            </div>
                            <span className="w-12 text-right font-extrabold text-zinc-900">
                              ${item.price * item.qty}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Bill Summary Footer */}
                <div className="mt-6 border-t border-zinc-100 pt-4">
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Subtotal:</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-zinc-500">
                    <span>Tax (8%):</span>
                    <span>${totalGst.toFixed(2)}</span>
                  </div>
                  <div className="mt-3 flex justify-between text-base font-extrabold text-zinc-900">
                    <span>Grand Total:</span>
                    <span className="text-emerald-600">${grandTotal}</span>
                  </div>

                  {billSent ? (
                    <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-100 p-3 text-xs font-bold text-emerald-800 border border-emerald-200">
                      <Check className="h-4 w-4" />
                      Digital Invoice Generated &amp; Dispatched!
                    </div>
                  ) : (
                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setBillSent(true)}
                        disabled={cart.length === 0}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white transition-all hover:bg-emerald-600 disabled:opacity-50"
                      >
                        <Printer className="h-4 w-4" />
                        Generate &amp; Print Bill
                      </button>
                      <button
                        type="button"
                        onClick={() => setBillSent(true)}
                        disabled={cart.length === 0}
                        className="flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-3 text-xs font-bold text-emerald-700 transition-all hover:bg-zinc-100"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Inventory Tracker Interactive Container */}
        {activeTab === "stock" && (
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 sm:p-8 shadow-sm">
            <div className="mb-6 flex flex-col gap-4 border-b border-zinc-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-600">Inventory Status &amp; Reorder Monitor</span>
                <h3 className="text-lg font-bold text-zinc-900">Live Stock Control</h3>
              </div>

              {/* Filters */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search stock item..."
                    value={stockSearch}
                    onChange={(e) => setStockSearch(e.target.value)}
                    className="w-full sm:w-auto rounded-lg border border-zinc-300 bg-white pl-8 pr-3 py-1.5 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div className="flex rounded-lg border border-zinc-200 bg-white p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setStockFilter("all")}
                    className={`flex-1 sm:flex-initial rounded px-3 py-1 ${
                      stockFilter === "all" ? "bg-emerald-600 text-white font-bold" : "text-zinc-500"
                    }`}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    onClick={() => setStockFilter("low")}
                    className={`flex-1 sm:flex-initial rounded px-3 py-1 ${
                      stockFilter === "low" ? "bg-amber-100 text-amber-800 font-bold" : "text-zinc-500"
                    }`}
                  >
                    Low Stock Alerts
                  </button>
                </div>
              </div>
            </div>

            {/* Stock Items Table */}
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full min-w-[600px] text-left text-xs">
                <thead>
                  <tr className="border-b border-zinc-200 text-zinc-500 font-bold">
                    <th className="pb-3 pt-1 whitespace-nowrap">Product Name</th>
                    <th className="pb-3 pt-1 whitespace-nowrap">SKU</th>
                    <th className="pb-3 pt-1 whitespace-nowrap">Category</th>
                    <th className="pb-3 pt-1 whitespace-nowrap">Current Stock</th>
                    <th className="pb-3 pt-1 whitespace-nowrap">Status</th>
                    <th className="pb-3 pt-1 text-right whitespace-nowrap">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/60">
                  {stockItems
                    .filter((item) =>
                      stockFilter === "low" ? item.stock <= item.minStock : true
                    )
                    .filter((item) =>
                      item.name.toLowerCase().includes(stockSearch.toLowerCase())
                    )
                    .map((item) => {
                      const isLow = item.stock <= item.minStock;
                      return (
                        <tr key={item.id} className="hover:bg-white">
                          <td className="py-3.5 font-bold text-zinc-900 whitespace-nowrap">{item.name}</td>
                          <td className="py-3.5 font-mono text-zinc-500 whitespace-nowrap">{item.sku}</td>
                          <td className="py-3.5 text-zinc-600 whitespace-nowrap">{item.category}</td>
                          <td className="py-3.5 font-extrabold text-zinc-900 whitespace-nowrap">{item.stock} units</td>
                          <td className="py-3.5 whitespace-nowrap">
                            {isLow ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                                <AlertTriangle className="h-3 w-3" /> Low Stock
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                                <CheckCircle className="h-3 w-3" /> In Stock
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 text-right whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => reorderStock(item.id)}
                              className="rounded-lg border border-zinc-300 bg-white px-3 py-1 text-xs font-bold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white"
                            >
                              + Reorder Stock
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: WhatsApp Reminders Interactive Container */}
        {activeTab === "whatsapp" && (
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 sm:p-8 shadow-sm">
            <div className="mx-auto max-w-lg">
              {/* Phone Frame Mockup */}
              <div className="overflow-hidden rounded-3xl border-4 border-zinc-300 bg-white shadow-xl">
                {/* WhatsApp Chat Header */}
                <div className="flex items-center gap-3 border-b border-zinc-200 bg-emerald-700 p-4 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-emerald-800">
                    TCB
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">TCB Store Bot</div>
                    <div className="text-[11px] text-emerald-100">Verified Business Account</div>
                  </div>
                </div>

                {/* WhatsApp Chat Body */}
                <div className="flex flex-col gap-4 bg-zinc-100/70 p-5">
                  <div className="self-center rounded-full bg-white px-3 py-1 text-[10px] font-bold text-zinc-500 border border-zinc-200">
                    Today
                  </div>

                  {/* Automated Message Bubble */}
                  <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-white p-4 text-xs leading-relaxed text-zinc-800 shadow-sm border border-zinc-200">
                    <p className="font-bold text-emerald-700">
                      Hello Acme Corporation! 👋
                    </p>
                    <p className="mt-2">
                      Your invoice <span className="font-mono font-bold text-zinc-900">#INV-2026-89</span> of <span className="font-extrabold text-zinc-900">₹1,850</span> for recent purchase is due today.
                    </p>
                    <p className="mt-2 text-zinc-500">
                      Click below to make 1-click payment directly via card or instant bank transfer:
                    </p>

                    <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center">
                      <span className="text-[10px] font-bold uppercase text-emerald-800">Secure Instant Payment Link</span>
                      {reminderSent ? (
                        <div className="mt-2 flex items-center justify-center gap-1.5 font-extrabold text-emerald-700">
                          <CheckCircle className="h-4 w-4" />
                          Payment Received Successfully!
                        </div>
                      ) : (
                        <button
                          onClick={() => setReminderSent(true)}
                          className="mt-2 w-full rounded-lg bg-emerald-600 py-2 text-xs font-bold text-white transition-all hover:bg-emerald-500 shadow-xs"
                        >
                          Pay ₹1,850 via Secure Gateway
                        </button>
                      )}
                    </div>
                  </div>

                  {reminderSent && (
                    <div className="max-w-[75%] self-end rounded-2xl rounded-tr-none bg-emerald-100 p-3 text-xs font-semibold text-emerald-900 border border-emerald-300">
                      ✓ Paid ₹1,850 via Instant Payment. Thank you!
                    </div>
                  )}
                </div>

                {/* Simulated Chat Input */}
                <div className="flex items-center justify-between border-t border-zinc-200 bg-white p-3 text-xs text-zinc-500">
                  <span>Automated Payment Nudge Bot</span>
                  <button
                    onClick={() => setReminderSent(false)}
                    className="text-[11px] font-bold text-emerald-600 underline"
                  >
                    Reset Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
