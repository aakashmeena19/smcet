import React from 'react';
import { Carousel } from "flowbite-react";
import homelogo from './photos/homelogo.webp'
import img1 from './photos/png1.png'
import img2 from './photos/png2.png'
import img3 from './photos/png3.png'
import img4 from './photos/png4.png'
import img5 from './photos/png5.png'
import img6 from './photos/png6.png'
import img7 from './photos/png7.png'
import img8 from './photos/png8.png'






const HomeSection = () => {
  return (
  
  
  
  
  
  
  <div>
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
    <Carousel>
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-image1.jpg)' }}>
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center flex-col text-center text-blue-600 p-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Welcome to SMCET</h2>
          <p className="mb-6 text-lg sm:text-xl">Empowering Future Engineers</p>
          <a href="#admissions" className="bg-blue-600 py-3 px-6 rounded-md shadow-md hover:bg-blue-500 transition duration-300 text-white">Explore Admissions</a>
        </div>
      </div>
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-image2.jpg)' }}>
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center flex-col text-center text-blue-600 p-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Cutting-Edge Facilities</h2>
          <p className="mb-6 text-lg sm:text-xl">State-of-the-art laboratories and research centers</p>
          <a href="#facilities" className="bg-blue-600 py-3 px-6 rounded-md shadow-md hover:bg-blue-500 transition duration-300 text-white">Discover Facilities</a>
        </div>
      </div>
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-image3.jpg)' }}>
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center flex-col text-center text-blue-600 p-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6 text-lg sm:text-xl">A vibrant campus life awaits</p>
          <a href="#community" className="bg-blue-600 py-3 px-6 rounded-md shadow-md hover:bg-blue-500 transition duration-300 text-white">Get Involved</a>
        </div>
      </div>
    </Carousel>
  </div>















  
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
    </div>
  );
};

export default HomeSection;
