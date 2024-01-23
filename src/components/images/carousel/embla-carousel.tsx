// EmblaCarousel.tsx
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import "./embla-carousel.css"
import { DotButton, useDotButton } from './embla-carousel-nav'

type Image = {
    src: string,
    alt: string
};

export const EmblaCarousel = (props: { images: Image[] }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    return (
        <>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {props.images.map((image, index) => (
                            <div className="embla__slide" key={index}>
                                <img className="embla__slide__img" loading={index==0 ? 'eager': 'lazy'} src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2 flex flex-row flex-wrap gap-[1rem] mt-[1rem] justify-center sm:justify-start items-center px-4 md:px-0">
                {props.images.map((image, index) => (
                    <DotButton
                        key={index}
                        imgSrc={image.src}
                        imgAlt={image.alt}
                        imgClassName={`zoomed-image embla__img 
                            ${index === selectedIndex ? 'border-white border-2 rounded-sm' : ''}
                        `}
                        onClick={() => onDotButtonClick(index)}
                        className="embla__dot"
                    />
                ))}
            </div>
        </>
    );
};