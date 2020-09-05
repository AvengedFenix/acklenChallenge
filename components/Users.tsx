import React from "react";
import mongoose from "mongoose";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


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
