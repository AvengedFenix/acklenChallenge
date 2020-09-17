import React from "react";
import WorkerProfile from "../components/WorkerProfile";
import { useFetchUser } from "../utils/user";

const profile = () => {
	const { user, loading } = useFetchUser();
	return (
		<div className="container">
			{user && !loading ? <WorkerProfile id={user.sub} /> : <h1>Hola</h1>}
		</div>
	);
};

export default profile;
