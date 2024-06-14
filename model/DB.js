const { default: mongoose, model } = require("mongoose");

const userSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  releasingYear: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 2,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
