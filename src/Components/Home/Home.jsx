import './Home.css'
import workspace from '../../assets/workspace.svg'

const Header = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    Khushbu Patel
                </div>

                <div className="navbar-right">
                    <div onClick={() => scrollToSection("home")} id="home-tag">Home</div>
                    <div onClick={() => scrollToSection("about")} id="about-tag">About</div>
                    <div onClick={() => scrollToSection("skills")} id="skills-tag">Skills</div>
                    <div onClick={() => scrollToSection("projects")} id="projects-tag">Projects</div>
                    <div onClick={() => scrollToSection("education")} id="education-tag">Education</div>
                    <div onClick={() => scrollToSection("contact")} id="contact-tag">Contact</div>
                </div>
            </div>

            <div className="home">
                <div className="home-left">
                    <h1>Hi, I'm Khushbu Patel.</h1>
                    <p>
                        I'm a Software Developer specializing in web development. My goal is to create innovative and efficient solutions that leave a lasting impact.
                    </p>
                </div>

                <div className="home-right">
                    <img src={workspace} alt="workspace illustration" />
                </div>
            </div>
        </>
    )
}

export default Header