/**
 * I need to write the controller | logic to register a user
 */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user_model = require("../Models/user.model")
const Secret = require('../Configs/auth.config')

exports.signup = async (req, res) => {
    /**
     * Logic to create the user
     */

    // 1. Read the request body
    const request_body = req.body

    // 2. Insert the data in the User collection in MongoDB
    const userObj = {
        name: request_body.name,
        userId: request_body.userId,
        email: request_body.email,
        userType: request_body.userType,
        password: bcrypt.hashSync(request_body.password, 8)

    }

    try {
        const user_created = await user_model.create(userObj)

        const req_obj = {
            name: user_created.name,
            userId: user_created.userId,
            userType: user_created.userType,
            email: user_created.email

        }

        res.status(201).send(req_obj)
    }
    catch (err) {
        console.log("Error")
        res.status(500).send({
            message: "Some error occured while registering the user."
        })

    }

    // 3. Return the response back to the user
}

exports.signin = async(req, res)=>{

    // Checks if the user id is present in the database
    const user = await user_model.findOne({userId : req.body.userId}) 

    if(user == null){
        res.status(400).send({
            message : "User Id passed is not a valid user"
        })
    }

    // Checks if the password is correct
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
    if(!isPasswordValid){
        res.status(400).send({
            message : "Wrong Password passed!!!"
        })
    }
    
    // Using JWT we will create the access token with a given TTL and return it.
    const token = jwt.sign({id : user.userId}, Secret.secret, {
        expiresIn : 120
    })

    res.status(200).send({
        name : user.name,
        userId : user.userId,
        email : user.email,
        userType : user.userType,
        accessToken : token
    })
}