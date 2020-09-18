import React from "react";
import WorkerProfile from "../components/WorkerProfile";
import { useFetchUser } from "../utils/user";

const profile = () => {
	const { user, loading } = useFetchUser();
	return (
		<>
			{user && !loading ? <WorkerProfile id={user.sub} /> : <h1>Hola</h1>}
		</>
	);
};

export default profile;
