const fs = require('fs')

// console.log(typeof fs)

// console.log("First Line")

/**
 * Reading in sync mode
 *   const content = fs.readFileSync('input.txt')
*/

// const content = fs.readFile('input.txt')
// console.log("Output : " + content)

/**
 * Reading in Async File
*/

// fs.readFile('input.txt', (err, content)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log('Output: ' + content)
//     }
// })
// console.log("Last Line")

/**
 * Write file in Sync Mode
 */

console.log("First Line")

fs.writeFileSync('')

console.log("Last Line")