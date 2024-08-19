// Reverse a string without using the reverse() method.
function reverse(str){
    str = str.split(' ')
    let newStr = ""
    for(let i = str.length - 1; i>=0; i--){
        newStr += str[i]
    }
    return newStr
}
console.log(reverse("hello moto!"))