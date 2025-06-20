import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Programming",
    desc: "Master Python, Java, and C++ with real-world examples and problem-solving techniques.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDcmeClDmzQF0tOtotOfqWKLgCv0v93W_Cg&s",
    tag: "Programming",
  },
  {
    title: "IoT & Robotics",
    desc: "Build smart devices using sensors, Arduino, and Raspberry Pi.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52fhTZyjhl58lq25_XlTZvoeodFZ4290JwQ&s",
    tag: "Electronics",
  },
  {
    title: "Workshops",
    desc: "Engaging live sessions in coding, hardware, and innovation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_rX6P4jkJnj6rGZLXAsXXOnDoVYerc_IPw&s",
    tag: "Live Event",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="bg-[#1E3A8A] py-20 px-6 md:px-16 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-14">Our Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-[#1E3A8A] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <span className="inline-block bg-[#FACC15] text-black text-xs font-semibold px-3 py-1 rounded-full">
                {course.tag}
              </span>
              <h4 className="text-2xl font-bold">{course.title}</h4>
              <p className="text-gray-700 text-sm">{course.desc}</p>

              {/* Enroll Button */}
              <div className="pt-2">
                <a
                  href="#enroll"
                  className="inline-block bg-[#FACC15] text-[#1E3A8A] font-semibold px-5 py-2 text-sm rounded-full shadow-md hover:bg-white hover:text-[#1E3A8A] transition duration-300"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
