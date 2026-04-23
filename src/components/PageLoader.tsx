'use client';

import { useEffect, useState } from 'react';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('portfolio_loaded');
    if (!hasLoaded) {
      setVisible(true);
      const fadeTimer = setTimeout(() => {
        setHiding(true);
      }, 2000);
      const removeTimer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('portfolio_loaded', 'true');
      }, 2700);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.loader} ${hiding ? styles.hide : ''}`}>
      <div className={styles.content}>
        <div className={styles.nameWrapper}>
          <span className={styles.letter}>K</span>
          <span className={styles.letter}>h</span>
          <span className={styles.letter}>u</span>
          <span className={styles.letter}>s</span>
          <span className={styles.letter}>h</span>
          <span className={styles.letter}>b</span>
          <span className={styles.letter}>u</span>
        </div>
        <p className={styles.tagline}>Portfolio</p>
        <div className={styles.bar}>
          <div className={styles.barFill}></div>
        </div>
      </div>
    </div>
  );
}
