/**
 * Promises Object (in-bulit)
 * --> Resolve  --> Settled
 * --> Reject   --> Settled
 */

// Promise from Simran
const simranPromise = new Promise((resolve, reject) =>{

     parentDecision = true

    if(parentDecision){
        resolve("Shaadi fix!!!", parentDecision)
    }
    else{
        reject("Sorry...", parentDecision)
    }

});    //Creating a new Promise

/**
 * Action on promise
 */
simranPromise.then((msg, pD)=>{ //Positive Part
    console.log("Simran Message: ", msg)
    console.log("Let's bok the weding situation", pD)
}).catch((msg, pD)=>{   //Negative Part
    console.log("Simran Message: ", msg)
    console.log("Sucide", pD)
}).finally(()=>console.log("Clearity Mil Gayi"))