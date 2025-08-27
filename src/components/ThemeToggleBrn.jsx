import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBrn = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <button className="p-1 rounded-lg  hover:bg-neutral-300  dark:hover:bg-neutral-700 transition-colors cursor-pointer">
        {theme === "dark" ? (
          <img
            src={assets.sun}
            alt=""
            onClick={() => {
              setTheme("light");
            }}
            className="size-5.5  "
          />
        ) : (
          <img
            src={assets.moon}
            alt=""
            onClick={() => {
              setTheme("dark");
            }}
            className="size-5.5  "
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBrn;
