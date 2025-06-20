import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://yt3.ggpht.com/0q_LVnVkDCA_OwPmn8dzYNdBB1e7tWZnY5YzNVMqYM8kwvPyhWNGK5Qx1URZd4Jl6IK2MHd7ZQ=s88-c-k-c0x00ffffff-no-rj"
              alt="Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <span className="text-2xl font-bold text-yellow-400">ConnectShiksha</span>
          </div>
          <p className="text-gray-200 mb-4">
            Empowering individuals and businesses with cutting-edge technology
            education and digital solutions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-[#0077B5] p-2 rounded-full hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="bg-white text-pink-600 p-2 rounded-full hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-red-600 p-2 rounded-full hover:scale-110 transition">
              <FaYoutube />
            </a>
            <a href="#" className="bg-white text-blue-500 p-2 rounded-full hover:scale-110 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-yellow-400 transition">Courses</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Business Services</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h3>
          <div className="flex items-start gap-3 mb-3 text-gray-200">
            <FaMapMarkerAlt className="mt-1" />
            <p>
              In Front of Sindhu Bhavan Gondia <br /> Road Balaghat (M.P)
            </p>
          </div>
          <div className="flex items-center gap-3 mb-3 text-gray-200">
            <FaPhone />
            <p>+91 9131782103 , +91 7748893097
</p>
          </div>
          <div className="flex items-center gap-3 text-gray-200">
            <FaEnvelope />
            <p>info@ConnectShiksha.in</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1E3A8A] text-yellow text-center py-4 text-sm font-medium">
        &copy; {new Date().getFullYear()} ConnectShiksha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
