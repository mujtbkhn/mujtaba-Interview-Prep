// Implement a form that takes input a number and fetches a specific post with the number as id from backend and hides the
// form once data is shown. It was just a simple 20 minutes round.

import React, { useEffect, useState } from 'react'

const FetchPost = () => {
    const [num, setNum] = useState(null)
    const [postsData, setPostsData] = useState(null)

    useEffect(() => {
        if (num) {
            fetchPost(num)
        }
    }, [num])

    const fetchPost = async (id) => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const json = await data.json()
            console.log(json)
            setPostsData(json)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            {!postsData && <input type="number" name="" id="" onChange={(e) => setNum(e.target.value)} placeholder='enter between 1- 100' />}
            {postsData && (
                <div >
                    <h1>{postsData.title}</h1>
                    <p>{postsData.body}</p>
                </div>
            )}
        </div>
    )
}

export default FetchPost