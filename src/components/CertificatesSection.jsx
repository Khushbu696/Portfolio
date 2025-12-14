import { useState } from "react";
import "../styles/CertificatesSection.css";

import cert1 from "../assets/certificates/be10x_cer.jpeg";
import cert2 from "../assets/certificates/css_cer.png";
import cert3 from "../assets/certificates/javascript(b)_cer.png";
import cert4 from "../assets/certificates/javascript(in)_cer.png";
import cert5 from "../assets/certificates/problem_solving(b)_cer.png";
import cert6 from "../assets/certificates/react(b)_cer.png";

const CertificatesSection = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        { title: "AI Tools Workshop", issuer: "be10x", img: cert1 },
        { title: "CSS (Basic)", issuer: "HackerRank", img: cert2 },
        { title: "JavaScript (Basic)", issuer: "HackerRank", img: cert3 },
        { title: "JavaScript (Intermediate)", issuer: "HackerRank", img: cert4 },
        { title: "Problem Solving (Basic)", issuer: "HackerRank", img: cert5 },
        { title: "React (Basic)", issuer: "HackerRank", img: cert6 },
    ];

    return (
        <section id="certificates" className="cert-section">
            <h2 className="cert-title">Certificates</h2>

            <p className="cert-subtext">
                A showcase of courses and certifications I’ve earned across various technologies.
            </p>

            <div className="cert-grid">
                {certificates.map((cert) => (
                    <div key={cert.title} className="cert-card">
                        <img
                            src={cert.img}
                            alt={cert.title}
                            className="cert-thumbnail"
                        />

                        <h3>{cert.title}</h3>
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
                <div
                    className="cert-modal"
                    onClick={() => setSelectedCert(null)}
                >
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
