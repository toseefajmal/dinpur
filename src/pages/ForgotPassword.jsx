import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiArrowLeft,
  FiArrowRight,
  FiLock,
  FiBookOpen,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT */}
        <div className="relative hidden overflow-hidden bg-[#08111f] lg:flex">
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

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-[#0f172a]">
                IK
              </div>

              <div>
                <h1 className="font-bold text-white">
                  Ibn Khaldun
                </h1>

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Model High School
                </p>
              </div>
            </Link>

            <div className="max-w-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white">
                <FiLock />
              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white xl:text-5xl">
                Reset Your
                <span className="block text-blue-400">
                  Password
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
                Don't worry. Enter your registered email address and follow
                the instructions to recover your account.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
                <FiShield className="text-blue-400" />
                Secure account recovery
              </div>
            </div>

            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Ibn Khaldun Model High School.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* MOBILE HEADER */}
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f172a] text-sm font-bold text-white">
                  IK
                </div>

                <div>
                  <h1 className="text-sm font-bold">
                    Ibn Khaldun
                  </h1>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-600">
                    Model High School
                  </p>
                </div>
              </Link>

              <Link
                to="/"
                className="text-sm font-medium text-gray-500 hover:text-blue-600"
              >
                Home
              </Link>
            </div>

            <div className="rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-9">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                      <FiMail />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold">
                      Forgot Password?
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Enter your email address and we'll help you recover your
                      account.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email Address
                      </label>

                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your registered email"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                    >
                      Send Reset Instructions
                      <FiArrowRight />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-5 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-3xl text-green-600">
                    <FiCheckCircle />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold">
                    Check Your Email
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    If an account exists for{" "}
                    <span className="font-semibold text-gray-700">
                      {email}
                    </span>
                    , password reset instructions will be sent there.
                  </p>

                  <Link
                    to="/login"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    Back to Login
                    <FiArrowRight />
                  </Link>
                </div>
              )}

              {!submitted && (
                <div className="mt-7 border-t border-gray-100 pt-6">
                  <Link
                    to="/login"
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-blue-600"
                  >
                    <FiArrowLeft />
                    Back to Login
                  </Link>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
              <FiBookOpen />
              Ibn Khaldun Model High School
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;