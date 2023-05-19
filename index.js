const express = require('express');
const app = express();
const bookController = require('./controllers/books.controller');
const mongoose = require('mongoose');

// Connect to MongoDB
const mongoURL =
  process.env.MONGO_URL || 'mongodb://localhost:27017/zetta-mongodb';

mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

// Use the book controller
app.use('/api', bookController);

// Other app configurations...

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
