import React, { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiMoreVertical,
} from "react-icons/fi";

const Students = () => {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: "ST-001",
      name: "Ali Hassan",
      email: "ali@example.com",
      className: "10-A",
      gender: "Male",
      status: "Active",
    },
    {
      id: "ST-002",
      name: "Sara Khan",
      email: "sara@example.com",
      className: "9-B",
      gender: "Female",
      status: "Active",
    },
    {
      id: "ST-003",
      name: "Ahmed Raza",
      email: "ahmed@example.com",
      className: "10-B",
      gender: "Male",
      status: "Active",
    },
    {
      id: "ST-004",
      name: "Maria Ali",
      email: "maria@example.com",
      className: "8-A",
      gender: "Female",
      status: "Inactive",
    },
    {
      id: "ST-005",
      name: "Usman Tariq",
      email: "usman@example.com",
      className: "9-A",
      gender: "Male",
      status: "Active",
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase()) ||
      student.className.toLowerCase().includes(search.toLowerCase())
  );

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
              Students
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage all registered students.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500">
            <FiPlus />
            Add Student
          </button>
        </div>

        {/* TABLE CARD */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">

          {/* SEARCH */}
          <div className="border-b border-white/[0.07] p-4">
            <div className="relative max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="text"
                placeholder="Search students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-gray-600 focus:border-blue-500/50"
              />
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left">

              <thead className="border-b border-white/[0.07] bg-white/[0.02]">
                <tr>
                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Student
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    ID
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Class
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Gender
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-white/[0.05] transition hover:bg-white/[0.02]"
                  >

                    {/* STUDENT */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 font-semibold text-blue-400">
                          {student.name.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            {student.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {student.email}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {student.id}
                    </td>

                    {/* CLASS */}
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {student.className}
                    </td>

                    {/* GENDER */}
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {student.gender}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          student.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">

                        <button className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white">
                          <FiEdit2 size={15} />
                        </button>

                        <button className="rounded-lg p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-400">
                          <FiTrash2 size={15} />
                        </button>

                        <button className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white">
                          <FiMoreVertical size={15} />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}

                {filteredStudents.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-10 text-center text-sm text-gray-500"
                    >
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;