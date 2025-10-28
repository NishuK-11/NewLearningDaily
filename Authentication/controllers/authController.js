const { validationResult } = require('express-validator');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');


const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req); // ✅ 'errors' not 'error'
    if (!errors.isEmpty()) {
      return res.status(400).json({  // usually 400 for validation errors
        success: false,
        msg: 'Validation Errors',
        errors: errors.array()
      });
    }

    // User create logic
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      success: true,
      msg: 'User registered successfully',
      user
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message
    });
  }
};

module.exports = {
  registerUser
};
