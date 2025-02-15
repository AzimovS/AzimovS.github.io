"use client";
import React, { useTransition, useState, useCallback } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>Programming Languages:</b> Python, TypeScript, JavaScript,
          Solidity, C++
        </li>
        <li>
          <b>Frameworks & Libraries:</b> Next.js, React, Flask, A-Frame,
          GraphQL, PyQT, MQTT, Grafana
        </li>
        <li>
          <b>Machine Learning & Data Science:</b> PyTorch, Scikit-learn
        </li>
        <li>
          <b>Databases & Storage:</b> MySQL, SQLite, InfluxDB
        </li>
        <li>
          <b>DevOps & Tools:</b> Docker, InfluxDB, Git
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Erasmus Mundus Joint Master Degree Programme on the Engineering of
          Data-intensive Intelligent Software Systems
        </li>
        <ul className="list-disc pl-4">
          <li>Åbo Akademi University</li>
          <li>University of L&apos;Aquila</li>
        </ul>
        <li>Nazarbayev University</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = useCallback(
    (id: string) => {
      startTransition(() => {
        setTab(id);
      });
    },
    [startTransition, setTab]
  );

  return (
    <section className="text-white" id="about">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/about-image.png"
            alt="about-image.png"
            width={550}
            height={550}
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a full stack blockchain developer with a passion for
              building web3 applications. A quick learner and always eager to
              expand my skill set, I thrive in collaborative environments and am
              eager to work with teams to create innovative, cutting-edge
              applications.
            </p>
            <div className="flex flex-row justify-start mt-2">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
            </div>
            <div className="mt-2">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
