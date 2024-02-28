/**
 * Defining controller for creating the category
 */
const category_model = require('../Models/category.model')

/**
 * For POST method
 */
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

/**
 * For GET method
 */
exports.fetchCategory = async(req, res)=>{

    try{

        const categories = await category_model.find()
        // return it
        return res.status(201).send(categories)

    }catch(err){
        return res.status(500).send({
            message : "Error in fetching the categories"
        })
    }
    
}

/**
 * For PUT Method
 */
exports.editCategory = async(req, res)=>{

    try{

        // If the Category Doesnt' present then 
        const existingCategory = await category_model.findOne({ name: req.body.name });

        if (!existingCategory) {
            return res.status(400).send({
                message: "Category Not found"
            });
        }

        // Then Update
        await category_model.findOneAndUpdate({name : req.body.name}, {$set: {
            name : req.body.newName,
            description  : req.body.description
        }})

        
        // Returning the New Category
        const NewCategory = await category_model.findOne({name : req.body.newName})
        return res.status(201).send(NewCategory)

    }catch(err){
        return res.status(500).send({
            message : "Error in editing the category"
        })
    }
}


/**
 * For DELETE Method
 */
exports.deleteCategory = async(req, res)=>{
    try{
    
        // if category is not found
        const existingCategory = await category_model.findOne({ name: req.body.name });

        if (!existingCategory) {
            return res.status(400).send({
                message: "Category Not found"
            });
        }
        
        // then Delete
        await category_model.deleteOne({name: req.body.name})

        // Now it returns the categories left
        const categories = await category_model.find()
        return res.status(201).send(categories)
    
    }catch(err){
        return res.status(500).send({
            message : "Error in deleting the category"
        })
    }
}