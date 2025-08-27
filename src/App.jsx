import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="dark:bg-blackbg relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Skills theme={theme} />
    </div>
  );
}

export default App;
