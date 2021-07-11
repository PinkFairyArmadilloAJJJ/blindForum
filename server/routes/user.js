const express = require('express');
const userController = require('../controllers/userController');
// const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');
const router = express.Router();

router.get('/usernametest',
  userController.getUsers,
  (req, res) => res.status(200).json(res.locals.users)
);

router.get('/setcookietest',
  cookieController.setCookie,
  (req, res) => res.status(200).json(res.cookie)
);

router.post('/ssidcookietest',
  cookieController.setSSIDCookie,
  (req, res) => res.status(200).json(res.cookie)
);

router.post('/signup', userController.createUser, (res, req) => {
  res.status(200).json(res.locals.response);
})

router.get('/data2', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.response);
})

/*
router.post('/character',
  starWarsController.addCharacter,
  (req, res) => res.status(200).json({})
);
*/

module.exports = router;
