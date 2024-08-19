//write a program for custom string method for repeat 

//"Hello" => "Hello Hello Hello" without using repeat keyword

function customRepeat(str, n){
    let repeat = ""
     for(let i=0; i<n ; i++){
        repeat += str + ' '
     }
     console.log(repeat)
}
customRepeat("Hello", 3)