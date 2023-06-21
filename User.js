const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
	street: String,
	city: String,
});

const userSchema = new mongoose.Schema({
	name: String,
	age: {
		type: Number,
		min: 1,
		max: 100,
		validate: {
			validator: (v) => v % 2 === 0,
			message: (props) => `${props.value} is not a even number`,
		},
	},
	email: {
		type: String,
		minLength: 5,
		required: true,
		lowercase: true,
	},
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
	updatedAt: {
		type: Date,
		default: () => Date.now(),
	},
	bestFriend: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "User",
	},
	hobbies: [String],
	address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
