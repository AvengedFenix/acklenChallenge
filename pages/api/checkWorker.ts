import dbConnect from "../../utils/database";
import Worker from "../../models/Worker";

dbConnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "POST":
			try {
				const id = req.body.id;
				const worker = await Worker.find({ auth0Id: id });
				console.log("Worker: " + worker);
				if (worker) {
					res.status(200).json({ success: true, data: true });
				} else {
					res.status(200).json({ success: false, data: false });
				}
			} catch (error) {
				console.log(error);
				res.status(400).json({ success: false });
			}
			break;
		default:
			console.log("default");

			res.status(400).json({ success: false });
			break;
	}
};
