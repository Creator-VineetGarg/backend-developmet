/**
 * Post call
 */
const authMW = require('../Middlewares/auth.mw')
const authController = require('../Controller/auth.controller');

module.exports = (app) => {
    app.post("/ecomm/api/v1/auth/signup", [authMW.verifySignupBody], authController.signup)
    app.post("/ecomm/api/v1/auth/signin", authController.signin)
}