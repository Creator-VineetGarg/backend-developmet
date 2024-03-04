const product_model = require('../Models/product.model')
const category_model = require('../Models/category.model')

const verifyProductDetails = async(req, res, next)=>{
    try{
        // Check the name is present or not
        if(!req.body.name){
            return res.status(400).send({
                message : "Name is not provided"
            })
        }

        // Check the category is present or not
        if(!req.body.categoryName){
            return res.status(400).send({
                message : "categoryName is not provided"
            })
        }

        // Check the description is present or not
        if(!req.body.description){
            return res.status(400).send({
                message : "Description is not provided"
            })
        }

        // The decription length should be greater the 10 charcters
        if(req.body.description.length < 10){
            return res.status(400).send({
                message : "Description length should be greater than 10!!!"
            })
        }

        // Check if the category exist or not
        // const findCateoryName = req.body.categoryName
        // const existingCategory = await category_model.findOne({categoryName : req.body.findCateoryName})
        
        // if(!existingCategory){
        //     return res.status(400).send({
        //         message : "Category Name is not exists"
        //     })
        // }

        // Check the Price is present or not
        if(!req.body.price){
            return res.status(400).send({
                message : "Price is not provided"
            })
        }

        next()
    }catch(err){
        return res.status(400).send({
            message : "Error while validating the product details"
        })
    }
}

module.exports = {
    verifyProductDetails : verifyProductDetails
}

