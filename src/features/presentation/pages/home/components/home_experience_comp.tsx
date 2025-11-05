import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Helper to render react-icons
function Icon(Component: any, size: number = 20) {
  return <Component size={size} />;
}

// Helper to render bullet text with clickable links
function renderBulletText(text: string) {
  // Check if the text contains platform and URL pattern
  const urlPattern = /(Android(?:\s*\([^)]+\))?|iOS):\s*(https?:\/\/[^\s]+)/;
  const match = text.match(urlPattern);
  
  if (match) {
    const platform = match[1];
    const url = match[2];
    return (
      <div className="flex items-center gap-2">
        <span className="text-gray-400 font-semibold">{platform}:</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline transition-colors"
        >
          View on App Store
        </a>
      </div>
    );
  }
  
  return <span>{text}</span>;
}

interface Project {
  name: string;
  bullets: string[];
}

interface WorkHistory {
  position: string;
  company: string;
  address: string;
  others?: string;
  timeline: string;
  bullets: string[];
  projects: Project[];
  tech_stacks: string[];
}

const workHistory: WorkHistory[] = [
  {
    position: "Mobile App Developer",
    company: "Hitachi Digital Payment Solutions",
    address: "Makati City, PH",
    timeline: "November 2024 - November 2025",
    bullets: [
      "Contributed to the development and maintenance of PalawanPay, a widely used mobile e-wallet application in the Philippines from Palawan Pawnshop and Palawan Express Pera Padala.",
      "Implemented new features and resolved critical bugs to improve user experience and app stability, ensuring seamless financial transactions for millions of users.",
      "Utilized Flutter to build scalable and responsive UI components, ensuring cross-platform compatibility across Android and iOS devices.",
      "Collaborated closely with QA and backend teams to ensure features were integrated correctly and released on schedule, maintaining high app performance standards.",
    ],
    projects: [
      {
        name: "PalawanPay - Digital E-Wallet",
        bullets: [
          "PalawanPay is a digital e-wallet from Palawan Pawnshop and Palawan Express Pera Padala that enables users to send and receive money, pay bills, buy load, purchase gold and jewelry, and renew pawns. The app features QR code payments at accredited merchants, QRPH-compliant transactions for seamless integration with other banks and e-wallets, cash-in and cash-out functionality at Palawan branches and partner locations, and mobile phone loading with over 350 load variants. The application is compliant with National QR Code Standards set by Bangko Sentral ng Pilipinas.",
          "Android: https://play.google.com/store/apps/details?id=com.palawanpay.ewallet&hl=fen",
          "iOS: https://apps.apple.com/ph/app/palawanpay/id1612022476",
        ],
      },
    ],
    tech_stacks: [
      "Flutter (Dart)",
      "RESTFUL APIs",
      "Firebase",
      "QR Code Integration",
      "Android",
      "iOS",
    ],
  },
  {
    position: "Lead/Sr. Software Developer",
    company: "Vision Frame AI",
    address: "US",
    others: "(Project Based)",
    timeline: "January 2024 - July 2024",
    bullets: [
      "As the lead developer for VisionFrame AI, I managed the end-to-end development of an AI-powered digital art platform. My responsibilities included overseeing both the mobile and backend systems, ensuring seamless client communications, and mentoring junior developers. I played a pivotal role in guiding the project from concept to completion, working closely with stakeholders to deliver custom solutions that aligned with client needs and ensured an intuitive user experience.",
    ],
    projects: [
      {
        name: "Vision Frame AI (Digital Frame)",
        bullets: [
          "Developed an interactive digital frame designed to transform living spaces into dynamic galleries filled with AI-generated art.",
          "Enabled users to interact with the frame through voice commands, allowing them to request image generation, artwork descriptions, background sounds, or slideshow displays.",
          "Built the application from scratch, integrating OpenAI APIs for real-time responses to user requests, facilitating conversational interactions with the frame.",
        ],
      },
      {
        name: "VisionFrame AI - User App (Android & iOS)",
        bullets: [
          "Created a mobile app that serves as the control center for managing generated images and interactions with the digital frame.",
          "Integrated a Gallery feature for easy access to all generated images and a Chat feature for tracking user interactions with the frame.",
          "Implemented functionalities to create slideshows, upload images, control frame settings (brightness and volume), and set smart schedules for displaying art.",
        ],
      },
    ],
    tech_stacks: [
      "Flutter (Dart)",
      "RESTFUL APIs",
      "Firebase",
      "Node Js",
      "OPEN AI",
      "Android",
      "IOS",
    ],
  },
  {
    position: "Associate Research & Development Engineer",
    company: "Advanced World Solutions Inc.",
    address: "Makati City, PH",
    timeline: "April 2022 - December 2023",
    bullets: [
      "Contributed to the development of a mobile application that enables healthcare professionals to remotely operate and monitor blood analyzer machines in real-time. Played a significant role in building key features, such as real-time machine status tracking and the \"Measurement\" functionality, while ensuring the application's smooth performance and reliability. Actively engaged in bug fixing and quality assurance efforts, and mentored junior developers to uphold coding standards and foster growth.",
    ],
    projects: [
      {
        name: "Blood Analyzer (BA) - Mobile Application",
        bullets: [
          "Developed real-time communication features, enabling healthcare professionals to track machine statuses (e.g., Standby, Maintenance, Measuring) through the app.",
          "Implemented the core \"Measurement\" feature, allowing users to initiate and stop the measurement process and receive real-time results for immediate feedback.",
          "Led the design and development of the machine monitoring feature, providing users with live insights into the machine's operational states.",
        ],
      },
    ],
    tech_stacks: ["Flutter", "SQLite", "RESTFUL APIs", "Android"],
  },
  {
    position: "Mobile Application Developer",
    company: "FPG Insurance Inc.",
    address: "Makati City, PH",
    timeline: "October 2020 - April 2022",
    bullets: [
      "Developed and maintained Android applications for FPG Insurance, collaborating with cross-functional teams to integrate essential features for business operations. Led projects from development to deployment, ensuring smooth user experiences and successful launches on the Google Play Store. Played a key role in enhancing internal tools and delivering user-focused solutions.",
    ],
    projects: [
      {
        name: "SIMONE App (Insurance Application)",
        bullets: [
          "Led the development of the Android app from scratch, enabling agents to manage client portfolios, generate quotations, issue policies, process renewals, handle payments, and submit claims seamlessly.",
          "Collaborated with cross-functional teams to integrate core insurance processes and workflows.",
          "Managed the successful launch of the app on the Google Play Store.",
        ],
      },
      {
        name: "Handsup App (Time Tracking Application)",
        bullets: [
          "Maintained and enhanced this internal time-tracking app, ensuring smooth time-in/time-out processes for employees and allowing them to track their records.",
          "Addressed bug reports and user inquiries to guarantee a seamless user experience.",
          "Led the app's release on the Google Play Store.",
        ],
      },
    ],
    tech_stacks: [
      "Kotlin",
      "Java",
      "SQLite",
      "RESTFUL APIs",
      "Firebase",
      "Android",
    ],
  },
  {
    position: "Software Developer",
    company: "In1go Technologies Inc.",
    address: "Las Piñas City, PH",
    timeline: "July 2017 - October 2020",
    bullets: [
      "Primarily responsible for maintaining and enhancing existing applications for survey and logistics purposes. Worked on new feature development, bug resolution, and ensured a smooth user experience. Played a key role in app releases on the Google Play Store, while collaborating with cross-functional teams to meet business requirements.",
    ],
    projects: [
      {
        name: "Centrix Mobile Merchandising App (Survey Application)",
        bullets: [
          "Maintained and enhanced a mobile-enabled merchandising reporting application where merchandisers and coordinators converge, enabling real-time report processing.",
          "Implemented features to capture daily attendance, inventory tracking, and store execution images in real-time, transitioning from manual processes to digital.",
          "Built consolidated reporting system providing single-view output to address timing issues and provide valuable business insights.",
          "Addressed user inquiries and fixed bugs to maintain stability and optimal app performance.",
          "Led the effort to successfully release the app on the Google Play Store.",
          "Android: https://play.google.com/store/apps/details?id=com.nai.merch&hl=fen",
        ],
      },
      {
        name: "1go Loadr (Delivery & Monitoring Application)",
        bullets: [
          "Developed a web and mobile-enabled fleet management and collaborative platform connecting logistics outsourcees and service providers for delivery requirements.",
          "Built features for shipment assignment, monitoring, and tracking of delivery activities across a community of logistics providers nationwide.",
          "Implemented driver authentication and identity login system ensuring prompt attendance and process compliance recording.",
          "Created automated process guides for drivers showing trip schedules and delivery destinations.",
          "Integrated e-wallet functionality for rewards and incentives distribution.",
          "Assigned to build key features such as item pick-up, drop-off, and location tracking within specified areas.",
          "Collaborated with the team on feature development and took responsibility for fixing reported bugs, ensuring a smooth user interface and app performance.",
          "Led the app's successful release on the Google Play Store.",
          "Android (Main App): https://play.google.com/store/apps/details?id=com.x1goLoadr&hl=fen",
          "Android (Driver App): https://play.google.com/store/apps/details?id=com.loadriver&hl=fen",
        ],
      },
    ],
    tech_stacks: [
      "C#",
      "Java",
      "Xamarin",
      ".NET Webservices",
      "REST/SOAP APIs",
      "MSSQL",
      "SQLite",
      "Firebase",
      "Android",
      "IOS",
    ],
  },
];

