import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [item, setItem] = useState('')
    const [editIndex, setEditIndex] = useState(-1)

    useEffect(() => {
        console.log(todos)
    }, [todos])

    const handleAdd = () => {
        if (editIndex !== -1) {
            const newTodos = [...todos]
            newTodos[editIndex] = item
            setTodos(newTodos)
            setEditIndex(-1)
        } else {
            setTodos([...todos, item])
        }
    }

    const handleRemove = (id) => {
        setTodos(todos.filter((todo, i) => i !== id))
    }

    const handleEdit = (id) => {
        setEditIndex(id)
        setItem(todos[id])
    }
    return (
        <div>
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo, i) => (
                <div key={i}>
                    <li>{todo}</li>
                    <button onClick={() => handleRemove(i)}>Remove</button>
                    <button onClick={() => handleEdit(i)}>Edit</button>
                </div>
            ))}
        </div>
    )
}

export default Todo