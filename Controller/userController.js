const user = require("../Model/user")

exports.signup = async(req, res) => {
    try {
        const userExist = await user.find({ userName: req.body.userName })

        if (userExist.length != 0) {

            res.status(201).json({ "message": "User already registered" })

        } else if (req.body.password.length < 5) {

            res.status(201).json({ "message": "Minimum 5 characters should be there in password" })

        } else if (req.body.password.length != 10) {

            res.status(201).json({ "message": "Phone number should be 10 digits" })

        } else {
            var userSignup = await user.create({
                userName: req.body.userName,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email
            })
            console.log(`length : ${req.body.password.length}`)
        }
        if (userSignup) {
            res.status(200).json({ "message": `User Registered with Name:${userSignup.userName}` })
        }

    } catch (error) {
        res.status(404).json(error)
        console.log(error)

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
        res.status(404).json(error)
        console.log(error);
    }
}