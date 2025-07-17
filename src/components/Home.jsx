import { useState } from "react";
import '../styles/Home.css'
import avatar from '../assets/avatar.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import html5 from '../assets/html5.svg'
import javascript from '../assets/javascript.svg'
import mongodb from '../assets/mongodb.svg'
import nodejs from '../assets/nodejs.svg'
import react from '../assets/react.svg'

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className='home'>
                <div className="home-text">
                    <h1>Hi, I'm Khushbu Patel.</h1>
                    <p>Full-Stack Developer</p>
                    <p>
                        I'm a Software Developer specializing in web development. My goal is to create innovative and efficient solutions that leave a lasting impact.
                    </p>

                    <div className="cta-buttons">
                        <button onClick={() => setIsModalOpen(true)} className="btn">
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

                <div className="home-img">
                    <img src={avatar} alt="professional woman avatar" />
                </div>
            </div>

            <div className="home-icons">
                <img src={github} alt="" />
                <img src={react} alt="" />
                <img src={nodejs} alt="" />
                <img src={mongodb} alt="" />
                <img src={javascript} alt="" />
                <img src={git} alt="" />
                <img src={html5} alt="" />
            </div>
        </>
    );
};

export default Home;
