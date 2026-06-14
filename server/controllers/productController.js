const Product = require('../models/Product');

const getProducts =async (req,res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(err){
        console.log("Error fetching products:", err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
}

const createProduct = async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch(err){
        console.log("Error creating product:", err);
        res.status(500).json({ error: "Failed to create product" });
    }}

const updateProduct = async (req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!product){
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(product);
    }
    catch(err){
        console.log("Error updating product:", err);
        res.status(500).json({ error: "Failed to update product" });
    }
}

const deleteProduct = async (req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    }
    catch(err){
        console.log("Error deleting product:", err);
        res.status(500).json({ error: "Failed to delete product" });
    }
}

const getProductById = async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({error:"Product not found"});
        } 
        res.json(product)
    }
    catch(err){
        console.log("Error fetching Products:",err);
        res.status(500).json({error:"failed to fetch product"})
    }
}

module.exports = { getProducts , createProduct, updateProduct, deleteProduct, getProductById};