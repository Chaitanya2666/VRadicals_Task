const express = require("express");
const user = require("../model/DB");

const AddBook = async (req, res) => {
  try {
    const book = req.body;

    if (!book.bookName || !book.price || !book.author || !book.releasingYear) {
      return res.status(400).send({
        msg: "ALL FIELDS ARE REQUIRED",
      });
    }
    if (book.rating > 5 || book.rating < 1) {
      return res
        .status(400)
        .send({ msg: "Please Choose The Rating Between 1 to 5" });
    }
    if (book.releasingYear < 1900 || book.releasingYear > 2024) {
      return res.status(400).send({ msg: "Please Enter the Valid Year" });
    }

    const data = await user.create({
      bookName: book.bookName,
      price: book.price,
      author: book.author,
      releasingYear: book.releasingYear,
      rating: book.rating,
    });
    console.log(data);
    return res
      .status(200)
      .send('Successfully submitted! <a href="/">Go back</a>');
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      msg: "Price,Releasing Year,Rating Must Be NUMBER && Book Name Should be UNIQUE",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const bookName = req.params.bookName;
    const book = req.body;

    if (book.releasingYear < 1900 || book.releasingYear > 2024) {
      return res.status(400).send({ msg: "Please Enter the Valid Year" });
    }

    const updatedBook = await user.findOneAndUpdate(
      { bookName: bookName },
      { $set: req.body },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).send({ msg: "Book not found" });
    }
    return res
      .status(200)
      .send("Successfully submitted! <a href='/'>Go back</a>");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ msg: "Price,Releasing Year,Rating Must Be NUMBER && Correct " });
  }
};

const getBook = async (req, res) => {
  try {
    const data = await user.find({});
    return res.status(200).render("home", {
      Books: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal Server Error" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookName = req.params.bookName;

    const deletedBook = await user.findOneAndDelete({ bookName: bookName });
    if (!deletedBook) {
      return res.status(404).send({ msg: "Book not found" });
    }
    return res
      .status(200)
      .send('Successfully submitted! <a href="/">Go back</a>');
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

module.exports = { AddBook, updateBook, getBook, deleteBook };
