import "../styles/HeroSection.css";
import profile from "../assets/profile.jpeg";

const HeroSection = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-container">
                <div className="hero-text">

                    <h1 className="hero-title">
                        Full-stack developer specialized in building scalable,
                        user-centered digital products
                    </h1>

                    <p className="hero-subtitle">
                        I’m Khushbu — a multidisciplinary developer and UI/UX designer
                        who builds performant web applications with clean architecture,
                        intuitive interfaces, and meaningful user experiences from
                        end to end.
                    </p>

                    <div className="hero-buttons">
                        <button className="view-my-work">
                            <a href="#projects">Explore My Work</a>
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
