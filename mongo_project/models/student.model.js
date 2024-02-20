/**
 * Define the schema of Students collection to be stored in the DB
 */

const mongoose = require('mongoose');

// Defining Schema

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Go ahead and create corresponding collection 
// Student --> Name of collection
// studentSchema --> Schema of the document
module.exports = mongoose.model('Student', studentSchema)

