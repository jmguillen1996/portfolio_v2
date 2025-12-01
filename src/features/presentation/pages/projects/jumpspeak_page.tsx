import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { PageLayoutComp } from "../../components/page_layout_comp";
import { FaExternalLinkAlt } from "react-icons/fa";

// Helper to render react-icons FA in a consistent way
function IconFA(IconComponent: any, size: number = 20, className = "") {
  return <IconComponent size={size} className={className} />;
}

const appImages = [
  "https://drive.google.com/thumbnail?id=1Bi3vYG4hQziAw7AtvOs6mGU0-M2OXkZo&sz=w800",
  "https://drive.google.com/thumbnail?id=192PSltHvE4TxGanVUJ6filGAxOjGtGmg&sz=w800",
  "https://drive.google.com/thumbnail?id=1RoE64trQXLw3jtAlwtiCRDYDccfx4abU&sz=w800",
  "https://drive.google.com/thumbnail?id=1rRarvQY6B6cyAfGg7jVMML24nz9FwCNG&sz=w800",
  "https://drive.google.com/thumbnail?id=1e8aPqA0AQwpUZQ_iAY3P5hb7irqjYTQt&sz=w800",
  "https://drive.google.com/thumbnail?id=1q_KzCnT1plOSp7hNBQ59Irx4_dZi50ZC&sz=w800",
  "https://drive.google.com/thumbnail?id=1mHuOG_zMUEJDW0EEdnNZh36DSO9YSolL&sz=w800",
  "https://drive.google.com/thumbnail?id=1meS6AD9mr6xMvkeOhp58Js66I6JKVoU6&sz=w800",
  "https://drive.google.com/thumbnail?id=1kLLIE1i7y1lUDLWhe3g8ZrLXs1s3mj0P&sz=w800",
  "https://drive.google.com/thumbnail?id=13K-6u1vm9JJlZbC3j_PXdvCWUOUkIBFZ&sz=w800",
  "https://drive.google.com/thumbnail?id=1ADq8XWv_2HSynf8rRecoBKEZAX4q6sPU&sz=w800",
  "https://drive.google.com/thumbnail?id=1LViYpeeoYr8UnYWQKcFetfbf9eyImjCL&sz=w800",
  "https://drive.google.com/thumbnail?id=1pu7m6_0qh19E88mAoc-Lb9vFBIb2jMcf&sz=w800",
  "https://drive.google.com/thumbnail?id=1Y-NQfbkUBKWpkFyEcWxVgIUL0rswrKI8&sz=w800",
  "https://drive.google.com/thumbnail?id=1lmtXg2fe-fXKkjD8l1Cxw7rXBXAWoScn&sz=w800",
  "https://drive.google.com/thumbnail?id=1srOwQ9iR1Wb58q0VIuUt8zP-3oI0L8nv&sz=w800",
  "https://drive.google.com/thumbnail?id=18ibTvxlcCcswpMfxRIWtzOiVl-g6hNNj&sz=w800",
  "https://drive.google.com/thumbnail?id=1nIUgtJCQeR9mlI11DIZcyiFrRlWlqTTN&sz=w800",
  "https://drive.google.com/thumbnail?id=1l7O_Hxj4UgFsaPuQlXitf9hdkCagECkH&sz=w800",
  "https://drive.google.com/thumbnail?id=1i4OxUsnW2sR-OCxhO2_QFE7TVcbjjrZ3&sz=w800",
  "https://drive.google.com/thumbnail?id=1LPUJRm81hbER5cc8vYD4ZrKFy7yZfbgs&sz=w800",
  "https://drive.google.com/thumbnail?id=1NDyaFlNo1uPtSI_HO84MO7bokujUF9Cz&sz=w800",
  "https://drive.google.com/thumbnail?id=19L7K9qh_NJ8RJzCDMuaC9rKLCQJzm6aW&sz=w800",
  "https://drive.google.com/thumbnail?id=1sOazfUHulY8e2FYNXpONd1iXfROdI2dF&sz=w800",
  "https://drive.google.com/thumbnail?id=1wOFUZUI_XelAwCqVmbD8m6K7-MCo8mXr&sz=w800",
  "https://drive.google.com/thumbnail?id=1yNgehfxac9NUFenXbI09S8diHvktQy7c&sz=w800",
  "https://drive.google.com/thumbnail?id=1ef18g3IEORoulSSdkaSzraUdMdZnyg1M&sz=w800",
  "https://drive.google.com/thumbnail?id=1wvlilU1uLEEKaVRp415-MCa65ByQCCrt&sz=w800",
  "https://drive.google.com/thumbnail?id=14Mn0_LMvM6iypAW0YXg0e1DyLL51e5g1&sz=w800",
  "https://drive.google.com/thumbnail?id=1g4Y-R-FNTdhcjhrofB-czzDgEh9gGY6n&sz=w800",
  "https://drive.google.com/thumbnail?id=1nKLNTeItEl_yEPNpfXXU7FyDVg8xFTiZ&sz=w800",
  "https://drive.google.com/thumbnail?id=1kG9WEK6Ru6wHhdvbqYhLlqWVH5wgQzWC&sz=w800",
  "https://drive.google.com/thumbnail?id=1VMpnEC6jBcxoqG4c19BTfopsH2LIQdR2&sz=w800",
];

