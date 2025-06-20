import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#1E3A8A] text-white px-4 sm:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-14 md:gap-20">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering the Future of Learning
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-md mx-auto md:mx-0">
            Discover expert-led courses, immersive workshops, and a thriving community to elevate your skills.
          </p>
          <button className="bg-[#FACC15] text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-white hover:text-[#1E3A8A] transition duration-300">
            Book Workshop
          </button>
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
