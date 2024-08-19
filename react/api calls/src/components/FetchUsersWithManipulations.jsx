import React, { useEffect, useState } from 'react'
import axios from "axios"

const FetchUsersWithManipulations = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setData(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    let manipulate = data.filter(user => user.email.endsWith('.biz')).sort((a, b) => a.name.localeCompare(b.name))
    // console.log(manipulate)

    return (
        <div>
            {manipulate.map((data) => (
                <li key={data.id}>
                    <h1>Name: {data.name}</h1>
                    <h3>Username: {data.username}</h3>
                    <h3>Email: {data.email}</h3>
                    <h3>Initials: {data.name.split(' ').map((name) => name[0]).join("")}</h3>
                    <h3>Company name: {data.company.name + " " + data.address.city}</h3>

                </li>
            ))}
        </div>
    )
}

export default FetchUsersWithManipulations