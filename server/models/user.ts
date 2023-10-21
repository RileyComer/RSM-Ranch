import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

}, { timestamps: true })

const User=mongoose.model('User', userSchema);
module.exports = User;