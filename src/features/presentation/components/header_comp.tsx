export default function HeaderComp({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}) {
  return (
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
        <a href="#skills" className="hover:text-blue-400 transition">
          Skills
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
  );
}
