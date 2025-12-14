import "../styles/HeroSection.css";
import profile from "../assets/profile.jpeg";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-text">
                    <p className="hero-eyebrow">
                        Full-Stack Developer • UI/UX Designer
                    </p>

                    <h1 className="hero-title">
                        Hello, I'm <span className="hero-highlight">Khushbu.</span>
                    </h1>

                    <p className="hero-subtitle">
                        I build modern, scalable digital experiences with clean
                        architecture and intuitive design.
                    </p>

                    <div className="hero-buttons">
                        <button className="view-my-work">
                            View My Work
                        </button>

                        <a
                            href="/Patel_Khushbu.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="resume"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                <div className="hero-image-card">
                    <img src={profile} alt="Khushbu Patel" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
