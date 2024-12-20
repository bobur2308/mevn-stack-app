const PostModel = require("../models/PostModel");

async function checkOwner(req, res, next) {
  try {
    const { id } = req.params;  // Get post ID from the request parameters
    const post = await PostModel.findById(id);  // Find the post by ID

    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    // Check if the logged-in user is the creator of the post
    if (post.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to edit or delete this post!" });
    }

    next();  // Proceed to the next middleware or controller function
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error!" });
  }
}

module.exports = checkOwner;
