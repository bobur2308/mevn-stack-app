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
});

// Correct way to define the model
const UserModel = model('User', UserSchema);

module.exports = UserModel;
