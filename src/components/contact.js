import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className=" ml-52 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 ml-24">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            Get in touch with us for any queries or information
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 shadow-lg rounded-lg mb-12 lg:mb-0">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <label className="block text-gray-600 text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Branch</label>
                <input
                  type="text"
                  placeholder="Branch"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Type your message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-blue-600">College Address</h3>
              <p className="text-gray-700 mt-2">
                Sawai Madhopur College of Engineering and Technology <br />
                28PX+77J,Sawai Madhopur ,Pachipalya<br />
                Rajasthan, 322001
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-blue-600">Phone Number</h3>
              <p className="text-gray-700 mt-2">+91-9785511054</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-blue-600">Email Address</h3>
              <p className="text-gray-700 mt-2">swmenggcollege@gmail.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Follow Us</h3>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/smenggcollege/" className="text-blue-600 hover:text-blue-500">
                  <i className="fab fa-facebook-f">facebook</i>
                </a>
                <a href="https://wa.me/+919785511054" className="text-blue-600 hover:text-blue-500">
                  <i className="fab fa-twitter">Whatsapp</i>
                </a>
                <a href="https://www.instagram.com/swmenggcollege?igsh=MTQ5NnRqcGM5Zmtzeg==" className="text-blue-600 hover:text-blue-500">
                  <i className="fab fa-instagram">instagram</i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-500">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <h3 className="text-2xl font-semibold text-blue-600">Click here for route</h3>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.google.com/maps/place/Sawai+Madhopur+college+of+engineering+and+Technology./@26.0357218,76.3455707,17z/data=!3m1!4b1!4m6!3m5!1s0x396e2411b94438a1:0x67e94d43e736c6e1!8m2!3d26.0357218!4d76.3481456!16s%2Fg%2F1hhkfz15z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" className="text-blue-600 hover:text-blue-500">
                  <i className="fab fa-facebook-f">Map</i>
                </a>
                </div>
      </div>
    </section>
  );
};

export default ContactSection;
