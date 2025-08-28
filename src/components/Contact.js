import React, { useState } from "react";
import { useTheme } from './ThemeContext';
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("✅ Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      {/* Background decorative elements */}
      <div className={`absolute top-0 left-0 w-72 h-72 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 ${
        isDarkMode ? "bg-blue-900" : "bg-blue-100"
      }`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full translate-x-1/3 translate-y-1/3 opacity-50 ${
        isDarkMode ? "bg-purple-900" : "bg-purple-100"
      }`}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold relative inline-block ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Get In Touch
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 relative pl-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 ${
                isDarkMode ? "text-white before:bg-blue-400" : "text-gray-800 before:bg-blue-500"
              }`}>
                Let's talk about your project
              </h3>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                I'm available for freelance work and open to new opportunities.
                If you have a project idea or need my help with something, feel
                free to reach out. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className={`flex items-center p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-50"
              }`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 group-hover:scale-110 transition-transform ${
                  isDarkMode
                    ? "bg-blue-800 text-blue-200"
                    : "bg-blue-100 text-blue-600"
                }`}>
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className={`font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}>Location</p>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                    Ongole, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-50"
              }`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 group-hover:scale-110 transition-transform ${
                  isDarkMode
                    ? "bg-blue-800 text-blue-200"
                    : "bg-blue-100 text-blue-600"
                }`}>
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <p className={`font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}>Phone</p>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                    +91 7013290386
                  </p>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-50"
              }`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 group-hover:scale-110 transition-transform ${
                  isDarkMode
                    ? "bg-blue-800 text-blue-200"
                    : "bg-blue-100 text-blue-600"
                }`}>
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className={`font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}>Email</p>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                    jagadeeshtanniru123@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`p-8 rounded-2xl shadow-lg transition-colors duration-300 ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    isDarkMode
                      ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                      : "border-gray-200 text-gray-900"
                  }`}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    isDarkMode
                      ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                      : "border-gray-200 text-gray-900"
                  }`}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none ${
                    isDarkMode
                      ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                      : "border-gray-200 text-gray-900"
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 flex items-center justify-center gap-2 rounded-lg font-semibold text-white shadow-lg transition-all ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;