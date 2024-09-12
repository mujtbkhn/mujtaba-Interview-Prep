// You have been given a task to create a simple React component that allows users to input text and submit it. After submission, the entered text should be displayed on the screen along with all previously submitted text. How would you implement this functionality using React?

import React, { useState } from 'react'

const Text = () => {
    const [allText, setAllText] = useState([])
    const [newValue, setNewValue] = useState('')


    const handleChange = (event) => {
        setNewValue(event.target.value)
    }

    const handleClick = () => {
        if (newValue.trim()) {
            setAllText([...allText, newValue])
            setNewValue('')
        }
    }

    return (
        <div>
            <input type="text" placeholder='type anything...' onChange={handleChange} />
            <button onClick={handleClick}>submit</button>
            {allText.map((item, i) => (
                <li key={i}>
                    {item}
                </li>
            ))}
        </div>
    )
}

export default Text