import '../styles/Project.css';
import echovault from '../assets/echovault.jpeg'
import flipmind from '../assets/flipmind.jpeg'
import quotecraft from '../assets/quotecraft.jpeg'

const allprojects = [
    {
        id: 1,
        image: echovault,
        title: "EchoVault",
        description: "A time capsule messenger that lets users send messages or media to the future via email. Features include passcode protection, scheduling, and a clean, user-friendly interface.",
        techStack: ["MERN"],
        gitHub: "https://github.com/Khushbu696/EchoVault",
        liveDemo: "https://echovault-frontend.netlify.app/",
    },
    {
        id: 2,
        image: flipmind,
        title: "FlipMind",
        description: "A fun and interactive memory game where players flip cards to match pairs. Built with React, it tests focus and logic with smooth animations and responsive design.",
        techStack: ["React", "CSS"],
        gitHub: "https://github.com/Khushbu696/FlipMind",
        liveDemo: "https://flipmind.netlify.app/",
    },
    {
        id: 3,
        image: quotecraft,
        title: "QuoteCraft",
        description: "A simple quote generator that displays random motivational quotes with each click. Users can copy, share, or explore new quotes through a clean and inspiring UI.",
        techStack: ["React", "API Ninjas Quotes API"],
        gitHub: "https://github.com/Khushbu696/QuoteCraft",
        liveDemo: "https://k-quotecraft.netlify.app/",
    },
];

const Projects = () => {
    return (
        <div id="projects">
            <h1>Projects</h1>

            <div className="projects-container">
                {allprojects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} className="card-image" />

                        <div className="card-content">
                            <h2 className="card-title">{project.title}</h2>
                            <p><b>Description:</b> {project.description}</p>
                            <p><b>Tech Stack:</b> {project.techStack.join(', ')}</p>
                            <p>
                                <b>GitHub:</b>
                                <a href={project.gitHub} target="_blank" rel="noopener noreferrer"> View Repository </a>
                            </p>
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                <button className="live-btn">Live Demo</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
