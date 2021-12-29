const express = require("express")
const user = require("../Controller/userController")
const router = express.Router()


router.get("/login/:userName/:password", user.login)

router.post("/signup", user.signup)

router.all("/*", (req, res) => [
    res.send("invalid method")
])

module.exports = router