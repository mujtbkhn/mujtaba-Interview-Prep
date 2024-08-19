import React, { useEffect, useState } from 'react'

const SimpleTimer = () => {

    const [timer, setTimer] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        let timer = setInterval(() => {
            setTimer(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(timer)
    }, [timer])
    return (
        <>
            <h1>timer : {timer}</h1>
        </>
    )
}

export default SimpleTimer