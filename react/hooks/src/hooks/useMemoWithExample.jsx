import React, { useState, useMemo } from 'react';

function UseMemoWithExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [newText, setNewText] = useState('');

    const expensiveCalculation = (num) => {
        console.log('calculating');
        for (let i = 0; i < 1000; i++) {
            // Simulate a heavy computation
        }
        return num * 2;
    };

    // const result = expensiveCalculation(count);
    const result = useMemo(() =>
        expensiveCalculation(count)
        , [count])

    return (
        <div>
            <h1>count: {result}</h1>
            <button onClick={() => setCount(count + 1)}>increment button</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
        </div>
    );
}

export default UseMemoWithExample;
