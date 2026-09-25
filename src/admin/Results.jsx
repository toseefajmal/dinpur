import React, { useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiAward,
  FiEdit2,
  FiEye,
} from "react-icons/fi";

const Results = () => {
  const [search, setSearch] = useState("");

  const results = [
    {
      id: "ST-001",
      name: "Ali Hassan",
      className: "10-A",
      exam: "Mid Term",
      subjects: 8,
      marks: 720,
      total: 800,
      percentage: 90,
      grade: "A+",
      status: "Passed",
    },
    {
      id: "ST-002",
      name: "Sara Khan",
      className: "9-B",
      exam: "Mid Term",
      subjects: 7,
      marks: 595,
      total: 700,
      percentage: 85,
      grade: "A",
      status: "Passed",
    },
    {
      id: "ST-003",
      name: "Ahmed Raza",
      className: "10-B",
      exam: "Mid Term",
      subjects: 8,
      marks: 640,
      total: 800,
      percentage: 80,
      grade: "A",
      status: "Passed",
    },
    {
      id: "ST-004",
      name: "Maria Ali",
      className: "8-A",
      exam: "Mid Term",
      subjects: 7,
      marks: 455,
      total: 700,
      percentage: 65,
      grade: "B",
      status: "Passed",
    },
    {
      id: "ST-005",
      name: "Usman Tariq",
      className: "9-A",
      exam: "Mid Term",
      subjects: 7,
      marks: 350,
      total: 700,
      percentage: 50,
      grade: "C",
      status: "Passed",
    },
  ];

  const filteredResults = results.filter(
    (result) =>
      result.name.toLowerCase().includes(search.toLowerCase()) ||
      result.id.toLowerCase().includes(search.toLowerCase()) ||
      result.className.toLowerCase().includes(search.toLowerCase())
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
              Results
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage student examination results.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500">
            <FiPlus />
            Add Result
          </button>
        </div>

        {/* SUMMARY */}
        <div className="mb-6 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FiAward />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Average Score
                </p>

                <p className="mt-1 text-2xl font-bold">
                  82.6%
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <p className="text-xs text-gray-500">
              Passed Students
            </p>

            <p className="mt-2 text-2xl font-bold">
              1,142
            </p>

            <p className="mt-1 text-xs text-emerald-400">
              91.5% pass rate
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <p className="text-xs text-gray-500">
              Total Exams
            </p>

            <p className="mt-2 text-2xl font-bold">
              24
            </p>

            <p className="mt-1 text-xs text-gray-500">
              This academic year
            </p>
          </div>

        </div>

        {/* SEARCH */}
        <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">

          <div className="relative max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Search student or class..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-gray-600 focus:border-blue-500/50"
            />
          </div>

        </div>

        {/* RESULTS TABLE */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[950px] text-left">

              <thead className="border-b border-white/[0.07] bg-white/[0.02]">
                <tr>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Student
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Class
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Exam
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Marks
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Percentage
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Grade
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

                {filteredResults.map((result) => (
                  <tr
                    key={result.id}
                    className="border-b border-white/[0.05] transition hover:bg-white/[0.02]"
                  >

                    {/* STUDENT */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 font-semibold text-blue-400">
                          {result.name.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            {result.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {result.id}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* CLASS */}
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {result.className}
                    </td>

                    {/* EXAM */}
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {result.exam}
                    </td>

                    {/* MARKS */}
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {result.marks}
                      <span className="text-gray-600">
                        {" "}
                        / {result.total}
                      </span>
                    </td>

                    {/* PERCENTAGE */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <div className="h-2 w-20 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-blue-500"
                            style={{
                              width: `${result.percentage}%`,
                            }}
                          />
                        </div>

                        <span className="text-sm text-gray-300">
                          {result.percentage}%
                        </span>

                      </div>

                    </td>

                    {/* GRADE */}
                    <td className="px-6 py-4">
                      <span className="rounded-lg bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                        {result.grade}
                      </span>
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                        {result.status}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-2">

                        <button className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white">
                          <FiEye size={15} />
                        </button>

                        <button className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white">
                          <FiEdit2 size={15} />
                        </button>

                      </div>

                    </td>

                  </tr>
                ))}

                {filteredResults.length === 0 && (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-6 py-10 text-center text-sm text-gray-500"
                    >
                      No results found.
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

export default Results;