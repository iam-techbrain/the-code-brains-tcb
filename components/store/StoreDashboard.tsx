"use client";

import { useState } from "react";
import {
  Store,
  User,
  Package,
  Receipt,
  Users,
  Wallet,
  TrendingUp,
  Plus,
  Search,
  CheckCircle,
  AlertTriangle,
  Send,
  Printer,
  Trash2,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Barcode,
  CreditCard,
  Building,
  Home,
  ShoppingBag,
  Zap,
} from "lucide-react";

type StoreItem = {
  id: string;
  name: string;
  sku: string;
  stock: number;
  price: number;
  cost: number;
  gst: number;
};

type CustomerUdhar = {
  id: string;
  name: string;
  phone: string;
  balance: number;
  dueDate: string;
};

type PersonalExpense = {
  id: string;
  title: string;
  category: "Rent" | "Groceries" | "Utilities" | "Medical" | "Entertainment";
  amount: number;
  date: string;
};

const INITIAL_INVENTORY: StoreItem[] = [
  { id: "1", name: "Ergonomic Wireless Mouse", sku: "PERIPHERAL-101", stock: 35, price: 49, cost: 30, gst: 8 },
  { id: "2", name: "Mechanical RGB Keyboard", sku: "KEYBOARD-502", stock: 8, price: 129, cost: 85, gst: 8 },
  { id: "3", name: "USB-C Docking Station (10-in-1)", sku: "CABLE-01", stock: 110, price: 85, cost: 50, gst: 8 },
  { id: "4", name: "UltraWide 4K Monitor Stand", sku: "DISPLAY-04", stock: 4, price: 199, cost: 130, gst: 8 },
  { id: "5", name: "Noise Cancelling Headset", sku: "AUDIO-10", stock: 18, price: 159, cost: 95, gst: 8 },
];

const INITIAL_UDHAR: CustomerUdhar[] = [
  { id: "u1", name: "Acme Corporation", phone: "+1 (555) 234-5678", balance: 1850, dueDate: "Today" },
  { id: "u2", name: "Apex Digital LLC", phone: "+1 (555) 876-5432", balance: 3400, dueDate: "2 days ago" },
  { id: "u3", name: "Nexus Global Inc.", phone: "+1 (555) 456-7890", balance: 920, dueDate: "In 3 days" },
];

const INITIAL_PERSONAL_EXPENSES: PersonalExpense[] = [
  { id: "e1", title: "Office Lease", category: "Rent", amount: 2400, date: "2026-08-01" },
  { id: "e2", title: "Cloud Infrastructure & Wi-Fi", category: "Utilities", amount: 450, date: "2026-08-05" },
  { id: "e3", title: "Office Supplies & Refreshments", category: "Groceries", amount: 320, date: "2026-08-10" },
  { id: "e4", title: "Health & Corporate Insurance", category: "Medical", amount: 550, date: "2026-08-12" },
];

