import React from "react";
import tvicon from "../public/icons/tv_icon.svg";
import wall from "../public/icons/wall.svg";

interface Props {
	title: string;
	first: boolean;
}

const pictures = {
	"TV Mount": {
		0: "https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
		1: "https://images.unsplash.com/photo-1540300512726-61873b2c627d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
		2: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
		3: "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80"
	},
};

const Task: React.FC<Props> = ({ title, first }: Props) => {
	console.log(title);

	const randomPhoto = Math.floor(Math.random() * 4);
	console.log(randomPhoto);
	
	return (

		<div id={String(first)} className="card" style={{ width: "10rem" }}>
			<div className="image-container">
				<img src={pictures["TV Mount"][randomPhoto]} className="card-img-top" alt="..." />
			</div>
			<div className="card-body">
				<h6 className="misc-info">hola</h6>
				<h5 className="card-title">{title}</h5>
				<p className="location">Tegucigalpa, Honduras</p>
				<div className="divider" />
				<div className="details">
					<img className="card-icon" src={tvicon}></img>
					<p className="special">4</p>
					<p className="special" id="special-text">
						TVs
					</p>
					<img className="card-icon" id="second-icon" src={wall} />
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
							<p className="card-text">Obi-Wan Kenobi</p>
							<button className="view-profile btn btn-primary">
								View profile
							</button>
						</div>
					</div>
				</div>
				<a href="#" className="btn btn-primary view-task">
					Task Details >
				</a>
			</div>
		</div>
	);
};

export default Task;
