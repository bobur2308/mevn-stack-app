const HandleError = require("../middlewares/ErrorHandler");
const TokenModel = require("../models/TokenModel");
const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Secret keys (store securely in environment variables)
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET 

// In-memory storage for refresh tokens (use a DB in production)
let refreshTokens = [];

class AuthController {
  async registerUser(req,res){
    try {
      const {email,password,userName,phone} = req.body
      const exist = await UserModel.findOne({email})
      if (exist) {
        return res.status(400).json({ message: "Email already registered!" });
      }
      if(!email || !password){
        return res.status(400).json({ message: "Email and password are required !" });
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const user = new UserModel({
        email,
        password: hashedPassword,
        userName,
        phone
      });

      await user.save();

      res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
      HandleError(res,error)
    }
  }
  // Login user and set refresh token in cookie
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User(email) not found!" });
      }

      const isPassword = await bcrypt.compare(password, user.password);
      if (!isPassword) {
        return res.status(401).json({ message: "Email or password is invalid!" });
      }

      // Generate tokens
      const accessToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.ACCESS_TOKEN_SECRET, // Secret for access token
        { expiresIn: '15m' } // Access token expires in 15 minutes
      );
  
      const refreshToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.REFRESH_TOKEN_SECRET, // Secret for refresh token
        { expiresIn: '7d' } // Refresh token expires in 7 days
      );

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false, // Change to true when deploying to production with HTTPS
        sameSite: 'strict', // Adjust as needed
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({
        message: "Successfully logged in!",
        accessToken, // Send access token in the response body
      });
    } catch (error) {
      HandleError(res, error);
    }
  }

  // Refresh access token
  async refreshToken(req, res) {
    try {
      console.log('refresh');
      const token = req.cookies.refreshToken;
      
      if (!token) {
        return res.status(403).json({ message: 'Refresh token not provided' });
      }
  
      // Verify the refresh token
      jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
        if (err) {
          return res.status(403).json({ message: 'Invalid or expired refresh token' });
          console.log(err);
        }
  
        // Generate a new access token
        const accessToken = jwt.sign(
          { id: user._id, email: user.email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '15m' }
        );
        console.log(user);
        const user1 = await UserModel.findOne({email:user.email})
        // console.log({userName:user.email});
        res.status(200).json({
          message: 'Access token refreshed',
          accessToken,
          user:user1
        });
      });
    } catch (error) {
      HandleError(res,error)
    }
  }

  // Logout user
  async logOutUser(req,res){
    try {
      console.log('logout');
      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
      });
    
      res.status(200).json({
        message: 'Logged out successfully'
      });
    } catch (error) {
      HandleError(res,error)
    }
  }

}

module.exports = new AuthController();
