import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={`section ${styles.hero}`}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <p className={styles.tagline}>Full-Stack Developer & UI/UX Designer</p>
            <h1 className={styles.title}>
              Hi, I'm <span className="gradient-text">Khushbu</span>
            </h1>
            <p className={styles.description}>
              A multidisciplinary developer and UI/UX designer who builds performant web applications with clean architecture, intuitive interfaces, and meaningful user experiences from end to end.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Let's Connect
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <div className={styles.imageGlow}></div>
            <Image
              src="/herome.png"
              alt="Khushbu Patel"
              width={400}
              height={400}
              className={styles.heroImage}
              priority
            />
           </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`section ${styles.about}`}>
        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.aboutImageWrapper}>
            <div className={styles.aboutImageCard}>
              <Image
                src="/aboutme.png"
                alt="Working on code"
                width={400}
                height={500}
                className={styles.aboutImage}
              />
            </div>
          </div>
          <div className={styles.aboutContent}>
            <h2>About Me</h2>
            <p>
              I am a dedicated Computer Science and Engineering professional with a passion for innovation and problem-solving. I'm currently pursuing a B.Tech in CSE at CodingGita X Rai University with a strong CGPA of 9.81.
            </p>
            <p>
              My journey in tech began with curiosity about how technology shapes human experience. This evolved into a deep love for blending creativity, logic, and design to build intuitive and beautiful interfaces that users love.
            </p>
            <p>
              I believe great design is not just how something looks, but how seamlessly it works. Every project is an opportunity to create meaningful experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`section ${styles.education}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationList}>
            <div className={styles.educationItem}>
              <h3>B.Tech in Computer Science and Engineering</h3>
              <p className={styles.year}>2024 – 2028</p>
              <p className={styles.college}>Rai University X CodingGita</p>
              <p>CGPA: 9.81</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`section ${styles.skills}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <div className={styles.skillTags}>
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>HTML/CSS</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3>Backend</h3>
              <div className={styles.skillTags}>
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3>Tools & Design</h3>
              <div className={styles.skillTags}>
                <span>Git</span>
                <span>Docker</span>
                <span>Figma</span>
                <span>UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`section ${styles.featured}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            <ProjectCard
              title="MindBloom – Mental Wellness Tracker"
              description="A full-stack mental wellness web application designed to help users build healthier habits and track their emotional journey. Users can log daily moods with emoji and notes, maintain habit streaks with automatic daily/weekly resets, engage with an anonymous community, and unlock achievements through a points-based rewards system. A personal dashboard brings everything together with a summary of today's mood, habit progress, and recent milestones."
              image="/projects/mindbloom.png"
              stack={["React", "Node.js", "Express.js", "MongoDB Atlas"]}
              githubUrl='https://github.com/Khushbu696/MindBloom'
              liveUrl="https://k-mindbloom.netlify.app"
            />
            <ProjectCard
              title="API Rate Limiter & Monitoring System"
              description="A production-grade API rate limiting and monitoring platform with a real-time dashboard. The system enforces a three-tier rule hierarchy — Global, User, and API Key levels — using a sliding window algorithm to intelligently allow or block requests. Features include Role-Based Access Control (RBAC) with a dedicated admin panel, live traffic analytics with interactive charts, an integrated API tester, and unique API key generation per user. Built with a Spring Boot backend and a Next.js + TypeScript frontend with a premium glassmorphism UI."
              image="/projects/rate_limiter.jpeg"
              stack={["Java", "Spring Boot", "Spring Security", "MySQL", "Next.js", "TypeScript", "Recharts"]}
              githubUrl="https://github.com/Khushbu696/Rate_Limiter"
            />
          </div>
          <div className={styles.viewAllWrapper}>
            <Link href="/projects" className="btn btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Let&apos;s build the <span className="gradient-text">Future.</span></h2>
            <p>
              Currently open for select freelance collaborations and<br />
              innovative full-time roles.
            </p>
            <div className={styles.ctaButtons}>
              <a href="mailto:khushburpatel06@gmail.com" className={styles.emailButton}>
                khushburpatel06@gmail.com
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7M4 7.00005C3.44772 7.00005 3 7.44777 3 8.00005V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
