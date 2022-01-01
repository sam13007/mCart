const cart = require("../Model/cart")
exports.generateCartId = async() => {
    const cartList = cart.find()
    const cartId = 101 + cartList.length;
    return cartId;
}