import mongoose, { Schema } from "mongoose";

//Buch-Schema
const bookSchema = new mongoose.Schema({
    title: { type: String, require: true  },
    author: String,
    description: String,
    imgeUrl: String,
    thumnail: String,
});

//List-Schema
const listSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})


export const Book = mongoose.model('Book', bookSchema);
export const Wishlist = mongoose.model('Wishlist', listSchema);
export const Favourite = mongoose.model('Favourite', listSchema);
export const UnreadingBook = mongoose.model('UnreadingBook', listSchema);
export const UserList = mongoose.model('UserList', listSchema);