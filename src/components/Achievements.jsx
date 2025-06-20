// Achievements.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaChalkboardTeacher, FaRobot, FaTools } from "react-icons/fa";

const achievements = [
  {
    icon: <FaUsers size={30} className="text-[#FACC15]" />,
    title: "200+ Students",
    desc: "Empowered learners across domains.",
  },
  {
    icon: <FaChalkboardTeacher size={30} className="text-[#FACC15]" />,
    title: "10+ Batches",
    desc: "Successfully completed expert-led cohorts.",
  },
  {
    icon: <FaTools size={30} className="text-[#FACC15]" />,
    title: "Workshops",
    desc: "Practical sessions in real environments.",
  },
  {
    icon: <FaRobot size={30} className="text-[#FACC15]" />,
    title: "IoT Projects",
    desc: "Built smart automation with sensors & circuits.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[#1E3A8A] text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center mb-14">Our Achievements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-[#1E3A8A] rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
