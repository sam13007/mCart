const express = require("express")
const user = require("../Controller/userController")
const router = express.Router()



router.get("/", (req, res) => {
    res.send("Get method")
})

router.get("/users", user.getUsers)

router.all("/*", (req, res) => [
    res.send("invalid method")
])

module.exports = router