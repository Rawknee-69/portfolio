import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="As an fullstack developer i make websites for clients and also i have made many projects on next.js and iam really experienced in this."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Experienced web developer skilled in crafting engaging interactive website cards to deliver visually striking and responsive user interfaces."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Check it out yourself . You are currently on the same website here . "
        />
      </div>
    </div>
  );
};

export default Projects;
