const express = require('express')
console.log(typeof express)

const app = express()

/**
 * See a req - res cycle
 */

app.get("/", (req, res)=>{
    res.send("hello from the express")
})

/**
 * Starting the app server
 */

app.listen(8000, ()=>{
    console.log("Server got start...")
})
