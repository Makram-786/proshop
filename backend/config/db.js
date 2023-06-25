import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Mongo Database is listening on ${conn.connection.host} `)
        
    } catch (error) {
        console.log(`Database Error: ${error.message}`);
        process.exit(1)
    }
   
}

export default connectDB