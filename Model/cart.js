const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mcart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("connected to Cart collection"))

const cartSchema = new mongoose.Schema({

})