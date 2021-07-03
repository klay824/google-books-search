const { link } = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, require: true },
    image: { type: Image },
    link: { type: URL }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;