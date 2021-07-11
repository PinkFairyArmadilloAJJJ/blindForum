const cookieController = {};
// const User = require('../models/userModel');

/**
 * setCookie - set a cookie with a random number
 */
cookieController.setCookie = (req, res, next) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.cookie('newCookie', `${randomNum}`);
  return next();
};

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  const ssid = req.rawHeaders[5];
  res.cookie('ssid', `${ssid}`, { httpOnly: false, secure: false });
  // console.log(ssid);
  return next();
};

module.exports = cookieController;
