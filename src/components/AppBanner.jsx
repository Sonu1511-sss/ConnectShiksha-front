import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const AppBanner = () => {
  return (
    <section className="bg-white text-[#1E3A8A] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-14">
        {/* Left Side Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            Start Your Journey into <br />
            <span className="text-black">AI, IoT & Coding Now!</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Experience hands-on tech learning with real projects, expert guidance, and
            future-ready skills. Join our platform and start building your path in technology today.
          </p>

          {/* Download Buttons */}
          <div className="flex gap-6 justify-center md:justify-start flex-wrap pt-4">
            {/* App Store */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              <FaApple size={24} />
              <div className="text-left text-sm">
                <div className="text-xs">Download On</div>
                <div className="font-semibold">Apple Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              <FaGooglePlay size={24} />
              <div className="text-left text-sm">
                <div className="text-xs">Download On</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* OS Compatibility */}
          <div className="flex gap-8 justify-center md:justify-start pt-4 text-gray-500 text-xs font-semibold">
            <div>For iOS: iOS 15.6+</div>
            <div>For Android: Android 8.0+</div>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src=".\src\assets\bg-mobile.png"
            alt="Mobile App Preview"
            className="max-w-[500px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
