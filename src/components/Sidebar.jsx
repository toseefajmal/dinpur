import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiUsers,
  FiUser,
  FiBookOpen,
  FiCheckSquare,
  FiAward,
  FiDollarSign,
  FiMenu,
  FiX,
  FiLogOut,
  FiHome,
} from "react-icons/fi";

import logo from "../assets/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: FiGrid,
    },
    {
      name: "Students",
      path: "/admin/students",
      icon: FiUsers,
    },
    {
      name: "Teachers",
      path: "/admin/teachers",
      icon: FiUser,
    },
    {
      name: "Classes",
      path: "/admin/classes",
      icon: FiBookOpen,
    },
    {
      name: "Attendance",
      path: "/admin/attendance",
      icon: FiCheckSquare,
    },
    {
      name: "Results",
      path: "/admin/results",
      icon: FiAward,
    },
    {
      name: "Fees",
      path: "/admin/fees",
      icon: FiDollarSign,
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-white/[0.07] bg-[#07070a] px-4 lg:hidden">

        {/* Logo Only */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Ibn Khaldun Model High School"
            className="h-11 w-11 object-contain"
          />
        </NavLink>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/10 p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 border-r border-white/[0.07] bg-[#09090d] transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* LOGO */}
        <div className="flex h-20 items-center border-b border-white/[0.07] px-6">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Ibn Khaldun Model High School"
              className="h-12 w-12 object-contain"
            />
          </NavLink>

        </div>

        {/* NAVIGATION */}
        <div className="flex h-[calc(100vh-80px)] flex-col justify-between p-4">

          <div>

            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600">
              Main Menu
            </p>

            <nav className="space-y-1">

              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                          : "text-gray-500 hover:bg-white/[0.04] hover:text-white"
                      }`
                    }
                  >
                    <Icon size={18} />
                    {item.name}
                  </NavLink>
                );
              })}

            </nav>

          </div>

          {/* BOTTOM */}
          <div className="space-y-2">

            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-500 transition hover:bg-white/[0.04] hover:text-white"
            >
              <FiHome size={18} />
              Back to Website
            </NavLink>

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
            >
              <FiLogOut size={18} />
              Logout
            </button>

          </div>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;