import "../styles/HeroSection.css";
import bg from "../assets/portfolio_bg.jpg";

const HeroSection = () => {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-center-content">
                <h1>
                    Make Designs That Engage, Delight, and Connect
                </h1>

                <p>
                    Hi, I’m <strong>Khushbu Patel</strong>, a full-stack developer and UI/UX designer who transforms ideas into engaging, high-performing digital experiences — from concept to deployment.
                </p>

                <div className="hero-buttons">
                    <button className="hire-btn">View My Work</button>
                    <a href="/Patel_Khushbu.pdf" target="_blank" className="previous-works">View Resume</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;