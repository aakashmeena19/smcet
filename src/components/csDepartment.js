import React from 'react';

const ComputerScienceDepartment = () => {
  return (
    <section id="cse" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Computer Science Department</h2>
          <p className="text-lg text-gray-600">
            Our Computer Science Department is committed to delivering high-quality education and advancing research in cutting-edge technologies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Overview */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Overview</h3>
            <p className="text-gray-600 mb-4">
              The Computer Science Department offers a comprehensive curriculum that covers key aspects of computer science, from foundational programming to advanced AI and Machine Learning.
            </p>
            <a href="#about" className="text-blue-600 font-semibold hover:underline">
              Learn More
            </a>
          </div>

          {/* Programs Offered */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Programs Offered</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Bachelor of Technology (B.Tech) in Computer Science</li>
              <li>Master of Technology (M.Tech) in Computer Science</li>
              <li>Ph.D. in Computer Science</li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Research Areas</h3>
            <p className="text-gray-600 mb-4">
              Our faculty and students are engaged in groundbreaking research in the following areas:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Artificial Intelligence</li>
              <li>Data Science and Analytics</li>
              <li>Cybersecurity</li>
              <li>Internet of Things (IoT)</li>
            </ul>
          </div>

          {/* Faculty and Staff */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Faculty and Staff</h3>
            <p className="text-gray-600 mb-4">
              Our department has a team of highly qualified professors, researchers, and teaching assistants dedicated to student success.
            </p>
            <a href="#faculty" className="text-blue-600 font-semibold hover:underline">
              Meet the Faculty
            </a>
          </div>

          {/* Laboratories */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">State-of-the-Art Labs</h3>
            <p className="text-gray-600 mb-4">
              We provide students with access to modern laboratories equipped with the latest hardware and software tools for hands-on learning.
            </p>
            <a href="#labs" className="text-blue-600 font-semibold hover:underline">
              Explore Labs
            </a>
          </div>

          {/* Student Clubs */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Student Clubs & Activities</h3>
            <p className="text-gray-600 mb-4">
              Students can join various clubs such as the Coding Club, AI Society, and participate in hackathons and tech fests.
            </p>
            <a href="#clubs" className="text-blue-600 font-semibold hover:underline">
              Join a Club
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerScienceDepartment;
