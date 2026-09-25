import React, { useState } from "react";
import {
  FiCalendar,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiSave,
} from "react-icons/fi";

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState("2026-09-25");
  const [selectedClass, setSelectedClass] = useState("10-A");

  const [students, setStudents] = useState([
    {
      id: "ST-001",
      name: "Ali Hassan",
      status: "Present",
      reason: "",
    },
    {
      id: "ST-002",
      name: "Sara Khan",
      status: "Present",
      reason: "",
    },
    {
      id: "ST-003",
      name: "Ahmed Raza",
      status: "Absent",
      reason: "",
    },
    {
      id: "ST-004",
      name: "Maria Ali",
      status: "Late",
      reason: "Traffic",
    },
    {
      id: "ST-005",
      name: "Usman Tariq",
      status: "Present",
      reason: "",
    },
    {
      id: "ST-006",
      name: "Hamza Malik",
      status: "Present",
      reason: "",
    },
  ]);

  const updateStatus = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status,
              reason: status === "Late" ? student.reason : "",
            }
          : student
      )
    );
  };

  const updateReason = (id, reason) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, reason }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const lateCount = students.filter(
    (student) => student.status === "Late"
  ).length;

  return (
    <div className="min-h-screen bg-[#07070a] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-blue-400">
              Administration
            </p>

            <h1 className="mt-1 text-3xl font-bold">
              Attendance
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage daily student attendance.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500">
            <FiSave />
            Save Attendance
          </button>
        </div>

        {/* SUMMARY */}
        <div className="mb-6 grid gap-4 sm:grid-cols-3">

          {/* PRESENT */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FiCheckCircle />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Present
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {presentCount}
                </p>
              </div>

            </div>
          </div>

          {/* ABSENT */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <FiXCircle />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Absent
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {absentCount}
                </p>
              </div>

            </div>
          </div>

          {/* LATE */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                <FiClock />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Late
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {lateCount}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* FILTERS */}
        <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

          <div className="grid gap-4 md:grid-cols-2">

            {/* DATE */}
            <div>
              <label className="mb-2 block text-xs font-medium text-gray-500">
                Select Date
              </label>

              <div className="relative">

                <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 pl-11 text-sm text-white outline-none focus:border-blue-500/50"
                />

              </div>
            </div>

            {/* CLASS */}
            <div>
              <label className="mb-2 block text-xs font-medium text-gray-500">
                Select Class
              </label>

              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none focus:border-blue-500/50"
              >
                <option className="bg-[#111118]" value="10-A">
                  10-A
                </option>

                <option className="bg-[#111118]" value="10-B">
                  10-B
                </option>

                <option className="bg-[#111118]" value="9-A">
                  9-A
                </option>

                <option className="bg-[#111118]" value="9-B">
                  9-B
                </option>

                <option className="bg-[#111118]" value="8-A">
                  8-A
                </option>
              </select>
            </div>

          </div>
        </div>

        {/* ATTENDANCE TABLE */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">

          <div className="border-b border-white/[0.07] px-5 py-4">

            <h2 className="font-semibold">
              Class {selectedClass}
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Attendance for {selectedDate}
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px] text-left">

              <thead className="border-b border-white/[0.07] bg-white/[0.02]">
                <tr>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Student
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    ID
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Attendance
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Late Reason
                  </th>

                </tr>
              </thead>

              <tbody>

                {students.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-white/[0.05] hover:bg-white/[0.02]"
                  >

                    {/* STUDENT */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 font-semibold text-blue-400">
                          {student.name.charAt(0)}
                        </div>

                        <span className="text-sm font-medium">
                          {student.name}
                        </span>

                      </div>

                    </td>

                    {/* ID */}
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {student.id}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-4">

                      <div className="flex flex-wrap gap-2">

                        <button
                          onClick={() =>
                            updateStatus(student.id, "Present")
                          }
                          className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                            student.status === "Present"
                              ? "bg-emerald-500 text-white"
                              : "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                          }`}
                        >
                          Present
                        </button>

                        <button
                          onClick={() =>
                            updateStatus(student.id, "Absent")
                          }
                          className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                            student.status === "Absent"
                              ? "bg-red-500 text-white"
                              : "bg-red-500/10 text-red-400 hover:bg-red-500/20"
                          }`}
                        >
                          Absent
                        </button>

                        <button
                          onClick={() =>
                            updateStatus(student.id, "Late")
                          }
                          className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                            student.status === "Late"
                              ? "bg-yellow-500 text-white"
                              : "bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20"
                          }`}
                        >
                          Late
                        </button>

                      </div>

                    </td>

                    {/* REASON */}
                    <td className="px-6 py-4">

                      {student.status === "Late" ? (
                        <input
                          type="text"
                          value={student.reason}
                          onChange={(e) =>
                            updateReason(
                              student.id,
                              e.target.value
                            )
                          }
                          placeholder="Enter reason..."
                          className="w-52 rounded-lg border border-yellow-500/20 bg-yellow-500/[0.04] px-3 py-2 text-xs text-white outline-none placeholder:text-gray-600 focus:border-yellow-500/50"
                        />
                      ) : (
                        <span className="text-xs text-gray-700">
                          —
                        </span>
                      )}

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Attendance;