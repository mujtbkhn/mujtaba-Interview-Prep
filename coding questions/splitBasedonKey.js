// split a string based on the key provided

function split(str, key) {
    let result = [];
    let currentWord = ''
    for (let char of str) {

        if (char === key) {
            result.push(currentWord)
            currentWord = ''
        } else {
            currentWord += char
        }
    }
    if (currentWord) {
        result.push(currentWord)
    }
    return result
}
console.log(split("mujju, buttu, ashu | sonu, farru", ","))