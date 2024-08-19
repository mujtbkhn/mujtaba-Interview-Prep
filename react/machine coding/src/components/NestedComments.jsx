import React, { useState } from 'react'

const NestedComments = () => {
    const [comments, setComments] = useState([])
    const [inputVal, setInputVal] = useState('')
    const [replies, setReplies] = useState('')
    const [replyingTo, setReplyingTo] = useState(null)

    const handleAddComment = () => {
        if (inputVal.trim() !== '') {

            setComments([...comments, { text: inputVal, replies: [] }])
            setInputVal('')
        }
    }

    const handleReplies = (id) => {
        setReplyingTo(id)
    }

    const handleAddReply = (id) => {
    }
    return (

        <div>
            <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            <button onClick={handleAddComment}>Add</button>

            <div>
                {comments.map((comment, i) => (
                    <div style={{ display: 'flex', gap: '10px' }} key={i}>
                        <h2>{comment.text}</h2>
                        <button onClick={() => handleReplies(i)} style={{ height: "25px", margin: "auto 0" }}>Reply</button>
                        {replyingTo === i && (
                            <>
                                <input type="text" onChange={(e) => setReplies(e.target.value)} />
                                <button onClick={handleAddReply(i)}>Add</button>
                                {/* {replies?.map((reply, i) => (
                                    <div key={i}>
                                        <h3>{reply}</h3>
                                    </div>
                                ))} */}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NestedComments