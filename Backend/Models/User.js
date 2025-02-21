import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
//const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
},
{ timestamps: true }
);

userSchema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password);
  });

export default mongoose.model('user', userSchema);