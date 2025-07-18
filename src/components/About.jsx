import '../styles/About.css'
import me from '../assets/me.jpeg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-text">
                <h1>About Me</h1>

                <p>
                    Hi! I'm Khushbu Patel, an aspiring Software Engineer and a B.Tech CSE student. I have a strong passion for web development, specializing in React, JavaScript, and UI/UX design.
                </p>
                <p>
                    I thrive on bringing ideas to life through clean, interactive, and user-friendly designs. I'm always eager to learn, grow, and tackle new challenges in the tech world.
                </p>
                <p>
                    When I'm not coding, you'll find me indulging in my hobbies, like reading fantasy stories, traveling to explore natural landscapes, and discovering music that matches my mood. These passions inspire my creativity and fuel my problem-solving skills.
                </p>
            </div>

            <div className="about-img">
                <img src={me} alt="Khushbu Patel" />
            </div>
        </div>
    );
};

export default About;
