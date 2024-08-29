import React from 'react'

const ProtectedRoute = ({ Component }) => {

    const day = new Date().getDay()

    const dates = [1, 3, 5];
    const restrictedDays = dates.includes(day)
    return (
        <>
            {
                restrictedDays ? "Sorry Cant Access today" : <Component />
            }
        </>
    )
}

export default ProtectedRoute