const { Schema, model } = require('mongoose');

const TokenSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    ref: 'User',
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

// Correct way to create the model
const TokenModel = model('Token', TokenSchema);

module.exports = TokenModel;
