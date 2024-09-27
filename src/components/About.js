import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import styles from './About.module.css';

const About = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Words to rotate
  const rotatingWords = ["Software Engineer", "Designer", "Tech Enthusiast", "Problem Solver"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [rotatingWords.length]);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <Image
            src="/assets/headshot.jpg" // Path to your image in the public/assets folder
            alt="Picture of Meghna"
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
            className={styles.profileImage}
          />
        </div>

        {/* Text Section */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hi, I'm Meghna.</h1>
          <h2 className={styles.rotatingWords}>
            I am a <span className={styles.fadeWord}>{rotatingWords[currentWordIndex]}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
