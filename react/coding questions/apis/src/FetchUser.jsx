import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

const FetchUser = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        setLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(response.data)
        console.log(response.data)
        setLoading(false)
    }

    if (loading) return <>...loading</>

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Emails</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <th>{item.name}</th>
                            <th>{item.email}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FetchUser