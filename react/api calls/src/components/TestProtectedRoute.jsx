import React from 'react'

const TestProtectedRoute = ({ Component }) => {
    const oddDays = [1, 3, 5]
    const evenDays = [2, 4, 6]

    const day = new Date().getDay()

    const oddDay = oddDays.includes(day)
    const evenDay = evenDays.includes(day)
    return (
        <>
            {/* {oddDay && <>
                <div>Day is odd</div>
                <Component /></>}
            {evenDay && <>
                <div>Day is even</div>
                <Component /></>}
            {!evenDay && !oddDay && <>
                <div>Day is Sunday</div>
                <Component /></>} */}
               {oddDay ? <> 
                <Component />
                <h1></h1>
               </> : "No access on even Days"}
        </>
    )

}

export default TestProtectedRoute