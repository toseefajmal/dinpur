import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiCalendar,
  FiMapPin,
  FiStar,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const Home = () => {
  const stats = [
    {
      number: "500+",
      title: "Students",
      icon: <FiUsers />,
    },
    {
      number: "30+",
      title: "Teachers",
      icon: <FiAward />,
    },
    {
      number: "15+",
      title: "Classes",
      icon: <FiBookOpen />,
    },
    {
      number: "20+",
      title: "Years Experience",
      icon: <FiCalendar />,
    },
  ];

  const programs = [
    {
      title: "Primary Education",
      text: "Strong educational foundation with focus on learning, discipline and creativity.",
      icon: <FiBookOpen />,
    },
    {
      title: "Middle Education",
      text: "Developing academic skills, confidence and critical thinking in students.",
      icon: <FiUsers />,
    },
    {
      title: "Secondary Education",
      text: "Quality education and preparation for higher studies and future careers.",
      icon: <FiAward />,
    },
  ];

  const features = [
    "Qualified and experienced teachers",
    "Modern learning environment",
    "Focus on academic excellence",
    "Character building and discipline",
    "Extra-curricular activities",
    "Student-focused learning",
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">

          {/* Hero Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Welcome to IKMHS
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Knowledge.
              <span className="block text-blue-400">
                Shaping Futures.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Ibn Khaldun Model High School is committed to quality
              education, character development and creating a strong
              foundation for every student's future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Apply for Admission
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Explore Our School
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <FiCheckCircle className="text-blue-400" />
                Quality Education
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <FiShield className="text-blue-400" />
                Safe Environment
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-5 rounded-[32px] bg-blue-500/10 blur-2xl" />

            <div className="relative rounded-[30px] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[24px] bg-white p-7 sm:p-9">

                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                    <FiBookOpen />
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-600">
                    <FiStar />
                    Excellence
                  </div>
                </div>

                <h2 className="mt-7 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  Education for a
                  <span className="block text-blue-600">
                    Better Future
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  We believe every student has the potential to learn,
                  grow and achieve great things through the right
                  educational environment.
                </p>

                <div className="mt-7 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <FiMapPin />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        School Location
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                        Din Pur, Punjab, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <p className="text-2xl font-bold text-blue-600">
                      500+
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Students
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-bold text-[#0f172a]">
                      30+
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Teachers
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 px-4 py-8 sm:px-7 ${
                index !== 0 ? "border-l border-gray-100" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                {stat.icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  {stat.number}
                </h3>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {stat.title}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              About Our School
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Building Knowledge,
              <span className="block text-blue-600">
                Character & Confidence
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              Ibn Khaldun Model High School is committed to providing
              students with a balanced education that combines academic
              learning, character development and practical skills.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-gray-600">
              Our goal is to create a positive learning environment where
              students can discover their abilities and prepare themselves
              for future challenges.
            </p>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Discover More
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                <FiBookOpen />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Quality Education
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Focused learning programs designed for student success.
              </p>
            </div>

            <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                <FiUsers />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Expert Teachers
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Dedicated teachers helping students reach their potential.
              </p>
            </div>

            <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl text-orange-600">
                <FiAward />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Student Growth
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Encouraging confidence, creativity and leadership.
              </p>
            </div>

            <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-purple-600">
                <FiCheckCircle />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Safe Environment
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                A respectful and supportive environment for every student.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="bg-[#f8fafc] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                <span className="h-px w-7 bg-blue-600" />
                Academic Programs
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Education Programs
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                Our academic programs help students build strong
                foundations and develop skills for their next stage
                of education.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-50 transition group-hover:bg-blue-100" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                    {program.icon}
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {program.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {program.text}
                  </p>

                  <Link
                    to="/about"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                  >
                    Learn More
                    <FiArrowRight className="transition group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Helping Students Learn,
              <span className="block text-blue-600">
                Grow & Succeed
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-600">
              We focus on more than classroom education. Our approach
              encourages students to become responsible, confident and
              successful individuals.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                >
                  <FiCheckCircle className="mt-0.5 shrink-0 text-lg text-blue-600" />

                  <span className="text-sm font-medium leading-6 text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Card */}
          <div className="relative overflow-hidden rounded-[30px] bg-[#0b1220] p-8 text-white shadow-2xl sm:p-10">

            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-300">
                  Student Development
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <FiTrendingUp />
                </div>
              </div>

              <h3 className="mt-6 text-3xl font-bold leading-tight">
                Education Beyond
                <span className="block text-blue-400">
                  the Classroom
                </span>
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Students need knowledge as well as confidence,
                communication, teamwork and discipline. We aim to
                support students in all these areas.
              </p>

              <div className="mt-9 space-y-6">

                <div>
                  <div className="flex justify-between text-sm">
                    <span>Academic Learning</span>
                    <span className="text-blue-300">95%</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[95%] rounded-full bg-blue-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span>Student Activities</span>
                    <span className="text-emerald-300">85%</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[85%] rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span>Character Building</span>
                    <span className="text-orange-300">90%</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[90%] rounded-full bg-orange-500" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="bg-[#f8fafc] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                <span className="h-px w-7 bg-blue-600" />
                School Activities
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Latest Events
              </h2>
            </div>

            <Link
              to="/events"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
            >
              View All Events
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-44 items-center justify-center bg-blue-50 text-blue-600">
                <FiCalendar className="text-5xl transition group-hover:scale-110" />
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  School Event
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Annual Sports Day
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Students participate in different sports and activities.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gray-400">
                  <FiCalendar />
                  School Activity
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-44 items-center justify-center bg-emerald-50 text-emerald-600">
                <FiBookOpen className="text-5xl transition group-hover:scale-110" />
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Academic Event
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Annual Examination
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Academic assessments to monitor student progress.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gray-400">
                  <FiCalendar />
                  Academic Activity
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-44 items-center justify-center bg-orange-50 text-orange-600">
                <FiAward className="text-5xl transition group-hover:scale-110" />
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Student Activity
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Prize Distribution
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Celebrating students for their achievements and efforts.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gray-400">
                  <FiCalendar />
                  Student Activity
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
              Start Your Journey
            </span>

            <h2 className="mt-2 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Give Your Child a Better Educational Future
            </h2>

            <p className="mt-4 text-blue-100">
              Learn more about admissions and our academic programs.
            </p>
          </div>

          <Link
            to="/admissions"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-600 shadow-lg transition hover:bg-gray-50"
          >
            Admission Information
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Home;