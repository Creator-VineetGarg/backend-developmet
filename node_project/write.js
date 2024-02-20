const fs = require('fs')

/**
 * In Sync Mode
 */

console.log("First Line")

// fs.writeFileSync('output.txt', "Hello World!!")


/**
 * In Async MOde
 */

fs.writeFile('output2.txt', "Hello World!!1", (err)=>{
    if(err){
        return console.log(err)
    }else{
        console.log("written Successfully")
    }
})
console.log("Last Line")