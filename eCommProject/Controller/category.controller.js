/**
 * Defining controller for creating the category
 */
const category_model = require('../Models/category.model')
exports.createNewCategory = async(req, res)=>{
    // read the response body
    // const request_body = req.body

    // create the category object
    const cat_data = {
        name : req.body.name,
        description : req.body.description
    }

    // insert the object into mongodb
    try{
        
    const category = await category_model.create(cat_data)
    return res.status(201).send(category)
    }catch(err){
        console.log("Error while creating the category")
        res.status(500).send({
            message : "Error while creating the category"
        })
    }

    // Return the response of the created category
}