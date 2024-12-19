import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa'; // FontAwesome icons
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
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
          I'm studying Computer Science with minors in Mathematics and User Experience Design at the University of Michigan! Go Blue 〽️
        </p>
        <p className={styles.aboutText}>
          I'm passionate about building for social impact and sustainability.
        </p>
        <p className={styles.aboutText}>Feel free to reach out! :)</p>

        {/* Social Icons Section */}
        <div className={styles.iconsContainer}>
          <a href="https://linkedin.com/in/reddymeghna" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://github.com/meghnar05" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="mailto:meghnar@umich.edu">
            <FaEnvelope className={styles.icon} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FaFileAlt className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
