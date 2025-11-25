import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Education from "./components/Education";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Clarity from "@microsoft/clarity";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    Clarity.init(import.meta.env.VITE_CLARITY_PROJECT_ID);
  }, []);

  return (
    <div className="min-h-screen dark:bg-blackbg relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Experience />
      <Education theme={theme} />
      <Skills theme={theme} />
      <Project theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
