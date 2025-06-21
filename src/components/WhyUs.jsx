import React from "react";
import { FaLightbulb, FaHandsHelping, FaCogs, FaAward } from "react-icons/fa";

const reasons = [
  {
    title: "Innovative Curriculum",
    desc: "Workshops designed with the latest trends in AI, IoT, and Robotics to ensure real-world learning.",
    icon: <FaLightbulb className="text-blue-600 text-3xl" />,
  },
  {
    title: "Hands-On Training",
    desc: "Build, program, and control devices with step-by-step project guidance from experts.",
    icon: <FaHandsHelping className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Industry-Aligned Skills",
    desc: "We focus on practical knowledge that prepares students for future tech roles.",
    icon: <FaCogs className="text-green-600 text-3xl" />,
  },
  {
    title: "Certified & Recognized",
    desc: "Receive completion certificates and performance badges from reputed institutions.",
    icon: <FaAward className="text-purple-600 text-3xl" />,
  },
];

const WhyUs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-3">Why Choose Us?</h2>
        <p className="text-gray-600">We deliver value through experience, innovation, and impact-driven learning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-start hover:shadow-lg transition"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
