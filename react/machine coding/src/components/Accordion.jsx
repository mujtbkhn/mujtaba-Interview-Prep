import React, { useState } from 'react'

const Accordion = () => {

    const [clickId, setClickId] = useState(null)

    const data = [
        ["a winter day", "winter winter wintery winter jadsf sadfdsjafjsadfjdsajfsdjf"],
        ["cherie", "cherie is a food damn it"],
        ["matt rife", "best crowd work comedian, also handsome, but gayish"],
        ["pay for the job", "i want a minimum 5.5LPA job"],
    ]

    const handleClick = (id) => {
        setClickId(id)
    }
    return (
        <div>
            {data.map(([key, value], i) => (
                <div key={i}>
                    <button onClick={() => handleClick(i)}>{key}</button>
                    {clickId === i && <p>{value}</p>}
                </div>
            ))}
        </div>
    )
}

export default Accordion