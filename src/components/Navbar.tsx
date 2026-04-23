'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/" onClick={() => setIsOpen(false)}>Khushbu</Link>
        </div>
        
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
        </div>

        <div className={`${styles.navContent} ${isOpen ? styles.showMenu : ''}`}>
          <ul className={styles.navLinks}>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/certificates" onClick={() => setIsOpen(false)}>Certificates</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li>
              <a href="/Patel_Khushbu.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
