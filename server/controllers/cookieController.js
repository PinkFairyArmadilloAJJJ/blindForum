const cookieController = {};
const User = require('../models/userModel');

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.cookie('newCookie', `${randomNum}`);
  return next();
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  // const { username } = req.body; 

  const findUser = `SELECT username FROM user_info WHERE username =test1;`;
  // const findUser = `SELECT username FROM user_info WHERE username =${username};`;

  User.query(findUser, (err, data) => {
    if (err) return next(err);
    else {
      const ssid = data;
      res.cookie('ssid', `${ ssid }`, { httpOnly: true });
      return next();
    }
  });
};

module.exports = cookieController;
