const user = require("../Model/user")

exports.getUsers = async(req, res) => {
    try {
        const users = user.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json(error)
    }
}