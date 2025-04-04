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
                    <div onClick={() => scrollToSection("home")}>Home</div>
                    <div onClick={() => scrollToSection("about")}>About</div>
                    <div onClick={() => scrollToSection("skills")}>Skills</div>
                    <div onClick={() => scrollToSection("projects")}>Projects</div>
                    <div onClick={() => scrollToSection("education")}>Education</div>
                    <div onClick={() => scrollToSection("contact")}>Contact</div>
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



            {/* <div className="home">
                <div className="home-content">
                    <h1>Khushbu Patel</h1>
                    <p>Aspiring Software Engineer | Enthusiastic About Web Development <br />
                        Eager to explore the world of software development and build impactful solutions.
                    </p>
                    <nav>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
                <div className="home-image">
                    <img src={profile} alt="my profile photo" />
                </div>
            </div> */}
        </>
    )
}

export default Header