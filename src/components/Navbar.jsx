import React, { useState, useEffect } from "react";
import assets from "../assets/assets";
import ThemeToggleBrn from "./ThemeToggleBrn";

const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // if scrolled more than 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 font-medium transition-all duration-300 dark:text-white ${
        isScrolled
          ? "backdrop-blur-xl bg-white/50 dark:bg-black/60"
          : "bg-white dark:bg-blackbg  "
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a className="text-lg font-bold" href="/">
              Mohsin.
            </a>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <a className="text-sm font-medium hover:border-b" href="#">
              About
            </a>
            <a
              className="text-sm font-medium hover:border-b"
              href="#experience"
            >
              Experience
            </a>
            <a className="text-sm font-medium hover:border-b" href="#education">
              Education
            </a>
            <a className="text-sm font-medium hover:border-b" href="#skills">
              Skills
            </a>
            <a className="text-sm font-medium hover:border-b" href="#projects">
              Projects
            </a>
            <a className="text-sm font-medium hover:border-b" href="#contact">
              Contact
            </a>
            <ThemeToggleBrn theme={theme} setTheme={setTheme} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
