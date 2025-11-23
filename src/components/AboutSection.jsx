import "../styles/AboutSection.css";
import profile from "../assets/profile.jpeg";

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="about-title">About Me</h2>
            <p className="about-subtext">
                Dedicated Computer Science and Engineering professional with a passion for
                innovation and problem-solving.
            </p>

            <div className="about-wrapper">

                {/* LEFT IMAGE */}
                <div className="about-image-container">
                    <img src={profile} alt="Khushbu Patel" className="about-image" />
                </div>

                {/* RIGHT TEXT */}
                <div className="about-text">
                    <p>
                        I’m <strong>Khushbu Patel</strong>, a passionate <strong>Full-Stack Developer</strong> and
                        <strong> UI/UX Designer</strong> with a strong drive to create impactful, user-focused digital
                        products. My journey began with a curiosity about how technology shapes human experience —
                        evolving into a deep love for blending creativity and logic to design interfaces that feel effortless and perform beautifully.
                    </p>

                    <p>
                        I thrive on transforming ideas into interactive, meaningful experiences — whether it’s
                        designing intuitive user flows, building scalable web applications, or optimizing performance.
                        I believe that great design isn’t just how something looks, but how seamlessly it works for people.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;