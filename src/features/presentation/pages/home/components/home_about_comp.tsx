import { FaCode, FaMobileAlt, FaUsers, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

function Icon(Component: unknown, size = 22) {
  return (Component as React.FC<{ size?: number }>)({ size });
}

export default function HomeAboutComp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="relative py-20 px-0 overflow-hidden w-full bg-gray-900">
      {/* Content container remains centered and constrained */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="gap-8 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="flex items-start gap-3"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-blue-400 mt-1"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {Icon(FaMobileAlt, 22)}
              </motion.span>
              <p className="text-gray-200">
                I have 8 years of hands-on experience in the tech industry. Most
                of my professional roles here in the Philippines have been
                centered around mobile development. Over the years, I've worked
                with various programming languages, but I now primarily focus on
                Flutter because I truly enjoy its cross-platform capabilities.
              </p>
            </motion.div>
            <motion.div 
              className="flex items-start gap-3"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-purple-400 mt-1"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {Icon(FaCode, 22)}
              </motion.span>
              <p className="text-gray-200">
                I've always been eager to explore technologies beyond mobile,
                which has led me to take on freelance work. Through this, I had
                the chance to lead a team, handle client communications, and
                dive into web and backend development—building everything from
                scratch.
              </p>
            </motion.div>
            <motion.div 
              className="flex items-start gap-3"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-pink-400 mt-1"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {Icon(FaUsers, 22)}
              </motion.span>
              <p className="text-gray-200">
                One of the most fulfilling parts of my journey has been
                mentoring junior developers. Being able to guide and support
                others in their growth has been incredibly rewarding.
              </p>
            </motion.div>
            <motion.div 
              className="flex items-start gap-3"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-yellow-400 mt-1"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {Icon(FaRocket, 22)}
              </motion.span>
              <p className="text-gray-200">
                As I move forward, I'm excited to keep evolving as a senior
                developer while staying open to new technologies and challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Subtle blurred background shapes, matching the skills section */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-950 via-indigo-950 to-transparent opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-950 via-purple-950 to-transparent opacity-10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
