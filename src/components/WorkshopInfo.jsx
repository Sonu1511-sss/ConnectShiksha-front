import React from "react";
import { motion } from "framer-motion";

const WorkshopInfo = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* UPPER TITLE */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">
          Workshop Information
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Explore AI, IoT, and Robotics with real-world projects and expert-led sessions.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Text with animation */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AI / IoT / Robotics Workshop:
            <br />
            <span className="text-blue-600 block">
              A Hands-On Approach to Building Smart Systems
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Join our interactive sessions and dive into the core of AI, Internet
            of Things, and Robotics. Build smart devices, automate with sensors,
            and create intelligent solutions guided by industry experts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
            <div>
              <p className="text-blue-600 text-xl font-bold">6-Days</p>
              <p className="text-gray-500 text-sm">Intensive Workshop</p>
            </div>
            <div>
              <p className="text-green-600 text-xl font-bold">5-Hours</p>
              <p className="text-gray-500 text-sm">Daily Sessions</p>
            </div>
            <div>
              <p className="text-yellow-600 text-xl font-bold">10-Projects</p>
              <p className="text-gray-500 text-sm">Practical Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image with animation */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://aibo8.in/webassets/img/courses/16.png"
            alt="Workshop"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopInfo;
