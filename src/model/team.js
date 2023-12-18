const mongoose = require('mongoose');

const teamModel = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

// Create the Team model from the schema
const Team = mongoose.model('Team', teamModel);
module.exports = Team;