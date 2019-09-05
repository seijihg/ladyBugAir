const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: {
        type: String,
        lowercase: true
    },
    last_name: {
        type: String,
        lowercase: true
    },
    dob: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    title: {
        type: String,
        lowercase: true
    },
    admin: {
        type: Boolean
    },
    bookings: [{
        type: Schema.Types.ObjectId,
        ref: "Flight"
    }],
    articles: [{
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }]
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)