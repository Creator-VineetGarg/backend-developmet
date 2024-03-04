const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    categoryName : {
        type : String,
        required : true,
    },
    productId : {
        type : Number,
        unique : true,
        required : true
    },
    description : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,

    }

}, {timestamps : true, versionKey : false})

module.exports = mongoose.model("Product", productSchema)

