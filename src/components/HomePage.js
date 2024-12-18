import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';

const About = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true); // Determines if typing or erasing

  const rotatingWords = ["Software Engineer", "Designer", "Tech Enthusiast", "Problem Solver"];

  useEffect(() => {
    let typingInterval;

    if (typing) {
      // Typing the word
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          const currentWord = rotatingWords[currentWordIndex];
          if (prev.length < currentWord.length) {
            return currentWord.slice(0, prev.length + 1); // Add next character
          } else {
            clearInterval(typingInterval);
            setTimeout(() => setTyping(false), 1000); // Pause for 2 seconds after typing the word
            return prev;
          }
        });
      }, 100); // Typing speed
    } else {
      // Erasing the word
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length > 0) {
            return prev.slice(0, -1); // Remove last character
          } else {
            clearInterval(typingInterval);
            setTyping(true); // Start typing the next word
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length); // Move to next word
            return "";
          }
        });
      }, 50); // Erasing speed
    }

    return () => clearInterval(typingInterval);
  }, [typing, currentWordIndex, rotatingWords]);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
        {/* Text Section */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Meghna Reddy</h1>
          <h2 className={styles.rotatingWords}>
            I am a <span className={styles.fadeWord}>{displayedText}</span>
            <span className={styles.cursor}></span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
