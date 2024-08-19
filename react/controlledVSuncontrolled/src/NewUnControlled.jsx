import React, { useRef } from 'react'

const NewUnControlled = () => {
    const inputRef = useRef()

    const handleValue = () => {
        alert(`the display value is ${inputRef.current.value}`)
    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleValue}>Display Value</button>
    </div>
  )
}

export default NewUnControlled