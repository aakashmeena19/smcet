import React from 'react';

const ElectricalEngineeringDepartment = () => {
  return (
    <section id="electrical" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Electrical Engineering Department</h2>
          <p className="text-lg text-gray-700">
            Powering the future through innovation in electrical systems and sustainable energy solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Overview */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Overview</h3>
            <p className="text-gray-600 mb-4">
              The Electrical Engineering Department equips students with the knowledge and skills needed to excel in the fields of power systems, control systems, and renewable energy.
            </p>
            <a href="#about" className="text-blue-600 font-semibold hover:underline">
              Learn More
            </a>
          </div>

          {/* Programs Offered */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Programs Offered</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Bachelor of Technology (B.Tech) in Electrical Engineering</li>
              <li>Master of Technology (M.Tech) in Power Systems</li>
              <li>Ph.D. in Electrical Engineering</li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Research Areas</h3>
            <p className="text-gray-600 mb-4">
              Cutting-edge research in fields like:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Smart Grids and Power Systems</li>
              <li>Electric Vehicles and Energy Storage</li>
              <li>Control Systems and Automation</li>
              <li>Renewable Energy Technologies</li>
            </ul>
          </div>

          {/* Faculty and Staff */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Faculty and Staff</h3>
            <p className="text-gray-600 mb-4">
              Our experienced faculty members are pioneers in various fields of electrical engineering, contributing to global research and industrial projects.
            </p>
            <a href="#faculty" className="text-blue-600 font-semibold hover:underline">
              Meet the Faculty
            </a>
          </div>

          {/* Laboratories */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Advanced Laboratories</h3>
            <p className="text-gray-600 mb-4">
              Our department houses advanced laboratories equipped for high-voltage experiments, control system simulations, and renewable energy research.
            </p>
            <a href="#labs" className="text-blue-600 font-semibold hover:underline">
              Explore Labs
            </a>
          </div>

          {/* Student Projects */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Student Projects & Innovations</h3>
            <p className="text-gray-600 mb-4">
              Students participate in innovative projects such as designing solar power systems and smart grids, showcasing their skills in national competitions.
            </p>
            <a href="#projects" className="text-blue-600 font-semibold hover:underline">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalEngineeringDepartment;
