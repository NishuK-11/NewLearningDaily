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

const loginUser= async(req,res)=>{
  try{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: 'Validation Errors',
        errors: errors.array()
      });
    }

    const {email,password}= req.body;
    

  }catch(error){
    return res.status(500).json({
      success: false,
      msg: error.message
    });
  }
}

module.exports = {
  registerUser
};
