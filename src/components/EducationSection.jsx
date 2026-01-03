import "../styles/EducationSection.css";

const EducationSection = () => {
    return (
        <section id="education" className="education-section">
            <h2 className="education-title">Education</h2>

            <p className="education-subtext">
                My academic journey, dedicated to building a strong foundation in computer
                science and modern technologies.
            </p>

            <div className="education-container">
                <div className="education-card">
                    <div className="education-dot"></div>

                    <p className="degree">B.Tech in Computer Science & Engineering</p>
                    <span className="education-duration">2024 – 2028</span>

                    <p className="education-school">
                        CodingGita X Rai University, Ahmedabad
                    </p>

                    <p className="education-cgpa">
                        CGPA: <strong>9.81</strong>
                    </p>

                    <p className="education-description">
                        Currently pursuing a Bachelor's degree in Computer Science & Engineering,
                        focusing on full-stack development, algorithms, database systems, and
                        UI/UX engineering. Actively working on multiple projects and building
                        strong fundamentals in software development.
                    </p>
                </div>

                <div className="education-card">
                    <div className="education-dot"></div>

                    <p className="degree">Higher Secondary School</p>
                    <span className="education-duration">2023 – 2024</span>

                    <p className="education-school">
                        Parth School of Science and Competition, Vadodara
                    </p>

                    <p className="education-cgpa">
                        Percentage: <strong>68</strong>
                    </p>

                    <p className="education-description">
                        Completed Science stream (PCM) with strong academic performance.
                        Developed early interest in programming, technology, and
                        problem-solving.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