export default function HomeExperienceComp() {
  const [openIndex, setOpenIndex] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <section
      id="experience"
      className="relative py-20 px-0 w-full bg-gray-900 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg">
          Work History
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Professional Experience
        </p>

        <div className="space-y-4">
          {workHistory.map((work, index) => {
            const isOpen = openIndex.includes(index);
            return (
              <div
                key={index}
                className="bg-[#11203a]/90 rounded-2xl shadow-lg overflow-hidden transition-all"
              >
                {/* Header - Clickable */}
                <div
                  className="flex justify-between items-start p-6 cursor-pointer hover:bg-[#11203a] transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      {work.position}
                    </h3>
                    <p className="text-blue-300 text-sm mb-1">
                      {work.company}, {work.address}{" "}
                      {work.others && (
                        <span className="text-gray-400">{work.others}</span>
                      )}
                    </p>
                    <p className="text-gray-400 text-sm">{work.timeline}</p>
                  </div>
                  <div className="text-blue-300 ml-4">
                    {isOpen ? Icon(FaChevronUp, 20) : Icon(FaChevronDown, 20)}
                  </div>
                </div>

                {/* Content - Expandable */}
                {isOpen && (
                  <div className="px-6 pb-6 space-y-6 border-t border-gray-700/50">
                    {/* Main bullets */}
                    <div className="space-y-3 pt-4">
                      {work.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex gap-3">
                          <span className="text-blue-400 mt-1.5">•</span>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-200 mb-3">
                        Projects Contributed To
                      </h4>
                      <div className="space-y-4">
                        {work.projects.map((project, projIdx) => (
                          <div
                            key={projIdx}
                            className="bg-[#0d1520]/50 rounded-lg p-4"
                          >
                            <h5 className="text-md font-semibold text-blue-200 mb-2">
                              {project.name}
                            </h5>
                            <div className="space-y-2">
                              {project.bullets.map((bullet, bulletIdx) => (
                                <div key={bulletIdx} className="flex gap-3">
                                  <span className="text-gray-500 mt-1.5">
                                    •
                                  </span>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    {renderBulletText(bullet)}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {work.tech_stacks.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="text-xs font-medium text-blue-200 bg-blue-900/40 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle blurred background shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-950 via-indigo-950 to-transparent opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-950 via-purple-950 to-transparent opacity-10 rounded-full blur-3xl -z-10" />
    </section>
  );
}

