const mongoose = require('mongoose');

const {Schema} = mongoose;

const expensesScheme = new Schema({
  text: String,
  date: String,
  price: Number
});

module.exports = Task = mongoose.model('buys', expensesScheme);