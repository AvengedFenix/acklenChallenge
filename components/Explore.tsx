import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Task from "./../components/Task";

class Explore extends React.Component<any> {
	constructor(props: any) {
		super(props);
		this.state = {
			tasks: [],
		};
	}

	async componentDidMount() {
		const res = await fetch("http://localhost:3000/api/Tasks");
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
			return <Task title={task.type} key={index} />;
		});

		return (
			<div className="tasks-container">
				
					{cards}
				
			</div>
		);
	}
}

export default Explore;
