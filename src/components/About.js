import React from "react";
import { useTheme } from './ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold relative inline-block ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            About Me
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Get to know more about my journey and expertise
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Left Side - Image with decorative elements */}
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={`${process.env.PUBLIC_URL}/shared.png`}
                alt="Jagadeesh"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 border-2 border-white opacity-20 rounded-2xl"></div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-full z-0 ${
              isDarkMode ? "bg-blue-900 opacity-30" : "bg-blue-100 opacity-50"
            }`}></div>
            <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full z-0 ${
              isDarkMode ? "bg-purple-900 opacity-30" : "bg-purple-100 opacity-50"
            }`}></div>

            {/* Floating tech badges */}
            <div className={`absolute -bottom-2 -left-4 py-2 px-4 rounded-full shadow-md flex items-center ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="flex-1 max-w-2xl">
            <h3 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}>
              Full Stack Java Developer
            </h3>

            <div className={`space-y-5 leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              <p className={`relative pl-6 border-l-2 ${
                isDarkMode ? "border-blue-700" : "border-blue-200"
              }`}>
                <span className="absolute left-0 text-blue-500">
                  <i className="fas fa-quote-left text-sm"></i>
                </span>
                I'm a passionate{" "}
                <span className={`font-semibold ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                  Full Stack Java Developer
                </span>{" "}
                with <b>2.2 years of experience</b> in designing and developing
                web and enterprise applications.
              </p>

              <p>
                My expertise lies in{" "}
                <span className={`font-medium ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}>
                  Java, Spring Boot,
                </span>{" "}
                and{" "}
                <span className={`font-medium ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}>
                  Microservices Architecture
                </span>
                . I specialize in building <b>scalable, modular, and fault-tolerant
                systems</b> using Spring Cloud.
              </p>

              <p>
                I have strong expertise in <b>backend design</b>, CRUD operations,
                and API integration with technologies including{" "}
                <span className={`font-medium ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                  Java, Spring Boot, Spring Cloud, Microservices, REST APIs,
                  MySQL, PostgreSQL, Docker, Jenkins
                </span>.
              </p>

              <div className="pt-4">
                <p className={`flex items-center ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  <span className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mr-3"></span>
                  When I'm not coding, I enjoy learning new technologies,
                  contributing to open source projects, and sharing knowledge
                  with the developer community.
                </p>
              </div>
            </div>

            {/* Call to action button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Let's Connect
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;