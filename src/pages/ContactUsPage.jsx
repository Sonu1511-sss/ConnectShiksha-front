import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-3">
          Let’s Start a Conversation
        </h2>
        <p className="text-yellow-500 text-base max-w-2xl mx-auto">
          Have questions? We’re here to help. Send us a message and we’ll respond as soon as possible.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-xl p-8 shadow-lg border border-blue-100">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-800">Contact Information</h3>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-500" />
         9131782103, 7748893097
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-500" />
              connectshikshaofficial@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-500" />
              In Front of Sindhu Bhavan Gondia Road Balaghat (M.P)


            </p>
          </div>
          <img
            src="https://excellup.in/assets/1-Ccp7xdbx.webp"
            alt="Support Illustration"
            className="w-full max-w-xs mx-auto mt-8"
          />
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className={inputClass} />
            <input type="email" placeholder="Your email" className={inputClass} />
            <input type="tel" placeholder="Your phone" className={inputClass} />
            <input type="text" placeholder="How can we help?" className={inputClass} />
          </div>
          <textarea rows="5" placeholder="Your message" className={`${inputClass} w-full`} />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Location Section */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-blue-800 mb-2">Our Location 📌</h3>
        <p className="text-yellow-500 text-base mb-6">
          We are located at the heart of the city. Visit us today!
        </p>

        <div className="overflow-hidden rounded-xl shadow-lg max-w-6xl mx-auto border border-blue-100">
          <iframe
            title="Connect Shiksha Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.204536412832!2d80.19242367599667!3d22.604387679459244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a2824a48be685%3A0x9e5b6c073b75a79!2sBalaghat%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1719042841451"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="w-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const inputClass =
  "w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

export default ContactSection;
