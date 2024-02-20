const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true,
        min : 18
    }, 
    email : {
        type : String,
        required : true,
        minLength : 15,
        lowercase : true
    },
    subjects : [String],
    branch : {
        type : String,
        required : true
    }
    
}, {versionKey: false, timestamps: true} )

module.exports = mongoose.model('student', studentSchema)