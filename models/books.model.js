// Assuming you have already installed and imported the required dependencies

const mongoose = require('mongoose');

// Define the Book schema
const bookSchema = new mongoose.Schema({
  bookTitle: String,
  bookAuthor: String,
  bookPrice: Number,
  discountPercentage: Number,
  taxPercentage: Number,
  stockAmount: Number,
  purchasedAmount: Number,
  creditTerm: Number,
});

// Create the Book model
const BookModel = mongoose.model('Book', bookSchema);

// Create the Book collection
const bookCollection = mongoose.connection.collection('books');

module.exports = {
  BookModel,
  bookCollection,
};
