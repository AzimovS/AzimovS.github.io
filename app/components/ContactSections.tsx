"use client";
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
// import { slideIn } from "../utils/motion";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-zinc-800 p-8 rounded-2xl border border-amber-500"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p className="sm:text-[18px] text-[14px] text-secondary tracking-wider">
          Email:{" "}
          <a href="mailto:sherkhanazim@gmail.com">sherkhanazim@gmail.com</a>
        </p>

        <div
          className="flex flex-row flex-wrap mt-5
           gap-10"
        >
          <div
            onClick={() => window.open("https://github.com/AzimovS", "_blank")}
            className="bg-slate-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src="/contact/github.png" className="w-7 h-7" />
          </div>
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sherkhanazimov/",
                "_blank"
              )
            }
            className="bg-slate-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src="/contact/linkedin.png" className="w-10 h-10" />
          </div>
          <div
            onClick={() =>
              window.open("https://twitter.com/azimov92612285", "_blank")
            }
            className="bg-slate-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src="/contact/X.png" className="w-6 h-6" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
