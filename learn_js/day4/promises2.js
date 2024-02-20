let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 seconds")
        resolve()
    }, 2000)
})

p1.then((value)=>{
    console.log("Promise 1 is resolved")
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Promise 2")
            resolve()
        }, 2000)
    })
    return p2
}).then((value)=>{
    console.log("We are done from Promise 2")
    
    let p3 = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Promise 3")
            resolve()
        }, 2000)
    })
    return p3
}).then((value)=>{
    console.log("Now we are pkka done.")
})

