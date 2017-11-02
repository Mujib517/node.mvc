var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", schema);