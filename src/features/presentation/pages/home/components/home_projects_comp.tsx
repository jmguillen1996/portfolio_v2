import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Helper to render react-icons FA in a consistent way (like in home_about_comp)
function IconFA(IconComponent: any, size: number = 20, className = "") {
  return <IconComponent size={size} className={className} />;
}

const projects = [
  // {
  //   id: 2,
  //   title: "ErotixAI",
  //   description:
  //     "ErotixAI is an AI-powered companion platform where users can interact with lifelike avatars through chat, voice calls, and video calls. Focused on delivering an immersive and engaging experience, the platform features multiple dynamic avatars and real-time interaction, allowing users to build meaningful virtual connections.",
  //   icon: "/images/projects/erotixai/erotix_ai.png",
  //   websiteUrl: "https://www.erotixai.com/",
  //   detailsUrl: "#",
  //   tech: [
  //     "React Js",
  //     "Redux",
  //     "Tailwind CSS",
  //     "Node.js",
  //     "RESTFUL APIs",
  //     "Firebase",
  //     "Mongo DB",
  //     "Mixpanel",
  //   ],
  //   dateRange: "Jan 2025 - Present",
  // },
  // {
  //   id: 2,
  //   title: "ErotixAI - Admin",
  //   description:
  //     "Admin panel for ErotixAI used to manage AI companions and avatars displayed on the main platform. Provides tools for creating, updating, and publishing avatars, managing AI video call characters, controlling voice and media assets, and moderating user interactions and reports. The panel also includes analytics and usage insights powered by Mixpanel, allowing the team to monitor how users engage with the app.",
  //   icon: "",
  //   websiteUrl: "https://admin.erotix.ai/",
  //   detailsUrl: "#",
  //   tech: [
  //     "React Js",
  //     "Redux",
  //     "Tailwind CSS",
  //     "Node.js",
  //     "RESTFUL APIs",
  //     "Firebase",
  //     "Mongo DB",
  //     "Mixpanel",
  //   ],
  //   dateRange: "June 2025 - Present",
  // },
  {
    id: 1,
    title: "heyhun",
    description:
      "heyhun is an AI companion you reach through your phone number, just like anyone else in your life. Text her, call her, send photos, share what's on your mind—she remembers, learns your preferences, and responds in a way that feels personal and real. Behind the scenes, the heyhun web dashboard lets you see and manage everything: memories, preferences, conversation history, calendars, and more. No clunky app store installs—just a private, always-available AI you talk to from your native messaging app, with a powerful control center on the web when you want to go deeper.",
    icon: "/images/projects/heyhun/blue-heart.svg",
    websiteUrl: "https://heyhun.com/",
    detailsUrl: "https://heyhun.com/",
    tech: [
      "React Js",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "RESTFUL APIs",
      "Firebase",
      "Supabase",
    ],
    dateRange: "August 2025",
  },
  {
    id: 2,
    title: "TourneyKey",
    description:
      "Tourneykey is a basketball tournament management platform that helps organizers streamline league operations. It supports creating tournaments, registering teams and coaches, managing event locations, setting up game schedules, and tracking scores and standings. The platform is designed to simplify every stage of tournament planning — from setup to final results — for both organizers and participants.",
    icon: "/images/projects/tourneykey/tourney_key.svg",
    websiteUrl: "/projects/tourneykey",
    detailsUrl: "/projects/tourneykey",
    tech: [
      "Angular",
      "CSS",
      "RxJs",
      "Spring Boot",
      "Java"
    ],
    dateRange: "Sep 2024 - Nov 2024",
  },
  {
    id: 1,
    title: "Vision Frame AI",
    description:
      "VisionFrame AI is a digital frame powered by DALL-E 3 and ChatGPT-4, enabling interactive, voice-controlled art displays to transform your space into a dynamic gallery.",
    icon: "/images/projects/visionframe/visionframe.png",
    websiteUrl: "/projects/visionframe",
    detailsUrl: "/projects/visionframe",
    tech: [
      "Flutter",
      "Firebase",
      "Node.js",
      "RESTFUL APIs",
      "OPEN AI",
      "Android",
      "iOS",
    ],
    dateRange: "Mar 2024 - Sep 2024",
  },
];

export default function HomeProjectsComp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-0 w-full bg-[#10131a] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-gray-100 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="text-gray-500 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          These are selected projects from my freelance work. I've also worked
          on several applications for past companies, but I no longer have
          access to those projects to showcase them here.
        </motion.p>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#11203a]/90 rounded-2xl shadow-lg p-6 flex flex-col relative min-h-[320px]"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon and external link */}
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {project.icon ? (
                    <img
                      src={project.icon}
                      alt={`${project.title} logo`}
                      className="w-10 h-10 rounded-md object-contain bg-[#232b3a] p-1"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-md bg-[#232b3a] flex items-center justify-center">
                      {/* Dummy placeholder icon */}
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        className="mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="4" y="4" width="32" height="32" rx="8" fill="#232b3a" />
                        <path
                          d="M14 26c2-2 10-2 12 0"
                          stroke="#9CA3AF"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle cx="16.5" cy="17" r="1.5" fill="#9CA3AF" />
                        <circle cx="23.5" cy="17" r="1.5" fill="#9CA3AF" />
                      </svg>
                    </div>
                  )}
                </motion.div>
                <motion.a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition"
                  aria-label={`Open ${project.title}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {IconFA(FaExternalLinkAlt, 20, "w-5 h-5")}
                </motion.a>
              </div>
              {/* Title and Date Range */}
              <div className="flex items-center justify-between mb-1">
                {project.detailsUrl.startsWith("/") ? (
                  <Link
                    to={project.detailsUrl}
                    className="text-lg font-semibold text-gray-100 hover:text-blue-400"
                    aria-label={`Open ${project.title}`}
                  >
                    {project.title}
                  </Link>
                ) : (
                  <a
                    href={project.detailsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-100 hover:text-blue-400"
                    aria-label={`Open ${project.title}`}
                  >
                    {project.title}
                  </a>
                )}
                {project.dateRange && (
                  <span className="text-xs text-gray-400 font-medium ml-2 whitespace-nowrap">
                    {project.dateRange}
                  </span>
                )}
              </div>
              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-blue-200 bg-blue-900/40 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Subtle blurred background shapes, matching the skills section */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-950 via-indigo-950 to-transparent opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-950 via-purple-950 to-transparent opacity-10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
