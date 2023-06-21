const mongoose = require("mongoose");
const User = require("./User");

mongoose
	.connect("mongodb://127.0.0.1:27017/testDB")
	.then(() => {
		console.log("Connected to DB 👍");
	})
	.catch((error) => {
		console.log(error);
	});

async function run() {
	const user1 = await User.create({ name: "kate", age: 27 }); // create a new user and save
	user1.name = "sally"; // to update user
	await user1.save();

	const user = new User({ name: "James", age: 26 }); // create a new user
	await user.save();

	console.log(user);
	console.log(user1);
}

run();
