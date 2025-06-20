import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    title: "The Basics of HTML",
    tags: ["#html5", "#css3"],
    videoUrl: "https://www.youtube.com/embed/RrMz9AFoUtE?si=vrK63vBEAzjw5qvo",
    watchUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE",
  },
  {
    title: "CSS Animation Tutorial",
    tags: ["#css3", "#animation"],
    videoUrl: "https://www.youtube.com/embed/eybD6EVKH_U?si=GEfIwu5c7SeZwCBb",
    watchUrl: "https://www.youtube.com/watch?v=wTFPW6PDNMg",
  },
  {
    title: "Mastering CSS Grid",
    tags: ["#html5", "#css3"],
    videoUrl: "https://www.youtube.com/embed/zDcmevXKfxU?si=fW3CvcFOIivNxO7-",
    watchUrl: "https://www.youtube.com/watch?v=jV8B24rSN5o",
  },
];

const YoutubeSection = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-20 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Our YouTube Videos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 text-[#1E3A8A]"
          >
            <div className="aspect-video w-full">
              <iframe
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold mb-2">{video.title}</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {video.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={video.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FACC15] text-[#1E3A8A] font-semibold text-sm px-4 py-2 rounded-full hover:bg-white transition"
              >
                ▶️ Watch Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default YoutubeSection;
