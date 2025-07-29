export default function HeaderDrawerComp({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}) {
  return (
    <div
      className={`fixed md:hidden inset-0 mt-[5rem] z-40 flex items-start justify-end transition-all duration-300 ease-in-out ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`w-full bg-background/80 backdrop-blur-sm p-8 flex flex-col items-start relative transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
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
            href="#skills"
            className="font-semibold text-white hover:text-blue-400 text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Skills
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
  );
}
