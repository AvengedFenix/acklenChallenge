import React from "react";
import mongoose from "mongoose";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import userModel from "../models/userModel";

const dbURI =
	"mongodb+srv://mario:acklenDB@cluster0.wci2l.mongodb.net/acklenChallenge?retryWrites=true&w=majority";

mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		bufferCommands: false,
		useUnifiedTopology: true,
	})
	.catch((err) => {
		console.log(err);
		console.log("se mamo perro");
	});

let newUser = new userModel({
	id: mongoose.ObjectId,
	name: "Mario",
});

class Users extends React.Component {
	save = () => {
		newUser.save((err) => {
			if (err) {
				console.log(err);
			}
		});
	};

	render() {
		return (
			<div>
				<Card>
					<Card.Body>
						<Card.Title>Agregar Usuario</Card.Title>
						<Button>Add</Button>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Users;
