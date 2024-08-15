const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Book = require('../models/book.js');

// Index
router.get('/', async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.render('books/index.ejs', {
      books: allBooks
    });
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});

// New
router.get('/new', async (req, res) => {
  res.render('books/new.ejs');
});

// Create
router.post('/', async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre
    });
    
    await newBook.save();
    res.redirect(`/users/${currentUser._id}/books`);
  } catch (error) {
    console.log(error);
    res.redirect('/')
  }
});

// // Edit
// router.get('/:foodId/edit', async (req, res) => {
//   try {
//     const currentUser = await User.findById(req.session.user._id);
//     const food = currentUser.pantry.id(req.params.foodId);
//     res.render('foods/edit.ejs', {
//       food: food,
//     });
//   } catch (error) {
//     console.log(error);
//     res.redirect('/')
//   }
// });

// Update
router.put('/:foodId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const food = currentUser.pantry.id(req.params.foodId);
    food.set(req.body);
    await currentUser.save();
    res.redirect(
      `/users/${currentUser._id}/foods/`
    );
  } catch (error) {
    console.log(error);
    res.redirect('/')
  }
});

// // Delete
// router.delete('/:foodId', async (req, res) => {
//   try {
//     const currentUser = await User.findById(req.session.user._id);
//     currentUser.pantry.id(req.params.foodId).deleteOne();
//     await currentUser.save();
//     res.redirect(`/users/${currentUser._id}/foods`);
//   } catch (error) {
//     console.log(error);
//     res.redirect('/')
//   }
// });

module.exports = router;