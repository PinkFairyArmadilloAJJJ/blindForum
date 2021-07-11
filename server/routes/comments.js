const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.get('/',
  //userController.getUsers,
  (req, res) => res.status(200).json(res.locals.users)
);

/*
router.post('/character',
  starWarsController.addCharacter,
  (req, res) => res.status(200).json({})
);
*/

module.exports = router;
