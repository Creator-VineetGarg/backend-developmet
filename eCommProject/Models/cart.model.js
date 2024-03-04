const mongoose = require('mongoose')

// Defining Schema
const cart_schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    productId : {
        type : Number,
        required : true,
        unique : true
    },
    quantity : {
        type : Number,
        required : true,
        default : 1
    },
    total_cost : {
        type : Number,
        required : true,
    }
}, {timestamps: true, versionKey: false})

module.exports = mongoose.model('cart', cart_schema)