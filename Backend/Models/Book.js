import mongoose from "mongoose";
import { title } from "process";

const BookSchema = new mongoose.Schema({
    title: { type: String, require: true  },
    author: { type: String },
    description: { type: String },
    imgeUrl: { type: String },
    category: { type: String, enum: ['brandnew', 'mustread'], require: true },
});


const Book = mongoose.model('Book', BookSchema);
export default BookSchema;