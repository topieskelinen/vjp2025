import { useState, useEffect } from 'react';

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => (document.body.style.overflow = 'auto');
    }, [isModalOpen]);

    return (
        <>
            <div className="footer">
                <div className="contact_info">
                    <button onClick={openModal}>Yhteystiedot</button>
                </div>
                <div className="logos">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src='/images/instagram_icon.png' alt='instagram logo' />
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                        <img src='/images/tiktok_icon.png' alt='tiktok logo' />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src='/images/facebook_icon.png' alt='facebook logo' />
                    </a>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Yhteystiedot</h2>
                        <p>Sähköposti: liikkeelle@liikkeelle.fi</p>
                        <p>Puhelinnumero: +358 50 1234567</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}