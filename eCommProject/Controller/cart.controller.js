const product_model = require('../Models/product.model')
const cart_model = require('../Models/cart.model');


/**
 * For POST method
 */
// Inserting the collection in database

exports.newCart = async(req, res)=>{

    try{
        // Check if the product_id present in the database
        const product = await product_model.findOne({productId : req.body.productId})
        if(!product){
            return res.status(400).send({
                message : "Product ID doesn't exisits"
            })
        }
        console.log("Product ID present in the database")
        const cart_data = {
            name: product.name,
            productId: req.body.productId,
            quantity: req.body.quantity,
            total_cost : product.price * req.body.quantity
    }

        const cart = await cart_model.create(cart_data)

        res.status(200).send(cart)
    }catch(err){
        res.status(400).send({
            message : "Error while creating cart"
        })
    }
}

/**
 * For GET method
 */

exports.fetchCart = async(req, res)=>{
    try{
        const cart = await cart_model.find()
        return res.status(200).send(cart)
    }catch(err){
        return res.status(400).send({
            message : "Error in fetching the cart"
        })
    }
}

/**
 * For PUT method
 */

exports.editCart = async (req ,res)=> {
    try{
        // Check if the product_id present in the database
        const existingproductId = await cart_model.findOne({productId : req.body.productId})
        if(!existingproductId){
            return res.status(400).send({
                message : "Product ID doesn't exisits"
            })
        }
        await cart_model.findOneAndUpdate({productId : req.body.productId}, {$set : {
            name : req.body.name,
            quantity : req.body.quantity,
            total_cost : req.body.total_cost
        }})
        const newCart = await cart_model.findOne({productId : req.body.productId})
        return res.status(200).send(newCart)
    }catch(err){
        return res.status(400).send({
            message : "Error while updating the quantity"
        })
    }
}

/**
 * For DELETE method
 */

exports.deleteCart = async(req, res)=>{
    try{

        // Check if the product_id present in the database
        const existingproductId = await cart_model.findOne({productId : req.body.productId})
        if(!existingproductId){
            return res.status(400).send({
                message : "Product ID doesn't exisits"
            })
        }
        await cart_model.deleteOne({productId : req.body.productId})
        const cart = await cart_model.find()
        return res.status(200).send(cart)
    }catch(err){
        return res.status(400).send({
            message : "Error while deleting the cart"
        })
    }
}

