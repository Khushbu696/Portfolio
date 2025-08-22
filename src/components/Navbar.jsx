import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-brand"><a href="#home" onClick={() => handleLinkClick('#home')}>Khushbu Patel</a></div>

                <ul className="navbar-links">
                    <li><a href="#about" onClick={() => handleLinkClick('#about')}>About</a></li>

                    <li><a href="#skills" onClick={() => handleLinkClick('#skills')}>Skills</a></li>

                    <li><a href="#projects" onClick={() => handleLinkClick('#projects')}>Projects</a></li>

                    <li><a href="#education" onClick={() => handleLinkClick('#education')}>Education</a></li>

                    <li><a href="#certificates" onClick={() => handleLinkClick('#certificates')}>Certificates</a></li>

                    <li><a href="#contact" onClick={() => handleLinkClick('#contact')}>Contact</a></li>
                </ul>

                <button className="toggle-mode" onClick={toggleDarkMode}>
                    {darkMode ? 'Light' : 'Dark'}
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
