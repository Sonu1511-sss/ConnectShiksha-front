import React from "react";

const milestones = [
  {
    year: "2020",
    desc: "Founded",
    image: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG_20240301_173153.jpg?updatedAt=1715972610120",
  },
  {
    year: "2021",
    desc: "Launched First Course",
    image: "https://ik.imagekit.io/lna8p52h8/Offline%20Batches/WhatsApp%20Image%202024-11-23%20at%2018.38.25_62a2aab4.jpg?updatedAt=1732465456256",
  },
  {
    year: "2022",
    desc: "100+ Workshops Conducted",
    image: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG_20240301_173153.jpg?updatedAt=1715972610120",
  },
  {
    year: "2024",
    desc: "5000+ Students Enrolled",
    image: "https://ik.imagekit.io/lna8p52h8/Offline%20Batches/WhatsApp%20Image%202024-11-23%20at%2018.38.25_62a2aab4.jpg?updatedAt=1732465456256",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="bg-[#1E3A8A] py-20 px-4 sm:px-8 lg:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Journey</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Wavy SVG Line */}
        <svg
          className="absolute top-6 left-0 w-full h-12"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C150,70 350,-10 500,30 C650,70 850,-10 1000,30"
            fill="none"
            stroke="#FACC15"
            strokeWidth="4"
          />
        </svg>

        <div className="relative flex flex-col md:flex-row justify-between items-start pt-16 gap-12 md:gap-0">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center relative w-full md:w-1/4"
            >
              {/* Hover Image Preview */}
              <div className="absolute -top-40 w-44 h-28 rounded-xl overflow-hidden shadow-xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 pointer-events-none z-20">
                <img
                  src={item.image}
                  alt={item.desc}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dot */}
              <div className="w-6 h-6 bg-[#FACC15] rounded-full border-4 border-white z-10 shadow-md"></div>

              {/* Year */}
              <h4 className="text-xl font-bold mt-4">{item.year}</h4>

              {/* Description */}
              <p className="text-sm text-center text-white opacity-80 mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
