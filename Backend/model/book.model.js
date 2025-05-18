import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({

    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
 })
//ab jo schema ham create kiye hai usko model me convert karenge
 const Book=mongoose.model('Book',bookSchema); // bookschema se data Book collection me store hoga

 export default Book; 