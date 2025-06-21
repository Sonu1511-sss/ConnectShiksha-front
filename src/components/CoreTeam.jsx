import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Kuldeep Kaware",
    role: "Founder, CEO",
    image: "https://ik.imagekit.io/lna8p52h8/Core%20Team/1684163357331.jpg?updatedAt=1715951679875", // Replace with actual image
    email: "#",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    name: "Rohit Kewat",
    role: "Co-Founder, CTO",
    image: "https://ik.imagekit.io/lna8p52h8/Core%20Team/1676696955820.jpg?updatedAt=1715951679791",
    email: "#",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    name: "Rohit Bisen",
    role: "Co-Founder, CMO",
    image: "https://ik.imagekit.io/lna8p52h8/Core%20Team/1708427039236.jpg?updatedAt=1715951679877",
    email: "#",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
  {
    name: "Akshay Dangi",
    role: "Full-Stack Instructor",
    image: "https://ik.imagekit.io/lna8p52h8/Core%20Team/1710044532919.jpg?updatedAt=1715951679839",
    email: "#",
    linkedin: "#",
    github: "#",
    instagram: "#",
  },
];

const CoreTeam = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800">
          Core Team Members <span role="img" aria-label="rocket">🚀</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          The talented people behind the scenes who run Connect Shiksha.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mx-auto -mt-12 border-4 border-white shadow-lg"
            />
            <h4 className="text-lg font-semibold mt-4 text-gray-800">{member.name}</h4>
            <p className="text-sm text-yellow-500">{member.role}</p>

            <div className="flex justify-center gap-4 text-gray-500 text-xl mt-4">
              <a href={member.email}><FaEnvelope className="hover:text-blue-500" /></a>
              <a href={member.linkedin}><FaLinkedin className="hover:text-blue-600" /></a>
              <a href={member.github}><FaGithub className="hover:text-gray-800" /></a>
              <a href={member.instagram}><FaInstagram className="hover:text-pink-500" /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreTeam;
