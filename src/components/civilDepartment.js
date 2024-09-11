import React from 'react';

const CivilEngineeringDepartment = () => {
  return (
    <section id="civil" className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Civil Engineering Department</h2>
          <p className="text-lg text-gray-700">
            Building the future through innovation in structural, environmental, and transportation engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Overview */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Overview</h3>
            <p className="text-gray-600 mb-4">
              The Civil Engineering Department offers an industry-relevant curriculum designed to equip students with the knowledge and skills to tackle global challenges in the built environment.
            </p>
            <a href="#about" className="text-green-600 font-semibold hover:underline">
              Learn More
            </a>
          </div>

          {/* Programs Offered */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Programs Offered</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Bachelor of Technology (B.Tech) in Civil Engineering</li>
              <li>Master of Technology (M.Tech) in Structural Engineering</li>
              <li>Ph.D. in Civil Engineering</li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Research Areas</h3>
            <p className="text-gray-600 mb-4">
              Our department conducts research in critical areas such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Environmental Engineering</li>
              <li>Earthquake and Structural Engineering</li>
              <li>Water Resources Engineering</li>
              <li>Transportation Engineering</li>
            </ul>
          </div>

          {/* Faculty and Staff */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Faculty and Staff</h3>
            <p className="text-gray-600 mb-4">
              Our experienced faculty members bring real-world expertise into the classroom and the research lab.
            </p>
            <a href="#faculty" className="text-green-600 font-semibold hover:underline">
              Meet the Faculty
            </a>
          </div>

          {/* Laboratories */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">State-of-the-Art Labs</h3>
            <p className="text-gray-600 mb-4">
              The department is equipped with modern laboratories for research and practical training in areas like structural mechanics, fluid dynamics, and soil testing.
            </p>
            <a href="#labs" className="text-green-600 font-semibold hover:underline">
              Explore Labs
            </a>
          </div>

          {/* Student Projects */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Student Projects & Competitions</h3>
            <p className="text-gray-600 mb-4">
              Civil engineering students participate in national and international competitions showcasing innovative infrastructure solutions.
            </p>
            <a href="#projects" className="text-green-600 font-semibold hover:underline">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilEngineeringDepartment;
