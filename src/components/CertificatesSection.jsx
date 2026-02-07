import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/CertificatesSection.css";

import cert1 from "../assets/certificates/be10x_cer.jpeg";
import cert2 from "../assets/certificates/css_cer.png";
import cert3 from "../assets/certificates/javascript(b)_cer.png";
import cert4 from "../assets/certificates/javascript(in)_cer.png";
import cert5 from "../assets/certificates/problem_solving(b)_cer.png";
import cert6 from "../assets/certificates/react(b)_cer.png";

gsap.registerPlugin(ScrollTrigger);

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const certRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".cert-heading",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cert-section",
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
          clearProps: "all",
        },
      );

      // Cards stagger
      gsap.fromTo(
        ".cert-card",
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cert-grid",
            start: "top 90%",
            once: true,
            invalidateOnRefresh: true,
          },
          clearProps: "all",
        },
      );
    }, certRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const certificates = [
    { title: "AI Tools Workshop", issuer: "be10x", img: cert1 },
    { title: "CSS (Basic)", issuer: "HackerRank", img: cert2 },
    { title: "JavaScript (Basic)", issuer: "HackerRank", img: cert3 },
    { title: "JavaScript (Intermediate)", issuer: "HackerRank", img: cert4 },
    { title: "Problem Solving (Basic)", issuer: "HackerRank", img: cert5 },
    { title: "React (Basic)", issuer: "HackerRank", img: cert6 },
  ];

  return (
    <section id="certificates" className="cert-section" ref={certRef}>
      <h2 className="cert-heading">Certificates</h2>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <div key={cert.title} className="cert-card">
            <img src={cert.img} alt={cert.title} className="cert-thumbnail" />

            <p className="cert-title">{cert.title}</p>
            <p className="cert-issuer">{cert.issuer}</p>

            <button
              className="cert-btn"
              onClick={() => setSelectedCert(cert.img)}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-close"
              onClick={() => setSelectedCert(null)}
            >
              ×
            </button>

            <img
              src={selectedCert}
              alt="Certificate"
              className="cert-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
