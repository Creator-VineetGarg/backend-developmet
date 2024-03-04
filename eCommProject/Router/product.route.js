const product_route = require('../Controller/product.controller')
const product_mw = require('../Middlewares/product.mw')
const token_mw = require("../Middlewares/token.mw")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/products/create",[product_mw.verifyProductDetails, token_mw.verifyToken, token_mw.isAdmin], product_route.newProduct)
    app.get("/ecomm/api/v1/products/get",[token_mw.verifyToken], product_route.fetchProducts)
    app.put("/ecomm/api/v1/products/put",[token_mw.verifyToken, token_mw.isAdmin], product_route.editProduct)
    app.delete("/ecomm/api/v1/products/delete",[token_mw.verifyToken, token_mw.isAdmin], product_route.deleteProduct)
}