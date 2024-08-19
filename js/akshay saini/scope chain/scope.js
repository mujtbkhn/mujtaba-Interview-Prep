function a() {
    var b = 10
    c()
    function c() {
        console.log(b)
    }
}
a()
//here execution contexts of all functions will be made with thier lexical env ie their heirarchical env (functions with values from their parents) 
/**
 * GEC --> a --> c
 * so when c is called with logging b , it will look in its own env if not found then in the lexical env and if still not found then in its parents lexical env and then return with either the value found or not defined
 */