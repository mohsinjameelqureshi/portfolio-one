import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBrn = ({ theme, setTheme }) => {
  // On first load, set theme from localStorage or fallback to "light"
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme ? storedTheme : "light");
  }, []);

  // Apply theme to <html> and keep it in localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button className="p-1 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer">
      {theme === "dark" ? (
        <img
          src={assets.sun}
          alt="Light mode"
          onClick={() => setTheme("light")}
          className="size-5.5"
        />
      ) : (
        <img
          src={assets.moon}
          alt="Dark mode"
          onClick={() => setTheme("dark")}
          className="size-5.5"
        />
      )}
    </button>
  );
};

export default ThemeToggleBrn;
