const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }
}, { timestamps: true });


const User = mongoose.model('user', userSchema);

module.exports = User;