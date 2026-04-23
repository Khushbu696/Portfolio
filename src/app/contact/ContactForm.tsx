'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
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
    <div className={styles.right}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="John Doe" 
            required 
            value={form.name}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="john@example.com" 
            required 
            value={form.email}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Project Inquiry" 
            required 
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={5} 
            placeholder="Tell me about your project..." 
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className={styles.successMsg}>{success}</p>}
      </form>
    </div>
  );
}
