import { useEffect, useState } from "react";
import "../styles/Footer.css";
import github_b from "../assets/icons/github_black.png";
import github_w from "../assets/icons/github_white.png";
import linkedin_b from "../assets/icons/linkedin_black.png";
import linkedin_w from "../assets/icons/linkedin_white.png";
import gmail_b from "../assets/icons/gmail_black.png";
import gmail_w from "../assets/icons/gmail_white.png";

const Footer = () => {

    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"]
        });

        return () => observer.disconnect();
    }, []);

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Left Section */}
                <div className="footer-brand">
                    <h2 className="footer-logo">Portfolio</h2>
                    <p>
                        Passionate Computer Science & Engineering professional creating innovative solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="footer-socials">
                    <h3>Connect</h3>
                    <div className="social-icons">

                        <a href="https://github.com/Khushbu696" target="_blank" rel="noopener noreferrer">
                            <img src={isDarkMode ? github_w : github_b} alt="Github" />
                        </a>

                        <a href="https://www.linkedin.com/in/khushbupatel06" target="_blank" rel="noopener noreferrer">
                            <img src={isDarkMode ? linkedin_w : linkedin_b} alt="LinkedIn" />
                        </a>

                        <a href="mailto:khushburpatel06@gmail.com">
                            <img src={isDarkMode ? gmail_w : gmail_b} alt="Email" />
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