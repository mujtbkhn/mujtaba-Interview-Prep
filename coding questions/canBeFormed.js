function canBeFormed(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

//    const map1 = new Map()
//    const map2 = new Map()
   
//    for(let char in str1 ){
//     map1[char] = (map1[char] || 0) + 1
//    }

//    for(let char in str2){
//     map2[char] = (map2[char] || 0) + 1
//    }
   
// console.log(map1)
// console.log(map2)
//    for(let char in map1){
//     if(map1[char] !== map2[char]){
//         return false
//     }
// }
// return true


return str1.split("").sort().join("") === str2.split("").sort().join("")
}
console.log(canBeFormed("aaz", "zaa"))