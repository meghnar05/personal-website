import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.content}>
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
