const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mcart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => { console.log("connected to mcart DB") })

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: [true, "Required value"],
    },
    productName: {
        type: String,
        required: [true, "Required value"],
    },
    productCode: {
        type: String,
        required: [true, "Required value"],
    },
    description: {
        type: String,
        required: [true, "Required value"],
    },
    price: {
        type: Number,
        required: [true, "Required value"],
    },
    rating: {
        type: Number,
        required: [true, "Required value"],
    },
    manufacturer: {
        type: String,
        required: [true, "Required value"],
    },
    osType: {
        type: String,
        required: [true, "Required value"],
    },
})

const product = mongoose.model("product", productSchema)

module.exports = product