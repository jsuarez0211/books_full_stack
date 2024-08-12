const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username || password) {
      res.status().json({ message: "Please fill user and password" });
    }
    const user = User.find();
  } catch (error) {}
});
module.exports = router;
