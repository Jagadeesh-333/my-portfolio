import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaDownload,
  FaEnvelope,
  FaArrowDown
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiApachekafka,
  SiMysql
} from "react-icons/si";
import { useTheme } from './ThemeContext';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode } = useTheme();

  // Handle scroll events to detect if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 overflow-hidden pt-16 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mt-8">
        {/* Avatar with enhanced design - Fixed positioning */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className={`w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl mb-8 relative border-4 ${
            isDarkMode ? "border-gray-800" : "border-white"
          }`}
        >
          <span className="font-bold">JT</span>

          {/* Status indicator */}
          <div className={`absolute bottom-3 right-3 w-5 h-5 bg-green-400 rounded-full border-2 ${
            isDarkMode ? "border-gray-800" : "border-white"
          }`}></div>

          {/* Animated ring */}
          <div className={`absolute inset-0 rounded-full border-4 ${
            isDarkMode ? "border-blue-600" : "border-blue-300"
          } animate-ping opacity-20`}></div>
        </motion.div>

        {/* Name + Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Jagadeesh <span className="text-blue-600 dark:text-blue-400">Tanniru</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-semibold ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            Full Stack <span className="text-blue-500 dark:text-blue-400">Java Developer</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className={`mt-4 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Passionate about building <span className="font-semibold text-blue-500 dark:text-blue-400">scalable web applications</span> with{" "}
          <span className="font-semibold text-orange-500 dark:text-orange-400">Java</span>,{" "}
          <span className="font-semibold text-green-500 dark:text-green-400">Spring Boot</span>, and{" "}
          <span className="font-semibold text-indigo-500 dark:text-indigo-400">modern technologies</span>.{" "}
          <span className="font-medium">2.2+ years</span> of experience in enterprise software development.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="/Jagadeesh_Tanniru_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="text-sm" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => scrollToSection('#contact')}
            className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-lg shadow-md border transition-all duration-300 ${
              isDarkMode
                ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700 hover:shadow-lg"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50 hover:shadow-lg"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-14"
        >
          <p className={`text-sm uppercase tracking-wider mb-6 ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            Tech Stack & Expertise
          </p>
          <div className={`flex flex-wrap justify-center gap-6 text-3xl sm:text-4xl ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            <motion.div whileHover={{ scale: 1.2, y: -5 }} className={`p-2 rounded-lg shadow-sm hover:shadow-md transition-all ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <FaJava className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors" title="Java" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -5 }} className={`p-2 rounded-lg shadow-sm hover:shadow-md transition-all ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <SiSpringboot className="hover:text-green-600 dark:hover:text-green-500 transition-colors" title="Spring Boot" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -5 }} className={`p-2 rounded-lg shadow-sm hover:shadow-md transition-all ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <FaReact className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" title="React" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -5 }} className={`p-2 rounded-lg shadow-sm hover:shadow-md transition-all ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <FaDocker className="hover:text-blue-700 dark:hover:text-blue-600 transition-colors" title="Docker" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -5 }} className={`p-2 rounded-lg shadow-sm hover:shadow-md transition-all ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <SiPostgresql className="hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors" title="PostgreSQL" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -5 }} className={`p-2 rounded-lg shadow-sm hover:shadow-md transition-all ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <SiMysql className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors" title="MySQL" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -5 }} className={`p-2 rounded-lg shadow-sm hover:shadow-md transition-all ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <SiApachekafka className={`hover:${isDarkMode ? "text-gray-500" : "text-black"} transition-colors`} title="Kafka" />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className={`mt-16 flex flex-col items-center ${
            isDarkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => scrollToSection('#about')}
            className="cursor-pointer"
          >
            <FaArrowDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}