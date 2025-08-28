import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="dark:bg-blackbg relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
