const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mcart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => { console.log("connected to mcart DB") })




const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Required value"]
    },
    password: {
        type: String,
        required: [true, "Required value"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Required value"]
    },
    email: {
        type: String,
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
})

const user = mongoose.model("user", userSchema)

module.exports = user;