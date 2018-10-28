require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/router');

// Set up express app
const app = express();

// Enable CORS for the client app
app.use(cors());

// Enable database connection
// Local
// mongoose.connect('mongodb://localhost/GitMap', { useNewUrlParser: true });

// Remote
const mongodbUri = 'mongodb://@ds131989.mlab.com:31989/tweb-project';
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  auth: {
    user: 'tweb',
    password: 'Hello-World1',
  },
});
const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', () => {
  console.log('connected to a database');
});
mongoose.Promise = global.Promise;


// MongoDb Promises depreciated
mongoose.Promise = global.Promise;



// Set up the routes
app.use(routes);

// DB error handling
app.use((err, req, res, next) => {
  if (!err.status) {
    next(err);
  }
  const error = new Error('DB Error : ');
  error.status = 422;
  next(error);
});


// Catch 404 error
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
});

// listen for request
app.listen(process.env.PORT || 3000, () => {
  console.log('listening for requests...');
});
