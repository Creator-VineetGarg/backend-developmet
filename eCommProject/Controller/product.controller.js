const product_module = require("../Models/product.model")


/**
 * For POST method
 */
exports.newProduct = async (req, res)=>{

    // Create Object
    const product_data = {
        name : req.body.name,
        categoryName : req.body.categoryName,
        description : req.body.description,
        price : req.body.price
    }

    // Insert the object Into MongoDB
    try{
        const product = await product_module.create(product_data)

        // return the product 
        return res.status(200).send(product)


    }catch(err){
        return res.status(400).send({
            message : "Error in creating product"
        })
    }
}