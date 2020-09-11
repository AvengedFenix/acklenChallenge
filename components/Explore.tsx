import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Task from "./../components/Task";
import Register from "./Register";

class Explore extends React.Component<any> {
	constructor(props: any) {
		super(props);
		this.state = {
			tasks: [],
		};
	}

	async componentDidMount() {
		const res = await fetch("http://localhost:3000/api/tasks");
		const { data } = await res.json();

		console.log("Data: " + JSON.stringify(data));
		this.setState({
			tasks: data,
		});

		console.log("Tasks state: " + JSON.stringify(this.state.tasks));
		for (let i = 0; i < this.state.tasks.length; i++) {
			const element = this.state.tasks[i];

			console.log("For: " + element.title);
		}
	}

	render() {
		let cards: JSX.Element = this.state.tasks.map((task, index) => {
			console.log("index: " + index);

			if (index % 4 == 0) {
				return <Task first={true} title={task.type} key={index} />;
			} else {
				return <Task first={false} title={task.type} key={index} />;
			}
		});

		return (
			<div className="tasks-container">
				{cards}
			</div>
		);
	}
}

export default Explore;
