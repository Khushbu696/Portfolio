import './Projects.css'
import { useNavigate } from "react-router-dom";
import portfolio from '../../assets/portfolio.jpeg'
import youtube from '../../assets/youtube_clone.jpeg'
import threads_app from '../../assets/threads_app_clone.jpeg'
import arrow from '../../assets/right-arrow.png'

const Projects = () => {
    const navigate = useNavigate();
    const projects = [
        {
            id: 1,
            title: "YouTube Clone",
            description: "Built a YouTube clone using React(Vite) to fetch and display videos from the YouTube API. Implemented search functionality.",
            techStack: ["React", "YouTube API"],
            image: youtube,
            video: "",
        },
        {
            id: 2,
            title: "Threads App Clone",
            description: "Building a real-time chat application using React and Chakra UI, implementing user authentication and instant messaging. Following best UI/UX practices for a smooth and responsive chat interface.",
            techStack: ["React", "Chakra UI"],
            image: threads_app,
            video: "",
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "My personal portfolio showcasing my projects and skills.",
            techStack: ["React", "CSS"],
            image: portfolio,
            video: "",
        },
    ];

    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-content">
                        <div className="project-content-left">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="project-image" />
                            ) : project.video ? (
                                <video controls className="project-video">
                                    <source src={project.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <p>No media available</p>
                            )}
                        </div>

                        <div className="project-content-right">
                            <h3>{project.title}</h3>
                            <p>
                                <b>Description:</b> {project.description}
                            </p>
                            <p>
                                <b>Tech Stack:</b> {project.techStack.join(", ")}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-viewall" onClick={() => navigate("/all-projects")}>
                View All Projects<img src={arrow} alt="right arrow" />
            </div>
        </div>
    )
}

export default Projects;
