const User = require('../models/userModel');

const userController = {};

/**
 * getAllUsers - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */

const getUsers = 'SELECT username FROM user_info;';

userController.getUsers = (req, res, next) => {
  User.query(getUsers, (err, response) => {
    if (err) {
      return next(err.stack); // maybe check out better error messaging
    }
    res.locals.users = response.rows;
    return next();
  });
};

/**
 * createUser - create and save a new User into the database.
 */
// const submitted_info = docuemnt.addEventListener('submit', 'form').values
// check if the inputted username already exists in the table

userController.createUser = (req, res, next) => {
  // storing req.body - contains username, pw, email, and nickname - to objChar
  // console.log(req.query);
  const objChar = req.query;
  // declare empty array that will contain values only
  const values = [];
  // iterate through the object - extract values only and store them to values array.
  for (let i = 0; i < Object.keys(objChar).length; i += 1) {
    values.push(objChar[Object.keys(objChar)[i]]);
  }
  // console.log(values);

  const createUserAcct =
    'INSERT INTO user_info (username, password, nickname, email) VALUES ($1, $2, $3, $4);';

  User.query(createUserAcct, values, (err, response) => {
    if (err) return next(err.stack);
    return next();
  });
};

/**
 * verifyUser - Obtain username and password from the request query, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */

userController.verifyUser = (req, res, next) => {
  // console.log(req.body);
  // const objChar = req.body;
  const value = [req.query.username];
  const { password } = req.query;

  const findUser = `SELECT password FROM user_info WHERE username = $1;`;

  User.query(findUser, value, (err, response) => {
    const dbpw = { ...response.rows }['0'].password;
    // console.log('password: ', password);
    if (err || password !== dbpw) {
      console.error(err);
    } else {
      console.log(response);
      // res.status(200).end('../..client/secret');
      res.status(200).send('login successful!');
      return next();
    }
  });
};

module.exports = userController;
