import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa";
const courses = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Learn HTML, CSS, JS, React & build dynamic websites.",
    image: "https://www.cdmi.in/courses@2x/web-developments.webp",
    rating: 4.8,
    mode: "Online",
  },
  {
    id: "java-dsa",
    title: "Java + DSA",
    description: "Master core Java and crack coding interviews with DSA.",
    image:
      "https://media.licdn.com/dms/image/v2/C5612AQEz0hpmCQQ9xA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1645599766887?e=2147483647&v=beta&t=zkzDgA7-o0uyq9xkEfagdHk7INMTQ5iFX8uKigLRjX0",
    rating: 4.9,
    mode: "Offline",
  },
  {
    id: "iot-automation",
    title: "IoT & Automation",
    description: "Connect devices with real-time sensors and cloud tools.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3ftHCTS7YALiYt_WRqpac7ttCR48Dbthwg&s",
    rating: 4.7,
    mode: "Online",
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Design stunning visuals using Photoshop & Illustrator.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEv48nvrv_Qswsaqv0Cnf1038s0ECYSRg6tvKfEnPOK1sqrwzvoVM2qytoY2MN2haJErk&usqp=CAU",
    rating: 4.6,
    mode: "Offline",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Edit pro-level videos using Premiere Pro & After Effects.",
    image:
      "https://cdn.fordhamram.com/wp-content/uploads/Best-Free-Paid-Online-Video-Editing-Course.png",
    rating: 4.8,
    mode: "Online",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Learn Python, data science, and AI project building.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1CBHUn_6DUar2CMXqIifsVU-LUI3ddcc3w&s",
    rating: 4.9,
    mode: "Online",
  },
];


const CourseGrid = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-4">
        Our Courses
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Learn the most in-demand skills with hands-on real-world projects.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className="bg-white border rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-blue-800 mb-1">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {course.description}
              </p>
              <div className="flex justify-between text-sm mb-3">
                <span
                  className={`font-semibold ${
                    course.mode === "Online"
                      ? "text-blue-600"
                      : "text-purple-600"
                  }`}
                >
                  {course.mode}
                </span>
                <span className="flex items-center gap-1 text-yellow-500">
                  <FaStar /> {course.rating}
                </span>
              </div>
              <div className="bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700">
                Enroll Now <FaArrowRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CourseGrid;
