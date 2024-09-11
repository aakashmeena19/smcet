import React from 'react';
import homelogo from './photos/homelogo.webp'

const HomeSection = () => {
  return (
    <section id="home" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image section */}
        <div className="lg:w-1/2 lg:pr-12">
          <img
            src={homelogo}
            alt="College Campus"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">Sawai Madhopur College of Engineering and Technology</span>
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Our institution is committed to providing top-notch education in the field of engineering. With state-of-the-art facilities and a dedicated faculty, we ensure that students not only gain knowledge but also develop skills to excel in the modern world.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Whether you're interested in Computer Science, Mechanical, Civil, or Electronics, we offer comprehensive programs designed to prepare you for success. Join us in shaping the future of technology and engineering!
          </p>
          <a
            href="#admissions"
            className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-500 transition duration-300 ease-in-out"
          >
            Explore Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
