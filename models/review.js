const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

// {
//     decription: "dfakjflsakjflksjs",
//     user: "123",
//     book: "h34j"
// }

// {
//     description: "dfakjflsakjflksjs",

//     user:{
//         id: 123
//         username: user,
//         password: 32142342
//     }

//     book:{
//         id: h34j
//         title: "Harry Potter",
//         author: "JK Rowling",
//         genre: "Sci-Fi"
//     }
// }