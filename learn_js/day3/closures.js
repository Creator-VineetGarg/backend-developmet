/**
 * Closures
 */

/**function hello(){
    let name = "Vishwa"
    console.log(name)
}

hello()

console.log(name)

function outerfn(){
    let outeraVar = "I'm a outer variable"
    function innerfn(){
        console.log(outeraVar)
    }
    
    return innerfn
}

let fn = outerfn()
fn()
console.log(fn)
**/

function x(){
    var a = 7
    function y(){
        console.log(a)
    }
    y()
}
x()