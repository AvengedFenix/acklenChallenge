import dbConnect from "../../utils/database";
import Task from "../../models/Task";
import Worker from "../../models/Worker";

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case "POST":
			try {
				let ObjectID = require("mongodb").ObjectID;
				const workerID = req.body.workerID;
				console.log("in hideTasks: " + req.body.taskID);

				// const task = await Task.findOne({
				// 	_id: 'ObjectId("' + req.body.taskID + '")',
				// });
				// console.log(task);
				// console.log(task.taken);
				Task.updateOne(
					{ _id: ObjectID(req.body.taskID) },
					{ $set: { taken: true } },
					(err, docs) => {
						if (err) {
							console.log(err);
						} else {
							console.log("Updated Docs : ", docs);
						}
					}
				);
				// task.taken = true;
				// task.save();
				// const task = Task.findOneAndUpdate(
				// 	{ _id: req.body.taskID },
				// 	{ taken: true },
				// 	{ upsert: true },
				// 	(err, doc) => {
				//     if (err) {
				//       return res.send(500, {error: err})
				//     }
				//     return res.send('Saved')
				//   }
				// );

				const taskInfo = {
					taskID: req.body.taskID,
					taskType: req.body.title,
				};

				// Worker.findOneAndUpdate(
				// 	{ auth0Id: req.body.workerID },
				// 	{ $push: { tasks: taskInfo } }
				// );
				res.status(201).json({ success: true });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
	}
};
