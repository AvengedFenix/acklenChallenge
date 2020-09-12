import React, { useState } from "react";
import CreateTask from "./CreateTask";
//import "../styles/taskType.module.css";

const TaskType = () => {
	const [showCreate, setShowCreate] = useState(false);
	const [type, setType] = useState("");

	return (
		<div>
			<div className="container taskTypeContainer">
				<div
					onClick={() => {
						setShowCreate(!showCreate), setType("TV Mount");
					}}
					className="taskType"
				>
					<div className="ttImg">
						<p className="typeTitle">TVMount</p>
					</div>
				</div>
				{/* <button value="TV Mount" className="btn btn-primary taskType">
				<img className="taskType ttImg"src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80" />
			</button> */}
			</div>
			{showCreate ? (
				<CreateTask type={type} />
			) : (
				<div>
					<p className="instructions">
						Select the type of task you want to create
					</p>
				</div>
			)}
		</div>
	);
};

export default TaskType;
