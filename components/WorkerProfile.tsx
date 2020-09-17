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

class WorkerProfile extends React.Component<any> {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
		};
	}

	async componentDidMount() {
		console.log("props: " + this.props.id);
		let object = {
			id: this.props.id,
		};

		const res = await fetch(process.env.VERCEL_URL + "/api/workerTasks", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(object),
		});
		const { data } = await res.json();
		console.log(data);
		this.setState({
			tasks: data,
		});
	}

	render() {
		return (
			<div>
				<div>
					<h1 className="title">Your Tasks</h1>
					{/* {Cards} */}
				</div>
			</div>
		);
	}
}

export default WorkerProfile;
