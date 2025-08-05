import { FaExternalLinkAlt } from "react-icons/fa";

// Helper to render react-icons FA in a consistent way (like in home_about_comp)
function IconFA(IconComponent: any, size: number = 20, className = "") {
  return <IconComponent size={size} className={className} />;
}

const projects = [
  {
    id: 1,
    title: "Vision Frame AI",
    description:
      "VisionFrame AI is a digital frame powered by DALL-E 3 and ChatGPT-4, enabling interactive, voice-controlled art displays to transform your space into a dynamic gallery.",
    icon: "/images/projects/visionframe/visionframe.png",
    websiteUrl: "https://visionframedisplay.web.app/",
    detailsUrl: "#",
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
  return (
    <section
      id="projects"
      className="relative py-20 px-0 w-full bg-[#10131a] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100 drop-shadow-lg">
          Projects
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          These are selected projects from my freelance work. I’ve also worked
          on several applications for past companies, but I no longer have
          access to those projects to showcase them here.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#11203a]/90 rounded-2xl shadow-lg p-6 flex flex-col relative min-h-[320px] transition-transform hover:scale-[1.025]"
            >
              {/* Icon and external link */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  {project.icon ? (
                    <img
                      src={project.icon}
                      alt={`${project.title} logo`}
                      className="w-10 h-10 rounded-md object-contain bg-[#232b3a] p-1"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-md bg-gray-700" />
                  )}
                </div>
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition"
                  aria-label={`Open ${project.title}`}
                >
                  {IconFA(FaExternalLinkAlt, 20, "w-5 h-5")}
                </a>
              </div>
              {/* Title and Date Range */}
              <div className="flex items-center justify-between mb-1">
                <a
                  href={project.detailsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-100 hover:text-blue-400"
                  aria-label={`Open ${project.title}`}
                >
                  {project.title}
                </a>
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
            </div>
          ))}
        </div>
      </div>
      {/* Subtle blurred background shapes, matching the skills section */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-950 via-indigo-950 to-transparent opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-950 via-purple-950 to-transparent opacity-10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
