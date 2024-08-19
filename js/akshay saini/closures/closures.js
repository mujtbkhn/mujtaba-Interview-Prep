
function x() {
    var a = 7;
    function y() {
        var b = 900
        function z() {
            console.log(a, b)
        }
        z()
    }
    // a = 100
    y()
}
const z = x()
console.log(z)

/**
 * a function returned along with its lexical environment is called closure, in closures a variable remembers its parents variables and thus can return value from them 
 */