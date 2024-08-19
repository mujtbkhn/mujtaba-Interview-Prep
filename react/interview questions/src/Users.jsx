import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UserDetails = ({ user, onClose }) => {
    return (
        <>
            <h3>Address: {user.address.city}, {user.address.street}</h3>
            <h3>Company: {user.company.bs}</h3>
            <h3>Phone: {user.phone}</h3>
            <h3>Username: {user.username}</h3>
            <h3>Website: {user.website}</h3>
            <button onClick={onClose}>Close</button>
        </>
    )
}

const Users = () => {

    const [users, setUsers] = useState([])
    const [searchText, setSearchText] = useState('')
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response.data)
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()) || user.email.toLowerCase().includes(searchText.toLowerCase()))

    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder='search for user by name or email' onChange={handleSearch} />
            <table>
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Emails</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            <button onClick={() => setUserInfo(user)}>More Info</button>
                        </tr>
                    ))}
                </tbody>
            </table>
                    {userInfo && (
                        <>
                            <UserDetails user={userInfo} onClose={() => setUserInfo(null)} />
                        </>
                    )}
        </div>
    )
}

export default Users