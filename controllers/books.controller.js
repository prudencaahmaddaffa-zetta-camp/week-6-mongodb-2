const express = require('express');
const router = express.Router();
const { BookModel } = require('../models/books.model');

// Get all books
router.get('/books', async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific book by ID
router.get('/books/:id', async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new book
router.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await BookModel.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a book
router.put('/books/:id', async (req, res) => {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a book
router.delete('/books/:id', async (req, res) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Export the router
module.exports = router;
