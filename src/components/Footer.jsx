import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <p className="footer-copyright">
                    © 2025 Khushbu Patel. All rights reserved.
                </p>

                <div className="footer-right">
                    <div className="social-icons">
                        <a
                            href="https://github.com/Khushbu696"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/khushbupatel06"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
