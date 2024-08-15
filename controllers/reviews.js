const express = require("express");
const router = express.Router();
const Review = require("../models/review.js");
const User = require("../models/user.js");

router.get("/", async (req, red) => {
  
})

router.get("/:reviewId/edit", async (req, res) => {
  try {
    console.log("IN THE EDIT REVIEWS GETTER");
    const review = await Review.findById(req.params.reviewId);
    res.render("reviews/edit.ejs", { review: review});
  } catch (error) {
    res.send(error);
  }
});

router.get("/:userId/:bookId", async (req, res) => {
  try {
    console.log("IN THE REVIEWS GETTER")
    const reviews = await Review.find({ book: req.params.bookId }).populate('owner').populate('book');
    
    res.render("reviews/index.ejs", {
      reviews: reviews,
      book: req.params.bookId,
      user: req.params.userId,
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/:userId/:bookId/new", async (req, res) => {
  try {
    res.render("reviews/new.ejs",{
      user: req.params.userId,
      book: req.params.bookId,
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/:userId/:bookId/new", async (req, res) => {
  try {
    const newReview = {
      description: req.body.description, // 'description' is the name attribute of the input field
      owner: req.params.userId,  // Get the user ID from the route parameters
      book: req.params.bookId, // Get the book ID from the route parameters
    };

    await Review.create(newReview);
    res.redirect(`/reviews/${req.params.userId}/${req.params.bookId}`);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:reviewId", async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    await review.deleteOne();
    res.redirect(`/reviews/${review.owner._id}/${review.book._id}`);
  } catch (error) {
    res.send(error);
  }
})

router.put("/:reviewId", async (req, res) => {
  try {
    const reviewToUpdate = await Review.findById(req.params.reviewId);
    reviewToUpdate.description = req.body.description;
    await reviewToUpdate.save();
    res.redirect("/");
  } catch (error) {
    res.send("An error occurred while updating the review.");
  }
});

module.exports = router;