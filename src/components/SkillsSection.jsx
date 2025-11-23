import '../styles/SkillsSection.css';
import { useEffect, useState } from 'react';
import code_blue from '../assets/icons/code_blue.png';
import code_pink from '../assets/icons/code_pink.png';
import frontend_blue from '../assets/icons/frontend_blue.png';
import frontend_pink from '../assets/icons/frontend_pink.png';
import backend_blue from '../assets/icons/backend_blue.png';
import backend_pink from '../assets/icons/backend_pink.png';

const SkillsSection = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Detect dark mode from HTML root class
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setDarkMode(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    // Choose correct icons based on theme
    const codeIcon = darkMode ? code_pink : code_blue;
    const frontendIcon = darkMode ? frontend_pink : frontend_blue;
    const backendIcon = darkMode ? backend_pink : backend_blue;

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title">Technical Skills</h2>
            <p className="skills-subtext">
                Comprehensive expertise across the full technology stack with hands-on experience
                in modern tools and frameworks.
            </p>

            <div className="skills-container">
                {/* Programming Languages */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <img src={codeIcon} alt="Code icon" />
                    </div>
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>Java</li>
                    </ul>
                </div>

                {/* Frontend Development */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <img src={frontendIcon} alt="Frontend icon" />
                    </div>
                    <h3>Frontend Development</h3>
                    <ul>
                        <li>React</li>
                        <li>Next.js (Basic)</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </div>

                {/* Backend Development */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <img src={backendIcon} alt="Backend icon" />
                    </div>
                    <h3>Backend Development</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;