import './Projects.css'
import { useNavigate } from "react-router-dom";
import portfolio from '../../assets/portfolio.jpeg'
import weather from '../../assets/weather_app.jpeg'
import youtube from '../../assets/youtube_clone.jpeg'
import todo from '../../assets/todo-list.jpeg'
import arrow from '../../assets/right-arrow.png'

const Projects = () => {
    const navigate = useNavigate();
    const projects = [
        {
            id: 1,
            image: portfolio,
            title: "Portfolio Website",
            description: "My personal portfolio showcasing my projects and skills.",
            techStack: ["React", "CSS"],
        },
        {
            id: 2,
            image: weather,
            title: "Weather App",
            description: "Built a simple Weather App that allows users to search for the current weather of any city by fetching live data from the OpenWeatherMap API.",
            techStack: ["HTML", "CSS", "JavaScript"],
        },
        {
            id: 3,
            image: youtube,
            title: "YouTube Clone",
            description: "Built a YouTube clone using React(Vite) to fetch and display videos from the YouTube API. Implemented search functionality.",
            techStack: ["React", "YouTube API"],
        },
        {
            id: 4,
            image: todo,
            title: "To-Do List",
            description: "Built a simple and responsive To-Do List application. Easily manage your tasks with an intuitive UI and minimal setup.",
            techStack: ["React"],
        },
    ];

    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="project-container">
                {projects.map((projects) => (
                    <div key={projects.id} className="project-card">
                        <img src={projects.image} alt={projects.title} className="project-card-image" />
                        
                        <div className="project-card-content">
                            <h3 className="project-card-title">{projects.title}</h3>

                            <p className="project-card-description">
                                <b>Description: </b> {projects.description}
                            </p>

                            <p className="project-card-description">
                                <b>Tech Stack: </b> {projects.techStack.join(', ')}
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
