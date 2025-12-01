import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { PageLayoutComp } from "../../components/page_layout_comp";

const frameImages = [
  "https://drive.google.com/file/d/1pHMVqq-F4_bspkJfKGf9lCdlKucnKZP1/preview",
  "https://drive.google.com/file/d/1i98c5lha8fOlvxD-oJiNvVuHio7Fg-xc/preview",
  "https://drive.google.com/file/d/1vqH8muwYWQ1X-VD_8OttKZ_syBkPaZDi/preview",
];

const frameImageThumbs = [
  "https://drive.google.com/thumbnail?id=1pHMVqq-F4_bspkJfKGf9lCdlKucnKZP1&sz=w1000",
  "https://drive.google.com/thumbnail?id=1i98c5lha8fOlvxD-oJiNvVuHio7Fg-xc&sz=w1000",
  "https://drive.google.com/thumbnail?id=1vqH8muwYWQ1X-VD_8OttKZ_syBkPaZDi&sz=w1000",
];

const mobileImages = [
  "https://drive.google.com/thumbnail?id=1or1K9Ll64pZo7lYqhjTsw0eFR9RnZvb6&sz=w800",
  "https://drive.google.com/thumbnail?id=1rdLyNSu_mmJErRdB6F_n8U4STa8SDtoo&sz=w800",
  "https://drive.google.com/thumbnail?id=1cA3Yf1eqoXmnIWjCrk72a2UMe7IkdzdL&sz=w800",
  "https://drive.google.com/thumbnail?id=1DUVPAKN5ZcrIS3wcjzuOMmR1phnurmwF&sz=w800",
  "https://drive.google.com/thumbnail?id=17lUZfQNm6p9oaPWZj-j0LnKQrEmAJ0wE&sz=w800",
  "https://drive.google.com/thumbnail?id=1IilXq746JMSmpd9Mj5-kd4I8W0rnXhI8&sz=w800",
  "https://drive.google.com/thumbnail?id=1jHbzcxmXtpMaPy-XG8fQAe6Xhg5r1f_z&sz=w800",
  "https://drive.google.com/thumbnail?id=1gcL9DBhHaJzCu_y7GkOjEo1Z3aptN2CE&sz=w800",
  "https://drive.google.com/thumbnail?id=1VWd6LfZPc6s4ybtoxJGgm-IKbHjT6Sfd&sz=w800",
  "https://drive.google.com/thumbnail?id=1Pdv0RjEQrCvScBZdEdgROyAlCaPeCkdw&sz=w800",
  "https://drive.google.com/thumbnail?id=1xQrZl66fsRxVu2Htd-nEGv3oe3E6jOkB&sz=w800",
  "https://drive.google.com/thumbnail?id=1W27tRH3fB2VuPf5RTd08cO9irmMrhvTk&sz=w800",
  "https://drive.google.com/thumbnail?id=17KRt3eLXT8sWTzD8IxXGGmPX7Sun8nES&sz=w800",
  "https://drive.google.com/thumbnail?id=14eUHyTqN0rcPoyt_rkG4EYIN8MqGxPrP&sz=w800",
  "https://drive.google.com/thumbnail?id=1cRcKIyYh1lNIk-UOawhotzHF_FwWegs3&sz=w800",
  "https://drive.google.com/thumbnail?id=1cBdmz642Bn_fqjS3bozfFKIGB3eJNSUT&sz=w800",
  "https://drive.google.com/thumbnail?id=1i5bYPAIEQ936ry0-QAjN6DNEwlGh2BW4&sz=w800",
  "https://drive.google.com/thumbnail?id=1805i17HIDEzud7872V3nArCKu1d99AmJ&sz=w800",
  "https://drive.google.com/thumbnail?id=1PPamBDJ9975z6TMDj9jtBPpO-pNVMpIe&sz=w800",
  "https://drive.google.com/thumbnail?id=1evG71BIAU2G6WM0zcqUKunByjtIk-LAa&sz=w800",
  "https://drive.google.com/thumbnail?id=1N5wLnHpok81_-hJ5NiIAA2cJ5eJ8W1yF&sz=w800",
];

