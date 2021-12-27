const user = require("../Model/user")

exports.getUsers = async(req, res) => {
    try {
        const users = await user.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json(error)
        console.log(error);
    }
}

exports.addUser = async(req, res) => {
    try {
        const userAdd = await user.create({
            userName: req.body.username,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        })

        res.send(userAdd)


    } catch (error) {
        res.status(404).json(error)
        console.log(error)

    }
}