export default function StoreDashboard() {
  // Global Mode Toggle: Business Store vs Personal Expense Money Manager
  const [appMode, setAppMode] = useState<"business" | "personal">("business");

  // Business Mode Sub-Tabs
  const [bizTab, setBizTab] = useState<"pos" | "inventory" | "udhar" | "reports">("pos");

  // Inventory State
  const [inventory, setInventory] = useState<StoreItem[]>(INITIAL_INVENTORY);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemStock, setNewItemStock] = useState("");
  const [showAddStock, setShowAddStock] = useState(false);

  // POS State
  const [posCart, setPosCart] = useState<{ item: StoreItem; qty: number }[]>([
    { item: INITIAL_INVENTORY[0], qty: 2 },
    { item: INITIAL_INVENTORY[1], qty: 1 },
  ]);
  const [posSuccess, setPosSuccess] = useState(false);

  // Udhar State
  const [udharList, setUdharList] = useState<CustomerUdhar[]>(INITIAL_UDHAR);
  const [whatsappSentId, setWhatsappSentId] = useState<string | null>(null);

  // Personal Expense State
  const [monthlySalary, setMonthlySalary] = useState(12500);
  const [personalExpenses, setPersonalExpenses] = useState<PersonalExpense[]>(INITIAL_PERSONAL_EXPENSES);
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCat, setExpenseCat] = useState<PersonalExpense["category"]>("Groceries");

  // Calculations: Business
  const posSubtotal = posCart.reduce((acc, c) => acc + c.item.price * c.qty, 0);
  const posGst = posCart.reduce((acc, c) => acc + (c.item.price * c.qty * c.item.gst) / 100, 0);
  const posTotal = Math.round(posSubtotal + posGst);

  const totalStoreValue = inventory.reduce((acc, item) => acc + item.price * item.stock, 0);
  const totalUdharBalance = udharList.reduce((acc, u) => acc + u.balance, 0);

  // Calculations: Personal
  const totalPersonalSpend = personalExpenses.reduce((acc, e) => acc + e.amount, 0);
  const netSavings = monthlySalary - totalPersonalSpend;

  const handleAddStock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemPrice || !newItemStock) return;
    const newItem: StoreItem = {
      id: Date.now().toString(),
      name: newItemName,
      sku: `SKU-${Math.floor(100 + Math.random() * 900)}`,
      stock: parseInt(newItemStock),
      price: parseFloat(newItemPrice),
      cost: parseFloat(newItemPrice) * 0.8,
      gst: 5,
    };
    setInventory((prev) => [newItem, ...prev]);
    setNewItemName("");
    setNewItemPrice("");
    setNewItemStock("");
    setShowAddStock(false);
  };

  const handleAddPersonalExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expenseTitle || !expenseAmount) return;
    const newExp: PersonalExpense = {
      id: Date.now().toString(),
      title: expenseTitle,
      category: expenseCat,
      amount: parseFloat(expenseAmount),
      date: new Date().toISOString().split("T")[0],
    };
    setPersonalExpenses((prev) => [newExp, ...prev]);
    setExpenseTitle("");
    setExpenseAmount("");
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-20 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Banner: Dual Mode Selector */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                <Sparkles className="h-3.5 w-3.5" />
                TCB Store — Dual-Mode Micro-SaaS
              </div>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                {appMode === "business" ? "🏬 Retail Store Manager & POS" : "👤 Personal Money & Expense Manager"}
              </h1>
              <p className="mt-1 text-xs text-zinc-500">
                {appMode === "business"
                  ? "Manage inventory, barcode billing, and customer Udhar Khata in 1 place."
                  : "Track household budget, daily personal spending, and monthly savings goals."}
              </p>
            </div>

            {/* DUAL MODE TOGGLE BUTTONS */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-1.5 rounded-2xl border border-brand-200 bg-brand-50/50 p-1.5 shadow-xs">
              <button
                type="button"
                onClick={() => setAppMode("business")}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                  appMode === "business"
                    ? "bg-brand-500 text-white shadow-xs border border-brand-500"
                    : "bg-white text-zinc-700 font-medium hover:border-brand-500 hover:text-brand-500 border border-zinc-200"
                }`}
              >
                <Store className={`h-4 w-4 ${appMode === "business" ? "text-white" : "text-brand-500"}`} />
                <span>Store Business Mode</span>
              </button>
              <button
                type="button"
                onClick={() => setAppMode("personal")}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                  appMode === "personal"
                    ? "bg-brand-500 text-white shadow-xs border border-brand-500"
                    : "bg-white text-zinc-700 font-medium hover:border-brand-500 hover:text-brand-500 border border-zinc-200"
                }`}
              >
                <User className={`h-4 w-4 ${appMode === "personal" ? "text-white" : "text-brand-500"}`} />
                <span>Personal Expense Mode</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODE A: STORE BUSINESS MODE */}
        {/* ========================================================================= */}
        {appMode === "business" && (
          <div className="mt-8 space-y-6">
            
            {/* Store Metrics Bar */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <span className="text-xs font-medium text-zinc-500">Total Stock Value</span>
                <div className="mt-1 text-xl font-extrabold text-zinc-900">₹{totalStoreValue.toLocaleString()}</div>
                <span className="text-[11px] text-brand-500 font-semibold">{inventory.length} items in catalog</span>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <span className="text-xs font-medium text-zinc-500">Customer Credit Due</span>
                <div className="mt-1 text-xl font-extrabold text-amber-600">₹{totalUdharBalance.toLocaleString()}</div>
                <span className="text-[11px] text-zinc-400">{udharList.length} customer ledgers</span>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <span className="text-xs font-medium text-zinc-500">Today's POS Sales</span>
                <div className="mt-1 text-xl font-extrabold text-brand-500">₹18,450</div>
                <span className="text-[11px] text-brand-500 font-semibold">+14% vs yesterday</span>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <span className="text-xs font-medium text-zinc-500">Gross Margin Profit</span>
                <div className="mt-1 text-xl font-extrabold text-zinc-900">₹4,280</div>
                <span className="text-[11px] text-zinc-400">Automated Tax Compliant</span>
              </div>
            </div>

            {/* Business Sub-Navigation Tabs */}
            <div className="flex overflow-x-auto no-scrollbar border-b border-zinc-200 bg-white px-2 sm:px-4 rounded-xl">
              <button
                type="button"
                onClick={() => setBizTab("pos")}
                className={`flex items-center gap-2 border-b-2 py-3 px-3 sm:px-4 text-xs font-bold transition-all sm:text-sm shrink-0 whitespace-nowrap ${
                  bizTab === "pos"
                    ? "border-brand-500 text-brand-500"
                    : "border-transparent text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <Receipt className="h-4 w-4 shrink-0" />
                1-Click POS Billing
              </button>
              <button
                type="button"
                onClick={() => setBizTab("inventory")}
                className={`flex items-center gap-2 border-b-2 py-3 px-3 sm:px-4 text-xs font-bold transition-all sm:text-sm shrink-0 whitespace-nowrap ${
                  bizTab === "inventory"
                    ? "border-brand-500 text-brand-500"
                    : "border-transparent text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <Package className="h-4 w-4 shrink-0" />
                Inventory Stock Master
              </button>
              <button
                type="button"
                onClick={() => setBizTab("udhar")}
                className={`flex items-center gap-2 border-b-2 py-3 px-3 sm:px-4 text-xs font-bold transition-all sm:text-sm shrink-0 whitespace-nowrap ${
                  bizTab === "udhar"
                    ? "border-brand-500 text-brand-500"
                    : "border-transparent text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <Users className="h-4 w-4 shrink-0" />
                Customer Credit Ledger
              </button>
            </div>

            {/* TAB: POS COUNTER */}
            {bizTab === "pos" && (
              <div className="grid gap-6 lg:grid-cols-12">
                {/* Available Inventory Grid for POS */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-7">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-base font-bold text-zinc-900">Select Items to Add to Bill</h3>
                    <span className="flex items-center gap-1 rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-600">
                      <Barcode className="h-3.5 w-3.5 text-brand-500" />
                      Barcode Lookup Active
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {inventory.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setPosCart((prev) => {
                            const found = prev.find((c) => c.item.id === item.id);
                            if (found) {
                              return prev.map((c) =>
                                c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c
                              );
                            }
                            return [...prev, { item, qty: 1 }];
                          });
                          setPosSuccess(false);
                        }}
                        className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-zinc-50/60 p-3.5 text-left transition-all hover:border-brand-400 hover:bg-white shadow-xs"
                      >
                        <div>
                          <span className="text-xs font-semibold text-zinc-900 group-hover:text-brand-700">
                            {item.name}
                          </span>
                          <div className="mt-1 flex items-center gap-2 text-[11px] text-zinc-500">
                            <span>SKU: {item.sku}</span>
                            <span>•</span>
                            <span className="font-semibold text-zinc-700">Stock: {item.stock}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-2">
                          <span className="text-sm font-extrabold text-brand-500">₹{item.price}</span>
                          <span className="rounded-md bg-brand-100 px-2 py-0.5 text-[10px] font-bold text-brand-800 group-hover:bg-brand-500 group-hover:text-white">
                            + Add to Bill
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* POS Receipt Sidebar */}
                <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900">Current Order Invoice</h4>
                        <span className="text-[11px] text-zinc-400">Bill #INV-2026-904</span>
                      </div>
                      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700 border border-brand-200">
                        Automated Tax Ready
                      </span>
                    </div>

                    <div className="mt-4 flex max-h-60 flex-col gap-2 overflow-y-auto">
                      {posCart.map((c) => (
                        <div key={c.item.id} className="flex items-center justify-between rounded-lg bg-zinc-50 p-2.5 text-xs">
                          <div>
                            <div className="font-semibold text-zinc-800">{c.item.name}</div>
                            <div className="text-[10px] text-zinc-400">₹{c.item.price} x {c.qty}</div>
                          </div>
                          <span className="font-bold text-zinc-900">₹{c.item.price * c.qty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-zinc-200 pt-4">
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>Subtotal:</span>
                      <span>₹{posSubtotal}</span>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-zinc-500">
                      <span>Tax (Estimated):</span>
                      <span>₹{posGst.toFixed(2)}</span>
                    </div>
                    <div className="mt-3 flex justify-between text-base font-extrabold text-zinc-900">
                      <span>Total Pay:</span>
                      <span className="text-brand-500">₹{posTotal}</span>
                    </div>

                    {posSuccess ? (
                      <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand-100 p-3 text-xs font-bold text-brand-800">
                        <CheckCircle className="h-4 w-4" /> Receipt Printed &amp; Saved!
                      </div>
                    ) : (
                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={() => setPosSuccess(true)}
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-500 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-brand-500"
                        >
                          <Printer className="h-4 w-4" /> Print Tax Invoice
                        </button>
                        <button
                          onClick={() => setPosSuccess(true)}
                          className="flex items-center justify-center rounded-xl border border-brand-300 bg-brand-50 px-4 text-xs font-bold text-brand-700 transition-all hover:bg-brand-100"
                        >
                          <Send className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: INVENTORY */}
            {bizTab === "inventory" && (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-900">Store Stock Master</h3>
                  <button
                    onClick={() => setShowAddStock((v) => !v)}
                    className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3.5 py-2 text-xs font-bold text-white transition-all hover:bg-brand-500"
                  >
                    <Plus className="h-4 w-4" /> Add Product Item
                  </button>
                </div>

                {/* Add Stock Form */}
                {showAddStock && (
                  <form onSubmit={handleAddStock} className="mb-6 rounded-xl border border-brand-200 bg-brand-50/50 p-4">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <label className="text-xs font-bold text-zinc-700">Product Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ergonomic Keyboard"
                          value={newItemName}
                          onChange={(e) => setNewItemName(e.target.value)}
                          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-900 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-zinc-700">Selling Price (₹)</label>
                        <input
                          type="number"
                          required
                          placeholder="1800"
                          value={newItemPrice}
                          onChange={(e) => setNewItemPrice(e.target.value)}
                          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-900 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-zinc-700">Initial Stock Quantity</label>
                        <input
                          type="number"
                          required
                          placeholder="50"
                          value={newItemStock}
                          onChange={(e) => setNewItemStock(e.target.value)}
                          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-900 focus:outline-none"
                        />
                      </div>
                    </div>
                    <button type="submit" className="mt-3 rounded-xl bg-brand-500 px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-brand-500">
                      Save Product to Catalog
                    </button>
                  </form>
                )}

                {/* Inventory Table */}
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full min-w-[550px] text-left text-xs">
                    <thead>
                      <tr className="border-b border-zinc-200 text-zinc-500 font-bold">
                        <th className="pb-3 whitespace-nowrap">Product Item</th>
                        <th className="pb-3 whitespace-nowrap">SKU</th>
                        <th className="pb-3 whitespace-nowrap">Stock Available</th>
                        <th className="pb-3 whitespace-nowrap">Unit Price</th>
                        <th className="pb-3 whitespace-nowrap">Tax Rate</th>
                        <th className="pb-3 text-right whitespace-nowrap">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {inventory.map((item) => (
                        <tr key={item.id} className="hover:bg-zinc-50">
                          <td className="py-3 font-semibold text-zinc-900 whitespace-nowrap">{item.name}</td>
                          <td className="py-3 font-mono text-zinc-500 whitespace-nowrap">{item.sku}</td>
                          <td className="py-3 whitespace-nowrap">
                            <span className={`font-bold ${item.stock < 10 ? "text-amber-600" : "text-zinc-800"}`}>
                              {item.stock} units
                            </span>
                          </td>
                          <td className="py-3 font-bold text-brand-500 whitespace-nowrap">₹{item.price}</td>
                          <td className="py-3 text-zinc-500 whitespace-nowrap">{item.gst}%</td>
                          <td className="py-3 text-right whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => setInventory((prev) => prev.filter((i) => i.id !== item.id))}
                              className="text-zinc-400 hover:text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: CREDIT LEDGER */}
            {bizTab === "udhar" && (
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 shadow-sm">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">Customer Credit &amp; Receivables Ledger</h3>
                    <p className="text-xs text-zinc-500">Automated WhatsApp &amp; Email payment reminders</p>
                  </div>
                  <span className="self-start sm:self-auto rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 border border-amber-200">
                    Total Due: ₹{totalUdharBalance.toLocaleString()}
                  </span>
                </div>

                <div className="space-y-3">
                  {udharList.map((u) => (
                    <div key={u.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-zinc-200 bg-zinc-50/50 p-4">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900">{u.name}</h4>
                        <div className="mt-0.5 text-xs text-zinc-500">Phone: {u.phone} • Due: {u.dueDate}</div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        <span className="text-base font-extrabold text-amber-600">₹{u.balance}</span>
                        {whatsappSentId === u.id ? (
                          <span className="rounded-lg bg-brand-100 px-3 py-1.5 text-xs font-bold text-brand-800 flex items-center gap-1">
                            <CheckCircle className="h-3.5 w-3.5" /> WhatsApp Sent!
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setWhatsappSentId(u.id)}
                            className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-brand-500"
                          >
                            <Send className="h-3.5 w-3.5" /> Remind on WhatsApp
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODE B: PERSONAL MONEY MANAGER & EXPENSE MODE */}
        {/* ========================================================================= */}
        {appMode === "personal" && (
          <div className="mt-8 space-y-6">
            
            {/* Personal Finance Summary Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Monthly Income / Allocation</span>
                <div className="mt-2 text-2xl font-extrabold text-zinc-900">₹{monthlySalary.toLocaleString()}</div>
                <div className="mt-1 text-xs text-brand-500 font-semibold flex items-center gap-1">
                  <ArrowUpRight className="h-3.5 w-3.5" /> Direct Deposit
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Total Personal Spend</span>
                <div className="mt-2 text-2xl font-extrabold text-amber-600">₹{totalPersonalSpend.toLocaleString()}</div>
                <div className="mt-1 text-xs text-amber-600 font-semibold flex items-center gap-1">
                  <ArrowDownRight className="h-3.5 w-3.5" /> Operational Expenses
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-brand-950 p-5 text-white shadow-md">
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">Net Monthly Savings</span>
                <div className="mt-2 text-2xl font-extrabold text-brand-400">₹{netSavings.toLocaleString()}</div>
                <div className="mt-1 text-xs text-zinc-300 font-medium">
                  {((netSavings / monthlySalary) * 100).toFixed(1)}% savings rate achieved
                </div>
              </div>
            </div>

            {/* Add Personal Expense Form & List */}
            <div className="grid gap-6 lg:grid-cols-12">
              
              {/* Add Expense Form */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-5">
                <h3 className="text-base font-bold text-zinc-900">Log New Personal Expense</h3>
                <p className="mt-1 text-xs text-zinc-500">Track office expenses, rent, bills, supplies, etc.</p>

                <form onSubmit={handleAddPersonalExpense} className="mt-5 space-y-4">
                  <div>
                    <label className="text-xs font-bold text-zinc-700">Expense Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Server Hosting & Cloud"
                      value={expenseTitle}
                      onChange={(e) => setExpenseTitle(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700">Category</label>
                    <select
                      value={expenseCat}
                      onChange={(e) => setExpenseCat(e.target.value as any)}
                      className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-brand-500"
                    >
                      <option value="Groceries">Office Supplies & Snacks</option>
                      <option value="Rent">Office Lease / Rent</option>
                      <option value="Utilities">Utilities & High-Speed WiFi</option>
                      <option value="Medical">Employee Health Insurance</option>
                      <option value="Entertainment">Team Dinners & Travel</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700">Amount (₹)</label>
                    <input
                      type="number"
                      required
                      placeholder="15000"
                      value={expenseAmount}
                      onChange={(e) => setExpenseAmount(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-500 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-brand-500"
                  >
                    + Add Expense Entry
                  </button>
                </form>
              </div>

              {/* Expense History List */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-7">
                <div className="mb-4 flex items-center justify-between border-b border-zinc-200 pb-3">
                  <h3 className="text-base font-bold text-zinc-900">Recent Operational Expenses</h3>
                  <span className="text-xs text-zinc-400">{personalExpenses.length} entries</span>
                </div>

                <div className="space-y-3">
                  {personalExpenses.map((exp) => (
                    <div key={exp.id} className="flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50/70 p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-800 font-bold text-xs">
                          {exp.category[0]}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-zinc-900">{exp.title}</div>
                          <div className="text-[11px] text-zinc-400">{exp.category} • {exp.date}</div>
                        </div>
                      </div>
                      <span className="text-sm font-extrabold text-zinc-900">- ₹{exp.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
