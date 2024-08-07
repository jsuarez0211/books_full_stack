const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    published: { type: Date, required: true },
    available: { type: Boolean, required: true, default: true },
});

module.exports = mongoose.model("Book", bookSchema);
