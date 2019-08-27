const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        lowercase: true
    },
    last_name: {
        type: String,
        required: true,
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
        required: true,
        lowercase: true
    },
    admin: {
        type: Boolean,
        required: true,
    },
    bookings: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    },
    articles: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)