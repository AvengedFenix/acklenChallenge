import React from "react";

interface Props {
	title: string;
}

const Task: React.FC<Props> = ({ title }: Props) => {
	console.log(title);

	return (
			<div className="card" style={{ width: "10rem" }}>
				<h5 className="card-title">{title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
	);
};

export default Task;
