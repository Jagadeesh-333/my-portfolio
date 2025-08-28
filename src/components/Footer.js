import React from "react";
import { useTheme } from './ThemeContext';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaCode,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane
} from "react-icons/fa";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative pt-16 pb-8 overflow-hidden transition-colors duration-300 ${
      isDarkMode
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        : "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800"
    } text-white`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Jagadeesh Tanniru
              </span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full Stack Java Developer passionate about creating efficient, scalable solutions and innovative applications.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/Jagadeesh-333"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-lg text-white transition-all duration-300 transform hover:-translate-y-1 ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jagadeesh-tanniru-126276214/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-lg text-white transition-all duration-300 transform hover:-translate-y-1 ${
                  isDarkMode
                    ? "bg-blue-800 hover:bg-blue-700"
                    : "bg-blue-700 hover:bg-blue-600"
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:jagadeeshtanniru123@gmail.com"
                className={`flex items-center justify-center w-10 h-10 rounded-lg text-white transition-all duration-300 transform hover:-translate-y-1 ${
                  isDarkMode
                    ? "bg-red-800 hover:bg-red-700"
                    : "bg-red-700 hover:bg-red-600"
                }`}
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 pb-2 relative inline-block">
              Navigation
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 pb-2 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Ongole, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 7013290386</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:jagadeeshtanniru123@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  jagadeeshtanniru123@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 pb-2 relative inline-block">
              Let's Work Together
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500"></span>
            </h4>
            <p className="text-gray-400 mb-5">
              I'm available for freelance projects and full-time opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center ${
          isDarkMode ? "border-gray-700" : "border-gray-600"
        }`}>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-white font-medium">Jagadeesh Tanniru</span>. All rights reserved.
            </p>
          </div>

          <div className="flex items-center text-gray-400 text-sm">
            <span className="flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> by Jagadeesh Tanniru
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;