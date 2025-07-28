import { FaCode, FaMobileAlt, FaUsers, FaRocket } from "react-icons/fa";

function Icon(Component: unknown, size = 22) {
  return (Component as React.FC<{ size?: number }>)({ size });
}

export default function HomeAboutComp() {
  return (
    <section id="about" className="relative py-20 px-0 overflow-hidden w-full">
      {/* Content container remains centered and constrained */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg">
          About Me
        </h2>
        <div className="gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">
                {Icon(FaMobileAlt, 22)}
              </span>
              <p className="text-gray-200">
                I have 8 years of hands-on experience in the tech industry. Most
                of my professional roles here in the Philippines have been
                centered around mobile development. Over the years, I’ve worked
                with various programming languages, but I now primarily focus on
                Flutter because I truly enjoy its cross-platform capabilities.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">
                {Icon(FaCode, 22)}
              </span>
              <p className="text-gray-200">
                I’ve always been eager to explore technologies beyond mobile,
                which has led me to take on freelance work. Through this, I had
                the chance to lead a team, handle client communications, and
                dive into web and backend development—building everything from
                scratch.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink-400 mt-1">
                {Icon(FaUsers, 22)}
              </span>
              <p className="text-gray-200">
                One of the most fulfilling parts of my journey has been
                mentoring junior developers. Being able to guide and support
                others in their growth has been incredibly rewarding.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">
                {Icon(FaRocket, 22)}
              </span>
              <p className="text-gray-200">
                As I move forward, I’m excited to keep evolving as a senior
                developer while staying open to new technologies and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
