// require('dotenv').config();
const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// const pg = require('pg');
const userRouter = require('./routes/user');
const commentRouter = require('./routes/comments');

const userController = require('./controllers/userController')

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * define route handlers
 */

// app.use('/api', apiRouter);

app.use('/api/user', userRouter);
//  /signup
//  /signin

app.use('/api/comment', commentRouter);

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.resolve(__dirname, '../build')));

// TODO: move api key to .env file
/*
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.error(err));
*/

/**
 * Automatically parse urlencoded body content from incoming requests and place it
 * in req.body
 */
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

app.get('/secret',
  userController.verifyUser,
  (req, res) => {
    res.status(200).end('../client/secret', { currentUser: res.locals.currentUser })
  }
)

/**
 * 404 handler
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
