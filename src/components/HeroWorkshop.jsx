import React from "react";


const HeroWorkshop = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Text Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-blue-900">
  Empower Minds with <span className="text-red-500">AI</span> &{" "}
  <span className="text-yellow-500">Robotics</span> Innovation
</h1>

          <p className="text-gray-700 leading-relaxed max-w-lg text-[17px]">
            Explore the exciting world of the Internet of Things (IoT) in this hands-on workshop.
            Learn to connect sensors, devices, and automate data through real platforms.
            Whether smart homes or industrial use, we equip you with future-ready skills.
          </p>
        </div>

        {/* Right Image with floating animation */}
        <div className="flex justify-center">
          <img
            src="https://aibo8.in/webassets/img/courses/iotworkshop.png"
            alt="IoT Workshop"
            className="w-[90%] max-w-lg object-contain floating-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroWorkshop;
