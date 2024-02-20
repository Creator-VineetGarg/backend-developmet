/**
 * Define the schema of Students collection to be stored in the DB
 */

const mongoose = require('mongoose');

// Defining Schema

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type : Number,
        min : 18
    },
    email : {
        type: String,
        required : true,
        lowercase: true,
        minLength : 15
    }, 
    subjects : [String],
    createdAt: {
        type: Date,
        immutable : true,
        default: ()=>{
            return Date.now()
        }
    }
}, {versionKey: false, timstamps: true})
// 
// Go ahead and create corresponding collection 
// Student --> Name of collection
// studentSchema --> Schema of the document
module.exports = mongoose.model('Student', studentSchema)

