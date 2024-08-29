import React, { useEffect, useState } from 'react'

const SimpleTimer = () => {

    const [timer, setTimer] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        let timerId = setInterval(() => {
            setTimer(new Date().toLocaleTimeString())
        }, 1000);

        return () => { clearInterval(timerId) }
    }, [timer])

    return (
        <>
            <h1>Timer : {timer}</h1>
        </>
    )
}

export default SimpleTimer