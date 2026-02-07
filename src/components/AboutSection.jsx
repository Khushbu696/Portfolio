import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/AboutSection.css";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        ".about-title",
        {
          y: 40,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
          },
          clearProps: "all",
        },
      );

      // Left Text Block
      gsap.fromTo(
        ".about-left",
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-left",
            start: "top 85%",
          },
          clearProps: "all",
        },
      );

      // Cards Stagger
      gsap.fromTo(
        ".about-card",
        {
          y: 60,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-right",
            start: "top 85%",
          },
          clearProps: "all",
        },
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        <div className="about-left">
          <p className="about-intro">
            Dedicated Computer Science and Engineering professional with a
            passion for innovation and problem-solving. I'm currently pursuing a
            B.Tech in CSE at CodingGita X Rai University with a strong CGPA of
            9.81.
          </p>

          <p>
            My journey in tech began with curiosity about how technology shapes
            human experience. This evolved into a deep love for blending
            creativity, logic, and design to build intuitive and beautiful
            interfaces that users love.
          </p>

          <p>
            I believe great design is not just how something looks, but how
            seamlessly it works. Every project is an opportunity to create
            meaningful experiences.
          </p>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>Education</h3>

            <p>B.Tech in Computer Science and Engineering</p>
            <span>2024 – 2028</span>
            <p>CodingGita X Rai University</p>

            <strong>CGPA: 9.81</strong>
          </div>

          <div className="about-card">
            <h3>Focus Areas</h3>

            <ul>
              <li>Full-stack web development</li>
              <li>UI/UX design principles</li>
              <li>Scalable architectures</li>
              <li>Algorithm & data structures</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
