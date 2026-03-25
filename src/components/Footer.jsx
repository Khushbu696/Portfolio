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

                        <a
                            href="https://leetcode.com/u/Khushbu-Patel/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Leetcode
                        </a>

                        <a
                            href="https://www.youtube.com/@KhushbuPatel-06"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Youtube
                        </a>

                        <a
                            href="https://x.com/Khushbu696"
                            target="_blank"
                            rel="noreferrer"
                        >
                            X (Twitter)
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
