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
		console.log(process.env);
		this.rowTasks = this.rowTasks.bind(this);
	}

	async componentDidMount() {
		const res = await fetch("/api/tasks");
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

	rowTasks() {
		let rows = {};
		let counter = 1;
		let copy = 0;
		this.state.tasks.map((task, index) => {
			console.log("index: " + index);
			console.log("id:" + task._id);
			console.log("address: " + task.address);

			if (!task.taken) {
				rows[counter] = rows[counter] ? [...rows[counter]] : [];

				console.log("Counter: " + counter);
				if ((index - copy) % 4 === 0 && index !== 0) {
					counter = counter + 1;
					rows[counter] = rows[counter] ? [...rows[counter]] : [];
					rows[counter].push(task);
				} else {
					rows[counter].push(task);
				}
			} else {
				copy++;
			}
		});
		console.log(rows);
		return rows;
	}

	render() {
		const rows = this.rowTasks();
		let first = false;
		let cards = Object.keys(rows).map((row) => {
			return (
				<div className="row">
					{rows[row].map((task, index) => {
						index == 0 ? (first = true) : (first = false);
						return (
							<div className="col-sm">
								<Task
									id={task._id}
									first={first}
									title={task.type}
									key={index}
									address={task.address}
								/>
							</div>
						);
					})}
				</div>
			);
		});

		return <div className="tasks-container container">{cards}</div>;
	}
}

export default Explore;
