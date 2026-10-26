import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  youtubeUrl?: string;
  apiDocUrl?: string;
  itchUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  stack,
  githubUrl,
  liveUrl,
  youtubeUrl,
  apiDocUrl,
  itchUrl,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.stack}>
          {stack.map((tech) => (
            <span key={tech} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
          {youtubeUrl && (
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          )}
          {apiDocUrl && (
            <a href={apiDocUrl} target="_blank" rel="noopener noreferrer">
              API Docs
            </a>
          )}
          {itchUrl && (
            <a href={itchUrl} target="_blank" rel="noopener noreferrer">
              itch.io
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
