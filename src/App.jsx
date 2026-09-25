import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Teachers from "./pages/Teachers";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

// Authentication
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

// Admin Pages
import Dashboard from "./admin/Dashboard";
import Students from "./admin/Students";
import AdminTeachers from "./admin/Teachers";
import Classes from "./admin/Classes";
import Attendance from "./admin/Attendance";
import Results from "./admin/Results";
import Fees from "./admin/Fees";


const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};


const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      <Sidebar />

      <main className="lg:ml-64">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<AdminTeachers />} />
          <Route path="classes" element={<Classes />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="results" element={<Results />} />
          <Route path="fees" element={<Fees />} />
        </Routes>
      </main>
    </div>
  );
};


const App = () => {
  return (
    <Routes>

      {/* ================= PUBLIC WEBSITE ================= */}

      <Route path="/*" element={<PublicLayout />} />


      {/* ================= AUTHENTICATION ================= */}

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />


      {/* ================= ADMIN PORTAL ================= */}

      <Route
        path="/admin/*"
        element={<AdminLayout />}
      />

    </Routes>
  );
};

export default App;