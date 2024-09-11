import React from 'react';

const MechanicalEngineeringDepartment = () => {
  return (
    <section id="mechanical" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-700 mb-4">Mechanical Engineering Department</h2>
          <p className="text-lg text-gray-700">
            Innovating the future through advancements in thermal, fluid, and mechanical systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Overview */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Overview</h3>
            <p className="text-gray-600 mb-4">
              The Mechanical Engineering Department is dedicated to producing skilled engineers who are capable of addressing technological challenges in energy, design, and manufacturing.
            </p>
            <a href="#about" className="text-red-600 font-semibold hover:underline">
              Learn More
            </a>
          </div>

          {/* Programs Offered */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Programs Offered</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Bachelor of Technology (B.Tech) in Mechanical Engineering</li>
              <li>Master of Technology (M.Tech) in Thermal Engineering</li>
              <li>Ph.D. in Mechanical Engineering</li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Research Areas</h3>
            <p className="text-gray-600 mb-4">
              Our department focuses on cutting-edge research in key areas such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Thermodynamics and Heat Transfer</li>
              <li>Fluid Dynamics</li>
              <li>Robotics and Automation</li>
              <li>Advanced Materials and Manufacturing</li>
            </ul>
          </div>

          {/* Faculty and Staff */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Faculty and Staff</h3>
            <p className="text-gray-600 mb-4">
              Our faculty comprises experts with extensive experience in industry and research, guiding students to become future leaders in mechanical engineering.
            </p>
            <a href="#faculty" className="text-red-600 font-semibold hover:underline">
              Meet the Faculty
            </a>
          </div>

          {/* Laboratories */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">State-of-the-Art Labs</h3>
            <p className="text-gray-600 mb-4">
              The department boasts modern laboratories with advanced equipment for conducting experiments in thermodynamics, fluid mechanics, and material science.
            </p>
            <a href="#labs" className="text-red-600 font-semibold hover:underline">
              Explore Labs
            </a>
          </div>

          {/* Student Projects */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Student Projects & Competitions</h3>
            <p className="text-gray-600 mb-4">
              Mechanical engineering students engage in hands-on projects, participating in national and international competitions like Formula SAE and robotics challenges.
            </p>
            <a href="#projects" className="text-red-600 font-semibold hover:underline">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalEngineeringDepartment;
