import React, { useState } from 'react';
import STAR from '../../public/star.png';

const StarRating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (
        <div className="star-rating">
            {rating}
            {Array.from({ length: 5 }, (_, i) => (
                <img
                    onMouseEnter={() => setHover(i + 1)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(i + 1)}
                    style={{ backgroundColor: (hover || rating) > i ? 'gold' : '' }}
                    src={STAR} alt='star' />
            ))}
            {/* <img style={{ backgroundColor: rating >= 1 ? 'gold' : '' }} onMouseEnter={() => setRating(1)} src={STAR} alt="star" />
            <img style={{ backgroundColor: rating >= 2 ? 'gold' : '' }} onMouseEnter={() => setRating(2)} src={STAR} alt="star" />
            <img style={{ backgroundColor: rating >= 3 ? 'gold' : '' }} onMouseEnter={() => setRating(3)} src={STAR} alt="star" />
            <img style={{ backgroundColor: rating >= 4 ? 'gold' : '' }} onMouseEnter={() => setRating(4)} src={STAR} alt="star" />
            <img style={{ backgroundColor: rating >= 5 ? 'gold' : '' }} onMouseEnter={() => setRating(5)} src={STAR} alt="star" /> */}
        </div>
    );
};

export default StarRating;
