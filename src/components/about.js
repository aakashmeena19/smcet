import React from 'react';
import logo from './photos/03_01_17_112144_photo06.jpg'

const AboutUsSection = () => {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover our commitment to excellence in engineering education
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={logo}
              alt="Engineering College Campus"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4"> Our College</h3>
            <p className="text-gray-700 text-lg mb-6">
              At <strong>Sawai Madhopur College of Engineering and Technology</strong>, we take pride in nurturing the next generation of engineering leaders. Our programs are designed to foster innovation, critical thinking, and technical expertise.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              With cutting-edge laboratories, experienced faculty, and an emphasis on hands-on learning, we offer a comprehensive education that goes beyond the classroom. Our mission is to provide students with the knowledge and skills they need to thrive in the fast-evolving field of engineering.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Join us to explore the endless possibilities of technology and become part of a community that is shaping the future of the world.
            </p>

            {/* Call-to-Action Button */}
            <a
              href="#admissions"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-500 transition duration-300 ease-in-out"
            >
              Learn More About Admissions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
