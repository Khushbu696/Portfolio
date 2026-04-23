import Image from 'next/image';
import styles from './CertificateCard.module.css';

interface CertificateCardProps {
  title: string;
  issuer: string;
  image: string;
  certificateUrl?: string;
}

export default function CertificateCard({
  title,
  issuer,
  image,
  certificateUrl,
}: CertificateCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.issuer}>{issuer}</p>
        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-secondary ${styles.btn}`}
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
}
