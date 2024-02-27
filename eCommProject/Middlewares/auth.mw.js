/**
 * Create a mw will check if the request body is proper and correct
 */

const user_model = require('../Models/user.model')

const verifySignupBody = async (req, res, next) => {
    try {
        // Check for the name
        if (!req.body.name) {
            return res.status(400).send({
                message: "Failed!!! Name was not Provided in request body"
            })
        }

        // check for the email
        if (!req.body.email) {
            return res.status(400).send({
                message: "Failed!!! Email was not Provided in request body"
            })
        }

        // Check for the userId
        if (!req.body.userId) {
            return res.status(400).send({
                message: "Failed!!! userId was not Provided in request body"
            })
        }

        // Check for existing email or not
        const mail = await user_model.findOne({ email: req.body.email })

        if (mail) {
            res.status(400).send({
                message: "Failed!!! Email has been already defined in request body"
            })
        }

        // Check for existing userID or not
        const user = await user_model.findOne({ userId: req.body.userId })

        if (user) {
            return res.status(400).send({
                message: "Failed!!! UserId was already defined in request body"
            })
        }

        next()

    } catch (err) {
        console.log("Error while validating the request object body", err)
        res.status(500).send({
            message: 'Error while validating'
        })

    }
}

const verifySigninBody = async (req, res, next) => {
    if(!req.body.userId){
        return res.status(400).send({

            message : "UserId is not provided"
        })
    }
    if(!req.body.password){
        return res.status(400).send({

            message : "Password is not provided"
        })
    }
}

module.exports = {
    verifySignupBody: verifySignupBody,
    verifySigninBody : verifySigninBody
}