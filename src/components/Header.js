import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from './ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href, name) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
    // Smooth scroll
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? `${isDarkMode ? "bg-gray-900/90" : "bg-white/90"} shadow-lg backdrop-blur-md py-2`
        : `${isDarkMode ? "bg-gray-900/80" : "bg-white/80"} backdrop-blur-sm py-4`
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide"
            onClick={() => handleNavClick("#home", "Home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jagadeesh
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-medium group transition duration-300 px-2 py-1 rounded-lg ${
                  activeSection === item.name.toLowerCase()
                    ? `${isDarkMode ? "text-blue-400 bg-blue-900/20" : "text-blue-600 bg-blue-50"}`
                    : `${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.name);
                }}
              >
                {item.name}
                {/* Hover underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? "w-full bg-blue-600"
                      : "w-0 group-hover:w-full bg-blue-600"
                  }`}
                ></span>
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:text-blue-400"
                  : "bg-gray-100 text-gray-700 hover:text-blue-600"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            {/* Theme Toggle for mobile */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            <button
              className={`p-2 transition-colors ${
                isDarkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden mt-4 rounded-xl shadow-lg overflow-hidden ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex flex-col p-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition duration-300 py-2 px-4 rounded-lg ${
                      activeSection === item.name.toLowerCase()
                        ? `${isDarkMode ? "text-blue-400 bg-blue-900/20" : "text-blue-600 bg-blue-50"}`
                        : `${isDarkMode ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"}`
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.name);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;