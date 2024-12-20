const express = require('express');
const authenticate = require('../middlewares/AuthMiddleware');
const PostController = require('../controllers/PostController');
const checkOwner = require('../middlewares/checkOwnerMiddleware');


const router = express.Router()

router.get('/all',authenticate,PostController.getAllData)
router.get('/:id',authenticate,PostController.getDataById)
router.post('/add',authenticate,PostController.addNewData)
router.put('/edit/:id',authenticate,checkOwner,PostController.editDataById)
router.delete('/delete/:id',authenticate,checkOwner,PostController.deletePostById)

module.exports = router