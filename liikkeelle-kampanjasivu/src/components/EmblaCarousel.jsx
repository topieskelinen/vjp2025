import React, { useRef, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function EmblaCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      containScroll: 'trimSnaps',
    },
    [autoplay.current]
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

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
      <div className="embla-wrapper">
        <h2>Sosiaalinen media</h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div
              className="embla__slide"
              onClick={() =>
                openModal(
                  <video className="media-slide" controls autoPlay>
                    <source src="/videos/tiktok1.mp4" type="video/mp4" />
                    Selaimesi ei tue videon toistoa.
                  </video>
                )
              }
            >
              <video className="media-slide">
                <source src="/videos/tiktok1.mp4" type="video/mp4" />
                Selaimesi ei tue videon toistoa.
              </video>
            </div>
            <div
              className="embla__slide"
              onClick={() =>
                openModal(
                  <img className="media-slide" src="/images/igkuva1.png" alt="IG kuva" />
                )
              }
            >
              <img className="media-slide" src="/images/igkuva1.png" alt="IG kuva" />
            </div>
            <div className="embla__slide" onClick={() => openModal(<img className="media-slide" src="/images/igkuva2.png" alt="IG kuva" />)}>
              <img className="media-slide" src="/images/igkuva2.png" alt="IG kuva" />
            </div>
            <div className="embla__slide" onClick={() => openModal(<img className="media-slide" src="/images/igkuva3.png" alt="IG kuva" />)}>
              <img className="media-slide" src="/images/igkuva3.png" alt="IG kuva" />
            </div>
            <div className="embla__slide" onClick={() => openModal(<img className="media-slide" src="/images/igkuva4.png" alt="IG kuva" />)}>
              <img className="media-slide" src="/images/igkuva4.png" alt="IG kuva" />
            </div>
            <div className="embla__slide" onClick={() => openModal(<img className="media-slide" src="/images/igkuva5.png" alt="IG kuva" />)}>
              <img className="media-slide" src="/images/igkuva5.png" alt="IG kuva" />
            </div>
            <div className="embla__slide" onClick={() => openModal(<img className="media-slide" src="/images/facebook1.png" alt="Facebook tapahtuma"/>)}>
              <img className="media-slide" src="/images/facebook1.png" alt="Facebook tapahtuma" id='facekuva'/>
            </div>
            </div>
            </div>
        </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalContent}
            <button onClick={closeModal}>Sulje</button>
          </div>
        </div>
      )}
    </>
  );