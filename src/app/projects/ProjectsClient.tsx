"use client";

import { useState } from 'react';
import styles from './Projects.module.css';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  youtubeUrl?: string;
  apiDocUrl?: string;
  category: string;
}

interface ProjectsClientProps {
  projects: Project[];
}

const FILTER_OPTIONS = ['All', 'MERN', 'React Web App', 'UI/UX', 'Java Full-Stack'];

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <>
      <div className={styles.filterContainer}>
        {FILTER_OPTIONS.map(filter => (
          <button
            key={filter}
            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={`${project.title}-${index}`} 
              title={project.title}
              description={project.description}
              image={project.image}
              stack={project.stack}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              youtubeUrl={project.youtubeUrl}
              apiDocUrl={project.apiDocUrl}
            />
          ))}
        </div>
      ) : (
        <div className={styles.noProjects}>
          <p>No projects found in this category.</p>
        </div>
      )}
    </>
  );
}
