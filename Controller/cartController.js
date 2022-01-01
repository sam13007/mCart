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

exports.postCart = async(req, res) => {
    try {
        const CartId = await getCartId.generateCartId()


        const addProduct = await cart.create({ cartId: CartId, ...req.body })

        res.status(200).json({ "message": ` New items got inserted into the cart with the ID : ${CartId}` })

    } catch (error) {
        res.status(404).send(error)
    }
}