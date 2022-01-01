const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mcart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("connected to Cart collection"))

const cartSchema = new mongoose.Schema({
    cartId: {
        type: Number,
        required: [true, "Required value"]
    },
    userName: {
        type: String,
        required: [true, "Required value"],
    },
    productsInCart: {
        type: [{
            productId: { type: String },
            productName: { type: String },
            quantity: { type: Number }
        }],
        required: [true, "Required value"]
    },
    statusOfCart: {
        type: String,
        required: [true, "Required value"],
    }
}, {
    timestamps: {
        CreatedAt: true,
        updatedAt: true
    }
})

const cart = mongoose.model("cart", cartSchema)
module.exports = cart