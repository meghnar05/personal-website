import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"; // Icons for calendar and location
import styles from "./Experiences.module.css";

const experiences = [
  {
    id: 1,
    company: "Neudesic, an IBM Company",
    logo: "/assets/Neudesic.png",
    period: "May 2024 - August 2024",
    position: "Software Developer Engineer Intern",
    location: "Phoenix, AZ",
    description: "Built an iOS mobile app using SwiftUI for 400,000+ users. Utilized Figma & Adobe XD to iterate on previous homepage designs.",
  },
  {
    id: 2,
    company: "University of Michigan College of Engineering",
    logo: "/assets/UMich.png",
    period: "May 2024 - August 2024",
    position: "Joy of Coding Coach",
    location: "Ann Arbor, MI",
    description: "Taught 900+ students basic Python, from writing a print statement to building their own AI SnapChat filter.",
  },
  {
    id: 3,
    company: "V1 Michigan",
    logo: "/assets/V1.jpeg",
    period: "September 2023 - Present",
    position: "Software Engineer",
    location: "Ann Arbor, MI",
    description: "Building ClosetSwap, an online marketplace for UMich students to sell and rent clothes from one another.",
  },
];

const Experiences = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible); // Add visible class
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the content is visible
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.experiencesSection}>
      <div ref={contentRef} className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>Experiences</h2>
        <div className={styles.tileContainer}>
          {experiences.map((experience) => (
            <div key={experience.id} className={styles.tile}>
              <div className={styles.tileInner}>
                {/* Front of the Tile */}
                <div className={styles.tileFront}>
                  <div className={styles.companyHeader}>
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} Logo`}
                      width={40}
                      height={40}
                      className={styles.companyLogo}
                    />
                    <h3 className={styles.companyName}>{experience.company}</h3>
                  </div>
                  <p className={styles.position}>{experience.position}</p>
                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <FaCalendarAlt className={styles.icon} />
                      <span>{experience.period}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <FaMapMarkerAlt className={styles.icon} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Back of the Tile */}
                <div className={styles.tileBack}>
                  <p className={styles.description}>{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
