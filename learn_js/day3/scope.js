// Block
{

}

// Block Scope
/**
 * 
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
console.log(c)  
console.log(b)
*/

// Shadowing
/**
 * 
var a = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
*/

// Illegal Shadowing

/**
 * Valid
 */
let a = 20;
{
    let a = 20;
}

/**
 * Valid
 */
var b = 1
{
    var b = 1
}

/**
 * InValid
let c = 1
{
    var c = 1
}
*/
// Valid
let c = 1
function fn(){
    var c = 1
}