const express = require('express');
const router = express.Router(); // ✅ yaha router banaya
const authController = require('../controllers/authController');
const { registerValidator, loginValidator} = require('../helpers/validator');
const auth = require('../middlewares/authMiddleware')


router.post('/register', registerValidator, authController.registerUser);
router.post('/login', loginValidator, authController.loginUser);

//authentication routes
router.get('/profile',auth ,authController.getProfile);

module.exports = router; // ✅ router export
