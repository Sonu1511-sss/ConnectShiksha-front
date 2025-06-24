import React from "react";
import { useParams } from "react-router-dom";

const courseDetails = {
  "web-development": {
    title: "Master Full Stack Web Development",
    description:
      "Learn Full Stack Web Development from scratch and become a professional web developer.",
    image: "https://www.cdmi.in/courses@2x/web-developments.webp",
    price: "₹4999/- Only",
    level: "Beginner",
    language: "Hindi",
    duration: "3 Months",
    live: true,
  },
  "java-dsa": {
    title: "Java + DSA Mastery",
    description:
      "Master core Java and DSA to crack top tech company interviews.",
    image:
      "https://media.licdn.com/dms/image/v2/C5612AQEz0hpmCQQ9xA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1645599766887?e=2147483647&v=beta&t=zkzDgA7-o0uyq9xkEfagdHk7INMTQ5iFX8uKigLRjX0",
    price: "₹3999/- Only",
    level: "Intermediate",
    language: "Hindi",
    duration: "2 Months",
    live: false,
  },
  "iot-automation": {
    title: "IoT & Automation",
    description:
      "Connect devices using sensors, microcontrollers, and cloud tools. Build your own IoT systems with hands-on projects.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3ftHCTS7YALiYt_WRqpac7ttCR48Dbthwg&s",
    price: "₹3499/- Only",
    level: "Beginner",
    language: "English",
    duration: "2 Months",
    live: true,
  },
  "graphics-design": {
    title: "Graphics Design",
    description:
      "Design beautiful graphics using Photoshop, Illustrator, and design principles. Create professional design portfolios.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEv48nvrv_Qswsaqv0Cnf1038s0ECYSRg6tvKfEnPOK1sqrwzvoVM2qytoY2MN2haJErk&usqp=CAU",
    price: "₹2999/- Only",
    level: "Beginner",
    language: "Hindi",
    duration: "1.5 Months",
    live: false,
  },
  "video-editing": {
    title: "Video Editing",
    description:
      "Learn video editing with tools like Premiere Pro and After Effects. Create YouTube-ready content and video reels.",
    image:
      "https://cdn.fordhamram.com/wp-content/uploads/Best-Free-Paid-Online-Video-Editing-Course.png",
    price: "₹4499/- Only",
    level: "Intermediate",
    language: "English",
    duration: "2 Months",
    live: true,
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    description:
      "Learn Python, machine learning algorithms, data preprocessing, and build real AI projects using sklearn, pandas and TensorFlow.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1CBHUn_6DUar2CMXqIifsVU-LUI3ddcc3w&s",
    price: "₹5999/- Only",
    level: "Advanced",
    language: "English",
    duration: "4 Months",
    live: true,
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course)
    return (
      <div className="text-center text-red-500 mt-10">Course not found.</div>
    );

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <p className="text-lg font-semibold text-indigo-600 mb-2">
            Let’s Learn with Connect Shiksha 🚀
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-snug">
            {course.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="badge">🎓 {course.level}</span>
            <span className="badge">🗣️ {course.language}</span>
            <span className="badge">⏳ {course.duration}</span>
            {course.live && (
              <span className="badge-live">🔴 Live Classes</span>
            )}
          </div>

          <p className="text-gray-700 text-lg mb-6">{course.description}</p>

          <div className="flex gap-4 flex-wrap">
            <div className="bg-red-600 text-white font-bold px-6 py-2 rounded-lg shadow hover:opacity-90">
              {course.price}
            </div>
            <button className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow">
              Start Learning
            </button>
          </div>
        </div>

        <div className="shadow-lg rounded-xl overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-black mb-10">Our Stats 🚀</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            { label: "Students", value: "25+" },
            { label: "Lectures", value: "100+" },
            { label: "Hours", value: "100+" },
            { label: "Projects", value: "15+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-sm font-medium text-gray-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          You will learn these programming languages in this course 🚀
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 px-4 md:px-10">
          {[
            { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS 3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
            { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "AWS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBw_jM_yJGlhmVSMrqiwZvkYKsJw8vwrXRrw&s" },
          ].map((tech, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 transition-transform hover:scale-105">
              <img src={tech.logo} alt={tech.name} className="w-14 h-14 object-contain" />
              <p className="text-sm font-medium text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          You will learn these tools in this course 🚀
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-4 md:px-10">
          {[
            { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Frontend Deploy", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
            { name: "Backend Deploy", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
          ].map((tool, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 transition-transform hover:scale-105">
              <img src={tool.logo} alt={tool.name} className="w-14 h-14 object-contain" />
              <p className="text-sm font-medium text-gray-700">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
