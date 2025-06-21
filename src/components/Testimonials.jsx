import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    image: "https://i.pravatar.cc/100?img=1",
    quote:
      "Excellup transformed my career. The hands-on projects and mentorship helped me land my dream job.",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Priya Patel",
    role: "AI Engineer",
    company: "AI Innovations",
    image: "https://i.pravatar.cc/100?img=2",
    quote:
      "The practical approach to learning AI and machine learning at Excellup was exactly what I needed.",
    skills: ["Python", "Machine Learning"],
  },
  {
    name: "Amit Kumar",
    role: "Web Developer",
    company: "Digital Creations",
    image: "https://i.pravatar.cc/100?img=3",
    quote:
      "From zero to professional developer in 6 months. Excellup's curriculum is industry-focused and practical.",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    name: "Sneha Reddy",
    role: "Data Scientist",
    company: "Analytics Pro",
    image: "https://i.pravatar.cc/100?img=4",
    quote:
      "Thanks to Excellup, I gained confidence in data modeling and visualization. The projects were highly practical.",
    skills: ["Python", "Pandas", "Power BI"],
  },
  {
    name: "Vikram Joshi",
    role: "DevOps Engineer",
    company: "CloudNet",
    image: "https://i.pravatar.cc/100?img=5",
    quote:
      "Learning DevOps tools and real-time deployment through Excellup helped me land a cloud role quickly.",
    skills: ["Docker", "Kubernetes", "AWS"],
  },
  {
    name: "Anjali Mehta",
    role: "UI/UX Designer",
    company: "Creative Pixel",
    image: "https://i.pravatar.cc/100?img=6",
    quote:
      "The design thinking workshops and prototyping assignments were super helpful. I now work on real client projects.",
    skills: ["Figma", "Design Systems", "User Research"],
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
        Testimonials
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((student, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-blue-700">
                    {student.name}
                  </h3>
                  <p className="text-sm">{student.role}</p>
                  <p className="text-sm text-yellow-500">{student.company}</p>
                </div>
              </div>
              <p className="italic text-sm text-gray-700 flex-grow">
                "{student.quote}"
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {student.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-12">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md">
          Join Our Community
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
