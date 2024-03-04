const product_module = require("../Models/product.model")
const category_model = require("../Models/category.model")

/**
 * For POST method
 */
exports.newProduct = async (req, res)=>{

    // Finding the category
    const category = await category_model.findOne({name : req.body.categoryName})
    
    if(!category){
        return res.status(401).send({message: "Category not found"})
    }
    // Create Object
    const product_data = {
        name : req.body.name,
        categoryName : req.body.categoryName,
        productId : req.body.productId,
        description : req.body.description,
        price : req.body.price
    }

    // Insert the object Into MongoDB
    try{
        const product = await product_module.create(product_data)

        // return the product 
        return res.status(201).send(product)


    }catch(err){
        console.log(err)
        res.status(500).send({
            
            message : "Error in creating product"
        })
    }
}


/**
 * For GET method
 */

exports.fetchProducts = async (req, res)=>{
    try{
        const products = await product_module.find()
        return res.status(200).send(products)
    }catch(err){
        return res.status(400).send({
            message : "Error in fetching the products"
        })
    }
}

/**
 * Put Method
 */

exports.editProduct = async(req, res)=>{
    try{

        // Check if the product exist

        const existingCategory = await product_module.findOne({productId : req.body.productId})

        if(!existingCategory){
            return res.status(400).send({
                message : "Product ID doesn't exisits"
            })
        }


        // Update it
        await product_module.findOneAndUpdate({productId : req.body.productId}, {$set : {
            name : req.body.name,
            description : req.body.description,
            price : req.body.price
        }})

        // Returning the new product
        const newProduct = await product_module.findOne({productId : req.body.productId})
        return res.status(200).send(newProduct)
    }catch{
        return res.status(400).send({
            message : "Error while Editing the product"
        })
    }
}

/**
 * DELETE Method
 */

exports.deleteProduct = async(req, res)=>{
    try{
        // Check if the product exist

        const existingCategory = await product_module.findOne({productId : req.body.productId})

        if(!existingCategory){
            return res.status(400).send({
                message : "Product ID doesn't exisits"
            })
        }
        
        // Then Delete Product on the basis of Product ID
        await product_module.deleteOne({productId : req.body.productId})

        // Then return the all products
        const products = await product_module.find()
        return res.status(200).send(products)

        
    }catch{
        return res.status(400).send({
            message : "Error while Deleting the product"
        })
    }
}