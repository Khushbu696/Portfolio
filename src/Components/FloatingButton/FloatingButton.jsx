import React from 'react';
import './FloatingButton.css';
import up_arrow from '../../assets/up-arrow.png'

const FloatingButton = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button className="floating-button" onClick={() => scrollToSection("home")}>
            <img src={up_arrow} alt="up arrow" />
        </button>
    );
};

export default FloatingButton;