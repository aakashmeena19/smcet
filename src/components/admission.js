import React from 'react';

const AdmissionsSection = () => {
  return (
    <section id="admissions" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Admissions</h2>
          <p className="text-lg text-gray-600 mt-4">
            Join one of the top engineering institutions and build your future with us.
          </p>
        </div>

        {/* Admission Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 1: Application</h3>
            <p className="text-gray-700 mb-4">
              Start by submitting an online application form with all the required personal and academic information.
            </p>
            <a
              href="#apply"
              className="inline-block text-blue-600 hover:text-blue-500 font-semibold transition duration-300"
            >
              Apply Now
            </a>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 2: Eligibility</h3>
            <p className="text-gray-700 mb-4">
              Ensure you meet the eligibility criteria, including minimum exam scores and educational qualifications.
            </p>
            <a
              href="#eligibility"
              className="inline-block text-blue-600 hover:text-blue-500 font-semibold transition duration-300"
            >
              Check Eligibility
            </a>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 3: Enroll</h3>
            <p className="text-gray-700 mb-4">
              Once accepted, complete the enrollment process by submitting necessary documents and fees.
            </p>
            <a
              href="#enroll"
              className="inline-block text-blue-600 hover:text-blue-500 font-semibold transition duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-500 transition duration-300 ease-in-out"
          >
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
