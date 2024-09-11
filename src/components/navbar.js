import React, { useState } from 'react';
import logo from './photos/logo.jpeg'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home">
            {/* Logo Image */}
            <img src={logo} alt="Engineering College Logo" className="h-12 w-auto" />
          </a>
          <span className="ml-3 text-1xl font-bold text-blue-500">Sawai Madhopur College Of Engineering and Technology</span>
        </div>

        {/* Links for large screens */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About Us</a>

          {/* Dropdown for Departments */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-600 flex items-center space-x-2"
            >
              Departments
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute bg-white text-gray-800 mt-2 rounded shadow-md z-10 w-48">
                <a href="#cse" className="block px-4 py-2 hover:bg-blue-100">Computer Science</a>
                <a href="#mechanical" className="block px-4 py-2 hover:bg-blue-100">Mechanical</a>
                <a href="#civil" className="block px-4 py-2 hover:bg-blue-100">Civil</a>
                <a href="#electrical" className="block px-4 py-2 hover:bg-blue-100">Electrical</a>
                <a href="#electronics" className="block px-4 py-2 hover:bg-blue-100">Electronics</a>
              </div>
            )}
          </div>

          <a href="#admissions" className="hover:text-blue-600">Admissions</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Hamburger menu button for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-50 text-gray-800 p-4 space-y-2">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#about" className="block hover:text-blue-600">About Us</a>
          <div className="relative">
            <button onClick={toggleDropdown} className="block w-full text-left hover:text-blue-600">
              Departments
              <svg
                className="w-4 h-4 inline-block ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="bg-blue-100 text-gray-800 mt-2">
                <a href="#cse" className="block px-4 py-2 hover:bg-blue-200">Computer Science</a>
                <a href="#mechanical" className="block px-4 py-2 hover:bg-blue-200">Mechanical</a>
                <a href="#civil" className="block px-4 py-2 hover:bg-blue-200">Civil</a>
                <a href="#electrical" className="block px-4 py-2 hover:bg-blue-200">Electronics</a>
                <a href="#electronics" className="block px-4 py-2 hover:bg-blue-200">Electronics</a>
              </div>
            )}
          </div>
          <a href="#admissions" className="block hover:text-blue-600">Admissions</a>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
