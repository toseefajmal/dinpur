import React from "react";
import {
  FiPlus,
  FiMail,
  FiPhone,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

const Teachers = () => {
  const teachers = [
    {
      id: "T-001",
      name: "Ahmed Khan",
      subject: "Mathematics",
      email: "ahmed@example.com",
      phone: "+92 300 1234567",
      experience: "8 Years",
      status: "Active",
    },
    {
      id: "T-002",
      name: "Sara Ahmed",
      subject: "English",
      email: "sara@example.com",
      phone: "+92 301 2345678",
      experience: "6 Years",
      status: "Active",
    },
    {
      id: "T-003",
      name: "Usman Ali",
      subject: "Physics",
      email: "usman@example.com",
      phone: "+92 302 3456789",
      experience: "10 Years",
      status: "Active",
    },
    {
      id: "T-004",
      name: "Maria Hassan",
      subject: "Computer Science",
      email: "maria@example.com",
      phone: "+92 303 4567890",
      experience: "5 Years",
      status: "Inactive",
    },
  ];

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
              Teachers
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage all school teachers and their information.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500">
            <FiPlus />
            Add Teacher
          </button>
        </div>

        {/* TEACHERS GRID */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:border-blue-500/20 hover:bg-white/[0.04]"
            >

              {/* TOP */}
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-lg font-semibold text-blue-400">
                    {teacher.name.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-semibold">
                      {teacher.name}
                    </h2>

                    <p className="text-xs text-gray-500">
                      {teacher.id}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    teacher.status === "Active"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {teacher.status}
                </span>
              </div>

              {/* SUBJECT */}
              <div className="mt-6 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                <p className="text-xs text-gray-500">
                  Subject
                </p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  {teacher.subject}
                </p>
              </div>

              {/* INFORMATION */}
              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <FiMail className="text-blue-400" />
                  <span className="truncate">
                    {teacher.email}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <FiPhone className="text-blue-400" />
                  <span>
                    {teacher.phone}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                  <span className="text-xs text-gray-500">
                    Experience
                  </span>

                  <span className="text-sm text-gray-300">
                    {teacher.experience}
                  </span>
                </div>

              </div>

              {/* ACTIONS */}
              <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4">

                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/[0.08] py-2.5 text-xs text-gray-400 transition hover:bg-white/[0.04] hover:text-white">
                  <FiEdit2 size={14} />
                  Edit
                </button>

                <button className="flex items-center justify-center rounded-lg border border-white/[0.08] p-2.5 text-gray-500 transition hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-400">
                  <FiTrash2 size={14} />
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Teachers;