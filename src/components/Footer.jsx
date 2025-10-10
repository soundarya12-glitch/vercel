
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-500 to-rose-500 text-white pt-14 pb-9">
  
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-6 gap-8">

        {/* Newsletter */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-3 text-center md:text-left">Subscribe to our Newsletter</h3>
          <p className="mb-4 text-white/80 text-center md:text-left">Get the latest updates and offers.</p>
          <form className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition transform hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-white/80">
          <h3 className="text-xl font-bold mb-3 text-center md:text-left">Contact Us</h3>
          <p className="mb-2 text-center md:text-left">123 Modern Street, City</p>
          <p className="mb-2 text-center md:text-left">Email: info@company.com</p>
          <p className="text-center md:text-left">Phone: +91 12345 67890</p>
        </div>

        {/* Follow Us */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-3 text-center md:text-left">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" className="p-3 bg-white text-purple-700 rounded-full hover:bg-gray-200 transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="p-3 bg-white text-blue-400 rounded-full hover:bg-gray-200 transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="p-3 bg-white text-pink-500 rounded-full hover:bg-gray-200 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-white text-blue-700 rounded-full hover:bg-gray-200 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 mt-8">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="p-4 text-left">
            <h2 className="text-2xl font-bold mb-3">Non-Fiction</h2>
            <p className="text-white/60 mb-2">Poetry</p>
            <p className="text-white/60 mb-2">Biographies & Memories</p>
            <p className="text-white/60 mb-2">Business and Investments</p>
            <p className="text-white/60 mb-2">Philosophy and Spiritual</p>
            <Link to="/page1" className="text-white/80 hover:underline font-medium">
              View More
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
