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
    type: String, 
    default: null, 
  },
  userId: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true, 
  },
}, { timestamps: true });

const PostModel = model('Post-Model', PostSchema);

module.exports = PostModel;
