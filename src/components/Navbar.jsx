import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo-ConnectShiksha.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openModal = () => {
    setIsOpen(false); // close mobile menu if open
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/Course" },
    { name: "Workshops", href: "/workshop" },
    { name: "Products", href: "/products" },
    { name: "Community", href: "/AboutsUs" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <>
      <nav className="bg-white text-black shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <img src={logo} alt="Logo" className="w-36 h-auto object-contain" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium hover:text-[#1E3A8A] transition duration-300"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={openModal}
              className="ml-4 bg-[#1E3A8A] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#1E40AF] transition duration-300"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-2xl text-black" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white w-full flex flex-col items-center py-6 gap-6 text-black text-lg transition">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="hover:text-[#1E3A8A] font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={openModal}
              className="bg-[#1E3A8A] text-white px-5 py-2 rounded-full shadow hover:bg-[#1E40AF] transition duration-300"
            >
              Enroll Now
            </button>
          </div>
        )}
      </nav>

      {/* Register Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-md bg-black/40">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative animate-fadeIn scale-95">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              <IoClose />
            </button>
            <h2 className="text-xl font-bold mb-4 text-blue-900">Register Now</h2>
          <form className="space-y-4">
  <input
    type="text"
    placeholder="Full Name"
    className={inputClass}
  />
  <input
    type="email"
    placeholder="Email"
    className={inputClass}
  />
  <input
    type="tel"
    placeholder="Contact Number"
    className={inputClass}
  />

  <select className={inputClass}>
    <option value="">Select Course Type</option>
    <option value="Web Development">Web Development</option>
    <option value="Java DSA">Java DSA</option>
    <option value="IoT">IoT</option>
    <option value="Graphics">Graphics</option>
    <option value="Editing">Editing</option>
    <option value="AI">AI</option>
  </select>

  <select className={inputClass}>
    <option value="">Current Education</option>
    <option value="10th">10th</option>
    <option value="12th">12th</option>
    <option value="Diploma">Diploma</option>
    <option value="Undergraduate">Undergraduate</option>
    <option value="Postgraduate">Postgraduate</option>
    <option value="Others">Others</option>
  </select>

  <button
    type="submit"
    className="w-full bg-[#1E3A8A] text-white py-2 rounded-md hover:bg-[#1E40AF] transition"
  >
    Register
  </button>
</form>

          </div>
        </div>
      )}
    </>
  );
}

const inputClass =
  "w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

export default Navbar;
