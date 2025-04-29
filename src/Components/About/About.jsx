import './About.css'
import girl_profile from '../../assets/girl_profile.svg'

const About = () => {
    return (
        <>
            <div className="about">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-left">
                        <img src={girl_profile} alt="holding_flower" />
                    </div>

                    <div className="about-right">
                        <p>
                            Hi! I'm Khushbu Patel, an aspiring Software Engineer and a B.Tech CSE student. I have a strong passion for web development, specializing in React, JavaScript, and UI/UX design.
                        </p>
                        <p>
                            I thrive on bringing ideas to life through clean, interactive, and user-friendly designs. My portfolio includes projects ranging from YouTube API integrations to chat applications, showcasing my ability to work with modern web technologies. I'm always eager to learn, grow, and tackle new challenges in the tech world.
                        </p>
                        <p>
                            When I'm not coding, you'll find me indulging in my hobbies, like reading fantasy stories, traveling to explore natural landscapes, and discovering music that matches my mood. These passions inspire my creativity and fuel my problem-solving skills.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About