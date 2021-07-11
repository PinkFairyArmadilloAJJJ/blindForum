const Session = require('../models/sessionModel');
const User = require('../models/userModel');
// const { locals } = require('../server');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
/*
sessionController.isLoggedIn = (req, res, next) => {
  // write code here
};
*/


/**
* startSession - create and save a new Session into the database.
*/

const getUsers = 'SELECT username FROM user_info;'; 

sessionController.startSession = (req, res, next) => {

  User.query(getUsers, (err,data) => {console.log('User db: ', data);});

  Session.create({cookieId: req.cookies.ssid}, (err, data) => {
    if (err) {
      res.render('./../client/signup', {error: err});
      res.end();
      // return next(err);
    } else {
      Session.find({}, (err,data) => {console.log('Session db: ',data);});
      // console.log(Session.schema.paths.cookieId);
      return next();
    }
  });
};

module.exports = sessionController;
