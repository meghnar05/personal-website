import React, { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import styles from "./HomePage.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const HomePage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // State for the hamburger menu

  const rotatingWords = [
    "Software Engineer",
    "Taekwondo Black Belt",
    "Designer",
    "Michigan Wolverine",
    "Pianist",
    "Problem Solver",
    "Builder",
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
      {/* Background Beams */}
      <div className={styles.beamsWrapper}>
        <BackgroundBeamsWithCollision
          beamCount={30}
          colors={["#FF5733", "#33FF57", "#3357FF"]}
          collision={true}
          speed={3}
        />
      </div>

      {/* Navbar */}
      <div className={styles.navbar}>
        <img src="/assets/navLogo.png" alt="Logo" className={styles.navLogo} />
        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experiences</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen((prevState) => !prevState)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Meghna Reddy</h1>
          <h2 className={styles.rotatingWords}>
            <span className={styles.fadeWord}>{displayedText}</span>
            <span className={styles.cursor}></span>
          </h2>
        </div>

        {/* Icons Section */}
        <div className={styles.iconWrapper}>
          <a
            href="https://linkedin.com/in/reddymeghna"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/meghnar05"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:meghnar@umich.edu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
