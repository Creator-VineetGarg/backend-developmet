const mongoose = require('mongoose');
const studentModel = require('./models/student.model.js')

/**
 * Write the code to connect with mongodb
 * 
 * db_demodb is the name of database
 * 127.0.0.1 is the machine
 */

mongoose.connect('mongodb://127.0.0.1/be_demodb')   //Where to Connect

const db = mongoose.connection //Start the connection with MongoDb

db.on('error', ()=>{
    console.log('Error while connceting to database.')
});

db.once("open", ()=>{
    console.log("Connected to MongoDb")

    // init()

    // Running the queries
    
    
});

//Logic to insert data into DB
async function init(){
    const student = {
        name: "Vineet",
        age: 19
    }
    const std_obj =  await studentModel.create(student)

    console.log(std_obj)
}
async function dbQuries(){
    console.log("Inside the dbQueries Function")
    try{
        const student = await studentModel.findById("65d0c6a746680e4f99e37b55")
        console.log(student)
    }catch(err){
        console.log(err)
    }
}