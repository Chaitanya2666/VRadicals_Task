const express = require("express");
const Router = express.Router();

const {
  AddBook,
  updateBook,
  getBook,
  deleteBook,
} = require("../controller/book");

Router.get("/", getBook);
Router.post("/add", AddBook);
Router.patch("/update/:bookName", updateBook);
Router.delete("/delete/:bookName", deleteBook);

module.exports = Router;
