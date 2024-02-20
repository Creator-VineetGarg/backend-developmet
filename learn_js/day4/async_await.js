// Function start returning Promise Function
/**async function getMessage(){
    return "Hello"
}

getMessage().then((value)=>{console.log(value)})
*/

/**
 * Print Hello after a wait
 */
// Await always wait for the promise to resolve
console.log("Hello From Begining")
async function printHello(){
    console.log("First Line")

    let data = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Second Line")
        }, 3000)
    })
    
    let result = await data //Start Awaiting for the data promise to be completed
    console.log(result)
    console.log("Third Line")
}

printHello()
// printHello().then(result => console.log(result))
console.log("Hello Form End")
