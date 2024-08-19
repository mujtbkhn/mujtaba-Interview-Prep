function trim(str){

    let start = 0;
    let end = str.length - 1;
    let temp = ''
    while(start<str.length && str[start] === ' '){
        start++
    }
    while(end<str.length && str[end] === ' '){
        end--
    }
    for(let i=start; i<=end; i++){
           temp += str[i]
    }
    return temp
}
console.log(trim("        hello world    "))