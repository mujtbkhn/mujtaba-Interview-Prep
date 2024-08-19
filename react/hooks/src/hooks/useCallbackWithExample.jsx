import React, { useCallback, useState } from 'react'


const ChildComponent = React.memo(({ onClick }) => {
    console.log('child component rendered')
    return (
        <>
            <button onClick={onClick}>click me</button>
        </>
    )
})

function useCallbackWithExample() {
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {

        console.log('button clicked')
    }, [])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment click : {count}</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <ChildComponent onClick={handleClick} />
        </div>
    )
}

export default useCallbackWithExample