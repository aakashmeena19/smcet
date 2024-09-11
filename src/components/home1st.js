import React from 'react';

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
        style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?university,education")' }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Welcome to <span className="text-yellow-300">Sawai Madhopur College of Engineering and Technology</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Empowering students to lead, innovate, and succeed in their engineering careers.
        </p>
        <a
          href="#admissions"
          className="inline-block bg-yellow-300 text-blue-800 font-semibold text-lg py-3 px-6 rounded-md shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
