import "../styles/Footer.css";
import github from "../assets/icons/github_black.png";
import linkedin from "../assets/icons/linkedin_black.png";
import gmail from "../assets/icons/gmail_black.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2 className="footer-logo">Portfolio</h2>
                    <p>
                        Passionate Computer Science & Engineering professional creating
                        innovative solutions.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-socials">
                    <h3>Connect</h3>
                    <div className="social-icons">
                        <a
                            href="https://github.com/Khushbu696"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={github} alt="GitHub" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/khushbupatel06"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={linkedin} alt="LinkedIn" />
                        </a>

                        <a href="mailto:khushburpatel06@gmail.com">
                            <img src={gmail} alt="Email" />
                        </a>
                    </div>
                </div>
            </div>

            <hr className="footer-line" />

            <p className="footer-bottom">
                © 2024 Portfolio. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
