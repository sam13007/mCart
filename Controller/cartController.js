const cart = require("../Model/cart")
const getCartId = require("../Utils/helpers")
const user = require("../Model/user")

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

        const cartExist = await cart.find({ userName: req.body.userName })

        if (cartExist.length == 0) {

            const addProduct = await cart.create({ cartId: CartId, ...req.body })
            res.status(200).json({ "message": ` New items got inserted into the cart with the ID : ${CartId}` })

        } else {

            const addProduct = await cart.findOneAndUpdate({ userName: req.body.userName }, { $push: { productsInCart: req.body.productsInCart } })
            res.status(200).json({ "message": "User's cart is already available, appended to the same cart" })

        }
    } catch (error) {
        res.status(404).send(error)
    }
}

exports.updateCart = async(req, res) => {
    try {
        const cartExist = await cart.find({ userName: req.params.userName })

        if (cartExist.length != 0) {

            const addProduct = await cart.findOneAndUpdate({ userName: req.params.userName }, { $push: { productsInCart: req.body.productsInCart } })
            res.status(200).json({ "message": `${cartExist[0].cartId} updated` })

        } else {

            res.status(200).json({ "message": "User's cart is not available" })
        }
    } catch (error) {
        res.status(404).send(error)
    }
}