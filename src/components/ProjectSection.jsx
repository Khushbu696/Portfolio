import '../styles/ProjectSection.css';
import { useState } from 'react';
import mindbloom from '../assets/projects/mindbloom.jpeg';
import flipmind from '../assets/projects/flipmind.jpeg';
import quotecraft from '../assets/projects/quotecraft.jpeg';

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'MindBloom',
            category: 'MERN Stack',
            description:
                'A MERN app that tracks mental wellness through mood logs, habit-building challenges, promoting self-care with rewards',
            tech: ['React', 'Node.js', 'MongoDB'],
            image: mindbloom,
            code: '#',
            demo: '#',
        },
        {
            id: 2,
            title: 'FlipMind',
            category: 'Web Development',
            description:
                'A fun and interactive memory game where players flip cards to match pairs. Built with React, it tests focus and logic with smooth animations and responsive design.',
            tech: ['React'],
            image: flipmind,
            code: 'https://github.com/Khushbu696/FlipMind',
            demo: 'https://flipmind.netlify.app/',
        },
        {
            id: 3,
            title: 'QuoteCraft',
            category: 'Web Development',
            description:
                'A simple quote generator that displays random motivational quotes with each click. Users can copy, share, or explore new quotes through a clean and inspiring UI.',
            tech: ['React'],
            image: quotecraft,
            code: 'https://github.com/Khushbu696/QuoteCraft',
            demo: 'https://k-quotecraft.netlify.app/',
        },
    ];

    const filteredProjects =
        activeFilter === 'All'
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">Featured Projects</h2>
            <p className="projects-subtext">
                A showcase of my recent work across various technologies and domains.
            </p>

            {/* Filter Buttons */}
            <div className="filter-buttons">
                {['All', 'Web Development', 'MERN Stack'].map((filter) => (
                    <button
                        key={filter}
                        className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="projects-container">
                {filteredProjects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                            {project.tech.map((tech, index) => (
                                <span className="tag" key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="project-buttons">
                            <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn code-btn">
                                Code
                            </a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">
                                Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;