import './All_Projects.css'
import portfolio from '../../assets/portfolio.jpeg'

function All_Projects() {
    const allProjects = [
        {
            id: 1,
            image: portfolio,
            title: "Portfolio",
            description: "My personal portfolio showcasing my projects and skills.",
            techStack: ["React"],
            gitHub: "https://github.com/Khushbu696/Portfolio",
            liveDemo: "https://khushbu-patel-portfolio.netlify.app/",
            //video: "/videos/todo-list.mkv", // Place videos inside public/videos
        },
    ];

    return (
        <>
            <div className="all-projects">
                <div className="all-projects-nav">
                    <div>All</div>
                    <div>HTML/CSS/JS</div>
                    <div>MERN</div>
                </div>

                <div className="all-projects-container">
                    {allProjects.map((allProjects) => (
                        <div className="card">
                            <img src={allProjects.image} alt={allProjects.title} className="card-image" />

                            <div className="card-content">
                                <h2 className="card-title">{allProjects.title}</h2>

                                <p className="card-description">
                                    <b>Description: </b> {allProjects.description}
                                </p>

                                <p className="card-description">
                                    <b>Tech Stack: </b> {allProjects.techStack.join(', ')}
                                </p>

                                <p className="card-description">
                                    <b>GitHub: </b> <a href={allProjects.gitHub} target="_blank" rel="noopener noreferrer"> {allProjects.gitHub} </a>
                                </p>

                                <a href={allProjects.liveDemo} target="_blank" rel="noopener noreferrer"> <button>Live</button> </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default All_Projects


{/* <div className="all-projects">
                <h1>My Projects</h1>
                <div className="all-projects-container">
                    {allProjects.map((project) => (
                        <div className="all-projects-content" key={project.id}>
                            <div className="all-projects-content-left">
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="project-video"
                                />
                            </div>

                            <div className="all-projects-content-right">
                                <h2>{project.title}</h2>
                                <p><b>Description:</b> {project.description}</p>
                                <p><b>Tech Stack:</b> {project.techStack.join(', ')}</p>
                                <p><b>Github:</b> <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    <button>Live</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}