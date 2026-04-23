import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.left}>
          <p>&copy; {currentYear} Khushbu Patel</p>
        </div>
        <div className={styles.right}>
          <a href="https://github.com/Khushbu696" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/khushbupatel06/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/Khushbu-Patel/" target="_blank" rel="noopener noreferrer">Leetcode</a>
          <a href="https://www.youtube.com/@KhushbuPatel-06" target="blank" rel="noopener noreferrer">Youtube</a>
          <a href="https://x.com/Khushbu696" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="mailto:khushburpatel06@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
