import React, { useEffect, useState } from 'react'

const ColorChangeBox = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null))
  const [isYellow, setIsYellow] = useState(Array(9).fill(false))
  const [result, setResult] = useState([])

  useEffect(() => {
    handleAllClicked()
  }, [boxes, result])

  useEffect(() => {
    console.log(result)
  }, [result])

  const handleAllClicked = () => {
    if (boxes.every((box) => box !== null) && result.length === boxes.length) {
      console.log('all filled');

      result.forEach((index, i) => {
        setTimeout(() => {
          setIsYellow((prev) => {
            const updatedYellow = [...prev];
            updatedYellow[index] = false; // Change back to yellow
            return updatedYellow;
          });
        }, i * 1000); // Delay of 1 second per box
      });

      setResult([])

    }
  };

  const handleBoxClick = (i) => {
    if (isYellow[i]) return

    setBoxes((prev) => {
      const updatedBoxes = [...prev];
      updatedBoxes[i] = 'filled'; // Mark as filled
      return updatedBoxes;
    });

    setIsYellow((prev) => {
      const updatedYellow = [...prev];
      updatedYellow[i] = true; // Change to green
      return updatedYellow;
    });

    setResult((prev) => [...prev, i])
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      ColorChangeBox
      {boxes.map((box, i) => (
        <div onClick={() => handleBoxClick(i)} style={{ height: '150px', width: '150px', backgroundColor: isYellow[i] ? 'yellow' : 'green', margin: '1rem' }} key={i}>
          {i + 1}
        </div>
      ))}
    </div>
  )
}

export default ColorChangeBox