import "../styles/Footer.css";
import github from "../assets/icons/github_black.png";
import linkedin from "../assets/icons/linkedin_black.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <p className="footer-copyright">
                    © 2026 Khushbu Patel. All rights reserved.
                </p>

                <div className="footer-right">
                    <a
                        href="mailto:khushburpatel06@gmail.com"
                        className="footer-email"
                    >
                        khushburpatel06@gmail.com
                    </a>

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
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
