const auth_mw = require('../Middlewares/auth.mw')

const category_controller = require('../Controller/category.controller')

module.exports = (app)=>{
    app.get("/ecomm/api/v1/getCategories",[auth_mw.verifyToken, auth_mw.isAdmin],  category_controller.fetchCategory)
    app.put("/ecomm/api/v1/editCategories",[auth_mw.verifyToken, auth_mw.isAdmin],  category_controller.editCategory)
    app.delete("/ecomm/api/v1/delCategories",[auth_mw.verifyToken, auth_mw.isAdmin], category_controller.deleteCategory)
    app.post("/ecomm/api/v1/categories",[auth_mw.verifyToken, auth_mw.isAdmin], category_controller.createNewCategory)
}