import React, { useState, useEffect } from "react";
import { useTheme } from './ThemeContext';
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const { width, height } = useWindowSize();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters." : "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email address.";
      case "message":
        return value.trim().length < 5 ? "Message must be at least 5 characters." : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("https://formspree.io/f/xnnbwynj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const successMsg = `✅ Thank you, ${formData.name}! 😊 I will get back to you soon.`;
        setStatusType("success");
        setStatusMessage(successMsg);
        alert(successMsg);
        setFormData({ name: "", email: "", message: "" });

        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      } else {
        const errorMsg = "❌ Oops! Something went wrong. Please try again.";
        setStatusType("error");
        setStatusMessage(errorMsg);
        alert(errorMsg);
      }
    } catch (error) {
      console.error(error);
      const errorMsg = "❌ Network error. Please check your connection.";
      setStatusType("error");
      setStatusMessage(errorMsg);
      alert(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage(null);
        setStatusType(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const floatingLabelClass = (field) =>
    `absolute left-3 transition-all duration-500 pointer-events-none ${
      formData[field]
        ? "-top-6 text-base font-medium px-1 text-white" // label moves above
        : "top-3 text-gray-400" // label inside input
    } ${isDarkMode && !formData[field] ? "text-gray-400" : ""}`;

  return (
    <section
      id="contact"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      {showConfetti && <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold relative inline-block ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Get In Touch
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side Info */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                Let's talk about your project
              </h3>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                I'm available for freelance work and open to new opportunities. If you have a project idea or need my help with something, feel free to reach out. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div className={`flex items-center p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-50"}`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 group-hover:scale-110 transition-transform ${isDarkMode ? "bg-blue-800 text-blue-200" : "bg-blue-100 text-blue-600"}`}>
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Location</p>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Ongole, Andhra Pradesh, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className={`flex items-center p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-50"}`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 group-hover:scale-110 transition-transform ${isDarkMode ? "bg-blue-800 text-blue-200" : "bg-blue-100 text-blue-600"}`}>
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Phone</p>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>+91 7013290386</p>
                </div>
              </div>

              {/* Email */}
              <div className={`flex items-center p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-50"}`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 group-hover:scale-110 transition-transform ${isDarkMode ? "bg-blue-800 text-blue-200" : "bg-blue-100 text-blue-600"}`}>
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Email</p>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>jagadeeshtanniru123@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`p-8 rounded-2xl shadow-lg transition-colors duration-300 ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
            <form onSubmit={handleSubmit} className="space-y-6 relative">
                {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    isDarkMode ? "bg-gray-600 border-gray-500 text-white" : "border-gray-200 text-gray-900"
                  }`}
                />
                <label className={floatingLabelClass("name")}>Please Enter your name</label>
                {errors.name && <p className="text-yellow-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    isDarkMode ? "bg-gray-600 border-gray-500 text-white" : "border-gray-200 text-gray-900"
                  }`}
                />
                <label className={floatingLabelClass("email")}>Enter your email address</label>
                {errors.email && <p className="text-yellow-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none ${
                    isDarkMode ? "bg-gray-600 border-gray-500 text-white" : "border-gray-200 text-gray-900"
                  }`}
                />
                <label className={floatingLabelClass("message")}>Tell me about your project or inquiry...</label>
                {errors.message && <p className="text-yellow-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 flex items-center justify-center gap-2 rounded-lg font-semibold text-white shadow-lg transition-all ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span>Sending</span>
                    <span className="typing-dots">
                      <span></span><span></span><span></span>
                    </span>
                  </div>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {/* Status message */}
              {statusMessage && (
                <p className={`mt-4 text-center font-medium transition-opacity duration-500 ${statusType === "success" ? "text-green-500" : "text-red-500"}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;