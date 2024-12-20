import React from "react";
import styles from "./Skills.module.css";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaHtml5,
  FaCss3,
  FaJava,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiSwift,
  SiTailwindcss,
  SiCss3,
  SiJulia,
  SiR,
  SiNextdotjs,
  SiFlask,
  SiSupabase,
  SiPostgresql,
  SiXcode,
  SiFigma,
  SiAdobexd,
} from "react-icons/si";

import {VscVscode} from "react-icons/vsc";

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.tileContainer}>
        {/* Languages Tile */}
        <div className={styles.tile}>
          <h3 className={styles.tileTitle}>Languages</h3>
          <div className={styles.iconsContainer}>
            <div className={styles.iconWrapper}>
              <SiCplusplus className={styles.icon} />
              <p className={styles.iconLabel}>C++</p>
            </div>
            <div className={styles.iconWrapper}>
              <FaJava className={styles.icon} />
              <p className={styles.iconLabel}>Java</p>
            </div>
            <div className={styles.iconWrapper}>
              <FaPython className={styles.icon} />
              <p className={styles.iconLabel}>Python</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiJavascript className={styles.icon} />
              <p className={styles.iconLabel}>JavaScript</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiSwift className={styles.icon} />
              <p className={styles.iconLabel}>SwiftUI</p>
            </div>
            <div className={styles.iconWrapper}>
              <FaHtml5 className={styles.icon} />
              <p className={styles.iconLabel}>HTML</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiTailwindcss className={styles.icon} />
              <p className={styles.iconLabel}>Tailwind CSS</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiCss3 className={styles.icon} />
              <p className={styles.iconLabel}>CSS</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiJulia className={styles.icon} />
              <p className={styles.iconLabel}>Julia</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiR className={styles.icon} />
              <p className={styles.iconLabel}>R</p>
            </div>
          </div>
        </div>

        {/* Frameworks/Technologies Tile */}
        <div className={styles.tile}>
          <h3 className={styles.tileTitle}>Technologies/Frameworks</h3>
          <div className={styles.iconsContainer}>
            <div className={styles.iconWrapper}>
              <FaReact className={styles.icon} />
              <p className={styles.iconLabel}>React</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiNextdotjs className={styles.icon} />
              <p className={styles.iconLabel}>Next.js</p>
            </div>
            <div className={styles.iconWrapper}>
              <FaNodeJs className={styles.icon} />
              <p className={styles.iconLabel}>Node.js</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiFlask className={styles.icon} />
              <p className={styles.iconLabel}>Flask</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiSupabase className={styles.icon} />
              <p className={styles.iconLabel}>Supabase</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiPostgresql className={styles.icon} />
              <p className={styles.iconLabel}>PostgreSQL</p>
            </div>
          </div>
        </div>

        {/* Developer Tools Tile */}
        <div className={styles.tile}>
          <h3 className={styles.tileTitle}>Developer Tools</h3>
          <div className={styles.iconsContainer}>
            <div className={styles.iconWrapper}>
              <FaGithub className={styles.icon} />
              <p className={styles.iconLabel}>GitHub</p>
            </div>
            <div className={styles.iconWrapper}>
              <VscVscode className={styles.icon} />
              <p className={styles.iconLabel}>VSCode</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiXcode className={styles.icon} />
              <p className={styles.iconLabel}>XCode</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiFigma className={styles.icon} />
              <p className={styles.iconLabel}>Figma</p>
            </div>
            <div className={styles.iconWrapper}>
              <SiAdobexd className={styles.icon} />
              <p className={styles.iconLabel}>Adobe XD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
