import React from "react";
import { withRouter } from "next/router";
import { Form, ButtonGroup, ToggleButton, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";

type Props = {
	type: String;
	userName: String;
};

type States = {
	form: {
		type: String;
		size: String;
		takenDown: boolean;
		wallMount: String;
		wallType: String;
		cords: boolean;
		externalDevices: boolean;
		address: String;
		taken: Boolean;
		date: Date;
		issuer: String;
	};
	price: Number;
	showReceipt: boolean;
	fName: String;
	lName: String;
	uEmail: String;
	uZip: Number;
	numberTV: Number;
	alert: Boolean;
	success: Boolean;
};

class CreateTask extends React.Component<{ type; userName }, States> {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				type: this.props.type,
				size: "0",
				takenDown: false,
				wallMount: "",
				wallType: "",
				cords: false,
				externalDevices: false,
				address: "",
				taken: false,
				date: new Date(),
				issuer: this.props.userName,
			},
			price: 80,
			showReceipt: false,
			fName: "",
			lName: "",
			uEmail: "",
			uZip: 0,
			numberTV: 0,
			alert: false,
			success: false,
		};
		console.log("constructor: " + this.state.form.date);

		this.handleSizeChange = this.handleSizeChange.bind(this);
		this.handleTakenDown = this.handleTakenDown.bind(this);
		this.handleWallMount = this.handleWallMount.bind(this);
		this.handleWallType = this.handleWallType.bind(this);
		this.handleCords = this.handleCords.bind(this);
		this.handleExternalDevices = this.handleExternalDevices.bind(this);
		this.createTask = this.createTask.bind(this);
		this.handleAddress = this.handleAddress.bind(this);
		this.handleDate = this.handleDate.bind(this);
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
		let mount = e.currentTarget.value;

		await this.setState((prevState) => ({
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
		await this.setState((prevState) => ({
			form: {
				...prevState.form,
				issuer: this.props.userName,
			},
		}));
		const form = this.state.form;
		if (
			form.address == "" &&
			form.size == "0" &&
			form.wallMount == "" &&
			form.wallType == ""
		) {
			this.setState({ alert: true });
		} else {
			try {
				const res = await fetch("/api/tasks", {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(this.state.form),
				});
				this.setState({ alert: false, success: true });
			} catch (e) {
				console.log(e);
			}
		}
	}

	async handleAddress(e) {
		let address = e.target.value;

		await this.setState((prevState) => ({
			form: {
				...prevState.form,
				address: address,
			},
		}));
	}

	async handleDate(e) {
		let date = e;

		console.log(date);

		await this.setState((prevState) => ({
			form: {
				...prevState.form,
				date: date,
			},
		}));
	}

	render() {
		const ToggleTVSize = () => {
			const radios = [
				{ name: "Radio", value: 'Up to 32"' },
				{ name: "Radio", value: '33" - 44"' },
				{ name: "Radio", value: '45" or larger' },
			];
			return (
				<>
					<label className="form-sub-title">How large is your tv?</label>
					<br />
					<ButtonGroup toggle className="mb-2">
						{radios.map((radio, idx) => (
							<ToggleButton
								onChange={this.handleSizeChange}
								key={idx}
								type="radio"
								variant="secondary"
								name="radio"
								id="options"
								value={radio.value}
								checked={this.state.form.size === radio.value}
							>
								{radio.value}
							</ToggleButton>
						))}
					</ButtonGroup>
				</>
			);
		};

		const TakenDown = () => {
			return (
				<div>
					<input
						onChange={this.handleTakenDown}
						defaultChecked={this.state.form.takenDown}
						type="checkbox"
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
			const radios = [
				{ name: "Radio", value: "I already have one" },
				{ name: "Radio", value: "Fixed" },
				{ name: "Radio", value: "Tilt" },
				{ name: "Radio", value: "Full motion" },
			];
			return (
				<>
					<label className="form-sub-title">Wall Mount type</label>
					<br />
					<ButtonGroup toggle className="mb-2">
						{radios.map((radio, idx) => (
							<ToggleButton
								onChange={this.handleWallMount}
								key={idx}
								type="radio"
								variant="secondary"
								name="radio"
								id="options"
								value={radio.value}
								checked={this.state.form.wallMount === radio.value}
							>
								{radio.value}
							</ToggleButton>
						))}
					</ButtonGroup>
				</>
			);
		};

		const WallType = () => {
			const radios = [
				{ name: "Radio", value: "Drywall, plaster or wood" },
				{ name: "Radio", value: "Brick or concrete" },
				{ name: "Radio", value: "I don't know" },
			];
			return (
				<>
					<label className="form-sub-title">
						What type of wall will your TV be mounted on?
					</label>
					<br />
					<ButtonGroup toggle className="mb-2">
						{radios.map((radio, idx) => (
							<ToggleButton
								onChange={this.handleWallType}
								key={idx}
								type="radio"
								variant="secondary"
								name="radio"
								id="options"
								value={radio.value}
								checked={this.state.form.wallType === radio.value}
							>
								{radio.value}
							</ToggleButton>
						))}
					</ButtonGroup>
				</>
			);
		};

		const Cords = () => {
			return (
				<div>
					<input
						onChange={this.handleCords}
						defaultChecked={this.state.form.cords}
						type="checkbox"
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
					<input
						onChange={this.handleExternalDevices}
						defaultChecked={this.state.form.externalDevices}
						type="checkbox"
						className="form-check-input"
						id="check1"
					/>
					<label className="form-check-label" htmlFor="check1">
						Do you have external devices to connect
					</label>
				</div>
			);
		};

		const CustomDateInput = ({ value, onClick }) => {
			return (
				<button className="custom-date-input" onClick={onClick}>
					{value}
				</button>
			);
		};

		return (
			<div className="create-task-container container">
				{this.state.alert ? (
					<Alert variant="danger">
						You need to fill all the information required
					</Alert>
				) : null}
				{this.state.success ? (
					<Alert variant="success">Task created successfully!</Alert>
				) : null}
				<h1 className="create-task-title">{this.props.type}</h1>
				<form>
					<div className="form-group">{<ToggleTVSize />}</div>
					<div className="form-divider" />
					<div className="form-group form-check">{<TakenDown />}</div>
					<div className="form-divider" />
					<div className="form-group">{<WallMount />}</div>
					<div className="form-divider" />
					<div className="form-group">{<WallType />}</div>
					<div className="form-divider" />
					<div className="form-group form-check">{<Cords />}</div>
					<div className="form-check">{<ExternalDevices />}</div>
				</form>
				<br />
				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text">Address</span>
					</div>
					<textarea
						onChange={this.handleAddress}
						className="form-control"
						aria-label="With textarea"
						defaultValue={""}
					/>
				</div>
				<br />
				<DatePicker
					id="date"
					selected={this.state.form.date}
					value={this.state.form.date}
					onChange={this.handleDate}
					customInput={
						<CustomDateInput
							value={this.state.form.date}
							onClick={this.handleDate}
						/>
					}
				/>
				<br />
				<br />
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
