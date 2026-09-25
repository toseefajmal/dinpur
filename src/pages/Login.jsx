import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiLock,
  FiMail,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiShield,
  FiBookOpen,
  FiAlertCircle,
} from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    if (
      formData.email === adminEmail &&
      formData.password === adminPassword
    ) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password.");
    }
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
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white shadow-lg shadow-blue-600/20">
                <FiBookOpen />
              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white xl:text-5xl">
                Welcome to the
                <span className="block text-blue-400">
                  School Portal
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
                Access your school management portal and stay connected with
                academic activities, students, teachers and school resources.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
                <FiShield className="text-blue-400" />
                Secure portal access
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

            {/* MOBILE LOGO */}
            <div className="mb-10 flex items-center justify-between lg:hidden">
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

              <div className="mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiLock />
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                  Sign In
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Enter your credentials to access the school portal.
                </p>
              </div>

              {/* ERROR */}
              {error && (
                <div className="mb-5 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  <FiAlertCircle />
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-gray-700">
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-xs font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-blue-600"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Sign In
                  <FiArrowRight />
                </button>
              </form>

              {/* SIGN UP */}
              <div className="mt-6 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Sign Up
                </Link>
              </div>

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-100" />

                <span className="text-xs text-gray-400">
                  School Portal
                </span>

                <div className="h-px flex-1 bg-gray-100" />
              </div>

              <Link
                to="/"
                className="flex w-full items-center justify-center rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                Back to Website
              </Link>
            </div>

            <p className="mt-6 text-center text-xs text-gray-400">
              Authorized users only. Please keep your login credentials secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;