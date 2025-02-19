const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String, 
        require: true, 
        unique: true
    },
    email: {
        type:String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    birthday: Number,
    gender: String


})

module.exports = mongoose.model('User', UserSchema)
