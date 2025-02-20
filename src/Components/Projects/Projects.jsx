import './Projects.css'

const Projects = () => {
    const projects = [
        {
            title: "Youtube Clone",
            description: "Built a YouTube clone using React(Vite) to fetch and display videos from the YouTube API. Implemented search functionality, dynamic rendering, and responsive UI for a seamless user experience",
            tags: ["React", "Youtube API", "JavaScript", "CSS"]
        },
        {
            title: "Halcyon",
            description: " Creating an online platform where users can chat and maintain digital diary entries, focusing on interactive user engagement. Implementing features like real-time messaging, diary encryption, and data storage",
            tags: ["React", "JavaScript", "CSS"]
        },
        {
            title: "Threads App",
            description: "Building a real-time chat application using React and Chakra UI, implementing user authentication and instant messaging. Following best UI/UX practices for a smooth and responsive chat interface.",
            tags: ["React", "Chakra UI", "JavaScript", "CSS"]
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.title} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects