import mongoose from "mongoose";
import dotenv from 'dotenv';
import users from "./data/user.js";
import products from "./data/products.js";
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () =>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
    
        const createdUser = await User.insertMany(users);
        const adminUser = createdUser[0]._id
    
        const sampleProducts = products.map(product=>{
            return {...product , user:adminUser}
        })
        // console.log(sampleProducts)
       await Product.insertMany(sampleProducts);

        console.log("Import Data Successfully!");
        process.exit();
    } catch (error) {
        console.log(`${error.message}`)
    }
   
}

const deleteData = async () =>{
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log(" Data Deleted!");
        process.exit();
    } catch (error) {
        console.log(`${error.message}`)
        process.exit(1);
    }
   
}

if(process.argv[2] === '-d'){
    deleteData();
}
else{
    importData();
}
