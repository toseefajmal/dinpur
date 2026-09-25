import React, { useState } from "react";
import {
  FiPlus,
  FiDollarSign,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiSearch,
} from "react-icons/fi";

const Fees = () => {
  const [search, setSearch] = useState("");

  const payments = [
    {
      id: "PAY-001",
      student: "Ali Hassan",
      studentId: "ST-001",
      className: "10-A",
      amount: "Rs. 25,000",
      date: "25 Sep 2026",
      method: "Bank Transfer",
      status: "Paid",
    },
    {
      id: "PAY-002",
      student: "Sara Khan",
      studentId: "ST-002",
      className: "9-B",
      amount: "Rs. 22,000",
      date: "24 Sep 2026",
      method: "Cash",
      status: "Paid",
    },
    {
      id: "PAY-003",
      student: "Ahmed Raza",
      studentId: "ST-003",
      className: "10-B",
      amount: "Rs. 25,000",
      date: "23 Sep 2026",
      method: "Online",
      status: "Pending",
    },
    {
      id: "PAY-004",
      student: "Maria Ali",
      studentId: "ST-004",
      className: "8-A",
      amount: "Rs. 20,000",
      date: "22 Sep 2026",
      method: "Cash",
      status: "Paid",
    },
    {
      id: "PAY-005",
      student: "Usman Tariq",
      studentId: "ST-005",
      className: "9-A",
      amount: "Rs. 22,000",
      date: "20 Sep 2026",
      method: "Bank Transfer",
      status: "Overdue",
    },
  ];

  const filteredPayments = payments.filter(
    (payment) =>
      payment.student.toLowerCase().includes(search.toLowerCase()) ||
      payment.studentId.toLowerCase().includes(search.toLowerCase()) ||
      payment.className.toLowerCase().includes(search.toLowerCase())
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
              Fees
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage student fees and payment records.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500">
            <FiPlus />
            Add Payment
          </button>
        </div>

        {/* SUMMARY */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {/* TOTAL COLLECTION */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FiDollarSign />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Total Collection
                </p>

                <p className="mt-1 text-xl font-bold">
                  Rs. 8.42M
                </p>
              </div>

            </div>
          </div>

          {/* PAID */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FiCheckCircle />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Paid
                </p>

                <p className="mt-1 text-xl font-bold">
                  Rs. 7.65M
                </p>
              </div>

            </div>
          </div>

          {/* PENDING */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                <FiClock />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Pending
                </p>

                <p className="mt-1 text-xl font-bold">
                  Rs. 420K
                </p>
              </div>

            </div>
          </div>

          {/* OVERDUE */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <FiAlertCircle />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Overdue
                </p>

                <p className="mt-1 text-xl font-bold">
                  Rs. 350K
                </p>
              </div>

            </div>
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

        {/* PAYMENTS TABLE */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">

          <div className="border-b border-white/[0.07] px-5 py-4">
            <h2 className="font-semibold">
              Recent Payments
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Latest student fee transactions
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px] text-left">

              <thead className="border-b border-white/[0.07] bg-white/[0.02]">
                <tr>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Student
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Class
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Date
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Method
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-white/[0.05] transition hover:bg-white/[0.02]"
                  >

                    {/* STUDENT */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 font-semibold text-blue-400">
                          {payment.student.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            {payment.student}
                          </p>

                          <p className="text-xs text-gray-500">
                            {payment.studentId}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* CLASS */}
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {payment.className}
                    </td>

                    {/* AMOUNT */}
                    <td className="px-6 py-4 text-sm font-medium text-gray-200">
                      {payment.amount}
                    </td>

                    {/* DATE */}
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {payment.date}
                    </td>

                    {/* METHOD */}
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {payment.method}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          payment.status === "Paid"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : payment.status === "Pending"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {payment.status}
                      </span>

                    </td>

                  </tr>
                ))}

                {filteredPayments.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-10 text-center text-sm text-gray-500"
                    >
                      No payments found.
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

export default Fees;