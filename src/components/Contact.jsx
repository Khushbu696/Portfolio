import '../styles/Contact.css'
import email from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-container">
                <h1>Get in Touch</h1>
                <p>
                    Have a project idea, job opportunity, or just want to say hi? Feel free to reach out!
                </p>

                <div className="contact-content">
                    <div> <a href="mailto:khushburpatel06@gmail.com" target="_blank" rel="noopener noreferrer"> <img src={email} alt="email logo" /> Email Me </a> </div>

                    <div> <a href="https://www.linkedin.com/in/khushbupatel06" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="linkedin logo" /> LinkedIn </a> </div>

                    <div> <a href="https://github.com/Khushbu696" target="_blank" rel="noopener noreferrer"> <img src={github} alt="github logo" /> GitHub </a> </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
