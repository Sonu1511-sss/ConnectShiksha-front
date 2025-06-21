import React, { useState } from "react";

const galleryImages = [
  "https://media.istockphoto.com/id/1710638664/photo/two-male-engineers-who-specialize-in-mechatronics-intently-assemble-and-program-a-robot-hand.jpg?b=1&s=612x612&w=0&k=20&c=war2ujf-LD7aGatqYm10YQ43ob9w5b7mfiao9OfoeU8=",
  "https://media.istockphoto.com/id/2160935088/photo/robots-ade-completely-by-school-kids.jpg?b=1&s=612x612&w=0&k=20&c=Kynfx5-02tSGfwGBg7KF6jMlshRvkRwxx8CK-aDmRks=",
  "https://media.istockphoto.com/id/1468173312/photo/robotic-car-made-from-a-programmable-micro-controller-that-gives-flexibility-to-make-changes.jpg?b=1&s=612x612&w=0&k=20&c=kawVFAAY04i59HsRXbwW2WQIzGMnvfGOqH065ep663M=",
  "https://media.istockphoto.com/id/2160935080/photo/robots-ade-completely-by-school-kids.jpg?b=1&s=612x612&w=0&k=20&c=4UZvuoZiu60RhygB_d_LYuGq9uE5Jn1VqSsmVDHTaSw=",
  "https://images.pexels.com/photos/7868884/pexels-photo-7868884.jpeg",
  "https://images.pexels.com/photos/7869034/pexels-photo-7869034.jpeg",
];

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-3">Workshop Gallery</h2>
        <p className="text-gray-600">Glimpse of our hands-on sessions, projects, and student participation.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {galleryImages.map((url, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src={url}
              alt={`Workshop Image ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full transition duration-300"
        >
          Book Workshop
        </button>
      </div>

      {/* Modal Form */}
 {isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

          <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-3 right-4 text-xl text-gray-500 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Book Workshop</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
