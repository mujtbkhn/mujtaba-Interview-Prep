function swap(a,b){
    a = a + b;
    b = a - b; 
    a = a - b;

    // let temp;
    // temp = a
    // a = b;
    // b = temp

    //[a, b] = [b, a]

    console.log(a,b);
    return(a,b)
}
swap(1, 45)