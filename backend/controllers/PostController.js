const HandleError = require("../middlewares/ErrorHandler");
const PostModel = require("../models/PostModel");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

// Configure multer for post images
const postStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../../uploads/post-images");
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const now = new Date();
    const date = now.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    const timestamp = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`; // Format: HHMMSS
    const fileName = `${date}-${timestamp}-${file.originalname}`;
    cb(null, fileName);
  },
});
const postUpload = multer({ storage: postStorage });

class PostController {
  // Get all posts
  async getAllData(req, res) {
    try {
      const posts = await PostModel.find()
      res.status(200).json({
        message: "Success",
        posts
      });
    } catch (error) {
      HandleError(res, error);
    }
  }

  // Get a post by ID
  async getDataById(req, res) {
    try {
      const { id } = req.params;
      const post = await PostModel.findOne({_id:id})
      if (!post) {
        return res.status(404).json({ message: "Post not found!" });
      }
      res.status(200).json({
        message: "Success",
        post
      });
    } catch (error) {
      HandleError(res, error);
    }
  }

  // Add a new post
  async addNewData(req, res) {
    postUpload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "File upload failed", error: err.message });
      }
      try {
        const { title, content } = req.body;
        const userId = req.user.id; // From the authenticated user
        const imagePath = req.file ? `/uploads/post-images/${req.file.filename}` : null;

        // console.log(userId);
        if(!userId){
          return res.status(400).json({
            message:"User not logged in !"
          })
        }
        const post = new PostModel({
          title,
          content,
          image: imagePath,
          userId
        });

        await post.save();

        res.status(201).json({
          message: "Post created successfully!",
          post
        });
      } catch (error) {
        HandleError(res, error);
      }
    });
  }

  // Edit a post by ID
  async editDataById(req, res) {
    const { id } = req.params;
    postUpload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "File upload failed", error: err.message });
      }
      try {
        const { title, content } = req.body;
        const post = await PostModel.findById(id);

        if (!post) {
          return res.status(404).json({ message: "Post not found!" });
        }

        // Update fields with new data or keep old values
        post.title = title || post.title;
        post.content = content || post.content;
        post.image = req.file ? `/uploads/post-images/${req.file.filename}` : post.image;

        await post.save();

        res.status(200).json({
          message: "Post updated successfully!",
          post
        });
      } catch (error) {
        HandleError(res, error);
      }
    });
  }

  // Delete a post by ID
  async deletePostById(req, res) {
    try {
      const { id } = req.params;
      const post = await PostModel.findById(id);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found!" });
      }
  
      // If the post has an image, delete the file from the server
      if (post.image) {
        const imagePath = path.join(__dirname, `../../uploads/post-images/${post.image.split('/').pop()}`);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          } else {
            console.log(`Deleted image: ${imagePath}`);
          }
        });
      }
  
      // Delete the post from the database
      await PostModel.findByIdAndDelete(id);
  
      res.status(200).json({ message: "Post deleted successfully!" });
    } catch (error) {
      HandleError(res, error);
    }
  }
}

module.exports = new PostController();
