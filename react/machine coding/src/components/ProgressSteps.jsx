import React, { useEffect, useState } from 'react';

const ProgressSteps = () => {

    const [currentIndex, setCurrentIndex] = useState(-1)

    useEffect(() => {
        console.log(currentIndex)
    }, [currentIndex])

    const lines = Array(4).fill(0);

    const handleNext = () => {
        if (currentIndex < lines.length - 1) setCurrentIndex(currentIndex + 1)
    }

    const handlePrevious = () => {
        if (currentIndex >= 0) setCurrentIndex(currentIndex - 1)
    }


    return (
        <div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                {lines.map((_, index) => (
                    <div key={index} style={{ width: '10rem', height: '10px', backgroundColor: index <= currentIndex ? 'blue' : 'black' }}></div>
                ))}
            </div>
            <button onClick={handlePrevious} disabled={currentIndex === -1}>Prev</button>
            <button onClick={handleNext} disabled={currentIndex === lines.length - 1}>Next</button>
        </div>
    );
};

export default ProgressSteps;
