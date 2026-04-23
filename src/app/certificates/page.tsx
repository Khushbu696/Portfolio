import type { Metadata } from 'next';
import styles from './Certificates.module.css';
import CertificateCard from '@/components/CertificateCard';

export const metadata: Metadata = {
  title: 'Certificates | Khushbu Patel',
  description: 'View my professional certifications and achievements.',
};

const certificatesData = [
  {
    title: 'AI TOOLS WORKSHOP',
    issuer: 'Be10X',
    image: '/certificates/be10x_cer.jpeg',
    certificateUrl: 'https://drive.google.com/file/d/1e7-vMItZ033j7-DJYe_6-WqCtY60GR4X/view?usp=drive_link',
  },
  {
    title: 'React (Basic)',
    issuer: 'HackerRank',
    image: '/certificates/react(b)_cer.png',
    certificateUrl: 'https://www.hackerrank.com/certificates/e81d06201a14',
  },
  {
    title: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    image: '/certificates/javascript(b)_cer.png',
    certificateUrl: 'https://www.hackerrank.com/certificates/ae9d82c7c974',
  },
  {
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    image: '/certificates/javascript(in)_cer.png',
    certificateUrl: 'https://www.hackerrank.com/certificates/d1fc783d3814',
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    image: '/certificates/problem_solving(b)_cer.png',
    certificateUrl: 'https://www.hackerrank.com/certificates/dd2e999b1adc',
  },
  {
    title: 'CSS (Basic)',
    issuer: 'HackerRank',
    image: '/certificates/css_cer.png',
    certificateUrl: 'https://www.hackerrank.com/certificates/9daf7a39818f',
  }
];

export default function Certificates() {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className={styles.pageTitle}>My Certificates</h1>
          <p className={styles.pageSubtitle}>
            Continuous learning is part of my journey. Here are some of the professional certifications I have completed.
          </p>

          <div className={styles.certificatesGrid}>
            {certificatesData.map((cert, index) => (
              <CertificateCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
