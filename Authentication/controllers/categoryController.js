const {validationResult}  = require('express-validator');
const Category = require('../models/categoryModel');
const { findByIdAndDelete } = require('../models/userModel');


const addCategory= async(req,res)=>{
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

        const {category_name} = req.body;

        //same name ka category baar-baar na bne
        //case inssensitive follow krna h -> regex 
        const isExists = await Category.findOne({
            category_name:{
                $regex: category_name,
                $options:'i'
            }
        })
        if(isExists){
            return res.status(400).json({
                success:false,
                msg:'category name already exists!'
            })
        }
        const category =new Category({
            category_name
        })
        const categoryData = await category.save();
        return res.status(200).json({
            success:true,
            msg:"category created successfully",
            data:categoryData
        })

    }catch(error){
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}

const getCategory= async(req,res)=>{
    try{
        
        const categories = await Category.find({});
        
        return res.status(200).json({
            success:true,
            msg:"category fetched successfully",
            data:categories
        })

    }catch(error){
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}

const deleteCategory= async(req,res)=>{
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
        const { id } = req.body;

        const categoryData = await Category.findOne({_id:id});
        if(!categoryData){
            return res.status(200).json({
                success:false,
                msg:"category doesnt exist"
            })
        }

        const deleted = await Category.findByIdAndDelete({_id:id});
        return res.status(200).json({
            success: true,
            msg: 'Category deleted successfully'
        });


    }catch(error){
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}

const updateCategory = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: 'Validation Errors',
        errors: errors.array()
      });
    }

    const { id, updated_name } = req.body;
    const trimmedName = updated_name.trim();

    // 🔐 Duplicate check (case-insensitive, except same id)
    const isExists = await Category.findOne({
      category_name: {
        $regex: `^${trimmedName}$`,
        $options: 'i'
      },
      _id: { $ne: id }
    });

    if (isExists) {
      return res.status(409).json({
        success: false,
        msg: 'Category name already exists!'
      });
    }

    // ✅ Update
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { category_name: trimmedName },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        msg: 'Category does not exist'
      });
    }

    return res.status(200).json({
      success: true,
      msg: 'Category updated successfully!',
      data: updatedCategory
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message
    });
  }
};


module.exports={
    addCategory,
    getCategory,
    deleteCategory,
    updateCategory
}