import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const TechSection = ({ title, skills, theme }) => {
  return (
    <div className="py-6">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className="dark:text-white font-medium text-xl transition-transform duration-200 hover:translate-x-2"
      >
        {title}
      </motion.h3>
      <div className="flex gap-8 flex-wrap">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className=" mt-5 flex flex-col justify-center items-center group "
          >
            <div className="w-14 h-14 mb-4 flex justify-center items-center  bg-neutral-100 dark:bg-iconbg rounded-full hover:bg-neutral-200 dark:hover:bg-iconbgonhover hover:border border-gray-400 dark:border-gray-700 transition-transform duration-200 hover:-translate-y-2">
              <img
                src={theme === "dark" ? skill.icondark : skill.icon}
                alt=""
                className="h-5 w-5 "
              />
            </div>
            <span className="text-gray-500 dark:text-white/75 group-hover:text-black dark:group-hover:text-white text-sm">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechSection;
