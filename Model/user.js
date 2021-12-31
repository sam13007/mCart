const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mcart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => { console.log("connected to User collection") })

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Required value"],

    },
    password: {
        type: String,
        required: [true, "Required value"],
        validate: [passwordValidator, { "message": "Minimum 5 characters should be there in password" }]

    },
    phoneNumber: {
        type: Number,
        required: [true, "Required value"],
        validate: [phNoVal, { "message": "Phone number should be 10 digits" }]
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

function passwordValidator(value) {
    return value.length >= 5
}

function phNoVal(value) {
    return value.toString().length == 10
}

const user = mongoose.model("user", userSchema)

module.exports = user;