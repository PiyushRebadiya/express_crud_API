const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    password: Number
})

module.exports = mongoose.model("user", UserSchema)