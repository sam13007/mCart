const express = require("express")
const user = require("../Controller/userController")
const product = require("../Controller/productController")
const router = express.Router()

//Users
router.get("/login/:userName/:password", user.login)

router.post("/signup", user.signup)

//Products
router.get("/mobiles", product.getMobile)

router.get("/tablets", product.getTablets)

router.post("/product", product.addProduct)

//invalid methods

router.all("/*", (req, res) => [
    res.send("invalid method")
])

module.exports = router