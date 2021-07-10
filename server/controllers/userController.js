const User = require('../models/userModel');

const userController = {};




/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/

const getUsers = 'SELECT username FROM user_info;'; 

userModel.getUsers = (req, res, next) => {
  User.query(getUsers, (err, response)=>{
    if (err) {
	    return next(err.stack);// maybe check out better error messaging
	  } else {
	    console.log(response);
	    // res.locals.users = response.row;
	    return next();
	  }
  });
};



/**
* createUser - create and save a new User into the database.
*/




/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/


module.exports = userController;
