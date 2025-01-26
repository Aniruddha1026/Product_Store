const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Product = require('../models/product.model.js')

router.get('/',async (req,res) =>{
    try{
        const products=await Product.find({})
        res.status(200).json({success:true,data:products})

    }
    catch(err){
        console.error("error in fetching product:",err.message)
        res.status(500).json({success:false,message:"Server Error"})
    }
    
})

router.post('/',async (req,res) => {
    const product=req.body
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message:"provide all fields"})
    }
    const newproduct=new Product(product)
    try{
        await newproduct.save()
        res.status(201).json({success:true,data:newproduct})
    }
    catch(err){
        console.error("error in create product:",err.message)
        res.status(500).json({success:false,message:"Server Error"})
    }
})

router.put('/:id',async (req,res) => {
    const {id}=req.params
    const product=req.body
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid  Product Id"})
    }
    try{
        const updatedProduct=await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({success:true,data:updatedProduct})
    }
    catch(err){
        console.error("error in updating product:",err.message)
        res.status(500).json({success:false,message:"Server Error"})
    }
})

router.delete('/:id',async (req,res) => {
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid  Product Id"})
    }
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product Deleted"})  
    }
    catch(err){
        console.error("error in deleting product:",err.message)
        res.status(500).json({success:false,message:"Server Error"})
    }
})

module.exports=router