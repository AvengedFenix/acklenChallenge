const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
	size: {
		type: String,
	},
	takenDown: {
		type: Boolean,
	},
	wallMount: {
		type: String,
	},
	wallType: {
		type: String,
	},
	cords: {
		type: Boolean,
	},
	externalDevices: {
		type: Boolean,
	},
	type: {
		type: String,
		required: false,
	},
	address: {
		type: String,
		required: false,
	},
	estimatedPrice: {
		type: Number,
		required: false,
	},
	date: {
		type: Date,
		required: false,
	},
	taken: {
		type: Boolean,
	},

	issuer:{
		type: String,
	}
});

module.exports = mongoose.models.Task || mongoose.model("Task", taskSchema);
