function validAnagram(s, t){
    if(s.length !== t.length){
        return false
    }
    const mutate = str => str.split('').sort().join('')

    return mutate(s) === mutate(t)
}
console.log(validAnagram('anagram', 'nagaram'))

// console.log("mujtaba".split(" "))