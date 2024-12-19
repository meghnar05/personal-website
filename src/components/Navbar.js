import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assets/navLogo.png" alt="Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/portfolio">Experience</Link></li>
        <li><Link href="/contact">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
