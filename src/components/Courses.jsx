// Courses.jsx
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const courses = [
  {
    title: "Programming",
    desc: "Master Python, Java, and C++ with real-world examples and problem-solving techniques.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDcmeClDmzQF0tOtotOfqWKLgCv0v93W_Cg&s",
  },
  {
    title: "IoT & Robotics",
    desc: "Build smart devices using sensors, Arduino, and Raspberry Pi to solve real-world problems.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52fhTZyjhl58lq25_XlTZvoeodFZ4290JwQ&s",
  },
  {
    title: "Workshops",
    desc: "Engaging live sessions in coding, hardware, and innovation for practical hands-on learning.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_rX6P4jkJnj6rGZLXAsXXOnDoVYerc_IPw&s",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="bg-white py-20 px-6 md:px-20 text-[#1E3A8A]">
      <h2 className="text-4xl font-extrabold text-center mb-12">Our Courses</h2>

      <Tabs className="max-w-5xl mx-auto">
        {/* Tab Buttons */}
        <TabList className="flex justify-center gap-4 mb-10 flex-wrap">
          {courses.map((course, index) => (
            <Tab
              key={index}
              className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-6 py-2 rounded-full font-semibold cursor-pointer transition hover:bg-[#1E3A8A] hover:text-white"
              selectedClassName="bg-[#1E3A8A] text-white"
            >
              {course.title}
            </Tab>
          ))}
        </TabList>

        {/* Tab Content */}
        {courses.map((course, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">{course.title}</h3>
                <p className="text-gray-700 text-lg">{course.desc}</p>
                <a
                  href="#enroll"
                  className="inline-block bg-[#1E3A8A] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-900 transition"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
};

export default Courses;
