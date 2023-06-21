const mongoose = require("mongoose");
const User = require("./User");
const { log } = require("console");

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
		const user = await User.create({
			name: "Shyam",
			age: 39,
			hobbies: ["Bowling", "Weight Lifting"],
			address: {
				street: "Main st",
			},
		});
		console.log(user);
	} catch (error) {
		console.log(error);
	}
}

run();
