//1
// debugger
function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i)
    }, 3000)
    console.log("Printed before")
}
x()

//will print "Printed before" first and then i as setTimeout is an asynchronous function its execution will be suspended for the time and js will move forward

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000);
    }
    console.log("printed")
}

x()

/*
6
6
6
6
6 */
//because of closures setTimeout function remembers the reference of i as 6 because of var which doesn't respect block scope and give the same memory location everytime and gets completely executed resulting in 6 and thus it prints this reference value for 5 times

//to solve this we can use let as it respects block scope which will make the reference of i execute with the function and create new copy of i everytime setTimeout is exec

function y() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000);
    }
    console.log("printed")
}

y()

//to solve with var only we need to create a closure which will have the copy of i everytime 

function z() {
    for (var i = 1; i <= 5; i++) {
        function close(i){

            setTimeout(function () {
                console.log(i)
            }, i * 1000);
        }
        close(i)
        //here we make a new function and pass in i as a copy such that after each second i gets a new copy of itself
    }
    console.log("printed")
}

z()