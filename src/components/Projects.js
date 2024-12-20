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
    skills: ["React.js", "Supabase PostgreSQL", "JavaScript"],
  },
  {
    id: 2,
    logo: "/assets/moodyfits.png",
    name: "moody fits",
    description: "A voice activated shopping assistant that helps visually impaired users shop based on their mood.",
    github: null,
    website: "https://moodyfits.replit.app/",
    demo: "https://devpost.com/software/moody-fits",
    skills: ["React.js", "Python", "Flask", "Hume API", "OpenAI API"],
  },
  {
    id: 3,
    logo: "/assets/ProfitPeak.png",
    name: "ProfitPeak",
    description: "A price recommendation service for small business owners to maximize profits based on cost of inputs and desired profit margins.",
    github: "https://github.com/meghnar05/profitpeak",
    website: null,
    demo: "https://devpost.com/software/profitpeak",
    skills: ["Next.js", "Tailwind CSS", "Supabase PostgreSQL", "OpenAI API"],
  },
  {
    id: 4,
    logo: "/assets/readr.png",
    name: "readr",
    description: "A mobile book club app with an interactive leaderboard for readers to connect, discuss, and track progresses.",
    github: null,
    website: null,
    demo: "https://www.figma.com/proto/euFPaR0jaXgL7tY0nmV1V1/readr---public?node-id=2-2&t=en1AW0lKiP8PEbcA-1",
    skills: ["React Native", "Figma"],
  },
];

const Projects = () => {
    return (
      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.tileContainer}>
          {projects.map((project) => (
            <div key={project.id} className={styles.tile}>
              <div className={styles.banner}>
                <Image
                    src={project.logo}
                    alt={`${project.name} Logo`}
                    className={styles.projectLogo}
                    width={50}
                    height={50}
                />
                <h3 className={styles.projectName}>{project.name}</h3>
                </div>

              {/* <h3 className={styles.projectName}>{project.name}</h3> */}
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
              <div className={styles.skills}>
                {/* <h4 className={styles.skillsTitle}>Skills:</h4> */}
                <ul className={styles.skillsList}>
                    {project.skills.map((skill, index) => (
                    <li key={index} className={styles.skillItem}>
                        {skill}
                    </li>
                    ))}
                </ul>
            </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;