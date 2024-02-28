const category_routes = require('../Controller/category.controller')
const authMw = require('../Middlewares/auth.mw')
module.exports = (app)=>{
    app.post("/ecomm/api/v1/categories", category_routes.createNewCategory)
    // app.post("/ecomm/api/v1/categories",[authMw.verifyToken], category_routes.createNewCategory)
}