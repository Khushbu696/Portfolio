import '../styles/Projects.css'
import echovault from '../assets/echovault.jpeg'
import flipmind from '../assets/flipmind.jpeg'
import quotecraft from '../assets/quotecraft.jpeg'

const Projects = () => {
    const Projects = [
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

    return (
        <>
            <div className="projects">
                <h1>Projects</h1>
                <div className="projects-container">
                    {Projects.map((Projects) => (
                        <div className="card">
                            <img src={Projects.image} alt={Projects.title} className="card-image" />

                            <div className="card-content">
                                <h2 className="card-title">{Projects.title}</h2>

                                <p className="card-description">
                                    <b>Description: </b> {Projects.description}
                                </p>

                                <p className="card-description">
                                    <b>Tech Stack: </b> {Projects.techStack.join(', ')}
                                </p>

                                <p className="card-description">
                                    <b>GitHub: </b> <a href={Projects.gitHub} target="_blank" rel="noopener noreferrer"> Github Repository </a>
                                </p>

                                <a href={Projects.liveDemo} target="_blank" rel="noopener noreferrer"> <button>Live</button> </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Projects;
