import mongoose, { Schema } from "mongoose";

const horseSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    height: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    registration: {
        type: Number,
        required: false
    },

    dob: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    photos: [{
        type: String,
        required: false
    }],
}, { timestamps: true })

const Horse=mongoose.model('Horse', horseSchema);
module.exports = Horse;