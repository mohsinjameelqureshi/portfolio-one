import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Education = ({ theme }) => {
  const education = [
    {
      name: "PMAS-Arid Agriculture University, Rawalpindi",
      deg: "BSCS (Bachelor of Science in Computer Science)",
      date: " Oct 2022 - Jul 2026 (present) • CGPA: 3.1/4",
      icon: assets.uniLight,
      icondark: assets.uniDark,
    },
    {
      name: "The Wings College Daultala",
      deg: "HSSC (Higher Secondary School Certificate) Bise RWP",
      date: " Jun 2020 - May 2022 • Marks: 950/1100",
      icon: assets.collegeLight,
      icondark: assets.collegeDark,
    },
  ];

  return (
    <section
      id="education"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-18 scroll-mt-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="dark:text-white font-bold text-3xl mb-3"
      >
        Education
      </motion.h2>
      <div className="my-10 space-y-5">
        {education.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="flex gap-5 items-center"
          >
            <div className="w-12 h-12 p-2.5 bg-neutral-100  dark:bg-iconbg flex justify-center items-center rounded-full">
              <img
                src={theme === "dark" ? edu.icondark : edu.icon}
                alt=""
                className="w-8 h-8"
              />
            </div>
            <div>
              <h3 className="dark:text-white font-bold text-md ">{edu.name}</h3>
              <p className="text-sm text-gray-500 dark:text-white/75">
                {edu.deg}
              </p>
              <p className="text-sm text-gray-500 dark:text-white/75">
                {edu.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
