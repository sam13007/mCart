const product = require("../Model/product")

exports.getMobile = async(req, res) => {
    try {
        const productList = await product.find({ productCode: { $regex: "MOB" } })
        res.status(200).send(productList)
    } catch (error) {
        res.status(404).send(error)
    }
}
exports.getTablets = async(req, res) => {
    try {
        const tabletList = await product.find({ productCode: { $regex: "TAB" } })
        res.status(200).send(tabletList)
    } catch (error) {
        res.status(404).send(error)
    }
}
exports.addProduct = async(req, res) => {
    try {

        const saveProduct = await product.create(req.body)
        res.status(200).send(saveProduct)

    } catch (error) {
        res.status(404).send(error)
    }
}