import React, { useState } from 'react'

const DifferentUI = () => {
    const [inputValue, setInputValue] = useState('')
    const [customStyles, setCustomStyles] = useState({
        change: false,
        focus: false,
        blurred: false
    })


    return (
        <div>
            <input type="text" placeholder='click, type, leave to see magic....' value={inputValue}
                onFocus={() => setCustomStyles({ ...customStyles, focus: true, change: false, blurred: false })}
                onBlur={() => setCustomStyles({ ...customStyles, focus: false, change: false, blurred: true })}
                onChange={(e) => {
                    setCustomStyles({ ...customStyles, focus: false, change: true, blurred: false })
                    setInputValue(e.target.value)
                }}
                style={{
                    border: customStyles.change ? '10px solid red' : customStyles.focus ? '10px solid green' :
                        customStyles.blurred ? '10px solid yellow' : null
                }} />
        </div>
    )
}

export default DifferentUI