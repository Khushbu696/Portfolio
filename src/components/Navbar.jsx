import { useState, useEffect } from "react";
import "../styles/Navbar.css";

import sun from "../assets/icons/light_mode.png";
import moon from "../assets/icons/dark_mode.png";
import menu from "../assets/icons/menu2.png";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) setDarkMode(savedTheme === "dark");
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <span className="navbar-name">
                        <a href="#home">Khushbu</a>
                    </span>
                </div>

                <ul className="navbar-menu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#certificates">Certificates</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <a
                            href="/Patel_Khushbu.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="resume-btn"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                <div className="navbar-actions">
                    <button
                        className="theme-btn"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        <img src={darkMode ? sun : moon} alt="theme" />
                    </button>

                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(true)}
                    >
                        <img src={menu} alt="menu" />
                    </button>
                </div>
            </nav>

            <div
                className={`mobile-menu-overlay ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
            />

            <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <div className="mobile-header">
                    <span>Menu</span>
                    <button onClick={() => setMenuOpen(false)}>×</button>
                </div>

                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
                <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                <a
                    href="/Patel_Khushbu.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="resume-btn"
                >
                    Resume
                </a>
            </aside>
        </>
    );
};

export default Navbar;
