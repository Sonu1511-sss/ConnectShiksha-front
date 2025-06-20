import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const AppBanner = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-12 px-6 md:px-16 min-h-[300px] flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Left Side Image */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            src="https://yt3.ggpht.com/0q_LVnVkDCA_OwPmn8dzYNdBB1e7tWZnY5YzNVMqYM8kwvPyhWNGK5Qx1URZd4Jl6IK2MHd7ZQ=s88-c-k-c0x00ffffff-no-rj"
            alt="App Banner Left"
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg"
          />
        </div>

        {/* Right Side Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download the ConnectShiksha App
          </h2>
          <p className="text-white text-lg mb-6">
            Stay connected, access courses, join live workshops, and grow your skills on the go!
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            {/* Play Store Button */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FACC15] text-[#1E3A8A] px-6 py-3 rounded-lg font-semibold flex items-center gap-3 hover:bg-white transition transform hover:scale-105 shadow-md"
            >
              <FaGooglePlay size={24} />
              Google Play
            </a>

            {/* App Store Button */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FACC15] text-[#1E3A8A] px-6 py-3 rounded-lg font-semibold flex items-center gap-3 hover:bg-white transition transform hover:scale-105 shadow-md"
            >
              <FaApple size={24} />
              App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
