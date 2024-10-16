import react, { useReducer, useRef } from "react"

export const ShoppingList = () => {
    const inputRef = useRef()
    const [items, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return [
                    ...state,
                    {
                        id: state.length,
                        name: action.name
                    }
                ]
            case 'remove':
                return state.filter((_, i) => i !== action.index);
            case 'clearAll':
                return []
            default:
                return state
        }
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        dispatch({
            type: 'add',
            name: inputRef.current.value
        })
        inputRef.current.value = ''
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
            </form>
            <button onClick={() => dispatch({ type: 'clearAll' })}>clear</button>
            {items.map((item, index) => (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => dispatch({ type: 'remove', index })}>
                        X
                    </button>
                </li>
            ))}
        </>
    )

}
// export default ShoppingList