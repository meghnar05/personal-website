import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
  const sectionRef = useRef(null); // Ref for the section
  const titleRef = useRef(null); // Ref for the title
  const contentRef = useRef(null); // Ref for the content

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add(styles.visible); // Add visible class to title
          contentRef.current?.classList.add(styles.visible); // Add visible class to content
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.aboutSection}>
      <h2 ref={titleRef} className={styles.sectionTitle}>
        About Me
      </h2>
      <div ref={contentRef} className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/headshot.jpg"
            alt="Meghna's Headshot"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.aboutText}>Hey I'm Meghna!</p>
          <p className={styles.aboutText}>
            I'm studying Computer Science with minors in Mathematics and User Experience Design at the University of Michigan!
          </p>
          <p className={styles.aboutText}>
            I'm passionate about building for social impact and sustainability.
          </p>
          <p className={styles.aboutText}>Feel free to reach out! Go Blue 〽️</p>
        </div>
      </div>
    </section>
  );
};

export default About;
