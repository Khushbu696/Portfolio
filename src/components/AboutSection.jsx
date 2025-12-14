import "../styles/AboutSection.css";

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content-card">
                <h2 className="about-title">About Me</h2>

                <p className="about-subtext">
                    Dedicated Computer Science and Engineering professional with a passion for
                    innovation and problem-solving.
                </p>

                <div className="about-text">
                    <p>
                        I’m <strong>Khushbu Patel</strong>, a passionate{" "}
                        <strong>Full-Stack Developer</strong> and{" "}
                        <strong>UI/UX Designer</strong> who loves creating user-focused digital
                        products. My journey began with a curiosity about how technology shapes
                        human experience — evolving into a deep love for blending creativity,
                        logic, and design to build intuitive and beautiful interfaces.
                    </p>

                    <p>
                        I enjoy transforming ideas into meaningful experiences — whether it's
                        designing smooth interactions, building scalable web applications, or
                        optimizing performance for real-world users. I believe great design is
                        not just how something looks, but how seamlessly it works.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
