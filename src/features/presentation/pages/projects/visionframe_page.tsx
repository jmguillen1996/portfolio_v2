import { useState } from "react";
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

  return (
    <PageLayoutComp>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vision Frame AI
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              AI-Powered Digital Art Frame
            </p>
            <a
              href="https://visionframedisplay.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Visit Website
            </a>
          </div>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              About the Project
            </h2>
            <div className="bg-[#11203a]/90 rounded-2xl shadow-lg p-8 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                VisionFrame AI is an AI-powered digital art platform that
                transforms your living space into a dynamic gallery filled with
                AI-generated art. The platform consists of three main
                components working seamlessly together to deliver an immersive
                art experience.
              </p>

              <div className="space-y-6 mt-8">
                <div>
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
                </div>

                <div>
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
                </div>

                <div>
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
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Flutter (Dart)",
                    "RESTFUL APIs",
                    "Firebase",
                    "Node.js",
                    "OPEN AI",
                    "Android",
                    "iOS",
                  ].map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-blue-200 bg-blue-900/40 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Digital Frame Screenshots */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Digital Frame Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {frameImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-[#11203a]/90 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openLightbox(frameImageThumbs, index)}
                >
                  <iframe
                    src={image}
                    className="w-full h-64 border-0"
                    title={`Digital Frame Screenshot ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Mobile App Screenshots */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Mobile App Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {mobileImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-[#11203a]/90 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openLightbox(mobileImages, index)}
                >
                  <img
                    src={image}
                    alt={`Mobile App Screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center">
            <a
              href="/"
              className="inline-block border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition"
            >
              ← Back to Portfolio
            </a>
          </div>
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

