const {validationResult} = require('express-validator');
const User = require('../models/userModel');
const randomstring = require('randomstring');
const bcrypt = require('bcrypt')
const createUser = async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: 'Validation Errors',
                errors: errors.array()
            });
        }

        const {name,email} = req.body;
        const isExists =await User.findOne({
            email
        })

        if(isExists){
            return res.status(400).json({
                success:false,
                msg:"Email already exists !!"
            })
        }
        //paasword create krna hoga kyuki new user h
        const password = randomstring.generate(6);
        const hashedPassword = await bcrypt.hash(password,10);

        var obj ={
            name, 
            email,
            password:hashedPassword
        }

        if(req.body.role && req.body.role==1){
            return res.status(200).json({
                success:false,
                msg:"role cant create admin!",
            })
        }
        else if(req.body.role){
            obj.role = req.body.role;
        }

        const user = new User(obj);
        const userData = await user.save();
        console.log(password);

        return res.status(200).json({
            success:true,
            msg:"user created successfully",
            data:userData
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            msg:error.message
        })
    }
}


module.exports = {
    createUser
}