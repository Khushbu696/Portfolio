import '../styles/Skills.css'

function Skills() {
    const skills = [
        { name: "HTML5", level: "Intermediate" },
        { name: "CSS3", level: "Intermediate" },
        { name: "JavaScript (ES6+)", level: "Basic" },
        { name: "React.js", level: "Basic" },
        { name: "Node.js", level: "Basic" },
        { name: "Git & GitHub", level: "Basic"},
    ];

    return (
        <>
            <div id="skills">
                <div className="skills-card">
                    <h1>Skills</h1>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div className="skill-item" key={index}>
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-level">{skill.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills