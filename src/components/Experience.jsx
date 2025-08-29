import React from "react";
import { motion } from "motion/react";

const Experience = () => {
  const experience = [
    {
      position: "Full Stack Flutter Developer",
      company: "Satezo",
      date: "24 Sep 2024 - 14 Mar 2025",
      worked: [
        "Design full responsive functional UI for multiple roles in app (Recycle Blue).",
        "Design a full stack app like instagram but for soprts only with multiple roles (PlayPost).",
      ],
      tech: ["Flutter", "Firebase", "UI/UX", "Responsive Design"],
    },
  ];
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-18 scroll-mt-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="dark:text-white font-bold text-3xl mb-3"
      >
        Experience
      </motion.h2>
      <div className="my-10 space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            key={index}
          >
            <h3 className="dark:text-white font-medium text-xl ">
              {exp.position}
            </h3>
            <div className="flex justify-between text-gray-500 dark:text-white/75">
              <span>{exp.company}</span>
              <span className="text-sm">{exp.date}</span>
            </div>
            <ul className="list-disc my-5 pl-4">
              {exp.worked.map((work, index) => (
                <li key={index} className="dark:text-white text-sm">
                  {work}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tec, index) => (
                <span
                  key={index}
                  className="dark:text-white text-[12px] bg-neutral-200 dark:bg-iconbg py-1 px-2  rounded-full "
                >
                  {tec}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
