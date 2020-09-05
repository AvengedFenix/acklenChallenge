const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: true
  },
  estimatedPrice: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: false,

  }

});


module.exports = mongoose.models.Task || mongoose.model("Task", taskSchema);
