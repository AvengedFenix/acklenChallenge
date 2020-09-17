import dbConnect from "../../utils/database";
import Task from "../../models/Task";
import Worker from "../../models/Worker";
//Aqui tengo que importar el model del los projects

export default async (req, res) => {
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case "GET":
			
			break;
		case "POST":
			try {
			} catch (error) {}
			break;
	}
};
