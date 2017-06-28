const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phno: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', userSchema);