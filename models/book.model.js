const mongoose = require('mongoose');

module.exports = mongoose.model("Book", {
    title: String,
    price: Number,
    lastUpdated: { type: Date, default: Date.now },
    published: { type: Boolean, default: false }
});