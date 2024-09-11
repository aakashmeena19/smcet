import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-blue-800 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-300 mb-4">
              Sawai Madhopur College of Engineering and Technology is dedicated to fostering innovation, excellence, and growth in the field of engineering.
            </p>
            <p className="text-gray-300">
              <a href="#contact" className="underline hover:text-yellow-300">Contact Us</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-300">About Us</a>
              </li>
              <li>
                <a href="#admissions" className="text-gray-300 hover:text-yellow-300">Admissions</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Address:</span> 28PX+77J,Sawai Madhopur ,Pachipalya, Rajasthan, 322001
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Phone:</span>+91-9785511054
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Email:</span> swmenggcollege@gmail.com
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sawai Madhopur College of Engineering and Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
