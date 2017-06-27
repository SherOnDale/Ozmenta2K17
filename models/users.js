const mongoose = require('mongoose');
const Schema = mongoose.schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  firstName: {
    type: string,
    required: true
  },
  lastName: {
    type: string,
    required: true
  },
  email: {
    type: string,
    required: true
  },
  phno: {
    type: number,
    required: true
  },
  password: {
    type: string,
    required: true
  }
});

userSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', userSchema);