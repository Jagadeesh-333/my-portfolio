import React, { useState } from "react";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiReact,
  SiDocker,
  SiJenkins,
  SiPostman,
  SiGradle,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiApachekafka,
  SiRedis,
  SiSwagger,
  SiKubernetes,
  SiAmazonaws,
  SiIntellijidea
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaUsers,
  FaProjectDiagram,
  FaServer,
  FaCode,
  FaLightbulb,
  FaTools
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from './ThemeContext';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { isDarkMode } = useTheme();

  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: <FaCode className="text-blue-500" />,
      skills: [
        { name: "Java 8/11/17", icon: <FaJava />, color: "bg-[#E8F4F9] text-[#007396] border-[#007396]", darkColor: "bg-[#1E3A5F] text-[#8EC8F6] border-[#8EC8F6]" },
        { name: "SQL", icon: <FaDatabase />, color: "bg-[#E6F2F6] text-[#00618A] border-[#00618A]", darkColor: "bg-[#1E3A5F] text-[#8EC8F6] border-[#8EC8F6]" },
        { name: "JavaScript", icon: <SiReact />, color: "bg-[#FFFBEA] text-[#D4B807] border-[#D4B807]", darkColor: "bg-[#3D2E1A] text-[#F7DF1E] border-[#F7DF1E]" },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks",
      icon: <FaServer className="text-green-500" />,
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot />, color: "bg-[#F0FAF4] text-[#52952C] border-[#52952C]", darkColor: "bg-[#1C3314] text-[#6DB33F] border-[#6DB33F]" },
        { name: "Spring MVC", icon: <SiSpringboot />, color: "bg-[#F0FAF4] text-[#52952C] border-[#52952C]", darkColor: "bg-[#1C3314] text-[#6DB33F] border-[#6DB33F]" },
        { name: "Spring Cloud", icon: <SiSpringboot />, color: "bg-[#F0FAF4] text-[#52952C] border-[#52952C]", darkColor: "bg-[#1C3314] text-[#6DB33F] border-[#6DB33F]" },
        { name: "Spring Data JPA", icon: <SiSpringboot />, color: "bg-[#F0FAF4] text-[#52952C] border-[#52952C]", darkColor: "bg-[#1C3314] text-[#6DB33F] border-[#6DB33F]" },
        { name: "Spring Security", icon: <SiSpringsecurity />, color: "bg-[#F0FAF4] text-[#52952C] border-[#52952C]", darkColor: "bg-[#1C3314] text-[#6DB33F] border-[#6DB33F]" },
        { name: "Spring Batch", icon: <SiSpringboot />, color: "bg-[#F0FAF4] text-[#52952C] border-[#52952C]", darkColor: "bg-[#1C3314] text-[#6DB33F] border-[#6DB33F]" },
        { name: "Spring Actuator", icon: <SiSpringboot />, color: "bg-[#F0FAF4] text-[#52952C] border-[#52952C]", darkColor: "bg-[#1C3314] text-[#6DB33F] border-[#6DB33F]" },
        { name: "Hibernate", icon: <SiHibernate />, color: "bg-[#F5F6F7] text-[#445056] border-[#445056]", darkColor: "bg-[#2D3748] text-[#CBD5E0] border-[#CBD5E0]" },
        { name: "React", icon: <SiReact />, color: "bg-[#E6FAFD] text-[#2FC1EB] border-[#2FC1EB]", darkColor: "bg-[#1A365D] text-[#63B3ED] border-[#63B3ED]" },
      ],
    },
    {
      id: "tools",
      title: "Dev Tools",
      icon: <FaTools className="text-purple-500" />,
      skills: [
        { name: "Docker", icon: <SiDocker />, color: "bg-[#E6F3FB] text-[#0D7AC2] border-[#0D7AC2]", darkColor: "bg-[#1E3A5F] text-[#8EC8F6] border-[#8EC8F6]" },
        { name: "Kubernetes", icon: <SiKubernetes />, color: "bg-[#E8F0FE] text-[#1A4FBB] border-[#1A4FBB]", darkColor: "bg-[#1E3A5F] text-[#8EC8F6] border-[#8EC8F6]" },
        { name: "Jenkins", icon: <SiJenkins />, color: "bg-[#FDECEA] text-[#B53224] border-[#B53224]", darkColor: "bg-[#3A1E1C] text-[#F56565] border-[#F56565]" },
        { name: "Postman", icon: <SiPostman />, color: "bg-[#FFF0EB] text-[#E65522] border-[#E65522]", darkColor: "bg-[#3A231C] text-[#ED8936] border-[#ED8936]" },
        { name: "Maven", icon: <FaProjectDiagram />, color: "bg-[#FDEEEF] text-[#A3142A] border-[#A3142A]", darkColor: "bg-[#3A1E1C] text-[#F56565] border-[#F56565]" },
        { name: "Gradle", icon: <SiGradle />, color: "bg-[#E6F1F2] text-[#011921] border-[#011921]", darkColor: "bg-[#1A202C] text-[#A0AEC0] border-[#A0AEC0]" },
        { name: "Git", icon: <SiGit />, color: "bg-[#FFF0EC] text-[#D43A1C] border-[#D43A1C]", darkColor: "bg-[#3A1E1C] text-[#F56565] border-[#F56565]" },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea />, color: "bg-[#F2F2F2] text-[#333333] border-[#333333]", darkColor: "bg-[#2D3748] text-[#CBD5E0] border-[#CBD5E0]" },
      ],
    },
    {
      id: "databases",
      title: "Databases",
      icon: <FaDatabase className="text-orange-500" />,
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "bg-[#E9F1F6] text-[#326085] border-[#326085]", darkColor: "bg-[#1E3A5F] text-[#8EC8F6] border-[#8EC8F6]" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-[#EDF1FC] text-[#2A50B7] border-[#2A50B7]", darkColor: "bg-[#1E3A5F] text-[#8EC8F6] border-[#8EC8F6]" },
        { name: "Oracle", icon: <SiOracle />, color: "bg-[#FFECEC] text-[#D50000] border-[#D50000]", darkColor: "bg-[#3A1E1C] text-[#F56565] border-[#F56565]" },
        { name: "Redis", icon: <SiRedis />, color: "bg-[#FDEAE8] text-[#C1281E] border-[#C1281E]", darkColor: "bg-[#3A1E1C] text-[#F56565] border-[#F56565]" },
        { name: "Kafka", icon: <SiApachekafka />, color: "bg-[#F0F0F0] text-[#000000] border-[#000000]", darkColor: "bg-[#2D3748] text-[#CBD5E0] border-[#CBD5E0]" },
      ],
    },
    {
      id: "platforms",
      title: "Platforms",
      icon: <SiAmazonaws className="text-yellow-500" />,
      skills: [
        { name: "AWS", icon: <SiAmazonaws />, color: "bg-[#FFF5E6] text-[#E68500] border-[#E68500]", darkColor: "bg-[#3D2E1A] text-[#F6AD55] border-[#F6AD55]" },
        { name: "Docker", icon: <SiDocker />, color: "bg-[#E6F3FB] text-[#0D7AC2] border-[#0D7AC2]", darkColor: "bg-[#1E3A5F] text-[#8EC8F6] border-[#8EC8F6]" },
        { name: "Kubernetes", icon: <SiKubernetes />, color: "bg-[#E8F0FE] text-[#1A4FBB] border-[#1A4FBB]", darkColor: "bg-[#1E3A5F] text-[#8EC8F6] border-[#8EC8F6]" },
        { name: "GitHub", icon: <SiGithub />, color: "bg-[#F2F2F2] text-[#000000] border-[#000000]", darkColor: "bg-[#2D3748] text-[#CBD5E0] border-[#CBD5E0]" },
        { name: "Bitbucket", icon: <SiBitbucket />, color: "bg-[#E6F0FA] text-[#003D99] border-[#003D99]", darkColor: "bg-[#1E3A5F] text-[#8EC8F6] border-[#8EC8F6]" },
      ],
    },
    {
      id: "methodologies",
      title: "Methodologies",
      icon: <FaLightbulb className="text-red-500" />,
      skills: [
        { name: "Agile", icon: <FaUsers />, color: "bg-[#FFF2EC] text-[#E03A00] border-[#E03A00]", darkColor: "bg-[#3A231C] text-[#ED8936] border-[#ED8936]" },
        { name: "Scrum", icon: <FaUsers />, color: "bg-[#EDF8ED] text-[#1A6D1A] border-[#1A6D1A]", darkColor: "bg-[#1C3325] text-[#68D391] border-[#68D391]" },
        { name: "Microservices", icon: <FaProjectDiagram />, color: "bg-[#F3ECFE] text-[#6B1FBA] border-[#6B1FBA]", darkColor: "bg-[#2D1B69] text-[#9F7AEA] border-[#9F7AEA]" },
        { name: "REST APIs", icon: <SiSwagger />, color: "bg-[#F2FCE4] text-[#6BC41F] border-[#6BC41F]", darkColor: "bg-[#1C3325] text-[#68D391] border-[#68D391]" },
        { name: "CI/CD", icon: <SiJenkins />, color: "bg-[#FDECEA] text-[#B53224] border-[#B53224]", darkColor: "bg-[#3A1E1C] text-[#F56565] border-[#F56565]" },
      ],
    },
  ];

  const filteredCategories = activeCategory === "all"
    ? skillCategories
    : [skillCategories.find(cat => cat.id === activeCategory)];

  return (
    <section
      id="skills"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      {/* Background elements */}
      <div className={`absolute top-0 left-0 w-72 h-72 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 ${
        isDarkMode ? "bg-blue-900" : "bg-blue-100"
      }`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-30 translate-x-1/3 translate-y-1/3 ${
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
            Technical Skills
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
            Technologies and tools I work with to create efficient and scalable solutions
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : isDarkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : isDarkMode
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? "bg-blue-900/30 text-blue-400" : "bg-blue-50 text-blue-600"
                }`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-300 cursor-default ${
                      isDarkMode ? skill.darkColor : skill.color
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
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
          <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Want to see these skills in action?
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View My Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;