function sortThePeople(names, heights) {
    const people = names.map((name, i) => ({name, height: heights[i]}))
    
    const sortPeople = people.sort((a, b) => a.height - b.height)
    return sortPeople
}

const names = ["Mary", "John", "Emma"]
const heights = [180, 165, 170]

console.log(sortThePeople(names, heights))