import React, { useState, useEffect, useRef } from "react";
import assets from "../assets/assets";
import ThemeToggleBrn from "./ThemeToggleBrn";

const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure dropdown natural height
  useEffect(() => {
    if (menuRef.current) {
      const fullHeight = menuRef.current.scrollHeight;
      setMenuHeight(fullHeight);
    }
  }, [menuOpen]);

  // Close menu if resized to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClasses = "text-sm font-medium sm:hover:border-b";

  // Custom scroll fix
  const scrollToSection = (e, id) => {
    e.preventDefault(); // stop instant browser jump
    setMenuOpen(false); // close mobile menu first

    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) {
        const headerOffset = 64; // navbar height (h-16 = 64px)
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300); // matches menu collapse transition
  };

  return (
    <header
      className={`sticky top-0 z-20 font-medium transition-all duration-300 dark:text-white ${
        isScrolled
          ? "backdrop-blur-xl bg-white/50 dark:bg-black/60"
          : "bg-white dark:bg-blackbg"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          <a className="text-lg font-bold" href="/">
            Mohsin.
          </a>

          <div className="flex items-center gap-3">
            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-6">
              <a
                className={linkClasses}
                href="#about"
                onClick={(e) => scrollToSection(e, "#about")}
              >
                About
              </a>
              <a
                className={linkClasses}
                href="#experience"
                onClick={(e) => scrollToSection(e, "#experience")}
              >
                Experience
              </a>
              <a
                className={linkClasses}
                href="#education"
                onClick={(e) => scrollToSection(e, "#education")}
              >
                Education
              </a>
              <a
                className={linkClasses}
                href="#skills"
                onClick={(e) => scrollToSection(e, "#skills")}
              >
                Skills
              </a>
              <a
                className={linkClasses}
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
              >
                Projects
              </a>
              <a
                className={linkClasses}
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Contact
              </a>
            </nav>

            {/* Theme + Hamburger */}
            <ThemeToggleBrn theme={theme} setTheme={setTheme} />
            <button
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="sm:hidden p-1 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
            >
              <img
                src={
                  menuOpen
                    ? theme === "dark"
                      ? assets.closeDark
                      : assets.closeLight
                    : theme === "dark"
                    ? assets.menuDark
                    : assets.menuLight
                }
                alt=""
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          style={{
            maxHeight: menuOpen ? menuHeight : 0,
            transition: "max-height 300ms ease",
          }}
          className="sm:hidden overflow-hidden"
        >
          <nav
            ref={menuRef}
            className="flex flex-col gap-4 py-4 px-4 dark:text-white"
          >
            <a
              className={linkClasses}
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
            >
              About
            </a>
            <a
              className={linkClasses}
              href="#experience"
              onClick={(e) => scrollToSection(e, "#experience")}
            >
              Experience
            </a>
            <a
              className={linkClasses}
              href="#education"
              onClick={(e) => scrollToSection(e, "#education")}
            >
              Education
            </a>
            <a
              className={linkClasses}
              href="#skills"
              onClick={(e) => scrollToSection(e, "#skills")}
            >
              Skills
            </a>
            <a
              className={linkClasses}
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
            >
              Projects
            </a>
            <a
              className={linkClasses}
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
