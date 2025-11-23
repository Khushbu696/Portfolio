import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
import sun from '../assets/icons/light_mode.png';
import moon from '../assets/icons/dark_mode.png';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav className="navbar">
            {/* Left: Logo + Name */}
            <div className="navbar-left">
                <div className="navbar-logo">K</div>
                <span className="navbar-name">Khushbu</span>
            </div>

            {/* Center: Menu Items */}
            <ul className="navbar-menu">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#certificates">Certificates</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <a href="/Patel_Khushbu.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>

            {/* Right: Theme Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
                {darkMode ? (
                    <img src={sun} alt="Light Mode" />
                ) : (
                    <img src={moon} alt="Dark Mode" />
                )}
            </button>
        </nav>
    );
};

export default Navbar;