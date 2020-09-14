import dbConnect from "../../utils/database";
import Worker from "../../models/Worker";

dbConnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "POST":
			try {
        let id = req.body.auth0Id;
        
				Worker.find({ auth0Id: id }, (err, docs) => {
					if (docs.length) {
						console.log("Woker already exists");
						res.status(400).json({ success: false });
					} else {
						const worker = Worker.create(req.body);
						console.log("Worker created");
						res.status(200).json({ success: true, data: worker });
					}
				});
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
      console.log("default");
      
			res.status(400).json({ success: false });
			break;
	}
};
