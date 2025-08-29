import React from "react";
import TechSection from "./TechSection";
import assets from "../assets/assets";

const Skills = ({ theme }) => {
  const frontEnd = [
    {
      icon: assets.javascriptLight,
      icondark: assets.javascriptDark,
      name: "JavaScript",
    },
    {
      icon: assets.react,
      icondark: assets.react,
      name: "React",
    },
    {
      icon: assets.nextLight,
      icondark: assets.nextDark,
      name: "Next JS",
    },
    {
      icon: assets.html,
      icondark: assets.html,
      name: "HTML",
    },
    {
      icon: assets.css,
      icondark: assets.css,
      name: "CSS",
    },
    {
      icon: assets.tailwind,
      icondark: assets.tailwind,
      name: "Tailwind CSS",
    },
  ];

  const database = [
    {
      icon: assets.mongodb,
      icondark: assets.mongodb,
      name: "MongoDB",
    },
    {
      icon: assets.mysql,
      icondark: assets.mysql,
      name: "MySQL",
    },
  ];
  const tools = [
    {
      icon: assets.git,
      icondark: assets.git,
      name: "Git",
    },
    {
      icon: assets.githubLight,
      icondark: assets.githubDark,
      name: "GitHub",
    },
    {
      icon: assets.vscode,
      icondark: assets.vscode,
      name: "VS Code",
    },
    {
      icon: assets.figma,
      icondark: assets.figma,
      name: "Figma",
    },
    {
      icon: assets.vercelLight,
      icondark: assets.vercelDark,
      name: "Vercel",
    },
  ];
  const backend = [
    {
      icon: assets.node,
      icondark: assets.node,
      name: "Node Js",
    },
    {
      icon: assets.expresslight,
      icondark: assets.expressdark,
      name: "Express Js",
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div>
        <h2 className="dark:text-white font-bold text-3xl mb-3">My Skills</h2>
        <p className="text-gray-500 dark:text-white/75">
          Technologies and tools I've worked with throughout my projects and
          experience
        </p>
      </div>
      <TechSection title={"Front End"} skills={frontEnd} theme={theme} />
      <TechSection title={"Back End"} skills={backend} theme={theme} />
      <TechSection title={"Database"} skills={database} theme={theme} />
      <TechSection title={"Tools & Platforms"} skills={tools} theme={theme} />
    </section>
  );
};

export default Skills;
