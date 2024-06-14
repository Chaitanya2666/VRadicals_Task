require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./Route/books");
app.use(express.json());
const methodOverride = require("method-override");

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then((req, res) => {
    console.log("Mongoose Connected");
  })
  .catch((err) => {
    console.log("Mongoose ERROR");
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use("/", Router);

app.listen(PORT, (req, res) => {
  console.log(`App Running On ${PORT}`);
});
