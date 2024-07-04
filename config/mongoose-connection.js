const mongoose = require('mongoose');
const config = require('config');

const dgbr = require('debug')("development:mongoose");

dgbr("Starting application...");

mongoose
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(function() {
    dgbr("Connected to MongoDB");
  })
  .catch(function(err) {
    dgbr("Error connecting to MongoDB:", err);
  });
  

module.exports = mongoose.connection;

