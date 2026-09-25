import React from "react";
import {
  FiPlus,
  FiUsers,
  FiBookOpen,
  FiMoreVertical,
} from "react-icons/fi";

const Classes = () => {
  const classes = [
    {
      id: "CL-001",
      name: "10-A",
      teacher: "Ahmed Khan",
      students: 32,
      subjects: 8,
      room: "Room 101",
    },
    {
      id: "CL-002",
      name: "10-B",
      teacher: "Usman Ali",
      students: 30,
      subjects: 8,
      room: "Room 102",
    },
    {
      id: "CL-003",
      name: "9-A",
      teacher: "Sara Ahmed",
      students: 35,
      subjects: 7,
      room: "Room 201",
    },
    {
      id: "CL-004",
      name: "9-B",
      teacher: "Maria Hassan",
      students: 33,
      subjects: 7,
      room: "Room 202",
    },
    {
      id: "CL-005",
      name: "8-A",
      teacher: "Bilal Ahmed",
      students: 31,
      subjects: 7,
      room: "Room 301",
    },
    {
      id: "CL-006",
      name: "8-B",
      teacher: "Ayesha Khan",
      students: 29,
      subjects: 7,
      room: "Room 302",
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
              Classes
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage school classes, teachers and students.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500">
            <FiPlus />
            Add Class
          </button>
        </div>

        {/* CLASS GRID */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {classes.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:border-blue-500/20 hover:bg-white/[0.04]"
            >

              {/* TOP */}
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-bold text-blue-400">
                    {item.name}
                  </div>

                  <div>
                    <h2 className="font-semibold">
                      Class {item.name}
                    </h2>

                    <p className="text-xs text-gray-500">
                      {item.id}
                    </p>
                  </div>

                </div>

                <button className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white">
                  <FiMoreVertical />
                </button>

              </div>

              {/* TEACHER */}
              <div className="mt-6">
                <p className="text-xs text-gray-500">
                  Class Teacher
                </p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  {item.teacher}
                </p>
              </div>

              {/* INFO */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                  <div className="flex items-center gap-2">
                    <FiUsers className="text-blue-400" />

                    <span className="text-xs text-gray-500">
                      Students
                    </span>
                  </div>

                  <p className="mt-2 text-xl font-semibold">
                    {item.students}
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                  <div className="flex items-center gap-2">
                    <FiBookOpen className="text-blue-400" />

                    <span className="text-xs text-gray-500">
                      Subjects
                    </span>
                  </div>

                  <p className="mt-2 text-xl font-semibold">
                    {item.subjects}
                  </p>
                </div>

              </div>

              {/* ROOM */}
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="text-xs text-gray-500">
                  Classroom
                </span>

                <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
                  {item.room}
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Classes;