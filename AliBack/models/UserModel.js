const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }); //  'timestamps : createdAt, updatedAt'

const User = mongoose.model("User", userSchema);

module.exports = User; // CommonJS export syntax
