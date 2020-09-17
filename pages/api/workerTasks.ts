import dbConnect from "./../../utils/database";
import Task from "../../models/Task";
import Worker from "../../models/Worker";

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case "POST":
			try {

				// const id = req.body.id;
				// const worker = await Worker.find({ auth0Id: id });
				// console.log(worker);
				// console.log(typeof worker);
				// const tasks = worker[0].tasks;
				// console.log("Tasks : " + JSON.stringify(tasks));
				// console.log("Tasks : " + tasks[0].taskID);

				// let data = [];
				// let oneTask;
				// tasks.map((task, index) => {
				// 	oneTask = Task.find({ _id: task.taskID });
				// 	console.log("Getting tasks: " + task.taskID);
				// 	JSON.stringify(oneTask, (key, val) => {
				// 		if (typeof val === "object" && val !== null) {
				// 			if (data.includes(val)) return;

				// 			data.push(val);
				// 		}
				// 	});

				// 	// })
				// 	data.push(oneTask);
				// });

				// console.log("Data: " + JSON.stringify(data));

				// if (!worker) {
				// 	return res.status(400).json({ success: false, data: false });
				// }
				res.status(200).json({ success: true });
			} catch (error) {
				console.log(error);
			}
			break;
		default:
			res.status(400).json({ success: false });
	}
};
