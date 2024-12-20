import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  const rotatingWords = [
    "Software Engineer",
    "Designer",
    "Michigan Wolverine",
    "Pianist",
    "Problem Solver",
    "Builder",
    "Taekwondo Black Belt",
    "Entrepreneur",
    "Competitive Athlete",
  ];

  useEffect(() => {
    let typingInterval;

    if (typing) {
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          const currentWord = rotatingWords[currentWordIndex];
          if (prev.length < currentWord.length) {
            return currentWord.slice(0, prev.length + 1);
          } else {
            clearInterval(typingInterval);
            setTimeout(() => setTyping(false), 1500);
            return prev;
          }
        });
      }, 100);
    } else {
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            clearInterval(typingInterval);
            setTyping(true);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
            return "";
          }
        });
      }, 50);
    }

    return () => clearInterval(typingInterval);
  }, [typing, currentWordIndex]);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
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

export default HomePage;
