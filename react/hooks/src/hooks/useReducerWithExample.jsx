import React, { useReducer } from 'react'

const useReducerWithExample = () => {
    const [light, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "high":
                return { style: "black" }
            case "medium":
                return { style: "grey" }
            case "low":
                return { style: "yellow" }
            case "off":
                return { style: "white" }
            default:
                return state
        }
    }, { style: "off" })

    return (
        <div style={{ backgroundColor: light.style, height: "100vh", boxSizing: "border-box", padding: "0" }}>
            <button onClick={() => dispatch({ type: "high" })}>high</button>
            <button onClick={() => dispatch({ type: "medium" })}>medium</button>
            <button onClick={() => dispatch({ type: "low" })}>low</button>
            <button onClick={() => dispatch({ type: "off" })}>off</button>
        </div>
    )
}

export default useReducerWithExample