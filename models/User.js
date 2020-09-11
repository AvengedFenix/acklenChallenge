const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: {
		type: String,
	},
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
