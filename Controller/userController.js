const user = require("../Model/user")

exports.signup = async(req, res) => {
    try {
        const userExist = await user.find({ userName: req.body.userName })

        if (userExist.length != 0) {

            res.status(201).json({ "message": "User already registered" })

        } else {
            var userSignup = await user.create(req.body)
            console.log(`length : ${req.body.password.length}`)
        }
        if (userSignup) {
            res.status(200).json({ "message": `User Registered with Name:${userSignup.userName}` })
        }

    } catch (error) {
        res.status(404).send(error.message)
    }
}

exports.login = async(req, res) => {
    try {
        const userLogin = await user.find({
            userName: req.params.userName,
            password: req.params.password
        })
        if (userLogin.length === 0) {
            res.status(200).send("Provided username or password incorrect")
        } else {
            res.status(200).json(userLogin)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}