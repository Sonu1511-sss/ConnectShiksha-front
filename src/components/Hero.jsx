import React from "react";
import { FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";

const Hero = () => {
  return (
    <section className="bg-white text-gray-900 px-4 sm:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-14 md:gap-20">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering Education Through <span className="text-blue-700">Innovation</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            Transform your future with cutting-edge technology education, hands-on workshops, innovative IoT solutions, expert mentors, real-world projects, coding skills, and career-ready training.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
              Explore Courses
            </button>
            <button className="border-2 border-blue-700 text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-700 hover:text-white transition duration-300">
              Book Workshop
            </button>
          </div>

          {/* Icons */}
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start mt-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <FaChalkboardTeacher className="text-blue-700" />
              <span>Project Based Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <GiBookmarklet className="text-blue-700" />
              <span>Industry-Standard Curriculum</span>
            </div>
          </div>
        </div>

        {/* Right Side - YouTube Video */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <iframe
              src="https://www.youtube.com/embed/KV1D_xvYiGQ?si=ncYJ4-Eghnee1b8Y"
              title="YouTube video player"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
