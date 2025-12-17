import "../styles/ProjectSection.css";
import { useState } from "react";
import flipmind from "../assets/projects/flipmind.jpeg";
import quotecraft from "../assets/projects/quotecraft.jpeg";
import weather from "../assets/projects/weather_app.jpeg";

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const projects = [
        {
            id: 1,
            title: "FlipMind",
            category: "Web Development",
            description:
                "A fun and interactive memory game where players flip cards to match pairs with smooth animations and responsive design.",
            tech: ["React"],
            image: flipmind,
            code: "https://github.com/Khushbu696/FlipMind",
            demo: "https://flipmind.netlify.app/",
        },
        {
            id: 2,
            title: "QuoteCraft",
            category: "Web Development",
            description:
                "A simple quote generator that displays random motivational quotes with a clean and inspiring UI.",
            tech: ["React"],
            image: quotecraft,
            code: "https://github.com/Khushbu696/QuoteCraft",
            demo: "https://k-quotecraft.netlify.app/",
        },
        {
            id: 3,
            title: "Weather App",
            category: "Web Development",
            description:
                "Weather App is a simple application that fetches real-time weather data using the OpenWeather API. It displays current temperature, weather conditions and wind speed.",
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
                A showcase of my recent work across various technologies and domains.
            </p>

            <div className="filter-buttons">
                {["All", "Web Development", "MERN Stack"].map((filter) => (
                    <button
                        key={filter}
                        className={`filter-btn ${activeFilter === filter ? "active" : ""
                            }`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="projects-container">
                {filteredProjects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />

                        <h3 className="project-title">{project.title}</h3>

                        <p className="project-description">
                            {project.description}
                        </p>

                        <div className="project-tags">
                            {project.tech.map((tech) => (
                                <span className="tag" key={tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="project-buttons">
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noreferrer"
                                className="btn code-btn"
                            >
                                Code
                            </a>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="btn demo-btn"
                            >
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