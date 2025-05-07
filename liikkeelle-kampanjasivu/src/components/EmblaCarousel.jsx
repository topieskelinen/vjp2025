import React, { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      containScroll: 'trimSnaps',
    },
    [autoplay.current]
  )
  return (
    <div className="embla-wrapper">
      <h2>Sosiaalinen media</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <video className="media-slide" controls>
              <source src="/videos/tiktok1.mp4" type="video/mp4" />
              Selaimesi ei tue videon toistoa.
            </video>
          </div>
          <div className="embla__slide">
            <img className="media-slide" src="/images/igkuva6.png" alt="IG kuva" />
          </div>
          <div className="embla__slide">
            <img className="media-slide" src="/images/igkuva7.png" alt="IG kuva" />
          </div>
          <div className="embla__slide">
            <img className="media-slide" src="/images/igkuva8.png" alt="IG kuva" />
          </div>
          <div className="embla__slide">
            <video className="media-slide" controls>
              <source src="/videos/tiktok2.mp4" type="video/mp4" />
              Selaimesi ei tue videon toistoa.
            </video>
          </div>
          <div className="embla__slide">
            <img className="media-slide" src="/images/igkuva2.png" alt="IG kuva" />
          </div>
          <div className="embla__slide">
            <img className="media-slide" src="/images/igkuva3.png" alt="IG kuva" />
          </div>
          <div className="embla__slide">
            <img className="media-slide" src="/images/igkuva4.png" alt="IG kuva" />
          </div>
          <div className="embla__slide">
            <img className="media-slide" src="/images/igkuva5.png" alt="IG kuva" />
          </div>
          <div className="embla__slide">
            <img className="media-slide" src="/images/facebook1.png" alt="Facebook tapahtuma" />
          </div>
          <div className="embla__slide">
            <img className="media-slide" src="/images/igkuva1.png" alt="IG kuva" />
          </div>
        </div>
      </div>
    </div>
  )
}