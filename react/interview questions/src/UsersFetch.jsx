import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UsersFetch = () => {
    const [userDetails, setUserDetails] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(userDetails)
    }, [userDetails])

    const fetchData = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            const json = await data.json()
            setUserDetails(json)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>UsersFetch</div>
    )
}

export default UsersFetch