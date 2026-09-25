import React from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiArrowUpRight,
} from "react-icons/fi";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Teachers", path: "/teachers" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#0b1220] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* School Info */}
          <div className="lg:pr-8">

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-[#0f172a] shadow-lg">
                IK
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  Ibn Khaldun
                </h2>

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Model High School
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Ibn Khaldun Model High School, Din Pur, committed
              to quality education, character building and
              preparing students for a brighter future.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Learn More
              <FiArrowUpRight />
            </Link>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-sm text-gray-400 transition hover:translate-x-1 hover:text-blue-400"
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="flex flex-col gap-5">

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <FiMapPin />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-5 text-gray-300">
                    Din Pur, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <FiPhone />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    +92 300 0000000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <FiMail />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-gray-300">
                    info@ibnkhaldun.edu.pk
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Stay Connected
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              Follow us on social media to stay updated with
              school activities, events and announcements.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-blue-500/30 hover:bg-blue-500 hover:text-white"
              >
                <FiFacebook />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-pink-500/30 hover:bg-pink-500 hover:text-white"
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-red-500/30 hover:bg-red-500 hover:text-white"
              >
                <FiYoutube />
              </a>

            </div>

            {/* Admission Box */}
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-semibold text-white">
                Admissions Open
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Contact the school for admission information.
              </p>

              <Link
                to="/admissions"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Admission Details
                <FiArrowUpRight />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-14 border-t border-white/10 pt-7">

          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Ibn Khaldun Model High School.
              All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xs text-gray-500">
              <span>
                Quality Education
              </span>

              <span className="h-1 w-1 rounded-full bg-blue-500" />

              <span>
                Better Future
              </span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;