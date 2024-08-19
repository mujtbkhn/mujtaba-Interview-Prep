import React from 'react'

const ProtectedRoute = ({Component}) => {
    const day = new Date().getDay()

    const restricted = [1, 3, 5]

    const oddDays = restricted.includes(day)

    return (
        <>
            {oddDays ? <p>Not accessible on odd days</p> : <>
                <Component />
                <h1>Allowed now</h1>
            </>}
        </>
    )
}

export default ProtectedRoute