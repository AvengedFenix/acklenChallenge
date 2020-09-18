import React from "react";
import Task from "./Task";

interface Props {
	id: any;
}

// const getTasks = async (id) => {
// 	const res = await fetch("http://localhost:3000/api/" + id);
//   const { data } = await res.json();
//   console.log(data);

// 	return data;
// };

// const WorkerProfile: React.FC<Props> = ({ id }) => {
// const [tasks, setTasks] = useState({});

// useEffect(() => {
// 	setTasks(getTasks(id));
// });
// console.log("Profile: " + tasks);

// let Cards: JSX.Element = tasks.map((task, index) => {
// 	return (
// 		<Task
// 			id={task._id}
// 			first={true}
// 			title={task.type}
// 			key={index}
// 			address={task.address}
// 		/>
// 	);
// });

// 	return (
// 		<div>
// 			<h1 className="title">Your Tasks</h1>
// 			{/* {Cards} */}
// 		</div>
// 	);
// };

interface States {
	tasks: Array<any>;
}

class WorkerProfile extends React.Component<any, States> {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
		};
		this.rowTasks = this.rowTasks.bind(this);
	}

	async componentDidMount() {
		console.log("props: " + this.props.id);
		let object = {
			id: this.props.id,
		};

		const res = await fetch("api/workerTasks", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(object),
		});
		const { data } = await res.json();
		console.log(data);
		await this.setState({
			tasks: data,
		});
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
				if ((index - copy) % 3 === 0 && index !== 0) {
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
						console.log(task);
						index == 0 ? (first = true) : (first = false);
						return (
							<div className="col-sm">
								<Task
									first={first}
									key={index}
									id={task.taskID}
									title={task.type}
									address={task.address}
									size={task.size}
									takenDown={task.takenDown}
									wallMount={task.wallMount}
									wallType={task.wallType}
									cords={task.cords}
									externalDevices={task.externalDevices}
									date={task.date}
									taken={false}
									worker={true}
									issuer={task.issuer}
								/>
							</div>
						);
					})}
				</div>
			);
		});

		return (
			<div className="tasks-container container">
				{/* <h1 c	lassName="title">Your Tasks</h1> */}

				{this.state.tasks == null || this.state.tasks == undefined ? (
					<>
						<h1 className="register-title">
							You don't have any tasks to complete
						</h1>
					</>
				) : (
					<>{cards}</>
				)}
			</div>
		);
	}
}

export default WorkerProfile;
