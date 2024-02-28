const category_routes = require('../Controller/category.controller')
const authMw = require('../Middlewares/auth.mw')
module.exports = (app)=>{
    app.post("/ecomm/api/v1/categories", category_routes.createNewCategory)
    app.get("/ecomm/api/v1/getCategories", category_routes.fetchCategory)
    app.put("/ecomm/api/v1/editCategories", category_routes.editCategory)
    app.delete("/ecomm/api/v1/delCategories", category_routes.deleteCategory)
    // app.post("/ecomm/api/v1/categories",[authMw.verifyToken], category_routes.createNewCategory)
}