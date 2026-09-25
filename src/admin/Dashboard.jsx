import React from "react";
import {
  FiUsers,
  FiUserCheck,
  FiBookOpen,
  FiDollarSign,
  FiArrowUpRight,
  FiArrowDownRight,
  FiCalendar,
  FiClock,
  FiMoreHorizontal,
} from "react-icons/fi";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      change: "+12.5%",
      icon: FiUsers,
      positive: true,
    },
    {
      title: "Total Teachers",
      value: "68",
      change: "+4.8%",
      icon: FiUserCheck,
      positive: true,
    },
    {
      title: "Total Classes",
      value: "42",
      change: "+2.4%",
      icon: FiBookOpen,
      positive: true,
    },
    {
      title: "Fee Collection",
      value: "Rs. 8.42M",
      change: "-3.2%",
      icon: FiDollarSign,
      positive: false,
    },
  ];

  const activities = [
    {
      name: "Ali Hassan",
      action: "joined Class 10-A",
      time: "10 min ago",
    },
    {
      name: "Sara Khan",
      action: "submitted attendance",
      time: "25 min ago",
    },
    {
      name: "Ahmed Raza",
      action: "paid monthly fee",
      time: "1 hour ago",
    },
    {
      name: "Maria Ali",
      action: "received new result",
      time: "2 hours ago",
    },
  ];

  const schedule = [
    {
      time: "08:00 AM",
      title: "Morning Assembly",
      type: "School",
    },
    {
      time: "10:30 AM",
      title: "Mathematics Class",
      type: "Class 10-A",
    },
    {
      time: "12:00 PM",
      title: "Science Class",
      type: "Class 9-B",
    },
    {
      time: "02:00 PM",
      title: "Staff Meeting",
      type: "Meeting",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07070a] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium text-violet-400">
              Admin Portal
            </p>

            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Welcome back! Here's what's happening in your school today.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300 transition hover:border-violet-500/30 hover:bg-violet-500/10">
            <FiCalendar />
            September 25, 2026
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Icon size={21} />
                  </div>

                  <span
                    className={`flex items-center gap-1 text-xs ${
                      item.positive
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.positive ? (
                      <FiArrowUpRight size={14} />
                    ) : (
                      <FiArrowDownRight size={14} />
                    )}

                    {item.change}
                  </span>
                </div>

                <p className="mt-5 text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {item.value}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Main Section */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Attendance */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 lg:col-span-2">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-semibold">
                  Attendance Overview
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Today's student attendance
                </p>
              </div>

              <span className="w-fit rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                92.4% Present
              </span>
            </div>

            <div className="mt-7 space-y-6">

              {/* Present */}
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-400">
                    Present
                  </span>

                  <span className="text-sm font-medium">
                    92%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: "92%" }}
                  />
                </div>
              </div>

              {/* Absent */}
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-400">
                    Absent
                  </span>

                  <span className="text-sm font-medium">
                    5%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-red-500"
                    style={{ width: "5%" }}
                  />
                </div>
              </div>

              {/* Late */}
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-400">
                    Late
                  </span>

                  <span className="text-sm font-medium">
                    3%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-yellow-500"
                    style={{ width: "3%" }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-6">
              <div>
                <p className="text-xs text-gray-500">
                  Present
                </p>

                <p className="mt-1 text-lg font-semibold text-emerald-400">
                  1,153
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Absent
                </p>

                <p className="mt-1 text-lg font-semibold text-red-400">
                  62
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Late
                </p>

                <p className="mt-1 text-lg font-semibold text-yellow-400">
                  33
                </p>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">
                  Today's Schedule
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  September 25
                </p>
              </div>

              <button className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white">
                <FiMoreHorizontal />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {schedule.map((item) => (
                <div
                  key={item.time}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-violet-500/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      <FiClock size={16} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        {item.time}
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 border-t border-white/[0.05] pt-3">
                    <span className="text-xs text-gray-600">
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">
                Recent Activity
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Latest updates from your school
              </p>
            </div>

            <button className="text-sm text-violet-400 transition hover:text-violet-300">
              View All
            </button>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {activities.map((item) => (
              <div
                key={`${item.name}-${item.action}`}
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-violet-500/20"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 text-sm font-semibold text-violet-400">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.action}
                    </p>
                  </div>
                </div>

                <span className="ml-3 text-xs text-gray-600">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;