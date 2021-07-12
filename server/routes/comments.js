const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

/*
 * pulling comments to homepage
 */

router.get('/get', commentController.getComments, (req, res) =>
  res.status(200).json(res.locals.comments)
);

/*
 * posting comments
 */

router.post('/post', commentController.postComment, (req, res) =>
  res.status(200).json({ commentPosted: 'commentPosted' })
);

module.exports = router;
