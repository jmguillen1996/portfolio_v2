import { motion } from "framer-motion";
import { PageLayoutComp } from "../../components/page_layout_comp";

export default function TourneyKeyPage() {
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <PageLayoutComp>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Project Icon */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1,
              }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full -z-10" />
                {/* Icon container */}
                <div className="bg-gradient-to-br from-[#11203a]/90 to-[#1a2f4a]/90 rounded-3xl p-6 shadow-2xl border border-blue-500/20">
                  <img
                    src="/images/projects/tourneykey/tourney_key.svg"
                    alt="TourneyKey Logo"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              variants={headerVariants}
            >
              TourneyKey
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-6"
              variants={headerVariants}
            >
              Basketball Tournament Management Platform
            </motion.p>
            <motion.a
              href="https://tourneykey.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
              variants={headerVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Website
            </motion.a>
          </motion.div>

          {/* Project Status Notice */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.div 
              className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.01, borderColor: "rgba(234, 179, 8, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-yellow-400 font-semibold mb-2">
                ⚠️ Project Status
              </p>
              <p className="text-gray-300 text-sm">
                This project is no longer being maintained. However, before development ceased, 
                it was a fully functional platform with complete tournament management capabilities.
              </p>
            </motion.div>
          </motion.div>

          {/* Project Overview */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              variants={sectionVariants}
            >
              About the Project
            </motion.h2>
            <motion.div 
              className="bg-[#11203a]/90 rounded-2xl shadow-lg p-8 space-y-4"
              whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.p 
                className="text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                TourneyKey is a basketball tournament management platform designed to help organizers 
                streamline league operations. The platform provides comprehensive tools for managing 
                every aspect of basketball tournaments, from initial setup through final results.
              </motion.p>

              <motion.div 
                className="space-y-6 mt-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">
                    🏀 Core Features
                  </h3>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Tournament Creation:</strong> Set up and configure new basketball tournaments with customizable settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Team Registration:</strong> Register and manage teams participating in tournaments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Coach Management:</strong> Organize coach information and credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Player Management:</strong> Track player information, stats, and team assignments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Event Locations:</strong> Manage venue information and game locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Game Scheduling:</strong> Create and manage game schedules throughout the tournament</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Score Tracking:</strong> Record and update game scores in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Standings & Rankings:</strong> Automatically calculate and display tournament standings</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">
                    🎯 Platform Purpose
                  </h3>
                  <p className="text-gray-300">
                    The platform was designed to simplify every stage of tournament planning — from 
                    initial setup to final results — providing an intuitive interface for both tournament 
                    organizers and participants. It served as a comprehensive solution for managing the 
                    entire lifecycle of basketball tournaments.
                  </p>
                </motion.div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div 
                className="mt-8 pt-8 border-t border-gray-700/50"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-200 mb-4">
                  Tech Stack
                </h3>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Angular",
                    "TypeScript",
                    "CSS",
                    "RxJs",
                    "RESTful APIs",
                    "Spring Boot",
                    "Java",
                  ].map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="text-xs font-medium text-blue-200 bg-blue-900/40 px-3 py-1 rounded-full"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* My Role Section */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              variants={sectionVariants}
            >
              My Role
            </motion.h2>
            <motion.div 
              className="bg-gradient-to-br from-[#11203a]/90 to-[#1a2f4a]/90 rounded-2xl shadow-lg p-8 border border-blue-500/20"
              whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-blue-300 mb-3">
                    Frontend Developer
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    September 2024 - November 2024
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I contributed to the TourneyKey platform as a frontend developer, focusing on 
                    improving the user experience and implementing new features. My work involved 
                    enhancing the existing Angular-based application through bug fixes, UI improvements, 
                    and feature development.
                  </p>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-3 gap-6 mt-6"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="bg-[#0a1628]/50 rounded-xl p-6 border border-blue-500/10"
                    variants={itemVariants}
                    whileHover={{ 
                      backgroundColor: "rgba(10, 22, 40, 0.7)",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <h4 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
                      <span className="text-2xl">🐛</span>
                      Bug Fixing
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Identified and resolved various bugs throughout the platform, ensuring 
                      smooth functionality and improving overall stability of the tournament 
                      management system.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-[#0a1628]/50 rounded-xl p-6 border border-blue-500/10"
                    variants={itemVariants}
                    whileHover={{ 
                      backgroundColor: "rgba(10, 22, 40, 0.7)",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <h4 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎨</span>
                      UI Enhancement
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Enhanced user interfaces across the platform, improving visual design 
                      and user experience for tournament organizers and participants navigating 
                      the system.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-[#0a1628]/50 rounded-xl p-6 border border-blue-500/10"
                    variants={itemVariants}
                    whileHover={{ 
                      backgroundColor: "rgba(10, 22, 40, 0.7)",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <h4 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      Feature Development
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Implemented new features to expand the platform's capabilities, working 
                      with Angular and RxJs to create responsive and interactive components for 
                      tournament management.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="bg-[#0a1628]/50 rounded-xl p-6 border border-blue-500/10 mt-6"
                  variants={itemVariants}
                  whileHover={{ 
                    backgroundColor: "rgba(10, 22, 40, 0.7)",
                    borderColor: "rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <h4 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🛠️</span>
                    Technical Contributions
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Worked with Angular framework to build and maintain frontend components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Utilized RxJs for reactive programming and state management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Implemented responsive designs using CSS for optimal viewing across devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Collaborated with the team to ensure consistent code quality and best practices</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Back Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="/"
              className="inline-block border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Portfolio
            </motion.a>
          </motion.div>
        </div>
      </div>
    </PageLayoutComp>
  );
}

