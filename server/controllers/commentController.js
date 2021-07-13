const Comment = require('../models/commentModel');
// const User = require('../models/userModel');

const commentController = {};

/**
 * getComments - retrieve all comments from the database and store them into res.locals
 * before moving on to next middleware.
 */

commentController.getComments = (req, res, next) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      return next(`Error in commentController.getComments: ${JSON.stringify(err)}`);
    }
    // console.log(comments);
    res.locals.comments = comments;
    return next();
  });
};

/**
 * createComment - create and save a new comment into the database.
 */
commentController.postComment = (req, res, next) => {
  // write code here
  // const { username, password } = req.body;
  Comment.create(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.end('error from createComment');
      // res.render('./../client/signup', { error: err });
    } else {
      console.log(data);
      // data.save();
      return next();
    }
  });
};

module.exports = commentController;
