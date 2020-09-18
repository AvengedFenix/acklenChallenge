import React, { useState } from "react";
import CreateTask from "./CreateTask";
import { useFetchUser } from "../utils/user";

const TaskType = () => {
	const [showCreate, setShowCreate] = useState(false);
	const [type, setType] = useState("");
	const {user, loading} = useFetchUser();

	return (
		<div>
			<div className="container taskTypeContainer">
				<button
					onClick={() => {
						setShowCreate(!showCreate), setType("TV Mount");
					}}
					className="taskType"
				>
					<p></p>
					TV Mount
					{/* <p className="typeTitle">TVMount</p> */}
				</button>
				{/* <button value="TV Mount" className="btn btn-primary taskType">
				<img className="taskType ttImg"src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80" />
			</button> */}
			</div>
			<br />
			{showCreate ? (
				<CreateTask type={type} userName={user.name} />
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
