import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiMail,
  FiAward,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

const Teachers = () => {
  const teachers = [
    {
      name: "Sarah Ahmed",
      role: "Senior Mathematics Teacher",
      subject: "Mathematics",
      experience: "8+ Years Experience",
      initials: "SA",
    },
    {
      name: "Michael Khan",
      role: "Science Teacher",
      subject: "Science",
      experience: "6+ Years Experience",
      initials: "MK",
    },
    {
      name: "David Ali",
      role: "English Teacher",
      subject: "English",
      experience: "7+ Years Experience",
      initials: "DA",
    },
    {
      name: "Emma Fatima",
      role: "Computer Science Teacher",
      subject: "Computer Science",
      experience: "5+ Years Experience",
      initials: "EF",
    },
    {
      name: "Hassan Raza",
      role: "Social Studies Teacher",
      subject: "Social Studies",
      experience: "6+ Years Experience",
      initials: "HR",
    },
    {
      name: "Ayesha Malik",
      role: "Urdu Teacher",
      subject: "Urdu",
      experience: "7+ Years Experience",
      initials: "AM",
    },
  ];

  const qualities = [
    {
      icon: <FiBookOpen />,
      title: "Subject Knowledge",
      text: "Teachers help students build a strong understanding of their subjects through structured learning.",
    },
    {
      icon: <FiUsers />,
      title: "Student Support",
      text: "Our teachers encourage students to ask questions, participate and develop confidence.",
    },
    {
      icon: <FiAward />,
      title: "Professional Growth",
      text: "A commitment to continuous improvement helps create a better learning experience.",
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
              Our Teachers
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet Our
              <span className="block text-blue-400">
                Dedicated Teachers
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our teachers play an important role in creating a positive
              learning environment and supporting students throughout their
              educational journey.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <Link
                to="/"
                className="text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-slate-600">/</span>

              <span className="text-blue-300">Teachers</span>
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
              Our Faculty
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Experienced People
              <span className="block text-blue-600">
                Behind Every Lesson
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Teachers are an important part of every student's educational
              experience. Our faculty focuses on creating a supportive
              classroom environment where students can learn and participate.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Through academic guidance, communication and encouragement,
              teachers help students develop knowledge, confidence and
              positive learning habits.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-2xl font-bold text-blue-600">30+</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Teaching Staff
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-2xl font-bold text-blue-600">15+</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Academic Classes
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-blue-500/10 blur-2xl" />

            <div className="relative rounded-[30px] border border-gray-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
              <div className="rounded-[24px] bg-[#f8fafc] p-8 sm:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white shadow-lg shadow-blue-600/20">
                  <FiUsers />
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  A Supportive Faculty
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Our teaching approach aims to make students comfortable
                  asking questions, exploring ideas and improving their
                  academic skills.
                </p>

                <div className="mt-7 space-y-4 border-t border-gray-200 pt-7">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    <p className="text-sm leading-6 text-gray-600">
                      Focus on clear and structured learning
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    <p className="text-sm leading-6 text-gray-600">
                      Encouragement and individual student support
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                    <p className="text-sm leading-6 text-gray-600">
                      Development of confidence and communication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="bg-[#f8fafc] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Faculty Members
              <span className="h-px w-7 bg-blue-600" />
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Teachers
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our faculty members support students across different academic
              subjects and learning areas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <div
                key={teacher.name}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="bg-[#0b1220] px-7 pb-7 pt-8">
                  <div className="flex items-start justify-between">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/20">
                      {teacher.initials}
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-blue-300">
                      {teacher.subject}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold">
                    {teacher.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-blue-600">
                    {teacher.role}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    {teacher.experience}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="text-xs text-gray-400">
                      Faculty Member
                    </span>

                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                      title="Contact Teacher"
                    >
                      <FiMail />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITIES */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Teaching Approach
              <span className="h-px w-7 bg-blue-600" />
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Supporting Better Learning
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our teachers aim to create classrooms where students can learn,
              participate and grow with confidence.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {qualities.map((quality) => (
              <div
                key={quality.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                  {quality.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {quality.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {quality.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-blue-600 px-6 py-20 lg:px-8">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-900/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <span className="text-sm font-semibold text-blue-100">
              Learn More About Our School
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Have Questions About Our Faculty?
            </h2>

            <p className="mt-4 text-blue-100">
              Contact the school to learn more about our teachers and academic
              programs.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-600 shadow-lg transition hover:bg-gray-50"
          >
            Contact School
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Teachers;