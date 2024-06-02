import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "ClosetSwap",
    description: "ClosetSwap description",
    image: "/assets/1.png",
  },
  {
    id: 2,
    title: "ProfitPeak",
    description: "ProfitPeak description",
    image: "/assets/1.png",
  },
  {
    id: 3,
    title: "Personal Website",
    description: "Website description",
    image: "/assets/1.png",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
