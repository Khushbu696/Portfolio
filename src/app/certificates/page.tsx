import type { Metadata } from 'next';
import styles from './Certificates.module.css';
import CertificateCard from '@/components/CertificateCard';

export const metadata: Metadata = {
  title: 'Certificates | Khushbu Patel',
  description: 'View my professional certifications and achievements.',
};

const certificatesData = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    image: '/certificates/cloud_computing_nptel.jpeg',
    certificateUrl: 'https://nptel.ac.in/noc/E_Certificate/NPTEL26CS55S105040059704604549',
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
