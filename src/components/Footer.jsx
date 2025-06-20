import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://connectshiksha.com/assets/mainlogo-BVXvkrYL.png" // Replace with your logo
              alt="Logo"
              className="w-[16rem] h-[7rem] object-contain"
            />
          </div>
          <p className="text-gray-400 leading-relaxed">
            Connect-Shiksha, a community dedicated to providing teaching,
            learning, and guidance to students in rural areas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">QUICK LINKS</h3>
          <ul className="space-y-3 text-gray-400 text-base">
            <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Our Gallery</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">IMPORTANT LINKS</h3>
          <ul className="space-y-3 text-gray-400 text-base">
            <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">CONTACT</h3>
          <p className="text-gray-400 mb-2">9131782103 , 7748893097</p>
          <p className="text-gray-400 mb-2">connectshikshaofficial@gmail.com</p>
          <p className="text-gray-400 mb-4">
            In Front of Sindhu Bhavan Gondia Road Balaghat (M.P)
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-white text-2xl hover:text-yellow-400 transition"><FaYoutube /></a>
            <a href="#" className="text-white text-2xl hover:text-yellow-400 transition"><FaLinkedin /></a>
            <a href="#" className="text-white text-2xl hover:text-yellow-400 transition"><FaInstagram /></a>
            <a href="#" className="text-white text-2xl hover:text-yellow-400 transition"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-400 text-center py-5 text-sm font-medium">
        &copy; Connect Shiksha {new Date().getFullYear()} - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
