// EmblaCarousel.tsx
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import "./embla-carousel.css"

type Image = {
    src: string,
    alt: string
};

export const EmblaCarousel = (props: {images: Image[]}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
                {props.images.map((image, index) => (
                <div className="embla__slide" key={index}>
                    <img className="embla__slide__img" src={image.src} alt={image.alt} />
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};