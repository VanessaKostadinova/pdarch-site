"use client"
import React, { useCallback, useMemo, useState } from 'react';

type Image = {
    src: string,
    alt: string
};

export default function Carousel(props: {images: Image[]}) {
    const images: Image[] = props.images;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const transition = useCallback((direction: string) => {
        let newIndex;
        if (direction === "forwards") {
            newIndex = (currentIndex + 1) % images.length;
            setDirection(1);
        } else {
            newIndex = (currentIndex - 1 + images.length) % images.length;
            setDirection(-1);
        }
        setPreviousIndex(currentIndex);
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    function setIndex = useCallback((newIndex: number) => {
        if (currentIndex > newIndex) {
            setDirection(-1);
        } else if (currentIndex === newIndex){
            setDirection(0);
        } else {
            setDirection(1);
        }
        setPreviousIndex(currentIndex);
        setCurrentIndex(newIndex);
    }, [currentIndex])

    function classCalculator(index: number): string {
        let classBuilder = "";
        if (index === currentIndex) {
            // push current image to the top and give it transition animation
            classBuilder += ' z-20 duration-500 ease-in-out';
            classBuilder += direction == 1 ? ' -translate-x-full  left-[100%]' : ' translate-x-full  right-[100%]';
        }
        else if (index === previousIndex) {
            // last image should be slightly above the others
            classBuilder += ' z-10';
        }
        else {
            // all other images are at the back
            classBuilder += ' z-0';
        }
        return classBuilder
    }
    // this pre-calculates the classes for each state, optimising the running
    const classCalculations = useMemo(() => 
        images.map((_, index) => classCalculator(index)),
        [currentIndex, previousIndex, direction]
    );

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-96 overflow-hidden md:h-96">
                {images.map((image, index) => (
                    <li key={index} className={`absolute ${classCalculations[index]} top-0 w-full h-full`} data-carousel-item>
                        <img src={image.src} className={`absolute w-full h-full object-cover`} alt={image.alt}/>
                    </li>
                ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((image, index) => (
                    <button key={index} onClick={()=>setIndex(index)} type="button" className={`block opacity-75 w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-50' : 'bg-gray-500'}`} aria-current={index === currentIndex} aria-label={`Slide ${index}`} data-carousel-slide-to={index}></button>
                ))}
            </div>
            <button onClick={()=>transition("backwards")} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={()=>transition("forwards")} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}