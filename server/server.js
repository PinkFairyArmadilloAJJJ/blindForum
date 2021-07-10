require('dotenv').config();
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../build')));

// TODO: move api key to .env file
const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true,
    useUnifiedTopology: true, }
)
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => res.status(200).sendFile(__dirname, './index.html'));
/**
* Set our Express view engine as ejs.
* This means whenever we call res.render, ejs will be used to compile the template.
* ejs templates are located in the client/ directory
*/
app.set('view engine', 'ejs');

/**
* Automatically parse urlencoded body content from incoming requests and place it
* in req.body
*/
// app.use(bodyParser.urlencoded({ extended: true }));


/**
* --- Express Routes ---
* Express will attempt to match these routes in the order they are declared here.
* If a route handler / middleware handles a request and sends a response without
* calling `next()`, then none of the route handlers after that route will run!
* This can be very useful for adding authorization to certain routes...
*/

/**
* root
*/
app.get('/', 
  cookieController.setCookie, 
  (req, res) => {
    /**
    * Since we set `ejs` to be the view engine above, `res.render` will parse the
    * template page we pass it (in this case 'client/secret.ejs') as ejs and produce
    * a string of proper HTML which will be sent to the client!
    */
    res.render('./../client/index');
    // console.log(res.locals.users);
  }
);


/**
* signup
*/
app.get('/signup', (req, res) => {
  res.render('./../client/signup', {error: null});
});

app.post('/signup', 
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie, 
  (req, res) => {
    // what should happen here on successful sign up?
    res.redirect('/secret');
});


/**
* login
*/
app.post('/login', 
  userController.verifyUser, 
  (req, res) => {
    // what should happen here on successful log in?
    // if (res.locals.matchedUser?.password !== req.body.password) {
    //   res.locals.matchedUser?.username === req.body.username 
    //     ? res.render('./../client/signup', {error: 'wrong password'});
    //     : res.render('./../client/signup', {error: 'wrong username'});
    // }
    // successful login redirects to /secret
    res.redirect('/secret');
  }
);


/**
* Authorized routes
*/
app.get('/secret', 
  sessionController.isLoggedIn,
  userController.getAllUsers, 
  (req, res) => {

    /**
    * The previous middleware has populated `res.locals` with users
    * which we will pass this in to the res.render so it can generate
    * the proper html from the `secret.ejs` template
    */
    res.render('./../client/secret', { users: res.locals.users });

});

/**
 * 404 handler
 */
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;
