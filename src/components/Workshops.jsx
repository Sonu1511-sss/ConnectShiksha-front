import React from "react";
import { motion } from "framer-motion";

const Workshops = () => {
  return (
    <section
      id="workshops"
      className="py-20 px-6 md:px-16 bg-white text-[#1E3A8A]"
    >
      <h3 className="text-4xl font-extrabold text-center mb-16">
        Upcoming Workshops
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Video */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-2xl aspect-video border-4 border-[#FACC15]"
        >
          <iframe
            src="https://www.youtube.com/embed/KV1D_xvYiGQ?autoplay=1&mute=1&loop=1&playlist=KV1D_xvYiGQ"
            title="Workshop Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        {/* Right: Workshop Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white text-[#1E3A8A] p-8 rounded-2xl shadow-lg border border-blue-200 space-y-5"
        >
          <span className="text-xs font-medium bg-[#FACC15] text-[#1E3A8A] px-3 py-1 rounded-full inline-block shadow">
            Upcoming
          </span>
          <h4 className="text-2xl md:text-3xl font-bold">
            Introduction to Programming
          </h4>
          <p className="text-sm font-medium text-[#1E3A8A]/70">
            📅 May 13, 2024 &nbsp; | &nbsp; 🕒 6:00 PM – 8:00 PM
          </p>
          <p className="leading-relaxed text-[#1E3A8A]/80">
            Learn the fundamentals of programming with real-world examples and live mentorship. Beginner-friendly!
          </p>
          <button className="bg-[#FACC15] text-[#1E3A8A] hover:bg-white hover:text-[#1E3A8A] px-6 py-2 rounded-full font-semibold shadow-md transition duration-300">
            Register Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;
