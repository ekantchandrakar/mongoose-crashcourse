const mongoose = require("mongoose");
const User = require("./User");
const { log } = require("console");
// 64930741095e63bc6feb6118
mongoose
	.connect("mongodb://127.0.0.1:27017/testDB")
	.then(() => {
		console.log("Connected to DB 👍");
	})
	.catch((error) => {
		console.log(error);
	});

async function run() {
	try {
		/*
		const user = await User.create({
			name: "Tensin",
			age: 40,
			email: "test@test.com",
			hobbies: ["Bowling", "Weight Lifting"],
			address: {
				street: "Main st",
			},
		});
		console.log(user);
        */
		// const user = await User.findByName("Tensin"); // static method
		// const user = await User.find().byName("Tensin"); // query level method
		const user = await User.findOne({ name: "Tensin" });
		/*
        user[0].bestFriend = "6493033f1745b16c816f7869";
		await user[0].save();
        */
		console.log(user);
		await user.save();
		// user.sayHi(); // methods
		console.log(user.namedEmail); // virtual
	} catch (error) {
		console.log(error.message);
	}
}

run();
