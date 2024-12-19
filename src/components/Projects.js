import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    logo: "/assets/ClosetSwap.png",
    name: "ClosetSwap",
    description: "An online marketplace for UMich students to quickly, reliably, and affordably rent clothes from one another.",
    github: "https://github.com/diyamahaveer/ClosetSwap",
    website: "https://closet-swap.vercel.app/",
    demo: null,
  },
  {
    id: 2,
    logo: "/assets/moodyfits.png",
    name: "moody fits",
    description: "A voice activated shopping assistant that helps visually impaired users shop based on their mood.",
    github: null,
    website: "https://moodyfits.replit.app/",
    demo: "https://devpost.com/software/moody-fits",
  },
  {
    id: 3,
    logo: "/assets/ProfitPeak.png",
    name: "ProfitPeak",
    description: "A machine learning model for predicting stock prices.",
    github: "https://github.com/meghnar05/profitpeak",
    website: null,
    demo: "https://devpost.com/software/profitpeak",
  },
  {
    id: 4,
    logo: "/assets/project3-logo.png",
    name: "ProfitPeak",
    description: "A machine learning model for predicting stock prices.",
    github: "https://github.com/meghnar05/profitpeak",
    website: null,
    demo: "https://devpost.com/software/profitpeak",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.tileContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.tile}>
            <div className={styles.banner}>
              <Image
                src={project.logo}
                alt={`${project.name} Logo`}
                width={100}
                height={50}
                className={styles.projectLogo}
              />
            </div>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.links}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  GitHub
                </a>
              )}
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Website
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
