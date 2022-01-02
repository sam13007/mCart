const cart = require("../Model/cart")
const order = require("../Model/order")


exports.generateCartId = async() => {
    const cartList = await cart.find()

    const cartId = 101 + cartList.length;

    return cartId;
}

exports.generateOrderId = async() => {
    const orderList = await order.find()

    const orderId = 2001 + orderList.length;

    return orderId
}