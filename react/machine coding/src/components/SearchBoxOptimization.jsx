import React, { useEffect, useState } from 'react'

const SearchBoxOptimization = () => {
    const [inputVal, setInputVal] = useState("")
    const [suggestions, setSuggestions] = useState([])

    const debouncedSearch = debounce(inputVal, 300)

    const users = [
        { name: "Alice Johnson", email: "alice.johnson@example.com", city: "New York" },
        { name: "Bob Smith", email: "bob.smith@example.com", city: "Los Angeles" },
        { name: "Charlie Brown", email: "charlie.brown@example.com", city: "Chicago" },
        { name: "David Wilson", email: "david.wilson@example.com", city: "Houston" },
        { name: "Edward Thomas", email: "edward.thomas@example.com", city: "Phoenix" },
        { name: "Fiona Davis", email: "fiona.davis@example.com", city: "Philadelphia" },
        { name: "George Martinez", email: "george.martinez@example.com", city: "San Antonio" },
        { name: "Hannah Moore", email: "hannah.moore@example.com", city: "San Diego" },
        { name: "Irene Clark", email: "irene.clark@example.com", city: "Dallas" },
        { name: "Jack Lewis", email: "jack.lewis@example.com", city: "San Jose" },
    ];

    useEffect(() => {
        if (debouncedSearch.trim() === "") {
            setSuggestions(["Type something !"])
        } else if (!users.some(user => user.name.toLowerCase().includes(inputVal.toLowerCase()))) {
            setSuggestions(["Oopsie! no search results!"])
        }
        else {
            const filteredUsers = users.map(user => user.name).filter(name => name.toLowerCase().includes(debouncedSearch.toLowerCase()))
            setSuggestions(filteredUsers)
            console.log(suggestions)
        }
    }, [debouncedSearch])

    return (
        <>
            <input type="text" placeholder='search...' onChange={(e) => setInputVal(e.target.value)} />
            {
                suggestions.map((item, i) => {
                    const matchedIndex = item.toLowerCase().indexOf(inputVal.toLowerCase())
                    const beforeMatch = item.substring(0, matchedIndex);
                    const match = item.substring(matchedIndex, matchedIndex + inputVal.length);
                    const afterMatch = item.substring(matchedIndex + inputVal.length);

                    return (
                        <div key={i}>
                            {beforeMatch}
                            <span style={{ fontWeight: 'bold' }}>{match}</span>
                            {afterMatch}
                        </div>
                    )
                })
            }
        </>
    )
}

export default SearchBoxOptimization

const debounce = (value, delay) => {

    const [debounceValue, setDebounceValue] = useState("")

    useEffect(() => {
        let timerId = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return () => clearTimeout(timerId)

    }, [value, delay])
    return debounceValue
}