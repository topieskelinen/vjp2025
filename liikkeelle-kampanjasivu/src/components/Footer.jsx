import { useState, useEffect } from 'react';

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Disable scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => (document.body.style.overflow = 'auto'); // Cleanup on unmount
    }, [isModalOpen]);

    return (
        <>
            <div className="footer">
                <div className="contact_info">
                    <button onClick={openModal}>Contact information</button>
                </div>
                <div className="logos">
                    <img src='/images/instagram_icon.png' alt='instagram logo' />
                    <img src='/images/tiktok_icon.png' alt='tiktok logo' />
                    <img src='/images/facebook_icon.png' alt='facebook logo' />
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Contact Information</h2>
                        <p>Email: liikkeelle@liikkeelle.fi</p>
                        <p>Phone: +358 50 1234567</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}