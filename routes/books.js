const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
  const books = await Book.find().lean();
  res.render('books/index', {
    title: 'Book List',
    books: books || [],
  });
});

router.get('/add', (req, res) => {
  res.render('books/details', { title: 'Add Book', book: {} });
});

router.post('/add', async (req, res) => {
  const { title, author } = req.body;
  console.log(req.body);
  const newBook = new Book({ title, author });
  console.log(newBook);
  await newBook.save();
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('books/details', { title: 'Edit Book', book });
});

router.post('/:id', async (req, res) => {
  const { title, author } = req.body;
  await Book.findByIdAndUpdate(req.params.id, { title, author });
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  await Book.findByIdAndRemove(req.params.id);
  res.redirect('/');
});

module.exports = router;
