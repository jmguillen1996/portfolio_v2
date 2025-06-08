import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-white">
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 w-full flex items-center justify-between h-[5rem] px-8 mx-auto bg-background/80 backdrop-blur-sm z-50">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-white">
            jose<span className="text-blue-500">guillen</span>
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#experience" className="hover:text-blue-400 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </nav>
        <button className="hidden md:block border border-blue-500 text-blue-500 px-5 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition">
          Resume
        </button>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed md:hidden inset-0 mt-[5rem] z-40 flex items-start justify-end transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className={`w-full bg-background/80 backdrop-blur-sm p-8 flex flex-col items-start relative transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="flex flex-col space-y-6 w-full items-center mt-4">
            <a
              href="#about"
              className="font-semibold text-white hover:text-blue-400 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="font-semibold text-white hover:text-blue-400 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="font-semibold text-white hover:text-blue-400 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="font-semibold text-white hover:text-blue-400 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <button className="mt-6 border border-blue-500 text-blue-500 px-8 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-500 hover:text-white transition">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Resume
            </button>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center mt-[5rem] px-4 py-20 overflow-hidden">
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
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Hello, I'm Josef!
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-6">
            Mobile Developer
          </h2>
          <p className="max-w-xl text-base md:text-lg text-gray-300 mb-8">
            I am passionate about building high-performance mobile applications
            and committed to helping bring your ideas to life, delivering an
            exceptional user experience and impactful results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="min-w-[200px] max-w-xs w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition text-center"
              style={{ boxShadow: "0 2px 8px 0 rgba(59,130,246,0.10)" }}
            >
              Get In Touch
            </a>
            <a
              href="#about"
              className="min-w-[200px] max-w-xs w-auto border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold px-6 py-3 rounded-full transition text-center"
              style={{ boxShadow: "0 2px 8px 0 rgba(59,130,246,0.05)" }}
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-300">
              I'm a dedicated mobile developer with expertise in React Native
              and native iOS/Android development. With a strong foundation in
              software engineering principles and a passion for creating
              intuitive user interfaces, I strive to build applications that
              make a real impact.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical writing and mentoring.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>React Native</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>Node.js</li>
                  <li>Firebase</li>
                  <li>REST APIs</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Work Experience
          </h2>
          <div className="space-y-12">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Senior Mobile Developer
                  </h3>
                  <p className="text-blue-400">Company Name</p>
                </div>
                <span className="text-gray-400">2020 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Led development of cross-platform mobile applications using
                  React Native
                </li>
                <li>
                  Implemented complex features and optimized app performance
                </li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300">email@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300">Location, Country</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
