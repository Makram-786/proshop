import express from 'express';
import dotenv from 'dotenv'
const app = express();
import products from './data/products.js'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();

connectDB()

app.get('/',(req,res)=>{
    res.send('API is Calling')
})
app.use('/api/products', productRoutes)

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is listening on ${process.env.NODE_ENV} on port ${PORT}`))