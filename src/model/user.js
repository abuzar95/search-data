const mongoose = require('mongoose');

const user = new mongoose.Schema({
    isActive: {
        type: Boolean,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    team: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Province',
    },
    role: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
});

// Create the User model from the schema
const User = mongoose.model('User', user);
module.exports = User;