const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: null,
  },
  userName: {
    type: String,
    default: null,
  },
},{timestamps:true});

// Correct way to define the model
const UserModel = model('User-Model', UserSchema);

module.exports = UserModel;
