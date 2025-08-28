import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from './ThemeContext';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "MoodMealMate App",
      description:
        "A full-stack application that suggests food items for breakfast, lunch, and dinner based on the user's current mood. Features personalized recommendations, user authentication, and a responsive interface. Dockerized and deployed for seamless deployment.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Docker", "Kubernetes"],
      liveUrl: "#",
      category: "fullstack",
      image: "/assets/moodmealmate.jpg"
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS to showcase my skills and projects. Features modern UI design, smooth animations, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
      liveUrl: "#",
      category: "frontend",
      image: "/assets/project-portfolio.jpg"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      {/* Background elements */}
      <div className={`absolute top-0 right-0 w-72 h-72 rounded-full opacity-30 translate-x-1/3 -translate-y-1/3 ${
        isDarkMode ? "bg-blue-900" : "bg-blue-100"
      }`}></div>
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-30 -translate-x-1/3 translate-y-1/3 ${
        isDarkMode ? "bg-purple-900" : "bg-purple-100"
      }`}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold relative inline-block ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My Projects
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`mt-4 text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Here are some of the projects I've worked on. Each one represents different skills and technologies I've mastered.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : isDarkMode
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        aria-label="View live demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full capitalize ${
                    isDarkMode
                      ? "bg-gray-700/90 backdrop-blur-sm text-gray-200"
                      : "bg-white/90 backdrop-blur-sm text-gray-800"
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  {project.title}
                </h3>
                <p className={`leading-relaxed mb-5 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDarkMode
                          ? "bg-blue-900/30 text-blue-300"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;