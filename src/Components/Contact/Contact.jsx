import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Get In Touch</h2>
                <p>I'm currently looking for new opportunities. Feel free to reach out! You can also check out my <a href="/resume.pdf" download>resume</a> here.</p>
                <div className="contact-links">
                    <a href="mailto:khushburpatel06@gmail.com" className="contact-button" target="_blank" rel="noopener noreferrer">
                        Email Me
                    </a>
                    <a href="https://github.com/Khushbu696" className="contact-button" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/khushbupatel06" className="contact-button" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact