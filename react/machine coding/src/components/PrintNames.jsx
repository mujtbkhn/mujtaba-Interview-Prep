import React, { useState } from 'react'

const PrintNames = () => {
    const array = [ "mujtaba", "nabil", "affan", "saif", "khan"]
    const [num, setNum] = useState(0)
  return (
    <div>
        <button onClick={() => setNum(num => num + 1)}>{array[num]}</button>
    </div>
  )
}

export default PrintNames