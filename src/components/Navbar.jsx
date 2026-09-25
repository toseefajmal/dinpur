import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Teachers", path: "/teachers" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Information Bar */}
      <div className="bg-[#0b1220] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-2 text-xs text-gray-300 sm:flex">
              <FiPhone className="text-blue-400" />
              <span>+92 300 0000000</span>
            </div>

            <div className="hidden items-center gap-2 text-xs text-gray-300 md:flex">
              <FiMail className="text-blue-400" />
              <span>info@ibnkhaldun.edu.pk</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-300">
            <FiMapPin className="text-blue-400" />
            <span>Din Pur, Punjab, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-[0_4px_20px_rgba(15,23,42,0.06)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Ibn Khaldun Model High School"
              className="h-14 w-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#0f172a]"
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-600" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Login */}
          <div className="hidden shrink-0 lg:block">
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-[#0f172a] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/15 transition hover:bg-blue-700"
            >
              Login
              <FiArrowRight />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="ml-auto lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-xl text-[#0f172a] transition hover:border-blue-200 hover:bg-blue-50"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-5 shadow-lg lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="my-3 h-px bg-gray-100" />

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Login
                <FiArrowRight />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;