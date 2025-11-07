import { motion } from "framer-motion";

export default function HomeHeroComp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center mt-[5rem] px-4 py-20 overflow-hidden"
      style={{
        position: "relative",
      }}
    >
      {/* Simulated bottom border using a sharp linear gradient: black on sides, blue at center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-[4px] w-full"
        style={{
          background:
            "linear-gradient(to right, black 0%, black 20%, #3b82f6 50%, black 80%, black 100%)",
          zIndex: 20,
        }}
      />
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
              radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 50%),
              radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0) 50%),
              radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0) 50%)
            `,
        }}
      />
      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          variants={itemVariants}
        >
          Hello, I'm Josef!
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-blue-500 mb-6"
          variants={itemVariants}
        >
          Software Developer
        </motion.h2>
        <motion.p 
          className="max-w-xl text-base md:text-lg text-gray-300 mb-8"
          variants={itemVariants}
        >
          I am passionate about building high-performance software applications
          and committed to helping bring your ideas to life, delivering an
          exceptional user experience and impactful results.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="min-w-[200px] max-w-xs w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition text-center"
            style={{ boxShadow: "0 2px 8px 0 rgba(59,130,246,0.10)" }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#about"
            className="min-w-[200px] max-w-xs w-auto border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold px-6 py-3 rounded-full transition text-center"
            style={{ boxShadow: "0 2px 8px 0 rgba(59,130,246,0.05)" }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            About Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
