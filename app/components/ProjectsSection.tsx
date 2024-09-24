"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Nifty.Ink",
    description: "Putting the fun in non-fungible tokens",
    image: "/images/nifty.png",
    tag: ["All", "Blockchain", "Web"],
    gitUrl: "https://github.com/BuidlGuidl/nifty-ink",
    previewUrl: "https://nifty.ink/",
  },
  {
    id: 2,
    title: "Doodle.exchange",
    description:
      "Each participant creates a drawing based on a randomly selected word. Then, discover if GPT can accurately identify and describe what the drawing represents.",
    image: "/images/doodle.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BuidlGuidl/doodle-exchange",
    previewUrl: "https://doodle.exchange/",
  },
  {
    id: 3,
    title: "Blockchain Github Issues",
    description:
      "The goal of this website is to provide an efficient way to monitor open issues across blockchain projects hosted on GitHub.",
    image: "/images/blockchainGithubIssues.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AzimovS/blockchain-github-issues",
    previewUrl: "https://blockchain-github-issues.vercel.app/",
  },
  {
    id: 4,
    title: "The Bot of Wall Street",
    description:
      "The automated stock trading bot for optimized returns and utilizing a MAPE-K feedback control loop and ARIMA.",
    image: "/images/projects/botWallStreet.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ricardochavezt/the-bot-of-wall-street",
    previewUrl: "https://github.com/ricardochavezt/the-bot-of-wall-street",
  },
  {
    id: 5,
    title: "Forest Fire Detection System",
    description:
      "IoT-based forest fire detection system stands as a compelling demonstration of an architecture for early fire detection in forested areas.",
    image: "/images/projects/ffds.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/AzimovS/iot-forest-fire-detection",
    previewUrl: "https://github.com/AzimovS/iot-forest-fire-detection",
  },
  {
    id: 6,
    title: "Football Actions Classification",
    description:
      "Desktop application that allows users to interact with the ML and DL algorithms that train, visualize and predict football actions on provided data.",
    image: "/images/projects/football.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/AzimovS/senior-project",
    previewUrl: "https://github.com/AzimovS/senior-project",
  },
  {
    id: 7,
    title: "Hotel Management System",
    description:
      "Web application that enables guests can book hotel rooms, desk clerks can approve reservations and managers can control hotel employees (for example, working hours of desk clerks).",
    image: "/images/projects/hotel.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ironsoul0/hotel-management",
    previewUrl: "https://github.com/ironsoul0/hotel-management",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blockchain"
          isSelected={tag === "Blockchain"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
