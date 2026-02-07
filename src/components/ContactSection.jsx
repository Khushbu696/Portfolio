import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import "../styles/ContactSection.css";

import mail from "../assets/icons/mail-icon.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const contactRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        ".contact-title",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
          clearProps: "all",
        },
      );

      // Left side
      gsap.fromTo(
        ".contact-info",
        { x: -60, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-container",
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
          clearProps: "all",
        },
      );

      // Right side (form)
      gsap.fromTo(
        ".contact-form",
        { x: 60, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-container",
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
          clearProps: "all",
        },
      );
    }, contactRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSuccess("Your message has been sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setSuccess("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-text">
            I'm always interested in discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you're looking for
            a technical partner or just want to say hello, I'd love to hear from
            you.
          </p>

          <div className="contact-email">
            <img src={mail} alt="email" />
            <span>khushburpatel06@example.com</span>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/Khushbu696"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/khushbupatel06"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message..."
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="success-msg">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
