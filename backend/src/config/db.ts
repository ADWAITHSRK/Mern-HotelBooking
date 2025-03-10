import mongoose from "mongoose";
import "dotenv/config";
const MONGODB_CONNECTION_STRING = "mongodb+srv://adwaithkrishna43:v48LcWf34ZuzqzSZ@cluster0.bwhc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb+srv://adwaithkrishna43:v48LcWf34ZuzqzSZ@cluster0.bwhc8.mongodb.net/Data?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected SuccesFully")
    }
    catch(error){
        console.log(error)
        process.exit(1);

    }
}

export default connectDB;
