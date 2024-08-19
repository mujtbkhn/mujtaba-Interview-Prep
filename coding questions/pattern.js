// Check if a string contains a certain pattern.
function containsPattern(str, pattern) {

    return str.includes(pattern)
}

let mainStr = "abcde aadvc";
let pattern = "bcd";
console.log(containsPattern(mainStr, pattern)); 