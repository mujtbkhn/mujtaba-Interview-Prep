//SHALLOW CLONING : TOP LEVEL CLONING

{
    let arr1 = [10, 20, 50]

    let arr2 = [...arr1]
    arr2[1] = 200

    // console.log(arr2)
    // console.log(arr1)
}
//SEE....NOW.... WE HAVE OUR DESIRED RESULT BECAUSE OF THE ... SPREAD OPERATOR NOW WE CREATED A SHALLOW COPY OF ARR1 IN ARR2 MEANING THEY BOTH NOW HAVE THEIR OWN REFERENCES IN THE MEMORY 

{
    let obj1 = {
        id: "69",
        name: {
            firstName: "Abdul Rehman Mujtaba",
            lastName: "Khan"
        }
    }

    let obj2 = { ...obj1 }

    obj2.id = "11"
    obj2.name.lastName = "jeelani"

    // console.log(obj1)
    // console.log(obj2)
}
//WHAT ... IT ONLY SHALLOW COPIED THE FIRST LEVEL IE ID BUT NOT THE LASTNAME ?? YES BECAUSE SPREAD OPERATOR ONLY SHALLOW COPIES THE TOP LEVEL AND ANYTHING BELOW THIS IS NOT BEING CLONED IN A NEW REFERENCE THUS THE BELOW KEY VALUE PAIRS SHARE SAME MEMORY LOCATION IN BOTH THE OBJECTS

//WHATS THE FIX ...... IT IS DEEP CLONING
