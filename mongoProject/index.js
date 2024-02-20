const mongoose = require('mongoose')
const studentModel = require("./Models/studentModel1") 

mongoose.connect('mongodb://127.0.0.1/testdb')

const db = mongoose.connection

db.on('error', ()=>{
    console.log("Connection Failed!!!")
})

db.once('open', ()=>{
    console.log("Connected to MongoDb...")

    init()

    // dbQueries()
})

async function init(){
    const student = {
        name: "Harsh",
        age : 19,
        email : "contact.vineetgarg@gmail.com",
        subjects : ['Python', 'CN', 'SE', 'PHP', 'CC'],
        branch : 'Computer'
    }
    const std_obj = await studentModel.create(student)
    console.log(std_obj)
    console.log("Data Saved...")
}

async function dbQueries(){
    console.log("Inside the DB Queries...")

    // console.log("Find By Order Id")
    // try{
    //     const student = await studentModel.findById('65d2dbdcc05866602bcbea03')
    //     console.log(student)
    // }catch(err){
    //     console.log(err)
    // }

    // console.log("Find By Name")
    // try{
    //     // const student = await studentModel.findOne({name: "Vineet"})
    //     // const student = await studentModel.findOne({name: "Vineet"})
    //     const student = await studentModel.find({})
    //     console.log(student)
    // }catch(err){
    //     console.log(err)
    // }

    // console.log("Find all")
    // try{
    //     const student = await studentModel.find()
    //     console.log(student)
    // }catch(err){
    //     console.log(err)
    // }

    // console.log("Find by Email")
    // studentModel.find({email: "contact.vineetgarg@gmail.com"})

    /**
     * Deal with the multiple conditions
     * 
     */

    // const student = await studentModel.where("age").gt('10').where("name").equals('Vineet').limit(2)
    // console.log(student)

    /**
     * Delete a document where name = "Vishwa"
     */

    const student = await studentModel.deleteOne({name: "Vishwa"})
    console.log(student)
}