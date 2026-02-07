import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ProjectSection.css";

import mindbloom from "../assets/projects/mindbloom.jpeg";
import flipmind from "../assets/projects/flipmind.jpeg";
import quotecraft from "../assets/projects/quotecraft.jpeg";
import weather from "../assets/projects/weather_app.jpeg";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const projectsRef = useRef(null);

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
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".projects-title",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top 80%",
          },
          clearProps: "all",
        },
      );

      // Filter buttons stagger
      gsap.fromTo(
        ".filter-btn",
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".filter-buttons",
            start: "top 85%",
          },
          clearProps: "all",
        },
      );

      // Project cards stagger
      gsap.fromTo(
        ".project-card",
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
          },
          clearProps: "all",
        },
      );
    }, projectsRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <h2 className="projects-title">Featured Projects</h2>

      <div className="filter-buttons">
        {["All", "MERN Stack", "React Web App"].map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-text">
              <p className="project-title">{project.title}</p>

              <p className="project-description">{project.description}</p>

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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
