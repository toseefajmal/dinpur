import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiTarget,
  FiHeart,
  FiTrendingUp,
  FiShield,
  FiStar,
} from "react-icons/fi";

const About = () => {
  const values = [
    {
      icon: <FiBookOpen />,
      title: "Quality Education",
      text: "We focus on creating a strong academic foundation and meaningful learning experience for students.",
    },
    {
      icon: <FiHeart />,
      title: "Character Building",
      text: "Students are encouraged to develop discipline, respect, responsibility and positive values.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Student Growth",
      text: "We support students in developing confidence, creativity, communication and leadership skills.",
    },
    {
      icon: <FiShield />,
      title: "Safe Environment",
      text: "We aim to provide a respectful, supportive and positive environment for every student.",
    },
  ];

  const achievements = [
    {
      number: "500+",
      title: "Students",
    },
    {
      number: "30+",
      title: "Teachers",
    },
    {
      number: "15+",
      title: "Classes",
    },
    {
      number: "20+",
      title: "Years Experience",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-[#0f172a]">

      {/* ================= HERO ================= */}
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
              About IKMHS
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Strong
              <span className="block text-blue-400">
                Foundations for Life
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Learn more about Ibn Khaldun Model High School, our
              educational approach, values and commitment to student
              development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <Link
                to="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-slate-600">/</span>

              <span className="text-blue-300">
                About
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Education That Goes
              <span className="block text-blue-600">
                Beyond the Classroom
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Ibn Khaldun Model High School is focused on providing
              students with an educational environment where they can
              learn, grow and prepare for their future.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our approach combines academic learning with character
              development, discipline, confidence and practical skills.
              We believe that education should help students become
              responsible and capable individuals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Admission Information
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                Contact School
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-blue-500/10 blur-2xl" />

            <div className="relative rounded-[30px] border border-gray-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">

              <div className="rounded-[24px] bg-[#f8fafc] p-8 sm:p-10">

                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-600/20">
                    <FiBookOpen />
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-amber-600 shadow-sm">
                    <FiStar />
                    Excellence
                  </div>
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  Our Educational Vision
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  To create an environment where students can discover
                  their abilities, develop strong values and build the
                  confidence needed for their future.
                </p>

                <div className="mt-7 border-t border-gray-200 pt-7">

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <FiTarget />
                    </div>

                    <div>
                      <h4 className="font-bold">
                        Our Mission
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Supporting students through quality education,
                        discipline and personal development.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-gray-100 bg-[#f8fafc]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

          {achievements.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-10 text-center ${
                index !== 0
                  ? "border-l border-gray-200"
                  : ""
              }`}
            >
              <h3 className="text-3xl font-bold text-blue-600">
                {item.number}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Our Values
              <span className="h-px w-7 bg-blue-600" />
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              What We Believe In
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our core values guide the way we teach, support and
              develop our students.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {values.map((value, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {value.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="bg-[#f8fafc] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Dark Card */}
          <div className="relative overflow-hidden rounded-[30px] bg-[#0b1220] p-8 text-white shadow-2xl sm:p-10">

            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              <span className="text-sm font-semibold text-blue-300">
                Our Approach
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Learning With
                <span className="block text-blue-400">
                  Purpose
                </span>
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                We believe effective education should develop the whole
                student. Academic knowledge is important, but confidence,
                communication, discipline and character are equally valuable.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <FiBookOpen />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Academic Development
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      Building strong educational foundations.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <FiUsers />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Personal Development
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      Encouraging confidence and communication.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <FiAward />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Future Preparation
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      Preparing students for future opportunities.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Student Development
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              More Than
              <span className="block text-blue-600">
                Academic Learning
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              A student's development extends beyond textbooks and
              examinations. We aim to encourage students to become
              confident, responsible and respectful members of society.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiCheckCircle />
                </div>

                <div>
                  <h3 className="font-bold">
                    Strong Academic Foundation
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Helping students understand concepts and develop
                    effective learning habits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiCheckCircle />
                </div>

                <div>
                  <h3 className="font-bold">
                    Confidence & Communication
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Encouraging students to express ideas and participate
                    confidently.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiCheckCircle />
                </div>

                <div>
                  <h3 className="font-bold">
                    Discipline & Responsibility
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Developing positive habits and a strong sense of
                    responsibility.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-blue-600 px-6 py-20 lg:px-8">

        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-900/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

          <div>
            <span className="text-sm font-semibold text-blue-100">
              Join Our School Community
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Give Your Child a Stronger Future
            </h2>

            <p className="mt-4 text-blue-100">
              Learn more about our admission process and academic programs.
            </p>
          </div>

          <Link
            to="/admissions"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-600 shadow-lg transition hover:bg-gray-50"
          >
            Explore Admissions
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default About;