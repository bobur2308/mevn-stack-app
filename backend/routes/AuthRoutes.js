const express = require('express');
const AuthController = require('../controllers/AuthController');
const authenticate = require('../middlewares/AuthMiddleware')


const router = express.Router()

router.post('/login',AuthController.loginUser)
router.post('/register',AuthController.registerUser)
router.post('/refresh',AuthController.refreshToken)
router.post('/logout',AuthController.logOutUser)

module.exports = router