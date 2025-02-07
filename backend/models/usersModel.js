const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  booksBorrowed: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      default: null,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
