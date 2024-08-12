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
router.get("/:id", getBookByID, (req, res) => {
  res.status(200).json(res.book);
});

//Save one
router.post("/", (req, res) => {
  const { name, author, published } = req.body;
  try {
    if (!name || !author || !published) {
      throw new Error("Missing a required attribute");
    }
    const newBook = new Book({
      name: req.body.name,
      author: req.body.author,
      published: new Date(req.body.published),
    });
    const savedBook = newBook.save();
    res.status(200).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Edit one
router.patch("/:id", getBookByID, async (req, res) => {
  const { name, author, published } = req.body;
  if (name != null) {
    res.book.name = name;
  }
  if (author != null) {
    res.book.author = author;
  }
  if (published != null) {
    res.book.published = published;
  }
  try {
    const bookToPatch = await res.book.save();
    res.json(bookToPatch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete one
router.delete("/:id", getBookByID, async (req, res) => {
  try {
    const bookToDelete = await res.book.deleteOne();

    res.status(200).json({ message: "Deleted ok", deletedEntry: bookToDelete });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Middleware
async function getBookByID(req, res, next) {
  let book;
  try {
    const id = req.params.id;
    book = await Book.findById(id);
    if (!book) {
      return res
        .status(404)
        .json({ message: "There is not book with that ID" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.book = book;
  next();
}

module.exports = router;
