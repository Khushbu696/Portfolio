import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='name'>Khushbu Patel</div>
            
            <div className='nav-links'>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/skills">Skills</Link></div>
                <div><Link to="/projects">Projects</Link></div>
                <div><Link to="/education">Education</Link></div>
                <div><Link to="/certificates">Certificates</Link></div>
                <div><Link to="/contact">Contact</Link></div>
            </div>
        </div>
    );
};

export default Navbar;
