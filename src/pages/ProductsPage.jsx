import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    image:
      "https://media.istockphoto.com/id/1040399826/photo/engineer-developing-electronic-drone.jpg?b=1&s=612x612&w=0&k=20&c=nl3zpZLxkyYWKlhqaAzf0i3V0T9f5qqBI35zpGak4Rc=", // Drone
    title: "Drone Innovation Kit",
    description:
      "Learn how drones fly! This DIY drone kit includes live camera streaming, GPS, and autonomous flight capabilities.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2thCz3XrhZN7StuuUbyfwFCHR9wAu-fgn8g&s", // Smart Car
    title: "Smart Car Project",
    description:
      "Assemble a robotic car with line following, voice control, and obstacle detection using Arduino & sensors.",
  },
  {
    image:
      "https://images.pexels.com/photos/15470542/pexels-photo-15470542.jpeg", // IoT
    title: "IoT Device Kit",
    description:
      "Build smart home devices using Wi-Fi boards and cloud integration. Control lights, fans, and sensors remotely.",
  },
];

const InnovationProjects = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-16">
      {/* INTRO TEXT */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold text-blue-800">Intro to Innovation</h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Empower your learning with exciting project kits in AI, IoT, and Robotics. Perfect for school & college students!
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-[#f4f9ff] rounded-xl shadow-md hover:shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-5 flex-grow">{item.description}</p>
              <div className="flex gap-3 mt-auto">
                <button className="px-4 py-2 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                  Enquire
                </button>
                <button className="px-4 py-2 text-sm rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InnovationProjects;
