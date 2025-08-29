import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Project = ({ theme }) => {
  const projects = [
    {
      image: assets.agencyai,
      title: "Agency AI",
      description:
        "A sleek and responsive landing page for agencies to highlight their portfolio, client testimonials, and services built to convert visitors into clients.",
      technologies: ["React.js", "Tailwind CSS", "Framer"],
      features: ["A landing page to convert visitors into clients."],
      href: "https://agency-ai-ashen.vercel.app/",
    },
  ];
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-18 scroll-mt-16"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="dark:text-white font-bold text-3xl mb-3"
      >
        Projects
      </motion.h2>
      <div className="py-8 space-y-5 ">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="grid md:grid-cols-2 group border rounded-lg border-gray-300 dark:border-gray-400 "
          >
            <div className="h-[450px]  overflow-y-scroll rounded-l-lg  scrollbar-hide border-r border-gray-300 dark:border-gray-400 ">
              {/*Left Side */}
              <img
                src={project.image}
                alt=""
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-10">
              {/*Right Side */}
              <h3 className="dark:text-white font-bold text-xl">
                {project.title}
              </h3>
              <p className="mt-3  text-gray-500 dark:text-white/75 text-md">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mt-5">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="dark:text-white text-[12px] bg-neutral-200 dark:bg-iconbg py-1 px-2  rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="dark:text-white font-medium text-md mt-4">
                Key Feature:
              </h4>

              <ul className="list-disc pl-4 dark:text-white text-sm">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <button className="bg-black dark:bg-white py-1 px-2 mt-5 rounded-lg flex text-white items-center gap-2 dark:text-black text-md font-medium cursor-pointer">
                  <img
                    src={theme === "dark" ? assets.linkDark : assets.linkLight}
                    alt=""
                    className="w-4 h-4"
                  />
                  Live
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
