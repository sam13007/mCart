const express = require("express")
const user = require("../Controller/userController")
const product = require("../Controller/productController")
const cart = require("../Controller/cartController")
const order = require("../Controller/orderController")

const router = express.Router()

//Users
router.get("/login", user.login)

router.post("/signup", user.signup)

//Products
router.get("/mobiles", product.getMobile)

router.get("/tablets", product.getTablets)

router.post("/product", product.addProduct)

router.delete("/products/:prod", product.removeProduct)

//Carts
router.get("/carts", cart.getCart)

router.post("/carts", cart.postCart)

router.put("/carts/:userName", cart.updateCart)

//Order
router.post("/orders/:userName", order.postOrder)

//Order methods
router.get("/order", order.getOrder)


//invalid methods
router.all("/*", (req, res) => [
    res.status(200).json({ "message": "Resource not found" })
])

module.exports = router