import '../styles/Hero.css';
import { useState } from "react";

const Hero = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div id="home">
                <div className="hero-container">
                    <h1>
                        Designing intuitive interfaces. <br /> Building robust solutions.
                    </h1>
                    <p>
                        I’m Khushbu Patel, a full-stack developer and UI/UX designer who transforms ideas into engaging, high-performing digital experiences — from concept to deployment.
                    </p>

                    <button className="hero-cta"> <a href="#projects">View My Work</a> </button>

                    <button onClick={() => setIsModalOpen(true)} className="hero-cta">
                        View Resume
                    </button>

                    {isModalOpen && (
                        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                                    &times;
                                </button>
                                <iframe src="/Patel_Khushbu.pdf" title="Resume" width="100%" height="500px"></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Hero;
