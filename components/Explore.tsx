import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Task from "./../components/Task";
import Register from "./Register";

interface States {
	tasks: Array<any>;
}

class Explore extends React.Component<any, States> {
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
		let cards = this.state.tasks.map((task, index) => {
			console.log("index: " + index);
			console.log("id:" + task._id);
			console.log("address: " + task.address);

			if (!task.taken) {
				if (index % 4 == 0) {
					return (
						<Task
							id={task._id}
							first={true}
							title={task.type}
							key={index}
							address={task.address}
						/>
					);
				} else {
					return (
						<Task
							id={task._id}
							first={false}
							title={task.type}
							key={index}
							address={task.address}
						/>
					);
				}
			}
		});

		return <div className="tasks-container">{cards}</div>;
	}
}

export default Explore;
