const Session = require('../models/sessionModel');
const User = require('../models/userModel');
// const { locals } = require('../server');

const sessionController = {};

/**
 * startSession - create and save a new Session into the database.
 */

sessionController.startSession = (req, res, next) => {
  /*
  const getUsers = 'SELECT username FROM user_info;';
  User.query(getUsers, (err, data) => {
    console.log('User db: ', data);
  });
*/

  const ssid = req.rawHeaders[5];

  Session.create({ cookieId: ssid }, (err, data) => {
    if (err) {
      res.render('../../client/signup', { error: err });
      res.end();
    } else {
      Session.find({}, (err, data) => {
        console.log('Session db: ', data);
      });
      // console.log(Session.schema.paths.cookieId);
      return next();
    }
  });
};

module.exports = sessionController;
