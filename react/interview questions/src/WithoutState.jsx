import React from 'react'
import { useState } from 'react'

const WithoutState = () => {
    const [value, setValue] = useState(1)
    // const [multipliedValue, setMultipliedValue] = useState(1)
    let multipliedValue = value * 5

    const multiplyByFive = () =>{
        setValue(value + 1)
        // setMultipliedValue(multipliedValue + 1)
    }

  return (
    <div>
        <h1>Main Value: {multipliedValue}</h1>
        <button onClick={() => multiplyByFive()}>Multiply by 5</button>
        <h1>Multiplied Value : {value}</h1>
    </div>
  )
}

export default WithoutState