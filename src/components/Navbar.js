import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assets/navLogo.png" alt="Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
