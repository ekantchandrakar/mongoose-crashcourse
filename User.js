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

// Available on every instances of our Model
userSchema.methods.sayHi = function () {
	console.log(`Hi, My name is ${this.name}`);
};

// static method --- Available on actual Model not the instances but on the overall model
userSchema.statics.findByName = function (name) {
	return this.find({ name: new RegExp(name, "i") });
};

// we can add things to query itself --- query level thing only work with User.find() or User.where() which return query
userSchema.query.byName = function (name) {
	return this.where({ name: new RegExp(name, "i") });
};

// Virtuals
userSchema.virtual("namedEmail").get(function () {
	return `${this.name} ${this.email}`;
});

module.exports = mongoose.model("User", userSchema);
