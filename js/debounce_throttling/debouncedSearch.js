const { debounce } = require('./debouncing')

const fetchDictionary = async (searchTerm) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}

// fetchDictionary("hello")

const debouncedSearch = debounce(fetchDictionary, 5000)

debouncedSearch("world");
debouncedSearch("anime");
debouncedSearch("wild");
debouncedSearch("scenes");