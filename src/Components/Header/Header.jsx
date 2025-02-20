import profile from '../../assets/me.jpeg'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
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
            <div className="header-image">
                <img src={profile} alt="my profile photo" />
            </div>
        </header>
    )
}

export default Header