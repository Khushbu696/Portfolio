import { useState } from "react";
import "../styles/CertificatesSection.css";

import cert1 from "../assets/certificates/css_cer.png";
import cert2 from "../assets/certificates/javascript(b)_cer.png";
import cert3 from "../assets/certificates/javascript(in)_cer.png";
import cert4 from "../assets/certificates/be10x_cer.jpeg";

const CertificatesSection = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            title: "CSS (Basic)",
            issuer: "HackerRank",
            img: cert1
        },
        {
            title: "JavaScript (Basic)",
            issuer: "HackerRank",
            img: cert2
        },
        {
            title: "JavaScript (Intermediate)",
            issuer: "HackerRank",
            img: cert3
        },
        {
            title: "AI Tools Workshop",
            issuer: "be10x",
            img: cert4
        }
    ];

    return (
        <section id="certificates" className="cert-section">
            <h2 className="cert-title">Certificates</h2>
            <p className="cert-subtext">
                A showcase of courses and certifications I’ve earned across various technologies.
            </p>

            <div className="cert-grid">
                {certificates.map((cert, index) => (
                    <div key={index} className="cert-card">
                        <img src={cert.img} alt={cert.title} className="cert-thumbnail" />

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

            {/* Modal */}
            {selectedCert && (
                <div className="cert-modal" onClick={() => setSelectedCert(null)}>
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="cert-close" onClick={() => setSelectedCert(null)}>
                            &times;
                        </span>
                        <img src={selectedCert} alt="Certificate" className="cert-modal-img" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default CertificatesSection;