//Primitive values copy 

{
    let x1 = "mujju";

    let x2 = x1

    x2 = "Mujtaba"

    // console.log(x2)
    // console.log(x1)
}
{
    let s1 = 100;
    let s2 = s1
    s2 = 10

    // console.log(s2)
    // console.log(s1)
}

//these doesnt change the values of the variable from where we are copying x1 and s1

//  NON PRIMITIVE VALUES COPY

// ARRAYS
{
    let arr1 = [10, 20, 50]

    let arr2 = arr1
    arr2[1] = 200

    // console.log(arr2)
    // console.log(arr1)
}

//GAME ....  HERE WE COPIED ARR1 INTO ARR2 AND CHANGED ARR2 BUT IT ALSO CHANGED ARR1 WHY? BECAUSE NON PRIMITIVE TYPES COPY BY REFERENCES IN THE MEMORY SO THESE TWO ARRAYS SHARE THE SAME MEMORY AND HENCE ANY CHANGE IN ONE RESULTS IN CHANGING THE OTHER

// OBJECTS 

{
    let obj1 = {
        id: "69",
        name: {
            firstName: "Abdul Rehman Mujtaba",
            lastName: "Khan"
        }
    }

    let obj2 = obj1

    obj2.name.lastName = "jeelani"

    // console.log(obj1)
    // console.log(obj2)
}

// SAME GAME....