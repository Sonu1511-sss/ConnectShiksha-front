import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
];

const YoutubeSection = () => {
  return (
    <section className="bg-white text-[#1E3A8A] py-24 px-6 md:px-16">
      <h2 className="text-4xl font-extrabold text-center mb-16">Our YouTube Videos</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className="max-w-7xl mx-auto"
      >
        {videos.map((video, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F9FAFB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

              <div className="p-6 space-y-4">
                <h4 className="text-xl font-bold">{video.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={video.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FACC15] text-[#1E3A8A] font-semibold text-sm px-5 py-2 rounded-full hover:bg-[#fde047] transition"
                >
                  ▶️ Watch Now
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default YoutubeSection;
