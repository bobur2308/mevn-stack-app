const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL or file path for the image
    default: null, // Optional default value if no image is provided
  },
  userId: {
    type: Schema.Types.ObjectId, // Reference to the User model
    ref: 'User', // Name of the related model
    required: true, // Make this field mandatory
  },
}, { timestamps: true });

// Correct way to define the model
const PostModel = model('Post', PostSchema);

module.exports = PostModel;
