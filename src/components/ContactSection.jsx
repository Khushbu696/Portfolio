import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactSection.css";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setSuccess("Your message has been sent successfully! 🎉");
                setForm({ name: "", email: "", subject: "", message: "" });
            })
            .catch(() => {
                setSuccess("Something went wrong. Please try again.");
            })
            .finally(() => setLoading(false));
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtext">
                Let’s discuss opportunities, collaborations, or just connect over shared interests in technology.
            </p>

            <div className="contact-container">
                {/* Left side text */}
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>
                        I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
                        Whether you're looking for a technical partner or just want to say hello, I'd love to hear from you.
                    </p>
                </div>

                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            value={form.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        required
                        value={form.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit" className="send-btn" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && <p className="success-msg">{success}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
