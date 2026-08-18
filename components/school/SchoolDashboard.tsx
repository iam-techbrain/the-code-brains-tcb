"use client";

import { useState } from "react";
import {
  GraduationCap,
  Users,
  CheckSquare,
  CreditCard,
  Send,
  Plus,
  Search,
  CheckCircle,
  XCircle,
  Clock,
  Sparkles,
  UserCheck,
  AlertCircle,
  Building,
  Phone,
  BookOpen,
} from "lucide-react";

type Student = {
  id: string;
  rollNo: string;
  name: string;
  classBatch: string;
  parentName: string;
  parentPhone: string;
  feeStatus: "Paid" | "Pending" | "Partial";
  pendingFee: number;
  attendanceToday: "Present" | "Absent" | "Late" | "Unmarked";
};

const INITIAL_STUDENTS: Student[] = [
  {
    id: "st-101",
    rollNo: "101",
    name: "Ethan Brooks",
    classBatch: "Class 10-A (Computer Science)",
    parentName: "Robert Brooks",
    parentPhone: "+1 (555) 234-5678",
    feeStatus: "Pending",
    pendingFee: 350,
    attendanceToday: "Present",
  },
  {
    id: "st-102",
    rollNo: "102",
    name: "Sophia Miller",
    classBatch: "Class 10-A (Computer Science)",
    parentName: "David Miller",
    parentPhone: "+1 (555) 876-5432",
    feeStatus: "Paid",
    pendingFee: 0,
    attendanceToday: "Present",
  },
  {
    id: "st-103",
    rollNo: "103",
    name: "Liam Davis",
    classBatch: "Class 10-B (Data Science)",
    parentName: "Michael Davis",
    parentPhone: "+1 (555) 456-7890",
    feeStatus: "Partial",
    pendingFee: 150,
    attendanceToday: "Absent",
  },
  {
    id: "st-104",
    rollNo: "104",
    name: "Olivia Taylor",
    classBatch: "Class 12 (Business Administration)",
    parentName: "James Taylor",
    parentPhone: "+1 (555) 654-3210",
    feeStatus: "Pending",
    pendingFee: 420,
    attendanceToday: "Present",
  },
  {
    id: "st-105",
    rollNo: "105",
    name: "Noah Wilson",
    classBatch: "Class 12 (Business Administration)",
    parentName: "William Wilson",
    parentPhone: "+1 (555) 987-6543",
    feeStatus: "Paid",
    pendingFee: 0,
    attendanceToday: "Late",
  },
];

