import type { Metadata } from 'next';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Khushbu Patel',
  description: 'Get in touch with me for projects and collaborations.',
};

export default function Contact() {
  return (
    <div className={`section ${styles.contactSection}`}>
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.left}>
          <h1 className={styles.heading}>Let's build the <span className="gradient-text">future</span> together.</h1>
          <p className={styles.description}>
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'm currently available for freelance projects and open to new opportunities.
          </p>
          <div className={styles.emailWrapper}>
            <p className={styles.emailLabel}>Email me at:</p>
            <a href="mailto:khushburpatel06@gmail.com" className={styles.email}>
              khushburpatel06@gmail.com
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
