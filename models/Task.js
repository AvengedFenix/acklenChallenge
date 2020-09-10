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
		type: String,
	},
	externalDevices: {
		type: String,
	},

	type: {
		type: String,
		required: false,
	},
	direction: {
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
});

module.exports = mongoose.models.Task || mongoose.model("Task", taskSchema);
