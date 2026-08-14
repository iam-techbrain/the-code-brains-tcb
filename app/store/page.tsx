import EcosystemHeader from "@/components/EcosystemHeader";
import StoreDashboard from "@/components/store/StoreDashboard";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TCB Store — Dual-Mode Business & Personal Money Manager",
  description: "Manage retail inventory, barcode billing, Udhar Khata ledgers, and personal household expenses.",
};

export default function StorePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      <EcosystemHeader />
      <StoreDashboard />
      <Footer />
    </main>
  );
}
