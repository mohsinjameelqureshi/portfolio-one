import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = ({ theme }) => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section
        id="about"
        className=" py-20 flex flex-col md:flex-row items-center justify-between gap-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          {/* Name + Title */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white">
              Mohsin Jameel
            </h1>
            <p className="text-gray-500 dark:text-white/75 text-lg">
              Full Stack Developer
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <img src={assets.mail} alt="email" className="size-5" />
              <a
                href="mailto:qureshimohsinjameel@gmail.com"
                className="text-gray-500 dark:text-white/75"
              >
                qureshimohsinjameel@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img src={assets.location} alt="location" className="size-5" />
              <span className="text-gray-500 dark:text-white/75">
                Rawalpindi, Pakistan
              </span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-500 dark:text-white/75 leading-sung">
            Full Stack Developer experienced in building scalable web apps with
            React, Next.js, Node.js, MongoDB, and MySQL. Skilled in front-end
            interfaces, back-end systems, and databases to deliver
            high-performance solutions with exceptional user experiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 items-center">
            <a
              href="/Mohsin.pdf"
              download="Mohsin-Resume.pdf"
              className="p-2 dark:bg-white bg-black text-white dark:text-black flex gap-2 rounded-lg text-sm items-center cursor-pointer hover:scale-105 transition"
            >
              <img
                src={
                  theme === "dark" ? assets.downloadDark : assets.downloadLight
                }
                alt="resume"
                className="h-5 w-5"
              />
              Resume
            </a>

            <a target="_blank" href="https://github.com/mohsinjameelqureshi">
              <button className="border dark:border-gray-700 border-gray-300 p-2 rounded-lg cursor-pointer hover:scale-105 transition">
                <img
                  src={
                    theme === "dark"
                      ? assets.githubIconDark
                      : assets.githubIconLight
                  }
                  alt="github"
                  className="h-5"
                />
              </button>
            </a>
            <a target="_blank" href="mailto:qureshimohsinjameel@gmail.com">
              <button className="border dark:border-gray-700 border-gray-300 p-2 rounded-lg cursor-pointer hover:scale-105 transition">
                <img
                  src={theme === "dark" ? assets.mailDark : assets.mailLight}
                  alt="mail"
                  className="h-5"
                />
              </button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE (skills / image / icons) */}
        <motion.div
          initial={{ opacity: 0, z: -20 }}
          whileInView={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className=" grid grid-cols-2 gap-3 max-w-xs"
        >
          <div className="mt-2 w-25 h-16 sm:w-28 sm:h-22 md:w-28 md:h-26 bg-gray-100 dark:bg-gray-900 p-3 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity, // keeps looping
                ease: "linear", // smooth constant speed
                duration: 7, // time for one full rotation (in seconds)
              }}
              src={assets.react}
              alt="React"
              className="h-8 w-8"
            />
            <span className="mt-1 text-xs sm:text-sm dark:text-white">
              React.js
            </span>
          </div>

          <motion.div
            animate={{
              y: [0, -20, 0], // move up and back down
            }}
            transition={{
              duration: 3,
              repeat: Infinity, // loop forever
              ease: "easeInOut",
            }}
            className=" mt-2 w-25 h-16 sm:w-28 sm:h-22 md:w-28 md:h-26 bg-gray-100 dark:bg-gray-900 p-3 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition"
          >
            <img
              src={theme === "dark" ? assets.nextDark : assets.nextLight}
              alt="Next.js"
              className="h-8 w-8"
            />
            <span className="mt-1 text-xs sm:text-sm dark:text-white">
              Next.js
            </span>
          </motion.div>

          <div className="w-25 h-16 sm:w-28 sm:h-22 md:w-28 md:h-26 bg-gray-100 dark:bg-gray-900 p-3 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition">
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity, // loop forever
                ease: "easeInOut",
              }}
              src={assets.mongodb}
              alt="MongoDB"
              className="h-8 w-8"
            />
            <span className="mt-1 text-xs sm:text-sm dark:text-white">
              MongoDB
            </span>
          </div>

          <div className="w-25 h-16 sm:w-28 sm:h-22 md:w-28 md:h-26 bg-gray-100 dark:bg-gray-900 p-3 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition">
            <motion.img
              animate={{
                rotateX: [0, 10, -10, 0],
                rotateY: [0, -10, 10, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={assets.tailwind}
              alt="Tailwind"
              className="h-8 w-8"
            />
            <span className="mt-1 text-xs sm:text-sm dark:text-white">
              Tailwind CSS
            </span>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
