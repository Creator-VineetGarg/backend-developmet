const category_routes = require('../Controller/category.controller')

module.exports = (app)=>{
    app.post("/ecomm/api/v1/categories", category_routes.createNewCategory)
}