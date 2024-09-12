import React, { useEffect, useState } from 'react'

const ImageCarousel = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        let timerId;
        if (isPlaying) {
            timerId = setInterval(() => {
                setSlideNumber(prevSlides => (prevSlides + 1) % IMAGES.length)
            }, 1000);
        }

        return () => clearInterval(timerId)
    }, [isPlaying])
    const IMAGES = [
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+0'],
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+1'],
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+2'],
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+3'],
        ['https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter+4'],
    ]

    const handlePrev = () => {
        setSlideNumber(prevSlides => (prevSlides - 1 + IMAGES.length) % IMAGES.length)
    }
    const handleNext = () => {
        setSlideNumber(prevSlides => (prevSlides + 1) % IMAGES.length)
    }
    const handlePlay = () => {
        setIsPlaying(true)
    }
    const handleStop = () => {
        setIsPlaying(false)
    }
    return (
        <>
            <div>ImageCarousel</div>
            {slideNumber}
            <img src={IMAGES[slideNumber]} alt="" />
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default ImageCarousel