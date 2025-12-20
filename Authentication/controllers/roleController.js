const {validationResult} = require('express-validator');
const Role = require('../models/roleModel');

const storeRoles = async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: 'Validation Errors',
                errors: errors.array()
            });
        }

        const {role_name,value} = req.body;
        const role = new Role({
            role_name,
            value
        })

        const roleData = await role.save();
        return res.status(200).json({
            success:true,
            msg:"role created successfully!!",
            data:roleData
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            msg:error.message
        })
    }
}

const getRoles = async(req,res)=>{
    try{
        //admin role ko chhorke saare de do
        const roles = await Role.find({
            value:{
                $ne:1
            }
        });
        return res.status(200).json({
            success:true,
            msg:'Roles fetched successfully',
            data:roles
        })


    }catch(error){
        return res.status(500).json({
            success:false,
            msg:error.message
        })
    }
}

module.exports = {
    storeRoles,
    getRoles
}