import React, { useEffect, useState } from 'react'

const CountryDropdown = () => {
    const [country, setCountry] = useState([])

    const countries = [
        { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
        { name: 'Pakistan', value: 'PAK', cities: ['Lahore', 'Karachi'] },
        { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
    ]
    const cities = countries.filter((item) => item.value === country)
    console.log(cities)
    return (
        <div>
            <select name="" id="" onChange={(e) => setCountry(e.target.value)}>
                {countries.map((item) => (
                    <option value={item.value}>{item.name}</option>
                ))}
            </select>
            <select name="" id="" value={country}>
                {
                    cities.map((city, index) => (
                        <option value={index}>{city.cities}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default CountryDropdown