export default function VisionFramePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
                    src="/images/projects/visionframe/visionframe.png"
                    alt="Vision Frame AI Logo"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              variants={headerVariants}
            >
              Vision Frame AI
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-6"
              variants={headerVariants}
            >
              AI-Powered Digital Art Frame
            </motion.p>
            <motion.a
              href="https://visionframedisplay.web.app/"
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
                VisionFrame AI is an AI-powered digital art platform that
                transforms your living space into a dynamic gallery filled with
                AI-generated art. The platform consists of three main
                components working seamlessly together to deliver an immersive
                art experience.
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
                    🖼️ The Digital Frame
                  </h3>
                  <p className="text-gray-300">
                    An interactive digital frame designed to display AI-generated
                    art. Users can interact with the frame through voice
                    commands to request image generation, artwork descriptions,
                    background sounds, or slideshow displays. Built from scratch
                    with OpenAI APIs integration for real-time conversational
                    interactions.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">
                    📱 Mobile Control App (Android & iOS)
                  </h3>
                  <p className="text-gray-300">
                    A mobile application that serves as the control center for
                    managing generated images and interactions with the digital
                    frame. Features include a Gallery for easy access to all
                    generated images, a Chat feature for tracking user
                    interactions, slideshow creation, image uploads, frame
                    settings control (brightness and volume), and smart
                    schedules for displaying art.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">
                    🌐 Web Platform
                  </h3>
                  <p className="text-gray-300">
                    A comprehensive web platform accessible at{" "}
                    <a
                      href="https://visionframedisplay.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      visionframedisplay.web.app
                    </a>{" "}
                    that provides additional management and control features for
                    your VisionFrame AI experience.
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
                    "Flutter (Dart)",
                    "RESTFUL APIs",
                    "Firebase",
                    "Node.js",
                    "OPEN AI",
                    "Android",
                    "iOS",
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
                    Lead / Sr. Software Developer
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    January 2024 - July 2024
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I led the development of VisionFrame AI and built everything from the ground up. 
                    This meant creating the digital frame app, the mobile apps for both Android and iOS, 
                    and all the backend systems. I worked closely with the client to bring their idea to life, 
                    set up the tech stack, and helped guide the junior devs on the team. 
                    Basically took it from zero to a fully working AI-powered art platform.
                  </p>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 gap-6 mt-6"
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
                      <span className="text-2xl">🎨</span>
                      Digital Frame Development
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Built the interactive digital frame from scratch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Integrated OpenAI APIs (DALL-E 3 & ChatGPT-4) for real-time AI interactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Implemented voice command functionality for seamless user interaction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Designed the system architecture for real-time art generation and display</span>
                      </li>
                    </ul>
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
                      <span className="text-2xl">📱</span>
                      Mobile App Development
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Developed cross-platform mobile app using Flutter for Android & iOS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Created intuitive Gallery and Chat interfaces for frame management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Implemented slideshow creation, image uploads, and smart scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Built remote control features for frame settings (brightness & volume)</span>
                      </li>
                    </ul>
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
                    <span className="text-2xl">⚙️</span>
                    Backend & Infrastructure
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Architected and developed the entire backend infrastructure using Node.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Designed and implemented RESTful APIs for seamless communication between components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Set up Firebase integration for real-time data synchronization and storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Ensured scalability and reliability across all platform components</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/30 mt-6"
                  variants={itemVariants}
                  whileHover={{ 
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  }}
                >
                  <p className="text-gray-200 leading-relaxed italic">
                    <span className="text-blue-300 font-semibold">Key Achievement:</span> Successfully delivered 
                    a complete AI-powered digital art ecosystem from concept to production, encompassing hardware 
                    integration, mobile applications, backend services, and AI integration — demonstrating full-stack 
                    expertise and leadership in emerging AI technologies.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Digital Frame Screenshots */}
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
              Digital Frame Gallery
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {frameImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="bg-[#11203a]/90 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(frameImageThumbs, index)}
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe
                    src={image}
                    className="w-full h-64 border-0"
                    title={`Digital Frame Screenshot ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Mobile App Screenshots */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              variants={sectionVariants}
            >
              Mobile App Gallery
            </motion.h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              {mobileImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="bg-[#11203a]/90 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(mobileImages, index)}
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)",
                    zIndex: 10,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    alt={`Mobile App Screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
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

      {/* Lightbox with Navigation Controls */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages.map((src) => ({ src }))}
        index={lightboxIndex}
        plugins={[Fullscreen, Zoom]}
        animation={{ fade: 300 }}
        controller={{
          closeOnBackdropClick: true,
        }}
      />
    </PageLayoutComp>
  );
}

