import React from 'react';

const ElectronicsEngineeringDepartment = () => {
  return (
    <section id="electronics" className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">Electronics Engineering Department</h2>
          <p className="text-lg text-gray-600">
            Innovating the future of technology through cutting-edge electronics and communication systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Overview */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Overview</h3>
            <p className="text-gray-600 mb-4">
              The Electronics Engineering Department focuses on innovation in areas such as microelectronics, communication systems, and signal processing.
            </p>
            <a href="#about" className="text-purple-600 font-semibold hover:underline">
              Learn More
            </a>
          </div>

          {/* Programs Offered */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Programs Offered</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Bachelor of Technology (B.Tech) in Electronics Engineering</li>
              <li>Master of Technology (M.Tech) in VLSI Design</li>
              <li>Ph.D. in Electronics and Communication Engineering</li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Research Areas</h3>
            <p className="text-gray-600 mb-4">
              Active research in innovative fields like:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Microelectronics and Nanotechnology</li>
              <li>VLSI Design and Embedded Systems</li>
              <li>Communication Networks and Wireless Systems</li>
              <li>Signal and Image Processing</li>
            </ul>
          </div>

          {/* Faculty */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Faculty and Staff</h3>
            <p className="text-gray-600 mb-4">
              Our highly qualified faculty members bring industry experience and academic excellence in electronics and communication systems.
            </p>
            <a href="#faculty" className="text-purple-600 font-semibold hover:underline">
              Meet the Faculty
            </a>
          </div>

          {/* Laboratories */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Advanced Laboratories</h3>
            <p className="text-gray-600 mb-4">
              Equipped with state-of-the-art labs for VLSI design, embedded systems, and communication systems.
            </p>
            <a href="#labs" className="text-purple-600 font-semibold hover:underline">
              Explore Labs
            </a>
          </div>

          {/* Student Projects */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Student Projects & Innovations</h3>
            <p className="text-gray-600 mb-4">
              Our students actively engage in projects such as IoT-based systems, robotics, and signal processing applications.
            </p>
            <a href="#projects" className="text-purple-600 font-semibold hover:underline">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicsEngineeringDepartment;
