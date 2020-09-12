import React from "react";
import { withRouter } from "next/router";

type Props = {
	type: String;
};

type States = {
	form: {
		type: String;
		direction: String;
		size: Number;
		takenDown: boolean;
		wallMount: String;
		wallType: String;
		cords: boolean;
		externalDevices: boolean;
	};
	price: Number;
	showReceipt: boolean;
	fName: String;
	lName: String;
	uEmail: String;
	uZip: Number;
	numberTV: Number;
	date: Date;
};

class CreateTask extends React.Component<{ type }, States> {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				type: this.props.type,
				direction: "Tegucigalpa, Honduras",
				size: 0,
				takenDown: false,
				wallMount: "",
				wallType: "",
				cords: false,
				externalDevices: false,
			},
			price: 80,
			showReceipt: false,
			fName: "",
			lName: "",
			uEmail: "",
			uZip: 0,
			numberTV: 0,
			date: null,
		};
		this.handleSizeChange = this.handleSizeChange.bind(this);
		this.handleTakenDown = this.handleTakenDown.bind(this);
		this.handleWallMount = this.handleWallMount.bind(this);
		this.handleWallType = this.handleWallType.bind(this);
		this.handleCords = this.handleCords.bind(this);
		this.handleExternalDevices = this.handleExternalDevices.bind(this);
		this.createTask = this.createTask.bind(this);
	}

	async handleSizeChange(e) {
		let size = e.target.value;
		console.log(size);

		await this.setState((prevState) => ({
			form: {
				...prevState.form,
				size: size,
			},
		}));
	}

	async handleTakenDown(e) {
		let checked = e.target.checked;

		console.log(checked);
		await this.setState((prevState) => ({
			form: {
				...prevState.form,
				takenDown: checked,
			},
		}));
	}

	async handleWallMount(e) {
		let mount = e.target.value;

		await await this.setState((prevState) => ({
			form: {
				...prevState.form,
				wallMount: mount,
			},
		}));
		console.log(this.state.form.wallMount);
	}

	async handleWallType(e) {
		let type = e.target.value;
		console.log(type);

		await this.setState((prevState) => ({
			form: {
				...prevState.form,
				wallType: type,
			},
		}));
	}

	async handleCords(e) {
		let cords = e.target.checked;

		console.log(cords);
		await this.setState((prevState) => ({
			form: {
				...prevState.form,
				cords: cords,
			},
		}));
	}

	async handleExternalDevices(e) {
		let devices = e.target.checked;

		console.log(devices);
		await this.setState((prevState) => ({
			form: {
				...prevState.form,
				externalDevices: devices,
			},
		}));
	}

	async createTask() {
		console.log(this.state.form);

		try {
			const res = await fetch("http://localhost:3000/api/Tasks", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(this.state.form),
			});
			//router.push("/");
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const ToggleTVSize = () => {
			return (
				<div>
					<label>How large is your tv?</label>

					<label className="btn btn-secondary active">
						<button
							onClick={this.handleSizeChange}
							// type="radio"
							name="options"
							id="option1"
							value={'Up to 32"'}
							defaultChecked
						/>
						Up to 32"
					</label>
					<label className="btn btn-secondary">
						<button
							onClick={this.handleSizeChange}
							// type="radio"
							name="options"
							id="option2"
							value={'33" - 44"'}
						/>{" "}
						33" - 44"
					</label>
					<label className="btn btn-secondary">
						<button
							onClick={this.handleSizeChange}
							// type="radio"
							name="options"
							id="option3"
							value={'45" or larger'}
							// active
						/>{" "}
						45" or larger
					</label>
				</div>
			);
		};

		const TakenDown = () => {
			return (
				<div>
					<button
						onChange={this.handleTakenDown}
						defaultChecked={this.state.form.takenDown}
						// type="checkbox"
						className="form-check-input"
						id="check1"
					/>
					<label className="form-check-label" htmlFor="check1">
						Does your TV need to be taken down?
					</label>
				</div>
			);
		};

		const WallMount = () => {
			return (
				<div>
					<label>Wall mount type</label>
					<label className="btn btn-secondary active">
						<button
							onClick={this.handleWallMount}
							//type="radio"
							name="options"
							id="option1"
							value={"I already have one"}
							defaultChecked
						/>
						I already have one
					</label>
					<label className="btn btn-secondary">
						<button
							onClick={this.handleWallMount}
							//type="radio"
							name="options"
							id="option2"
							value={"Fixed"}
						/>{" "}
						Fixed
					</label>
					<label className="btn btn-secondary">
						<button
							onClick={this.handleWallMount}
							//type="radio"
							name="options"
							id="option3"
							value={"Tilt"}
						/>{" "}
						Tilt
					</label>
					<label className="btn btn-secondary">
						<button
							onClick={this.handleWallMount}
							//type="radio"
							name="options"
							id="option4"
							value={"Full Motion"}
						/>{" "}
						Full Motion
					</label>
				</div>
			);
		};

		const WallType = () => {
			return (
				<div>
					<label>What type of wall will your TV be mounted on?</label>
					<label className="btn btn-secondary active">
						<button
							// onClick={this.handleSizeChange}
							onClick={this.handleWallType}
							//type="radio"
							name="options"
							id="option1"
							value={"Drywall, plaster or wood"}
							defaultChecked
						/>
						Drywall, plaster or wood
					</label>
					<label className="btn btn-secondary">
						<button
							onClick={this.handleWallType}
							// onClick={this.handleSizeChange}
							// type="radio"
							name="options"
							id="option2"
							value={"Brick or concrete"}
						/>{" "}
						Brick or concrete
					</label>
					<label className="btn btn-secondary">
						<button
							onClick={this.handleWallType}
							// onClick={this.handleSizeChange}
							//type="radio"
							name="options"
							id="option3"
							value={"I don't know"}
							//active
						/>{" "}
						I don't know
					</label>
				</div>
			);
		};

		const Cords = () => {
			return (
				<div>
					<button
						onChange={this.handleCords}
						defaultChecked={this.state.form.cords}
						//type="checkbox"
						className="form-check-input"
						id="check1"
					/>
					<label className="form-check-label" htmlFor="check1">
						Bundle and cover cords
					</label>
				</div>
			);
		};

		const ExternalDevices = () => {
			return (
				<div>
					<button
						onChange={this.handleExternalDevices}
						defaultChecked={this.state.form.externalDevices}
						//type="checkbox"
						className="form-check-input"
						id="check1"
					/>
					<label className="form-check-label" htmlFor="check1">
						Do you have external devices to connect
					</label>
				</div>
			);
		};

		return (
			<div className="create-task-container container">
				<h1 className="create-task-title">TV Mount</h1>
				<form>
					<div className="">
						<div className="btn-group btn-group-toggle" data-toggle="buttons">
							{<ToggleTVSize />}
						</div>
					</div>
					<div className="form-group form-check">{<TakenDown />}</div>
					<div className="form-group">{<WallMount />}</div>
					<div className="form-group">{<WallType />}</div>
					<div className="form-group form-check">{<Cords />}</div>
					<div className="form-group form-check">{<ExternalDevices />}</div>
				</form>
				<button
					onClick={this.createTask}
					//type="submit"
					className="btn btn-primary"
				>
					Submit
				</button>
			</div>
		);
	}
}

export default withRouter(CreateTask);
