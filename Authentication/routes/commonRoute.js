
const express = require('express');
const router = express.Router(); // ✅ yaha router banaya
const auth = require("../middlewares/authMiddleware");
const { categoryAddValidator, categoryDeleteValidator, categoryUpdateValidator, postCreateValidator } = require('../helpers/adminValidator');
const { addCategory, getCategory, deleteCategory, updateCategory } = require('../controllers/categoryController');
const { createPost, getPost } = require('../controllers/postController');


router.post('/add-category',auth,categoryAddValidator,addCategory)
router.get('/get-category',auth,getCategory);
router.post('/delete-category',auth, categoryDeleteValidator, deleteCategory)
router.post('/update-category',auth, categoryUpdateValidator, updateCategory);


//post route
router.post('/create-post',auth,postCreateValidator,createPost)
router.get('/get-posts',auth,getPost)

module.exports = router; // ✅ router export
