import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

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
              Contact Us
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's Stay
              <span className="block text-blue-400">
                Connected
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Have a question about admissions, academics or school activities?
              Get in touch with our school administration.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm">
              <Link
                to="/"
                className="text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <span className="text-slate-600">/</span>

              <span className="text-blue-300">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                <FiMapPin />
              </div>

              <h3 className="mt-6 font-bold">Our Location</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Din Pur, Punjab, Pakistan
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                <FiPhone />
              </div>

              <h3 className="mt-6 font-bold">Phone</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                +92 300 0000000
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                <FiMail />
              </div>

              <h3 className="mt-6 font-bold">Email</h3>

              <p className="mt-2 break-all text-sm leading-6 text-gray-500">
                info@ibnkhaldun.edu.pk
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                <FiClock />
              </div>

              <h3 className="mt-6 font-bold">Office Hours</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Monday - Friday
                <br />
                8:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[#f8fafc] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              Get In Touch
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Send Us a
              <span className="block text-blue-600">
                Message
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Fill out the form and share your question or inquiry with us.
              This demo form displays a success message and does not send data
              to a server.
            </p>

            <div className="mt-8 rounded-3xl bg-[#0b1220] p-7 text-white">
              <h3 className="text-lg font-bold">
                Need Immediate Assistance?
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                For admission dates, fees, class availability or urgent
                questions, contact the school administration directly.
              </p>

              <a
                href="tel:+923000000000"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
              >
                <FiPhone />
                +92 300 0000000
              </a>
            </div>
          </div>

          <div className="rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
                <FiCheckCircle className="mt-0.5 shrink-0" />

                <div>
                  <p className="font-semibold">
                    Message submitted successfully.
                  </p>

                  <p className="mt-1 text-sm text-green-600">
                    Thank you for contacting Ibn Khaldun Model High School.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 0000000"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Admission inquiry"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Send Message
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="flex min-h-[350px] items-center justify-center rounded-[30px] bg-[#0b1220] p-10 text-center">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                <FiMapPin />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Visit Our School
              </h3>

              <p className="mx-auto mt-3 max-w-sm leading-7 text-gray-400">
                Ibn Khaldun Model High School
                <br />
                Din Pur, Punjab, Pakistan
              </p>

              <a
                href="https://maps.google.com/?q=Din+Pur+Punjab+Pakistan"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                View Location
                <FiArrowRight />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="h-px w-7 bg-blue-600" />
              We're Here to Help
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Questions?
              <span className="block text-blue-600">
                Let's Talk.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Whether you are looking for admission information, academic
              details or general school information, our administration team
              is available to help.
            </p>

            <Link
              to="/admissions"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              View Admissions
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;