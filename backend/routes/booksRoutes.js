const express = require("express");
const router = express.Router();
const Book = require("../models/booksModel");
const User = require("../models/usersModel");

//Get all
router.get("/", async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by id
router.get("/:id", (req, res) => {
  res.send("Get by id");
});

//Save one
router.post("/", (req, res) => {
  const newBook = new Book({
    name: req.body.name,
    author: req.body.author,
    published: new Date(req.body.published),
  });
  try {
    const savedBook = newBook.save();
    res.status(200).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Edit one
router.get("/", (req, res) => {
  res.send("Edit one");
});

//Delete one
router.get("/", (req, res) => {
  res.send("Delete one");
});

//Middleware
function getBookByID(req, res, next) {
  pass;
}

module.exports = router;
