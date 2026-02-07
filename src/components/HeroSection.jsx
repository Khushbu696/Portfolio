import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/HeroSection.css";
import profile from "../assets/me-5.png";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      tl.from(".hero-role", {
        y: 25,
        autoAlpha: 0,
        duration: 0.8,
      })
        .from(".hero-heading", {
          y: 35,
          autoAlpha: 0,
          duration: 1,
        })
        .from(".hero-tagline", {
          y: 25,
          autoAlpha: 0,
          duration: 0.8,
        })
        .from(".hero-description", {
          y: 25,
          autoAlpha: 0,
          duration: 0.8,
        })
        .fromTo(
          ".hero-buttons a",
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.2,
            clearProps: "all", // 🔥 IMPORTANT
          },
        );

      gsap.from(".hero-image", {
        x: 60,
        autoAlpha: 0,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.6,
        clearProps: "all",
      });

      gsap.from(".hero-circle", {
        scale: 0.85,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power2.out",
        clearProps: "all",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" id="home" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-text">
          <span className="hero-role">
            Full-Stack Developer & UI/UX Designer
          </span>

          <h1 className="hero-heading">Hi, I am Khushbu</h1>

          <p className="hero-tagline">
            I build scalable, user-centered digital experiences
          </p>

          <p className="hero-description">
            A multidisciplinary developer and UI/UX designer who builds
            performant web applications with clean architecture, intuitive
            interfaces, and meaningful user experiences from end to end.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Explore My Work
            </a>

            <a
              href="/Patel_Khushbu.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-circle"></div>

          <img src={profile} alt="Khushbu Patel" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
