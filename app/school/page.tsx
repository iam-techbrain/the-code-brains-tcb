import EcosystemHeader from "@/components/EcosystemHeader";
import SchoolDashboard from "@/components/school/SchoolDashboard";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TCB School — Education, Attendance & Fee Tracker",
  description: "Student directory management, daily attendance register, pending fee ledger, and WhatsApp alerts for parents.",
};

export default function SchoolPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      <EcosystemHeader />
      <SchoolDashboard />
      <Footer />
    </main>
  );
}
