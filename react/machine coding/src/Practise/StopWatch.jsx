
import React, { useState } from 'react'

const StopWatch = () => {
    const [timer, setTimer] = useState(0)
    const [timeInterval, setTimeInterval] = useState(null)

    const handleStart = () => {
        setTimeInterval(setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000));
    }

    const handleStop = () => {
        clearInterval(timeInterval)
    }

    const handleReset = () => {
        clearInterval(timeInterval)
        setTimer(0)
    }
    return (
        <div>
            <h1>Timer : {timer}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default StopWatch