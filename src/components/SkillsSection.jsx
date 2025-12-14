import "../styles/SkillsSection.css";

const SkillsSection = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title">Technical Skills</h2>

            <p className="skills-subtext">
                Comprehensive expertise across the full technology stack with hands-on experience
                in modern tools and frameworks.
            </p>

            <div className="skills-container">
                <div className="skill-card">
                    <h3>Programming Languages</h3>
                    <div className="skill-buttons">
                        <span className="skill-pill">JavaScript</span>
                        <span className="skill-pill">C++</span>
                        <span className="skill-pill">C</span>
                        <span className="skill-pill">Java</span>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Frontend Development</h3>
                    <div className="skill-buttons">
                        <span className="skill-pill">React</span>
                        <span className="skill-pill">Next.js</span>
                        <span className="skill-pill">HTML5</span>
                        <span className="skill-pill">CSS3</span>
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Backend Development</h3>
                    <div className="skill-buttons">
                        <span className="skill-pill">Node.js</span>
                        <span className="skill-pill">Express.js</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
