import React, { useState } from "react";
import { useTheme } from './ThemeContext';
import { FaBriefcase, FaChevronDown, FaChevronUp, FaCode, FaTools } from "react-icons/fa";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  const experiences = [
    {
      role: "Associate Software Developer",
      company: "Serole Info Technologies India Pvt Ltd",
      period: "July 2023 - Present",
      location: "Hyderabad, India",
      technologies: ["Java", "Spring Boot", "Microservices", "REST APIs", "Kafka", "MySQL", "PostgreSQL"],
      projects: [
        {
          name: "OPTUS (Australia)",
          description:
            "Built microservices with REST APIs and Kafka for asynchronous messaging. Designed database schemas for clients.",
          details: [
            "Developed 10+ microservices handling different business domains.",
            "Implemented RESTful APIs for seamless integration with front-end applications.",
            "Designed scalable database schemas for high-traffic applications.",
            "Implemented batch processing  for real-time data handling.",
            "Integrated with government APIs for compliance and reporting."
          ]
        },
        {
          name: "TUNE (Malaysia)",
          description:
            "Worked on FS-QUO module, managing policy lifecycle from quote creation to issuance. Developed custom features in Java & Spring .",
          details: [
            "Managed the complete policy lifecycle from quotation to issuance.",
            "Implemented role-based access control for different user types.",
            "Fixed bugs and optimized existing functionalities.",
            "Collaborated with cross-functional teams for smooth deployments.",
            "Developed custom features based on client requirements.",
          ]
        },
        {
          name: "ZUNO (Mumbai)",
          description:
            "Contributed to FS-QUO module enhancements for policy lifecycle management. Delivered customized functionalities and bug fixes.",
          details: [
            "Enhanced existing modules with new features based on client requirements.",
            "Fixed critical bugs improving system stability.",
            "Collaborated with cross-functional teams for seamless integration.",

          ]
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      {/* Background decorative elements */}
      <div className={`absolute top-10 right-10 w-64 h-64 rounded-full opacity-30 translate-x-1/3 -translate-y-1/3 ${
        isDarkMode ? "bg-blue-900" : "bg-blue-100"
      }`}></div>
      <div className={`absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-30 -translate-x-1/3 translate-y-1/3 ${
        isDarkMode ? "bg-purple-900" : "bg-purple-100"
      }`}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold relative inline-block ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Professional Experience
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            My journey through the tech industry, projects I've worked on, and skills I've acquired
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                isDarkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              {/* Role Header */}
              <div className={`p-6 md:p-8 border-b ${
                isDarkMode ? "border-gray-600" : "border-gray-100"
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                      isDarkMode ? "bg-blue-800 text-blue-200" : "bg-blue-100 text-blue-600"
                    }`}>
                      <FaBriefcase className="text-xl" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}>
                        {exp.role}
                      </h3>
                      <p className={`text-lg font-medium mt-1 ${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      }`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}>{exp.period}</p>
                    <p className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}>{exp.location}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        isDarkMode
                          ? "bg-blue-800 text-blue-200"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="p-6 md:p-8 space-y-6">
                <h4 className={`text-xl font-semibold flex items-center gap-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  <FaCode className="text-blue-500" />
                  Key Projects
                </h4>

                {exp.projects.map((project, i) => (
                  <div
                    key={i}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md ${
                      isDarkMode
                        ? "border-gray-600 hover:border-blue-700"
                        : "border-gray-200 hover:border-blue-200"
                    }`}
                  >
                    <button
                      onClick={() => toggleProject(i)}
                      className={`w-full p-5 text-left flex items-center justify-between gap-4 transition-colors ${
                        isDarkMode
                          ? "bg-gray-600 hover:bg-gray-500"
                          : "bg-gray-50 hover:bg-blue-50"
                      }`}
                    >
                      <div className="flex-1">
                        <h5 className={`text-lg font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}>{project.name}</h5>
                        <p className={`mt-1 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}>{project.description}</p>
                      </div>
                      <div className="flex-shrink-0 text-blue-600">
                        {expandedProject === i ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </button>

                    {expandedProject === i && (
                      <div className={`p-5 border-t ${
                        isDarkMode ? "bg-gray-600 border-gray-500" : "bg-white border-gray-100"
                      }`}>
                        <h6 className={`font-medium mb-3 flex items-center gap-2 ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}>
                          <FaTools className="text-blue-500 text-sm" />
                          Key Contributions:
                        </h6>
                        <ul className="space-y-2">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className={`flex items-start gap-2 ${
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${
                                isDarkMode ? "bg-blue-400" : "bg-blue-400"
                              }`}></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className={`mb-6 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>Interested in working together?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Let's Discuss Your Project
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;