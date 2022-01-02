const mongoose = require('mongoose')
const user = require('./user')
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
        validate: [userVal, "Invalid user"]
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
        default: "Open"

    }
}, {
    timestamps: {
        CreatedAt: true,
        updatedAt: true
    }
})

async function userVal(value) {
    const userExist = await user.find({ userName: value })


    return userExist.length != 0
}
const cart = mongoose.model("cart", cartSchema)
module.exports = cart