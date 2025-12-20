const {validationResult} = require('express-validator');
const Post = require('../models/postModel');

const createPost = async(req,res)=>{
    try{
         // 1️⃣ Validation check
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: 'Validation Errors',
                errors: errors.array()
            });
        }

        const {title,description} = req.body;
        var obj = {
            title,
            description
        }
        if(req.body.categories){
            obj.categories = req.body.categories;
        }

        const post = new Post(obj);
        const postData = await post.save();
        return res.status(200).json({
            success:true,
            msg:'Post created Successfully!',
            data:postData
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            msg:error.message
        })
    }
}


const getPost = async(req,res)=>{
    try{
        const posts= await Post.find({}).populate('categories');

        return res.status(200).json({
            success:true,
            msg:'Post fetched Successfully!',
            data:posts
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            msg:error.message
        })
    }
}

const deletePost = async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: 'Validation Errors',
                errors: errors.array()
            });
        }

        const {id} = req.body;
        const post= await Post.findOne({_id:id})
        if(!post){
            return res.status(400).json({
                success:false,
                msg:'Post doesnot exist'
            })
        }
        const postData = await Post.findByIdAndDelete({_id:id});
           
        return res.status(200).json({
            success:true,
            msg:'Post deleted Successfully!',
            data:postData
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            msg:error.message
        })
    }
}

const updatePost = async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: 'Validation Errors',
                errors: errors.array()
            });
        }

        const {title,id,description} = req.body;

        const isExists = await Post.findOne({_id:id});
        if(!isExists){
            return res.status(400).json({
                success:false,
                msg:'Post doesnt exist'
            })  
        }

        var obj = {
            title,
            description
        }
        if(req.body.categories){
        obj.categories = req.body.categories;
        }

        const updatedPosts = await Post.findByIdAndUpdate({_id:id},{
        $set:obj
        },{new:true})

        return res.status(200).json({
            success:true,
            msg:'Post fetched Successfully!',
            data:updatedPosts
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            msg:error.message
        })
    }
}

module.exports = {
    createPost,
    getPost,
    deletePost,
    updatePost
}