import React, { useState } from 'react'

const ListWithCheckbox = () => {
    const arr = ['play cricket', 'play video game', 'read book']
    const [list, setList] = useState(arr)
    const [remove, setRemove] = useState(false)

    const handleDelete = (id) => {
        setList(list.filter((item, i) => i !== id))
    }

    const handleShowDelete = (id) => {
        setRemove(!remove)
    }
    return (
        <div>
            {
                list.map((item, i) => (
                    <div key={i} style={{ display: 'flex' }}>
                        <input type="checkbox" name="" id="" onClick={() => handleShowDelete(i)} />
                        <li>{item}</li>
                        {remove && <button onClick={() => handleDelete(i)}>Delete</button>}
                    </div>
                ))
            }
        </div>
    )
}

export default ListWithCheckbox