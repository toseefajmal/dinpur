import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
  FiUserPlus,
  FiCalendar,
  FiPhone,
  FiMail,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiHelpCircle,
} from "react-icons/fi";

const Admissions = () => {
  const steps = [
    {
      number: "01",
      icon: <FiFileText />,
      title: "Submit Application",
      text: "Complete the admission application with the required student and parent information.",
    },
    {
      number: "02",
      icon: <FiUserPlus />,
      title: "Document Verification",
      text: "Submit the required documents for verification by the school administration.",
    },
    {
      number: "03",
      icon: <FiCalendar />,
      title: "Admission Process",
      text: "Follow the required assessment, interview or admission procedure as applicable.",
    },
    {
      number: "04",
      icon: <FiCheckCircle />,
      title: "Confirmation",
      text: "Complete the final admission requirements and receive confirmation from the school.",
    },
  ];

  const requirements = [
    "Completed admission application form",
    "Student's previous academic record",
    "Birth certificate or B-Form",
    "Recent passport-size photographs",
    "Parent or guardian identification document",
    "School leaving certificate, where applicable",
  ];

  const features = [
    {
      icon: <FiBookOpen />,
      title: "Quality Learning",
      text: "A structured learning environment focused on academic development.",
    },
    {
      icon: <FiUsers />,
      title: "Supportive Environment",
      text: "A respectful environment that encourages student participation and growth.",
    },
    {
      icon: <FiAward />,
      title: "Student Development",
      text: "Focus on confidence, discipline, communication and personal development.",
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
              Admissions
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Start Your Child's
              <span className="block text-blue-400">
                Educational Journey
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Learn about our admission process, required documents and the
              steps to become part of Ibn Khaldun Model High School.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <Link
                to="/"
                className="text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-slate-600">/</span>

              <span className="text-blue-300">Admissions</span>
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
              Admissions Information
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              A Simple Path to
              <span className="block text-blue-600">
                Joining Our School
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              We aim to make the admission process clear and straightforward
              for students and parents. Review the basic requirements and
              follow the admission steps provided by the school.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              For current admission dates, fee details and class availability,
              please contact the school administration directly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+923000000000"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                <FiPhone />
                Contact School
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                Send an Inquiry
                <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-blue-500/10 blur-2xl" />

            <div className="relative rounded-[30px] border border-gray-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
              <div className="rounded-[24px] bg-[#f8fafc] p-8 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-600/20">
                  <FiUserPlus />
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  Admissions Open
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Parents and guardians can contact the school administration
                  to learn about available classes, admission requirements and
                  the current admission schedule.
                </p>

                <div className="mt-7 space-y-4 border-t border-gray-200 pt-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <FiPhone />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="text-sm font-semibold text-gray-800">
                        +92 300 0000000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <FiMail />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm font-semibold text-gray-800">
                        info@ibnkhaldun.edu.pk
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f8fafc] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Admission Process
              <span className="h-px w-7 bg-blue-600" />
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              How to Apply
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Follow these general steps to complete the admission process.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                    {step.icon}
                  </div>

                  <span className="text-3xl font-bold text-gray-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Required Documents
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Documents You May
              <span className="block text-blue-600">
                Need for Admission
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Prepare the required documents before starting the admission
              process. Specific requirements may vary depending on the class
              and school policy.
            </p>

            <div className="mt-8 space-y-4">
              {requirements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <FiCheckCircle className="text-sm" />
                  </div>

                  <p className="text-sm leading-6 text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] bg-[#0b1220] p-8 text-white shadow-2xl sm:p-10">
            <span className="text-sm font-semibold text-blue-300">
              Before You Apply
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Get the Information
              <span className="block text-blue-400">
                You Need First
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Contact the school administration to confirm the latest
              admission requirements, available classes, fees and important
              dates.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <FiCalendar />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Admission Schedule
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Confirm application and admission dates with the school.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <FiBookOpen />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Class Availability
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Ask about available seats for the required class.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <FiPhone />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Contact Administration
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Speak with the school team for admission guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Contact Us
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="border-y border-gray-100 bg-[#f8fafc] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Why Join Us
              <span className="h-px w-7 bg-blue-600" />
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Supporting Students at Every Step
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our approach focuses on academic learning as well as the wider
              development of every student.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] bg-blue-600 px-8 py-14 text-center shadow-2xl shadow-blue-600/15 sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white">
            <FiHelpCircle />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Have Questions About Admissions?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Our school administration can provide the latest information
            regarding admissions, classes, requirements and fees.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 transition hover:bg-gray-50"
            >
              Contact School
              <FiArrowRight />
            </Link>

            <a
              href="mailto:info@ibnkhaldun.edu.pk"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <FiMail />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;