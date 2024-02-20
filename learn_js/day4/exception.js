/**
 * Syntax Error
 */
// console.log("Hello"

/**
 * Type Error
 */
// let x = 5
// console.log(x.toUpperCase())

/**
 * Logical Error
 */
// let num = 5
// for(i=-3; i<5; i++){
//     console.log(num/i)  //Zero Division Error
// }

try{
    let obj = undefined
    console.log(obj.name)
}catch(err){
    console.log(err)
    console.log("Exception Handled")
}finally{
    console.log("Final Code")
}