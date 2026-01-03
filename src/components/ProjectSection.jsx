import "../styles/ProjectSection.css";
import { useState } from "react";
import mindbloom from "../assets/projects/mindbloom.jpeg";
import flipmind from "../assets/projects/flipmind.jpeg";
import quotecraft from "../assets/projects/quotecraft.jpeg";
import weather from "../assets/projects/weather_app.jpeg";

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const projects = [
        {
            id: 1,
            title: "MindBloom — Mental Wellness Platform",
            category: "MERN Stack",
            description:
                "A full-stack wellness platform with authentication, habit tracking, mood logs, community features, and a rewards system.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            image: mindbloom,
            code: "https://github.com/Khushbu696/MindBloom",
            demo: "https://k-mindbloom.netlify.app",
        },
        {
            id: 2,
            title: "FlipMind — Memory Card Game",
            category: "React Web App",
            description:
                "An interactive card-matching game where players flip tiles to find pairs, featuring smooth animations and responsive design.",
            tech: ["React"],
            image: flipmind,
            code: "https://github.com/Khushbu696/FlipMind",
            demo: "https://flipmind.netlify.app/",
        },
        {
            id: 3,
            title: "QuoteCraft — Inspirational Quotes Generator",
            category: "React Web App",
            description:
                "A minimal quote generator that displays motivational quotes with a clean interface and lightweight UI experience.",
            tech: ["React"],
            image: quotecraft,
            code: "https://github.com/Khushbu696/QuoteCraft",
            demo: "https://k-quotecraft.netlify.app/",
        },
        {
            id: 4,
            title: "Weather App — Real-time Weather Dashboard",
            category: "React Web App",
            description:
                "A weather dashboard that fetches real-time temperature, wind speed, and climate conditions using OpenWeather API.",
            tech: ["React"],
            image: weather,
            code: "https://github.com/Khushbu696/Weather_app",
            demo: "https://khushbu-weather-app.netlify.app/",
        }
    ];

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">Featured Projects</h2>

            <p className="projects-subtext">
                A collection of impactful projects where I combined full-stack engineering
                and user-centered design to build scalable digital experiences.
            </p>

            <div className="filter-buttons">
                {["All", "MERN Stack", "React Web App"].map(
                    (filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? "active" : ""
                                }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    )
                )}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div className="project-card" key={project.id}>

                        <div className="project-text">
                            <p className="project-title">{project.title}</p>

                            <p className="project-description">
                                {project.description}
                            </p>

                            <div className="tech-stack">
                                {project.tech.map((tech, index) => (
                                    <span className="tech-chip" key={index}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-actions">
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="code-btn"
                                >
                                    Code
                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="demo-btn"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>

                        <div className="project-image-wrapper">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
