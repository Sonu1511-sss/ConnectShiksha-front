import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-ConnectShiksha.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Courses", href: "#courses" },
    { name: "Workshops", href: "#workshops" },
    { name: "Products", href: "#products" },
    { name: "Community", href: "#community" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-36 h-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-black hover:text-[#1E3A8A] transition duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#enroll"
            className="ml-4 bg-[#1E3A8A] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#1E40AF] transition duration-300"
          >
            Enroll Now
          </a>
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
          <a
            href="#enroll"
            onClick={toggleMenu}
            className="bg-[#1E3A8A] text-white px-5 py-2 rounded-full shadow hover:bg-[#1E40AF] transition duration-300"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
