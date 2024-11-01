import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";

const FetchUser = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {

        try {
            setLoading(true)
            setIsError(null)
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            setIsError(error.message)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return (<div>Loading....</div>)
    if (isError) return (<div>{isError}</div>)

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
                    {data.map((user, i) => (
                        <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FetchUser