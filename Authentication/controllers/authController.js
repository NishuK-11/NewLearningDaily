
//isEmail(),isLength({ min: 6 }),withMessage(),validationResult(req)-> Sare validation errors collect karta hai
const { validationResult } = require('express-validator');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const registerUser = async (req, res) => {
  try {
    // 1️⃣ Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: 'Validation Errors',
        errors: errors.array()
      });
    }

    // 2️⃣ Get data
    const { name, email, password } = req.body;

    // 3️⃣ Check existing user
    const isExist = await User.findOne({ email });
    console.log(isExist);

    if (isExist) {
      return res.status(409).json({
        success: false,
        msg: 'Email already exists!'
      });
    }

    // 4️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5️⃣ Save user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    const userData = await user.save();

    // 6️⃣ Response (password removed)
    return res.status(201).json({
      success: true,
      msg: 'User registered successfully',
      data: {
        _id: userData._id,
        name: userData.name,
        email: userData.email
      }
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message
    });
  }
};
const generateAccessToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.ACCESS_SECRET_TOKEN,
    { expiresIn: "2h" }
  );
};

const loginUser = async (req, res) => {
  try {
    // 1️⃣ Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: 'Validation Errors',
        errors: errors.array()
      });
    }

    // 2️⃣ Get data
    const { email, password } = req.body;

    // 3️⃣ Check user
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(401).json({
        success: false,
        msg: 'Email or password is incorrect'
      });
    }

    // 4️⃣ Compare password
    const isPasswordMatch = await bcrypt.compare(password, userData.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        msg: 'Email or password is incorrect'
      });
    }

    // 5️⃣ Generate token (SAFE payload)
    const accessToken = generateAccessToken({
      id: userData._id,
      email: userData.email,
      role: userData.role
    });

    // 6️⃣ Success response
    return res.status(200).json({
      success: true,
      msg: 'Login successful',
      accessToken,
      tokenType: 'Bearer',
      data: {
        id: userData._id,
        name: userData.name,
        email: userData.email,
        role: userData.role 
      }
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message
    });
  }
};


//user login h tabhi profile dekh skta h-> pehle token required ka msg aana chahiye, agr h tbhi 
const getProfile = async(req,res)=>{
  try {
// req.user = {
//   id: "64f....",
//   email: "test@gmail.com"
// }

    const user_id = req.user.id;
    const userData = await User.findOne({_id:user_id});
 if (!userData) {
      return res.status(404).json({
        success: false,
        msg: 'User not found'
      });
    }

    return res.status(200).json({
      //Middleware me jo bhi tum req me add karti ho, wo aage aane wale controller me automatically available hota hai.
      //next() bola → request aage bhej di
//       Ab req aisa ho gaya:

// req = {
//   headers: {...},
//   body: {...},
//   user: {
//     id: "...",
//     email: "..."
//   }
// }
      success:true,
      msg:'Profile Data',
      data:userData
    })
  }catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message
    });
  }
}


module.exports = {
  registerUser,
  loginUser,
  getProfile
};
