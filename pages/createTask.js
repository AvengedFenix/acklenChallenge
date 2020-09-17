import React from "react";
import { useFetchUser } from "../utils/user";
import TaskType from "../components/TaskType";
import LoginButton from "../components/LoginButton";
import Register from "./../components/Register";

const createTask = () => {
	const { user, loading } = useFetchUser();

	console.log("User: " + user);

	return (
		<div className="container register-container">
			{user && !loading ? <TaskType /> : null}
			{!user && !loading ? <Register /> : null}
		</div>
	);
};

export default createTask;
