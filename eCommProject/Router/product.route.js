const product_route = require('../Controller/product.controller')

module.exports = (app)=>{
    app.post("/ecomm/api/v1/products/create", product_route.newProduct)
}