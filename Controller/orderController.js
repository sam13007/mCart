const order = require('../Model/order')
const cart = require('../Model/cart')
const getOrderId = require('../Utils/helpers')


exports.getOrder = async(req, res) => {
    try {
        const getOrder = await order.find()
        res.status(200).send(getOrder)
    } catch (error) {
        res.status(404).send(error)

        console.log(error);
    }
}

exports.postOrder = async(req, res) => {
    try {
        const cartExist = await cart.find({ userName: req.params.userName })

        const orderId = await getOrderId.generateOrderId();

        if (cartExist.length != 0) {

            if (cartExist[0].statusOfCart === "Open") {

                let orderPlaced = await order.create({ orderId: orderId, cartId: cartExist[0].cartId })
                const cartClosed = await cart.findOneAndUpdate({ userName: req.params.userName }, { statusOfCart: "Closed" })
                res.status(200).json({ "message": `New order placed with the ID :${orderId}` })

            } else {

                res.status(201).json({ "message": `Order has been already placed` })

            }
        } else {
            res.status(201).json({ "message": "username not found" })
        }

    } catch (error) {
        res.status(404).send(error)
        console.log(error)
    }
}