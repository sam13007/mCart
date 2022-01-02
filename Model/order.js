const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mcart", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Connected to order collection"))

const orderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required: [true, "Required value"]
    },
    cartId: {
        type: Number,
        required: [true, "Required value"]
    }
})

const order = mongoose.model('order', orderSchema)

module.exports = order