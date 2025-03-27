import mongoose, { Schema } from "mongoose";

//Buch-Schema
const bookSchema = new mongoose.Schema({
	bookId: { type: String, require: false },	//SOM
	title: { type: String, require: false },	//SOM
	isbn: { type: String, require: false },		//SOM
	author: String,
	description: String,
	imageUrl: String,
	thumnail: String,
});

//List-Schema
const listSchema = new mongoose.Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },		//SOM
	books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})


export const Book = mongoose.model('Book', bookSchema);
export const Wishlist = mongoose.model('Wishlist', listSchema);
export const Favourite = mongoose.model('Favourite', listSchema);
export const UnreadingBook = mongoose.model('UnreadingBook', listSchema);
export const UserList = mongoose.model('UserList', listSchema);


//SOM
const progressSchema = new mongoose.Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	book: { type: Schema.Types.ObjectId, ref: 'Book' },
	date: { type: Date, default: Date.now },
	progress: { type: Number },
	// progressType: { type: String, enum: ['page', 'percent'], default: 'page' },
	note: { type: String },
});
export const Progress = mongoose.model('Progress', progressSchema);

const readingGoalSchema = new mongoose.Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
	targetType: { type: String, enum: ['books', 'pages'], required: true }, // 'books' หรือ 'pages'
	quantity: { type: Number, required: true }, // จำนวนหนังสือหรือหน้า
	recurring: { type: Boolean, default: false }, // เกิดซ้ำหรือไม่
	recurringInterval: { type: String, enum: ['monthly', 'yearly'] }, // 'monthly' หรือ 'yearly' (ถ้า recurring)
	startDate: { type: Date, default: Date.now },
	endDate: { type: Date },
	note: { type: String },
});
export const ReadingGoal = mongoose.model('ReadingGoal', readingGoalSchema);

