import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2>About Me</h2>
                <p>
                    Hi! I'm Khushbu Patel, an aspiring Software Engineer and B.Tech CSE student. I have a strong passion for web development, specializing in React, JavaScript, and UI/UX design. <br/><br/>

                    I love bringing ideas to life through clean and interactive designs. I've built projects ranging from YouTube API integrations to chat applications using modern web technologies. I'm always eager to learn new technologies and take on challenges.
                </p> <br/>

                <p id="resume">
                    <a href="/resume.pdf" download className="resume-link">View Resume</a>
                </p>
            </div>
        </section>
    )
}

export default About