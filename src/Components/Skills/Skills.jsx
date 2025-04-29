import './Skills.css'
import programmer from '../../assets/programmer.svg'

const Skills = () => {

    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <div className="skills-content-left">
                    <div className="skills-card">
                        <h3>Frontend</h3>
                        <div className="skills-list">
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>JavaScript</div>
                            <div>React</div>
                        </div>
                    </div>

                    <div className="skills-card">
                        <h3>Backend</h3>
                        <div className="skills-list">
                            <div>Node.js</div>
                        </div>
                    </div>

                    <div className="skills-card">
                        <h3>Database</h3>
                        <div className="skills-list">
                            <div>MongoDB</div>
                        </div>
                    </div>

                    <div className="skills-card">
                        <h3>Tools</h3>
                        <div className="skills-list">
                            <div>Git</div>
                            <div>VS Code</div>
                        </div>
                    </div>
                </div>
                <div className="skills-content-right">
                    <img src={programmer} alt="programmer" />
                </div>
            </div>
        </div>
    )
}

export default Skills