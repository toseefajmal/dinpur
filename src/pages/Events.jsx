import React from "react";
import { Link } from "react-router-dom";
import {
  FiCalendar,
  FiArrowRight,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

const Events = () => {
  const events = [
    {
      date: "15",
      month: "OCT",
      title: "Annual Sports Day",
      category: "Sports",
      time: "09:00 AM",
      location: "School Sports Ground",
      description:
        "A day of sports activities, competitions and teamwork for students.",
      icon: <FiAward />,
    },
    {
      date: "22",
      month: "OCT",
      title: "Parent Teacher Meeting",
      category: "Meeting",
      time: "10:00 AM",
      location: "School Campus",
      description:
        "An opportunity for parents and teachers to discuss student progress.",
      icon: <FiUsers />,
    },
    {
      date: "05",
      month: "NOV",
      title: "Science Exhibition",
      category: "Academic",
      time: "09:30 AM",
      location: "School Hall",
      description:
        "Students will present creative projects and demonstrate scientific ideas.",
      icon: <FiBookOpen />,
    },
    {
      date: "18",
      month: "NOV",
      title: "Annual Function",
      category: "School Event",
      time: "11:00 AM",
      location: "School Auditorium",
      description:
        "A special school gathering celebrating student achievements and activities.",
      icon: <FiAward />,
    },
    {
      date: "02",
      month: "DEC",
      title: "Educational Seminar",
      category: "Education",
      time: "10:00 AM",
      location: "School Auditorium",
      description:
        "An educational session designed to encourage learning and personal development.",
      icon: <FiBookOpen />,
    },
    {
      date: "15",
      month: "DEC",
      title: "Winter Activity Day",
      category: "Activities",
      time: "09:00 AM",
      location: "School Campus",
      description:
        "A fun-filled activity day with student participation and group activities.",
      icon: <FiUsers />,
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-[#0f172a]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#08111f]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              School Events
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              School Events &
              <span className="block text-blue-400">Activities</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Stay informed about upcoming academic, sports, cultural and
              school community events.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm">
              <Link
                to="/"
                className="text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-slate-600">/</span>

              <span className="text-blue-300">Events</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              School Activities
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Learning Beyond
              <span className="block text-blue-600">
                the Classroom
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              School events provide students with opportunities to participate,
              collaborate and develop skills outside regular classroom
              activities.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From academic activities to sports and community events, our
              school calendar aims to provide students with meaningful
              experiences.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#0b1220] p-8 text-white shadow-2xl sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl">
              <FiCalendar />
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              Stay Updated
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Check upcoming events regularly and contact the school
              administration for the latest dates and schedule updates.
            </p>

            <div className="mt-8 border-t border-white/10 pt-7">
              <div className="flex items-center gap-3">
                <FiCalendar className="text-blue-400" />
                <span className="text-sm text-gray-300">
                  Academic & Co-curricular Activities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-[#f8fafc] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Upcoming Events
              <span className="h-px w-7 bg-blue-600" />
            </span>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              What's Happening
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore some of the upcoming activities and events at our school.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-between bg-[#0b1220] px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-blue-600 text-white">
                      <span className="text-2xl font-bold leading-none">
                        {event.date}
                      </span>
                      <span className="mt-1 text-[10px] font-bold tracking-wider">
                        {event.month}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-blue-300">
                        {event.category}
                      </span>

                      <h3 className="mt-1 text-lg font-bold text-white">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-2xl text-blue-400">
                    {event.icon}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-gray-600">
                    {event.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <FiClock className="text-blue-600" />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <FiMapPin className="text-blue-600" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <span className="text-sm font-semibold text-blue-100">
              Need More Information?
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Have Questions About an Event?
            </h2>

            <p className="mt-4 text-blue-100">
              Contact the school administration for the latest event details.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-600 shadow-lg transition hover:bg-gray-50"
          >
            Contact School
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;