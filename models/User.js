const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: {
		type: String,
	},
});

for (let model in mongoose.models) {
	delete mongoose.models[model];
}

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
