const cart = require("../Model/cart")
exports.generateCartId = async() => {
    const cartList = await cart.find()

    const cartId = 101 + cartList.length;

    return cartId;
}