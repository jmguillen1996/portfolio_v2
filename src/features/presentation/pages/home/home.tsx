import { useState } from "react";
import { PageLayoutComp } from "../../components/page_layout_comp";
import HomeHeroComp from "./components/home_hero_comp";
import HomeAboutComp from "./components/home_about_comp";

export default function HomePage() {
  return (
    <PageLayoutComp>
      {/* Hero Section */}
      <HomeHeroComp />

      {/* About Section */}
      <HomeAboutComp />

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
    </PageLayoutComp>
  );
}
