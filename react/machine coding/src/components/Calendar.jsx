import React, { useState } from 'react'

const Calendar = () => {

    const [yourDate, setYourDate] = useState(null)

    let minDate = new Date();
    minDate.setDate(minDate.getDate() - 31);
    const minDateToString = minDate.toISOString().split('T')[0]

    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30)
    const maxDateToString = maxDate.toISOString().split('T')[0]
    return (
        <div>

            <input min={minDateToString} max={maxDateToString} type="date" name="" id="" onChange={(e) => setYourDate(e.target.value)} />
            <p>date picked: {yourDate}</p>
        </div>
    )
}

export default Calendar