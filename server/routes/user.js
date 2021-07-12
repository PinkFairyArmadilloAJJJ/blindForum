const express = require('express');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

router.get('/getuser', userController.getUsers, (req, res) =>
  res.status(200).json(res.locals.users)
);

router.get('/setcookie', cookieController.setCookie, (req, res) => res.status(200).end());

router.get(
  '/ssidcookie',
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => res.status(200).end()
);

router.post('/signin', userController.verifyUser, cookieController.setSSIDCookie, (req, res) => {
  res.status(200).json('signin success');
  // res.render('../../client/comment', { error: null });
});

/**
 * signup
 */

router.get('/signup', (req, res) => {
  res.status(200).json({ test: 'test' });
  // res.render('../../client/signup', { error: null });
});

router.post(
  '/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    // res.redirect('../../client/components/comments');
    console.log('signup success');
    // res.status(200).json(req.query);
    // res.render('../../client/signin', { error: null });
  }
);

module.exports = router;