export default function JumpspeakPage() {
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
                    src="/images/projects/jumpspeaks/jumpspeaks.png"
                    alt="Jumpspeak Logo"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              variants={headerVariants}
            >
              Jumpspeak
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-6"
              variants={headerVariants}
            >
              AI-Powered Language Learning App
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={headerVariants}
            >
              <motion.a
                href="https://www.jumpspeak.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Visit Website</span>
                {IconFA(FaExternalLinkAlt, 16, "w-4 h-4")}
              </motion.a>
              <motion.a
                href="https://play.google.com/store/search?q=jumpspeaks&c=apps&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Android App</span>
                {IconFA(FaExternalLinkAlt, 16, "w-4 h-4")}
              </motion.a>
              <motion.a
                href="https://apps.apple.com/us/app/jumpspeak-language-learning/id1514709368"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>iOS App</span>
                {IconFA(FaExternalLinkAlt, 16, "w-4 h-4")}
              </motion.a>
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
                Jumpspeak is an AI-powered language learning app that gets you speaking a new 
                language from day 1. Unlike other apps that focus on reading and typing, Jumpspeak 
                throws you into real conversations with AI chatbots so you can actually practice speaking.
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
                    🗣️ AI Conversation Practice
                  </h3>
                  <p className="text-gray-300">
                    The app uses AI chatbots to simulate real-life conversations. You listen, respond 
                    by speaking, and get instant feedback on your pronunciation and grammar. It's like 
                    having a language tutor available 24/7 without the awkwardness of messing up in 
                    front of real people.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">
                    🌍 20+ Languages Available
                  </h3>
                  <p className="text-gray-300">
                    Learn Spanish, French, German, Italian, English, Portuguese, Korean, Japanese, 
                    Chinese (Mandarin), Russian, Dutch, Vietnamese, Swedish, Polish, Danish, Norwegian, 
                    Hungarian, Turkish, and more. All with one membership.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">
                    📱 Real-World Scenarios
                  </h3>
                  <p className="text-gray-300">
                    Instead of learning random words like "pineapple," you practice actual conversations 
                    you'd have in real life - ordering food, dating, traveling, business meetings, etc. 
                    Over 1,000 bite-sized lessons that you can finish in just a few minutes a day.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">
                    🎯 Smart AI Feedback
                  </h3>
                  <p className="text-gray-300">
                    After each conversation, the AI tutor gives you personalized feedback on your grammar, 
                    vocabulary, and speaking skills. It also provides real-time pronunciation feedback to 
                    help you sound more natural. The app has helped over 1 million people gain confidence 
                    in speaking new languages.
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
                    "Flutter",
                    "Bloc",
                    "Android",
                    "iOS",
                    "AI",
                    "Maestro",
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
                    Mobile Developer & QA Automation
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    November 2025
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I worked specifically on the mobile app side of Jumpspeak. My focus was fixing bugs 
                    in the Flutter app, improving the mobile UI, and setting up automated testing with Maestro. 
                    The goal was to make sure the mobile experience was smooth for users learning languages 
                    on their Android and iOS devices.
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
                      Mobile Bug Fixing
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Fixed various bugs specifically in the mobile app that were affecting user experience. 
                      This included crashes, UI glitches, and issues with features to keep the Flutter 
                      app running smoothly on both Android and iOS.
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
                      Mobile UI/UX Enhancement
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Improved the mobile app's interface to make it more intuitive and visually appealing. 
                      Enhanced user flows and interactions specifically for the mobile experience to help 
                      language learners navigate lessons and features more easily on their phones.
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
                      <span className="text-2xl">🤖</span>
                      QA Automation
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Set up automated testing using Maestro to catch bugs before they reached 
                      users. Created test flows to check key features like AI conversations, 
                      lesson navigation, and user interactions.
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
                    Technical Work
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Worked exclusively on the mobile app using Flutter and Bloc for state management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Made sure the mobile app worked well on both Android and iOS devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Used Maestro to automate mobile app testing and catch issues early</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Worked with the team to keep the mobile app stable for over 1 million users</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* App Screenshots */}
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
              App Screenshots
            </motion.h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              {appImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="bg-[#11203a]/90 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(appImages, index)}
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
                    alt={`Jumpspeak App Screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
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

