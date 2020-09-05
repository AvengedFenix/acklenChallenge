import dbConnect from "../../utils/database";
//Aqui tengo que importar el model del los projects

export default async (req, res) => {
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case "GET":
			try {
			} catch (error) {}
			break;
		case "POST":
			try {
			} catch (error) {}
			break;
	}
};
