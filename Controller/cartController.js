const cart = require("../Model/cart")
const getCartId = require("../Utils/helpers")


exports.getCart = async(req, res) => {
    try {
        const cartList = await cart.find({})
        res.status(200).json(cartList)
    } catch (error) {
        res.status(404).send(error)
    }
}