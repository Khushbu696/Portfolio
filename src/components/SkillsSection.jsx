import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/SkillsSection.css";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        ".skills-title",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-section",
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
          clearProps: "all",
        },
      );

      // Skill boxes stagger
      gsap.fromTo(
        ".skill-box",
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 90%",
            once: true,
            invalidateOnRefresh: true,
          },
          clearProps: "all",
        },
      );
    }, skillsRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-grid">
        <div className="skill-box">
          <h3>Programming</h3>
          <div className="skill-tags">
            <span>Java</span>
            <span>JavaScript</span>
            <span>C++</span>
            <span>C</span>
          </div>
        </div>

        <div className="skill-box">
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>HTML5</span>
            <span>CSS3</span>
          </div>
        </div>

        <div className="skill-box">
          <h3>Backend</h3>
          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express.js</span>
          </div>
        </div>

        <div className="skill-box">
          <h3>Tools & More</h3>
          <div className="skill-tags">
            <span>Git</span>
            <span>UI/UX Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
