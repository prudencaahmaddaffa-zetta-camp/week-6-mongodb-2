const { Seeder } = require('mongoose-data-seed');
const { BookModel } = require('../models/books.model');

const dataBooks = [
  {
    bookTitle: 'The Lord of the Rings',
    bookAuthor: 'J.R.R. Tolkien',
    bookPrice: 100,
    discountPercentage: 10,
    taxPercentage: 10,
    stockAmount: 100,
    purchasedAmount: 0,
    creditTerm: 0,
  },
  {
    bookTitle: 'The Hobbit',
    bookAuthor: 'J.R.R. Tolkien',
    bookPrice: 50,
    discountPercentage: 10,
    taxPercentage: 10,
    stockAmount: 100,
    purchasedAmount: 0,
    creditTerm: 0,
  },
  {
    bookTitle: "Harry Potter and the Philosopher's Stone",
    bookAuthor: 'J.K. Rowling',
    bookPrice: 25,
    discountPercentage: 10,
    taxPercentage: 10,
    stockAmount: 100,
    purchasedAmount: 0,
    creditTerm: 0,
  },
  {
    bookTitle: 'Harry Potter and the Chamber of Secrets',
    bookAuthor: 'J.K. Rowling',
    bookPrice: 25,
    discountPercentage: 10,
    taxPercentage: 10,
    stockAmount: 100,
    purchasedAmount: 0,
    creditTerm: 0,
  },
];

class BooksSeeder extends Seeder {
  async shouldRun() {
    return BookModel.countDocuments()
      .exec()
      .then((count) => {
        console.log(`Books collection has ${count} documents already`);
        return count === 0;
      });
  }

  async run() {
    return BookModel.create(dataBooks);
  }
}

module.exports = BooksSeeder;
