import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiFlutter,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

// Helper function to render icons with consistent sizing
function Icon(Component: unknown, size = 32) {
  return (Component as React.FC<{ size?: number }>)({ size });
}

// More neutral, less saturated color scheme for skill icons
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: () => Icon(FaReact, 32), colorClass: "text-sky-300" },
      { name: "Angular", icon: () => <span className="text-red-400 text-3xl"><svg width="32" height="32" viewBox="0 0 256 272" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M127.9 0L4.6 43.2l19.7 163.6 103.6 65.2 103.6-65.2 19.7-163.6L127.9 0z" fill="#E23237"/><path d="M128 20.6v234.2l84.1-53 16-148.1L128 20.6z" fill="#B52E31"/><path d="M128 44.2l-62.7 120.7h25.6l12.7-28.1h48.7l12.7 28.1h25.6L128 44.2zm15.7 70.2h-31.4L128 74.2l15.7 40.2z" fill="#fff"/></g></svg></span>, colorClass: "text-red-400" },
      { name: "Flutter", icon: () => Icon(SiFlutter, 32), colorClass: "text-cyan-300" },
      { name: "HTML", icon: () => Icon(FaHtml5, 32), colorClass: "text-orange-300" },
      { name: "CSS", icon: () => Icon(FaCss3Alt, 32), colorClass: "text-blue-300" },
      { name: "JavaScript", icon: () => Icon(FaJs, 32), colorClass: "text-yellow-300" },
      { name: "TypeScript", icon: () => Icon(SiTypescript, 32), colorClass: "text-blue-200" },
      { name: "Tailwind CSS", icon: () => Icon(SiTailwindcss, 32), colorClass: "text-cyan-200" },
      { name: "Redux", icon: () => Icon(SiRedux, 32), colorClass: "text-purple-300" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: () => Icon(FaNodeJs, 32), colorClass: "text-green-300" },
      { name: "MongoDB", icon: () => Icon(SiMongodb, 32), colorClass: "text-green-200" },
      { name: "Firebase", icon: () => Icon(SiFirebase, 32), colorClass: "text-yellow-200" },
      { name: "SQL", icon: () => Icon(FaDatabase, 32), colorClass: "text-indigo-200" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: () => Icon(SiFlutter, 32), colorClass: "text-cyan-300" },
      { 
        name: "Kotlin (Android Native)", 
        icon: () => (
          <span className="text-purple-300 text-3xl flex items-center">
            <img
              src="/logo/kotlin.png"
              alt="Kotlin Logo"
              width={32}
              height={32}
            />
          </span>
        ), 
        colorClass: "text-purple-300" 
      },
      { 
        name: "Java (Android Native)", 
        icon: () => (
          <span className="text-green-300 text-3xl flex items-center">
            <img
              src="/logo/android.png"
              alt="Android Logo"
              width={32}
              height={32}
              style={{
                display: "inline-block",
                borderRadius: "50%",
                objectFit: "cover",
                aspectRatio: "1 / 1",
              }}
            />
          </span>
        ), 
        colorClass: "text-green-300" 
      },
      { name: "Xamarin", icon: () => (
        <span className="text-blue-300 text-3xl">
          <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" rx="60" fill="#3498DB"/>
            <path d="M80 80L176 176M176 80L80 176" stroke="#fff" strokeWidth="16" strokeLinecap="round"/>
          </svg>
        </span>
      ), colorClass: "text-blue-300" },
      { 
        name: ".NET MAUI", 
        icon: () => (
          <span className="text-indigo-300 text-3xl flex items-center">
            <img
              src="/logo/maui.png"
              alt=".NET MAUI Logo"
              width={32}
              height={32}
            />
          </span>
        ), 
        colorClass: "text-indigo-300" 
      },
      { 
        name: "Android", 
        icon: () => (
          <span className="text-green-300 text-3xl flex items-center">
            <img
              src="/logo/android.png"
              alt="Android Logo"
              width={32}
              height={32}
              style={{
                display: "inline-block",
                borderRadius: "50%",
                objectFit: "cover",
                aspectRatio: "1 / 1",
              }}
            />
          </span>
        ), 
        colorClass: "text-green-300" 
      },
      { 
        name: "iOS", 
        icon: () => (
          <span className="text-gray-200 text-3xl flex items-center">
            <img
              src="/logo/apple.png"
              alt="iOS Logo"
              width={32}
              height={32}
              style={{ display: "inline-block", borderRadius: "50%", objectFit: "cover" }}
            />
          </span>
        ), 
        colorClass: "text-gray-200" 
      },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Git", icon: () => Icon(FaGitAlt, 32), colorClass: "text-orange-300" },
      { name: "Github", icon: () => Icon(FaGithub, 32), colorClass: "text-gray-300" },
    ],
  },
];

export default function HomeSkillsComp() {
  return (
    <section
      id="skills"
      className="relative py-20 px-0 w-full bg-gradient-to-br from-[#181f2a] via-[#232b3a] to-[#1a2233] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the technologies and tools I’ve worked with over the years, spanning frontend, backend, mobile, and others. I love learning new things and always strive to keep my skillset up to date!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl shadow-lg p-[2px] bg-gradient-to-br from-[#2e3a4e] via-[#232b3a] to-[#1a2233] transition-transform hover:scale-[1.025]"
            >
              <div className="rounded-2xl bg-gradient-to-br from-[#232b3a]/90 to-[#181f2a]/90 p-6 h-full flex flex-col">
                <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2 justify-center">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-x-2 gap-y-6 place-items-center">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center w-full"
                    >
                      <div
                        className={`bg-gradient-to-br from-gray-900/90 to-gray-800/80 rounded-full p-3 mb-2 shadow-lg transition-transform hover:scale-110 flex items-center justify-center ${skill.colorClass}`}
                        style={{
                          minWidth: 56,
                          minHeight: 56,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {skill.icon()}
                      </div>
                      <span className="text-gray-200 text-xs text-center mt-1">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Subtle blurred background shapes, less saturated */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-900 via-indigo-900 to-transparent opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-900 via-purple-900 to-transparent opacity-20 rounded-full blur-3xl -z-10" />
    </section>
  );
}