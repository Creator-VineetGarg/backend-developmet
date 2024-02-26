/**
 * Post call
 */
const authController = require('../Controller/auth.controller');

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup", authController.signup)
}