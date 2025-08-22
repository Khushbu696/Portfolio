import { useState } from 'react';
import '../styles/Certificate.css';
import css from '../assets/css_cer.png';
import javascript1 from '../assets/javascript(b)_cer.png';
import javascript2 from '../assets/javascript(in)_cer.png';

const Certificates = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const certificates = [
        {
            id: 1,
            image: css,
            title: "CSS (Basic)",
        },
        {
            id: 2,
            image: javascript1,
            title: "JavaScript (Basic)",
        },
        {
            id: 3,
            image: javascript2,
            title: "JavaScript (Intermediate)",
        },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div id="certificates">
            <h1>Certificates</h1>
            <div className="cer-container">
                {certificates.map((cert) => (
                    <div key={cert.id} className="cer-card">
                        <img src={cert.image} alt={cert.title} />
                        <p>{cert.title}</p>
                        <button
                            className="view-button"
                            onClick={() => openModal(cert.image)}
                        >
                            View Certificate
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal Implementation */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img
                            src={selectedImage}
                            alt="Certificate"
                            className="modal-image"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificates;
