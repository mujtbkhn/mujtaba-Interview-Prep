import React, { useEffect, useRef, useState } from 'react'

const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    const modalRef = useRef()

    useEffect(() => {
        const handleOutsideClick = (event) => {

            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false)
            }
        }

        if (showModal) {
            document.addEventListener('mousedown', handleOutsideClick)
        } else {
            document.removeEventListener('mousedown', handleOutsideClick)
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [showModal])
    return (
        <div style={{ height: '100%' }}>
            <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }} onClick={() => setShowModal(true)}>Show Modal!</button>
            {showModal && (
                <div ref={modalRef} style={{ width: '300px', 'height': '300px', border: '1px solid black', margin: '10rem auto', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1>this is a modal</h1>
                    <button onClick={() => setShowModal(false)}>close</button>
                </ div>
            )}
        </div>
    )
}

export default Modal