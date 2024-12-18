"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../contants";

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row items-center"
  >
    <div
      className="w-16 h-16 rounded-full flex justify-center items-center"
      style={{ background: experience.iconBg }}
    >
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[80%] h-[80%] object-contain"
      />
    </div>
    <div className="ml-4 md:ml-8 flex-1">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold m-0">
        {experience.company_name}
      </p>
      <p className="text-white-100 text-[14px] mt-2">{experience.date}</p>
      <ul className="mt-3 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="" id="work">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-white">Work Experience</h2>
      </motion.div>

      <div className="relative">
        <div className="absolute bg-gradient-to-r from-primary-400 to-secondary-600 left-8 top-0 w-1 bg-white h-full transform -translate-x-1/2" />

        <div className="flex flex-col space-y-8 pl-16">
          {experiences.map((experience, index) => (
            <React.Fragment key={index}>
              <ExperienceCard experience={experience} />
              {index < experiences.length - 1 && (
                <div className="h-4 w-1 bg-white mx-auto transform -translate-x-1/2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
