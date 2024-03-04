const cart_controller = require('../Controller/cart.controller');
const token_mw = require('../Middlewares/token.mw')

module.exports = (app) => {
    app.get("/ecomm/api/v1/cart/get",[token_mw.verifyToken], cart_controller.fetchCart)
    app.put("/ecomm/api/v1/cart/put",[token_mw.verifyToken], cart_controller.editCart)
    app.delete("/ecomm/api/v1/cart/delete",[token_mw.verifyToken], cart_controller.deleteCart)
    app.post("/ecomm/api/v1/cart/post",[token_mw.verifyToken], cart_controller.newCart)
}