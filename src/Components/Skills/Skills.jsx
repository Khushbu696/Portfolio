import './Skills.css'

const Skills = () => {
    const skillsList = [
        {
            category: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            category: "Backend",
            skills: ["Node.js"]
        },
        {
            category: "Database",
            skills: ["MongoDB"]
        },
        {
            category: "Tools",
            skills: ["Git", "VS Code"]
        }
    ]

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 style={{color: "navy"}}>Skills</h2>
                <div className="skills-grid">
                    {skillsList.map((item) => (
                        <div key={item.category} className="skill-card">
                            <h3>{item.category}</h3>
                            <div className="skill-list">
                                {item.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills