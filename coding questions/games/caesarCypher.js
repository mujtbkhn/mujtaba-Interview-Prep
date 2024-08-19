function encrypt(input, shift) {
    let result = ''
    for (let i = 0; i < input.length; i++) {
        let char = input[i]
        let charCode = input.charCodeAt(i)
        if (charCode >= 97 && charCode <= 122) {
            char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97)
        }
        result += char
    }
    return result
}
// console.log(encrypt('mujju', 6))

function decrypt(input, shift) {
    let result = ''
    for (let i = 0; i < input.length; i++) {
        let char = input[i]
        let charCode = input.charCodeAt(i)
        if (charCode >= 97 && charCode <= 122) {
            char = String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97)
        }
        result += char
    }
    return result
}
console.log(decrypt('sappa', 6))