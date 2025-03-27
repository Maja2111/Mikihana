import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	username: {
		type: String,
		require: true,
		unique: true
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	birthday: { type: Date },
	gender: String,
	verified: {
		type: Boolean,
		default: false
	},
	verificationToken: String,		//SOM
	profilePhoto: String,

},
	{ timestamps: true }
);

userSchema.pre("save", function () {
	// this.password = bcrypt.hashSync(this.password);		//SOM
});

export default mongoose.model('user', userSchema);
export const User = mongoose.model('User', userSchema);		//SOM