export default function SchoolDashboard() {
  const [activeTab, setActiveTab] = useState<"directory" | "attendance" | "fees">("directory");
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);

  // Filter States
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [whatsappSentId, setWhatsappSentId] = useState<string | null>(null);

  // Add Student Form State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStudentName, setNewStudentName] = useState("");
  const [newClassBatch, setNewClassBatch] = useState("Class 10-A (Science)");
  const [newParentName, setNewParentName] = useState("");
  const [newParentPhone, setNewParentPhone] = useState("");
  const [newPendingFee, setNewPendingFee] = useState("");

  const batches = ["All", "Class 10-A (Science)", "Class 10-B (Maths)", "Class 12 (Commerce)"];

  // Metrics
  const totalStudents = students.length;
  const totalPendingDues = students.reduce((acc, s) => acc + s.pendingFee, 0);
  const presentTodayCount = students.filter((s) => s.attendanceToday === "Present").length;
  const absentTodayCount = students.filter((s) => s.attendanceToday === "Absent").length;

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName || !newParentPhone) return;
    const newStudent: Student = {
      id: `st-${Date.now()}`,
      rollNo: (100 + students.length + 1).toString(),
      name: newStudentName,
      classBatch: newClassBatch,
      parentName: newParentName,
      parentPhone: newParentPhone,
      feeStatus: parseFloat(newPendingFee) > 0 ? "Pending" : "Paid",
      pendingFee: parseFloat(newPendingFee) || 0,
      attendanceToday: "Present",
    };
    setStudents((prev) => [...prev, newStudent]);
    setNewStudentName("");
    setNewParentName("");
    setNewParentPhone("");
    setNewPendingFee("");
    setShowAddModal(false);
  };

  const markAttendance = (id: string, status: Student["attendanceToday"]) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, attendanceToday: status } : s))
    );
  };

  const markFeePaid = (id: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, feeStatus: "Paid", pendingFee: 0 } : s))
    );
  };

  const filteredStudents = students
    .filter((s) => (selectedBatch === "All" ? true : s.classBatch === selectedBatch))
    .filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.rollNo.includes(searchTerm)
    );

  return (
    <div className="min-h-screen bg-zinc-50 pb-20 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" />
                TCB School — Education &amp; Fee Management
              </div>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Coaching &amp; School Management Portal
              </h1>
              <p className="mt-1 text-xs text-zinc-500">
                Maintain student directories, mark daily attendance, and collect fee dues via automated parent alerts.
              </p>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-500"
            >
              <Plus className="h-4 w-4" /> Add New Student
            </button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <span className="text-xs font-medium text-zinc-500">Total Enrolled</span>
            <div className="mt-1 text-2xl font-extrabold text-zinc-900">{totalStudents} Students</div>
            <span className="text-[11px] text-emerald-600 font-semibold">Active Batches</span>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <span className="text-xs font-medium text-zinc-500">Present Today</span>
            <div className="mt-1 text-2xl font-extrabold text-emerald-600">{presentTodayCount} Students</div>
            <span className="text-[11px] text-zinc-400">
              {((presentTodayCount / totalStudents) * 100).toFixed(0)}% attendance rate
            </span>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <span className="text-xs font-medium text-zinc-500">Absent Today</span>
            <div className="mt-1 text-2xl font-extrabold text-amber-600">{absentTodayCount} Students</div>
            <span className="text-[11px] text-amber-600 font-semibold">Alert sent to parents</span>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <span className="text-xs font-medium text-zinc-500">Total Pending Dues</span>
            <div className="mt-1 text-2xl font-extrabold text-red-600">₹{totalPendingDues.toLocaleString()}</div>
            <span className="text-[11px] text-zinc-400">Automated fee reminder ready</span>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="mt-6 flex overflow-x-auto no-scrollbar border-b border-zinc-200 bg-white px-2 sm:px-4 rounded-xl shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("directory")}
            className={`flex items-center gap-2 border-b-2 py-3.5 px-3 sm:px-4 text-xs font-bold transition-all sm:text-sm shrink-0 whitespace-nowrap ${
              activeTab === "directory"
                ? "border-emerald-600 text-emerald-600"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
          >
            <Users className="h-4 w-4 shrink-0" />
            Student Directory
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("attendance")}
            className={`flex items-center gap-2 border-b-2 py-3.5 px-3 sm:px-4 text-xs font-bold transition-all sm:text-sm shrink-0 whitespace-nowrap ${
              activeTab === "attendance"
                ? "border-emerald-600 text-emerald-600"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
          >
            <CheckSquare className="h-4 w-4 shrink-0" />
            Daily Attendance Register
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("fees")}
            className={`flex items-center gap-2 border-b-2 py-3.5 px-3 sm:px-4 text-xs font-bold transition-all sm:text-sm shrink-0 whitespace-nowrap ${
              activeTab === "fees"
                ? "border-emerald-600 text-emerald-600"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
          >
            <CreditCard className="h-4 w-4 shrink-0" />
            Fee &amp; Dues Tracker
          </button>
        </div>

        {/* Filters Bar */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-zinc-200 bg-white p-3 shadow-xs">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search student by name, roll no, or parent..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 pl-9 pr-4 py-1.5 text-xs text-zinc-900 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500 font-semibold">Filter Batch:</span>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 focus:outline-none font-medium"
            >
              {batches.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: STUDENT DIRECTORY */}
        {/* ========================================================= */}
        {activeTab === "directory" && (
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 shadow-sm">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full min-w-[650px] text-left text-xs">
                <thead>
                  <tr className="border-b border-zinc-200 text-zinc-500 font-bold">
                    <th className="pb-3 whitespace-nowrap">Roll No</th>
                    <th className="pb-3 whitespace-nowrap">Student Name</th>
                    <th className="pb-3 whitespace-nowrap">Batch / Class</th>
                    <th className="pb-3 whitespace-nowrap">Parent / Guardian</th>
                    <th className="pb-3 whitespace-nowrap">Parent Phone</th>
                    <th className="pb-3 whitespace-nowrap">Fee Status</th>
                    <th className="pb-3 text-right whitespace-nowrap">Today's Attendance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {filteredStudents.map((st) => (
                    <tr key={st.id} className="hover:bg-zinc-50">
                      <td className="py-3 font-mono font-bold text-zinc-600 whitespace-nowrap">#{st.rollNo}</td>
                      <td className="py-3 font-bold text-zinc-900 whitespace-nowrap">{st.name}</td>
                      <td className="py-3 text-zinc-600 whitespace-nowrap">{st.classBatch}</td>
                      <td className="py-3 text-zinc-700 whitespace-nowrap">{st.parentName}</td>
                      <td className="py-3 font-mono text-zinc-500 whitespace-nowrap">{st.parentPhone}</td>
                      <td className="py-3 whitespace-nowrap">
                        {st.feeStatus === "Paid" ? (
                          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                            Paid Fully
                          </span>
                        ) : (
                          <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-[10px] font-bold text-red-800">
                            Due ₹{st.pendingFee}
                          </span>
                        )}
                      </td>
                      <td className="py-3 text-right whitespace-nowrap">
                        <span className={`font-bold ${st.attendanceToday === "Present" ? "text-emerald-600" : "text-amber-600"}`}>
                          {st.attendanceToday}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: DAILY ATTENDANCE REGISTER */}
        {/* ========================================================= */}
        {activeTab === "attendance" && (
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 shadow-sm">
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base font-bold text-zinc-900">Mark Daily Attendance</h3>
                <p className="text-xs text-zinc-500">Tap status to toggle Present, Absent, or Late</p>
              </div>
              <span className="text-xs font-semibold text-emerald-600">Date: {new Date().toISOString().split("T")[0]}</span>
            </div>

            <div className="space-y-3">
              {filteredStudents.map((st) => (
                <div key={st.id} className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white font-bold text-xs">
                      #{st.rollNo}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">{st.name}</h4>
                      <div className="text-xs text-zinc-500">{st.classBatch} • Parent: {st.parentName}</div>
                    </div>
                  </div>

                  {/* Attendance Toggle Buttons */}
                  <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                    <button
                      type="button"
                      onClick={() => markAttendance(st.id, "Present")}
                      className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                        st.attendanceToday === "Present"
                          ? "bg-emerald-600 text-white shadow-xs border border-emerald-600"
                          : "bg-white text-zinc-600 font-medium hover:border-emerald-500 hover:text-emerald-600 border border-zinc-200"
                      }`}
                    >
                      <CheckCircle className="h-3.5 w-3.5" /> Present
                    </button>
                    <button
                      type="button"
                      onClick={() => markAttendance(st.id, "Absent")}
                      className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                        st.attendanceToday === "Absent"
                          ? "bg-red-600 text-white shadow-xs border border-red-600"
                          : "bg-white text-zinc-600 font-medium hover:border-red-500 hover:text-red-600 border border-zinc-200"
                      }`}
                    >
                      <XCircle className="h-3.5 w-3.5" /> Absent
                    </button>
                    <button
                      type="button"
                      onClick={() => markAttendance(st.id, "Late")}
                      className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                        st.attendanceToday === "Late"
                          ? "bg-amber-500 text-white shadow-xs border border-amber-500"
                          : "bg-white text-zinc-600 font-medium hover:border-amber-500 hover:text-amber-600 border border-zinc-200"
                      }`}
                    >
                      <Clock className="h-3.5 w-3.5" /> Late
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: FEE & DUES TRACKER */}
        {/* ========================================================= */}
        {activeTab === "fees" && (
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-900">Fee Ledger &amp; WhatsApp Parent Alerts</h3>
                <p className="text-xs text-zinc-500">Send 1-click fee due notifications directly to guardian's WhatsApp</p>
              </div>
              <span className="self-start sm:self-auto rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-700 border border-red-200">
                Total Uncollected: ₹{totalPendingDues.toLocaleString()}
              </span>
            </div>

            <div className="space-y-3">
              {filteredStudents.map((st) => (
                <div key={st.id} className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">{st.name} ({st.classBatch})</h4>
                    <div className="text-xs text-zinc-500">Guardian: {st.parentName} ({st.parentPhone})</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3">
                    {st.pendingFee > 0 ? (
                      <span className="text-sm font-extrabold text-red-600">
                        Due: ₹{st.pendingFee}
                      </span>
                    ) : (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                        ✓ All Fees Paid
                      </span>
                    )}

                    {st.pendingFee > 0 && (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => markFeePaid(st.id)}
                          className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-bold text-zinc-700 hover:bg-zinc-100"
                        >
                          Mark Paid
                        </button>
                        {whatsappSentId === st.id ? (
                          <span className="rounded-lg bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-800">
                            Alert Sent!
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setWhatsappSentId(st.id)}
                            className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500"
                          >
                            <Send className="h-3.5 w-3.5" /> WhatsApp Alert
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Student Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-zinc-900">Enrol New Student</h3>
              <p className="text-xs text-zinc-500">Add student details to institute directory</p>

              <form onSubmit={handleAddStudent} className="mt-4 space-y-3">
                <div>
                  <label className="text-xs font-bold text-zinc-700">Student Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ishaan Verma"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-700">Batch / Class</label>
                  <select
                    value={newClassBatch}
                    onChange={(e) => setNewClassBatch(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none"
                  >
                    <option value="Class 10-A (Science)">Class 10-A (Science)</option>
                    <option value="Class 10-B (Maths)">Class 10-B (Maths)</option>
                    <option value="Class 12 (Commerce)">Class 12 (Commerce)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-700">Parent / Guardian Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Verma"
                    value={newParentName}
                    onChange={(e) => setNewParentName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-700">Parent WhatsApp Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={newParentPhone}
                    onChange={(e) => setNewParentPhone(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-700">Initial Pending Fee (₹)</label>
                  <input
                    type="number"
                    placeholder="3000"
                    value={newPendingFee}
                    onChange={(e) => setNewPendingFee(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none"
                  />
                </div>

                <div className="mt-5 flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 rounded-xl border border-zinc-300 bg-white py-2.5 text-xs font-bold text-zinc-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-500"
                  >
                    Save Student
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
