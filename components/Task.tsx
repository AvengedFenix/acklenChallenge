import React from "react";
// import tvicon from "../public/icons/tv_icon.svg";
// import wall from "../public/icons/wall.svg";
import { useFetchUser } from "../utils/user";

interface Props {
	title: string;
	first: boolean;
	id: string;
	address: string;
	size: string;
	takenDown: boolean;
	wallMount: string;
	wallType: string;
	cords: boolean;
	externalDevices: boolean;
	date: Date;
	taken: boolean;
	worker: boolean;
	issuer: string;
}

const pictures = {
	"TV Mount": {
		0: "https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
		1: "https://images.unsplash.com/photo-1540300512726-61873b2c627d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
		2: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
		3: "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80",
	},
};

const url = process.env.VERCEL_URL + "api/";

const hideTask = async (info) => {
	console.log(JSON.stringify(info));

	try {
		const res = await fetch("/api/hideTask", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(info),
		});
	} catch (error) {
		console.log(error);
	}
};

const verifyWorker = async (info) => {
	console.log("verify");
	console.log(JSON.stringify(info));
	try {
		const res = await fetch("/api/checkWorker", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(info),
		});
		const { data } = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
	//hideTask(info);
};

const Task: React.FC<Props> = ({
	title,
	first,
	id,
	address,
	size,
	takenDown,
	wallMount,
	wallType,
	cords,
	externalDevices,
	date,
	taken,
	worker,
	issuer,
}: Props) => {
	console.log(title);
	console.log("in task: " + address);

	const { user, loading } = useFetchUser();
	const randomPhoto = Math.floor(Math.random() * 4);
	console.log(randomPhoto);

	let info = {};

	if (user && !loading) {
		info = {
			taskID: id,
			workerID: user.sub,
			title: title,
			size: size,
			takenDown: takenDown,
			wallMount: wallMount,
			wallType: wallType,
			cords: cords,
			externalDevices: externalDevices,
			date: date,
			taken: false,
			issuer: issuer
		};
	}

	return (
		<div id={String(first)} className="card" style={{ width: "10rem" }}>
			<div className="image-container">
				<img
					src={pictures["TV Mount"][randomPhoto]}
					className="card-img-top"
					alt="..."
				/>
			</div>
			<div className="card-body">
				<h6 className="misc-info">$100</h6>
				<h5 className="card-title">{title}</h5>
				<p className="location">{address}</p>
				<div className="divider" />
				<div className="details">
					{/* <img className="card-icon" src={tvicon}></img> */}
					<p className="special">1</p>
					<p className="special" id="special-text">
						TVs
					</p>
					{/* <img className="card-icon" id="second-icon" src={wall} /> */}
					<p className="special sp2">Wall Type</p>
					<p className="special" id="special-text">
						Brick
					</p>
				</div>
				<div className="divider" />
				<div className="task-issuer-container">
					<h1 className="task-issuer-title">Task issuer</h1>
					<div className="task-issuer-details">
						<div className="image-cropper">
							<img
								className="task-issuer-photo"
								src="https://media.wired.com/photos/599623d28d00942cb02e0f1b/master/w_2560%2Cc_limit/obiwon-TA.jpg"
							/>
						</div>
						<div className="task-issuer-text">
							<p className="card-text">{issuer}</p>
							<button className="view-profile btn btn-primary">
								View profile
							</button>
						</div>
					</div>
				</div>
				{user && !loading && !worker ? (
					<button
						onClick={() => {
							if (verifyWorker(info)) {
								hideTask(info);
							}
						}}
						className="btn btn-primary view-task"
					>
						Pick Task
					</button>
				) : null}
			</div>
		</div>
	);
};

export default Task;
