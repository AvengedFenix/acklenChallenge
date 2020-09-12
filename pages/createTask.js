import React from "react";
import { useFetchUser } from "../utils/user";
import TaskType from "../components/TaskType";
import LoginButton from "../components/LoginButton";

const createTask = () => {
	const { user, loading } = useFetchUser();

	console.log("User: " + user);

	return (
		<div className="container">
			{user && !loading ? (
				<TaskType />
			) : (
				<div>
					<p>Big shaq</p>
				</div>
			)}
			{!user && !loading ? <LoginButton /> : null}
		</div>
	);
};

export default createTask;
