// Create an app that allows user to click a button 5 times, and times them out afterwards.

import React, { useEffect, useRef, useState } from 'react'

const Button5Times = () => {
    const [counter, setCounter] = useState(0);
    const [isTimeout, setIsTimeout] = useState(false)

    useEffect(() => {
        handleButtonPresses()
    }, [counter])

    const handleButtonPresses = () => {
        if (counter && counter >= 5) {
            setIsTimeout(true)
            setTimeout(() => {
                alert("Times out")
                setCounter(0)
                setIsTimeout(false)
            }, 3000);
        }
    }

    const handleClick = () => {
        if (!isTimeout) {
            setCounter(prev => prev + 1)
        }
    }

    return (
        <div>
            {counter}
            <button disabled={isTimeout} onClick={handleClick}>press</button>
            {isTimeout && <p>You have been timedOut</p>}
        </div>
    )
}

export default Button5Times