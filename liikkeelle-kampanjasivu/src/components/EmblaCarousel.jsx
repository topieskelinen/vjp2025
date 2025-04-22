import React, { useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    containScroll: 'trimSnaps',
  }, [autoplay.current])

  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAutoplay = () => {
    if (!emblaApi) return

    if (isPlaying) {
      autoplay.current.stop()
      setIsPlaying(false)
    } else {
      autoplay.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="embla-wrapper">
        <h2>Sosiaalinen media</h2>
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
            <div className="embla__slide">Slide 1</div>
            <div className="embla__slide">Slide 2</div>
            <div className="embla__slide">Slide 3</div>
            <div className="embla__slide">Slide 4</div>
            <div className="embla__slide">Slide 5</div>
            </div>
        </div>
        <button className="start-autoplay-button" onClick={toggleAutoplay}>
            {isPlaying ? 'Pysäytä kuvat' : 'Kuvat liikkeelle'}
        </button>
    </div>
  )
}
