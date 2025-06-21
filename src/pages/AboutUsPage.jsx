import React from "react";
import { FaStar, FaHeart, FaBolt } from "react-icons/fa";
import CoreTeam from "../components/CoreTeam";

const stats = [
  { number: "200+", label: "Active Students" },
  { number: "10+", label: "Live Events" },
  { number: "15+", label: "Expert Mentors" },
  { number: "100+", label: "Learning Resources" },
];

const highlights = [
  {
    icon: <FaStar className="text-blue-600 text-4xl" />,
    title: "Our Vision",
    description:
      "To empower students with quality education and skill development through expert guidance and hands-on learning...",
  },
  {
    icon: <FaHeart className="text-pink-500 text-4xl" />,
    title: "Our Mission",
    description:
      "To create an inclusive environment where learners thrive, grow confidently, and become leaders of tomorrow..",
  },
  {
    icon: <FaBolt className="text-yellow-500 text-4xl" />,
    title: "Our Goals",
    description:
      "Enhance engagement, improve outcomes, and innovate continuously to support every student's success...",
  },
];

const CommunitySection = () => {
  return (
    <>
      <section className="bg-white py-24 px-6 md:px-20">
        {/* Top Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-white px-8 py-4 rounded-full uppercase tracking-widest mb-4 bg-gradient-to-r from-blue-600 to-indigo-500 shadow-sm">
            Welcome to Our Community
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Connect Shiksha Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Connect Shiksha is a platform empowering learners in AI, IoT, and
            Robotics through immersive workshops, expert guidance, and hands-on
            innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-50 text-center p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-3xl font-bold text-blue-800">{stat.number}</p>
              <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            Our Mission & Vision
          </h3>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            Democratizing access to modern tech education and enabling everyone
            to build a successful digital future.
          </p>
        </div>

        {/* Highlights Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 p-8 rounded-2xl text-center shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="font-semibold text-xl text-blue-800 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <CoreTeam />
        <div className="text-center h-25 mt-12">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md">
          Join Our Community
        </button>
      </div>
    </>
  );
};

export default CommunitySection;
