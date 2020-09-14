import React from "react";
import { useFetchUser } from "../utils/user";

const createWorker = async (worker) => {
	try {
		const res = await fetch("http://localhost:3000/api/newWorker", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(worker),
		});
	} catch (error) {
		console.log(e);
	}
};

interface Props {
	name: String;
	nickname: String;
	auth0Id: String;
}

const BecomeWorker: React.FC<Props> = ({ name, nickname, auth0Id }) => {
	// const { user, loading } = useFetchUser();
	const worker = {
		name: name,
		nickname: nickname,
		auth0Id: auth0Id,
	};
	return (
		<div>
			<button
				onClick={() => createWorker(worker)}
				className="btn btn-primary btn-worker"
			>
				Become a worker
			</button>
		</div>
	);
};

export default BecomeWorker;
