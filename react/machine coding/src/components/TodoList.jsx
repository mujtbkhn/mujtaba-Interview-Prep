import React, { useEffect, useRef, useState } from 'react'

const TodoList = () => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([])
    const [editIndex, setEditIndex] = useState(-1)

    const inputRef = useRef()

    useEffect(()=>{
         inputRef.current.focus()
    }, [])

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            if (editIndex !== -1) {
                const newTodos = [...todos]
                newTodos[editIndex] = text
                setTodos(newTodos)
                setEditIndex(-1)
            } else {
                setTodos([...todos, text])
            }
            setText(' ')
        }
    }

    const handleRemove = (id) => {
        setTodos(todos.filter((todo, index) => index !== id))
    }
    const handleEdit = (id) => {
        setText(todos[id])
        setEditIndex(id)
        inputRef.current.focus()
    }
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" value={text} ref={inputRef} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddTodo}>{editIndex !== -1 ? 'Update' : 'Add'}</button>

            {todos.map((todo, i) => (
                <div key={i}>
                    <h1>{todo}</h1>
                    <button onClick={() => handleRemove(i)}>Remove</button>
                    <button onClick={() => handleEdit(i)}>Edit</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList