require("dotenv").config(); // Load environment variables from a .env file into process.env
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
port = process.env.PORT;

mongoose.connect(process.env.DB_REMOTE_URL);
const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Db connected");
});

app.use(express.json());
app.use(cors());
const booksRoutes = require("./routes/booksRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/books", booksRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
