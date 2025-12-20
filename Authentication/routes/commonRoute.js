
const express = require('express');
const router = express.Router(); // ✅ yaha router banaya
const auth = require("../middlewares/authMiddleware");
const { categoryAddValidator, categoryDeleteValidator, categoryUpdateValidator, postCreateValidator, postDeleteValidator, postUpdateValidator } = require('../helpers/adminValidator');
const { addCategory, getCategory, deleteCategory, updateCategory } = require('../controllers/categoryController');
const { createPost, getPost, deletePost, updatePost } = require('../controllers/postController');
const { createUserValidator } = require('../helpers/validator');
const { createUser } = require('../controllers/userController');


router.post('/add-category',auth,categoryAddValidator,addCategory)
router.get('/get-category',auth,getCategory);
router.post('/delete-category',auth, categoryDeleteValidator, deleteCategory)
router.post('/update-category',auth, categoryUpdateValidator, updateCategory);


//post route
router.post('/create-post',auth,postCreateValidator,createPost)
router.get('/get-posts',auth,getPost)
router.post('/delete-post',auth, postDeleteValidator, deletePost);
router.post('/update-post',auth, postUpdateValidator, updatePost);

//user routes
router.post('/create-user',auth,createUserValidator,createUser)

module.exports = router; // ✅ router export
