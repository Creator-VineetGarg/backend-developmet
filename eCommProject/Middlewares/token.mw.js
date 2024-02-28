const jwt = require("jsonwebtoken")
const auth_config = require("../Configs/auth.config")
const user_model = require('../Models/user.model')
const verifyToken = (req , res, next)=>{
    //Check if the token is present in the header
    const token = req.headers['x-access-token']

    if(!token){
        return res.status(403).send({
            message : "No token found : UnAuthorized"
        })
    }

    //If it's the valid token
    jwt.verify(token,auth_config.secret ,async (err, decoded)=>{
        if(err){
            return res.status(401).send({
                message : "UnAuthorized !"
            })
        }
        const user = await user_model.findOne({userId : decoded.id})
        if(!user){
            return res.status(400).send({
                message : "UnAuthorized, this user for this token doesn't exist"
            })
        }
        //Set the user info in the req body
        req.user = user
        next()
    } )

    

    //Then move to the next step
}

const isAdmin = (req, res, next) => {
    const user = req.user
    if(user && user.userType == "ADMIN"){
        next()
    }else{
        return res.status(403).send({
            message : "Only ADMIN users are allowed to access this endpoint"
        })
    }
}


module.exports = {
    verifyToken : verifyToken,
    isAdmin : isAdmin
}