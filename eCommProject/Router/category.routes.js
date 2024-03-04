const token_mw = require('../Middlewares/token.mw')

const category_controller = require('../Controller/category.controller')

module.exports = (app)=>{
    app.get("/ecomm/api/v1/Categories/get",[token_mw.verifyToken, token_mw.isAdmin],  category_controller.fetchCategory)
    app.put("/ecomm/api/v1/Categories/put",[token_mw.verifyToken, token_mw.isAdmin],  category_controller.editCategory)
    app.delete("/ecomm/api/v1/Categories/delete",[token_mw.verifyToken, token_mw.isAdmin], category_controller.deleteCategory)
    app.post("/ecomm/api/v1/categories/post",[token_mw.verifyToken, token_mw.isAdmin], category_controller.createNewCategory)
}