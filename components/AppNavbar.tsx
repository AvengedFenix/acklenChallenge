import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { useRouter } from "next/router";
import LoginButton from "./LoginButton";
import { useFetchUser } from "../utils/user";
import BecomeWorker from "./BecomeWorker";

const AppNavbar = () => {
	const { user, loading } = useFetchUser();
	console.log("User navbar: " + JSON.stringify(user));
	// console.log(user.email);

	return (
		<nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/">
				PolyTasks
			</a>
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<Link href="/">
						<a className="nav-link">Home</a>
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/about">
						<a className="nav-link" href="#">
							Link
						</a>
					</Link>
				</li>
				<Link href="/createTask">
					<a className="nav-link">Create Task</a>
				</Link>
				{user && !loading ? (
					<>
						<li className="nav-item">
							<Link href="/profile">
								<a className="nav-link">Profile</a>
							</Link>
						</li>
						<li className="nav-item">
							<BecomeWorker
								name={user.name}
								nickname={user.nickname}
								auth0Id={user.sub}
							/>
						</li>
						<LogoutButton />
					</>
				) : null}
				{!user && !loading ? <LoginButton /> : null}
			</ul>
		</nav>
	);
};
export default AppNavbar;
