const mongoose = require("mongoose");

const workerSchema = mongoose.Schema({
	name: {
		type: String,
	},
	nickname: {
		type: String,
	},
	auth0Id: {
		type: String,
	},
	tasks: {
		type: Array,
	},
});

module.exports =
	mongoose.models.Worker || mongoose.model("Worker", workerSchema);
