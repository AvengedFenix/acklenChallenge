import React, { useEffect, useState } from "react";
import Head from "next/head";
import AppNavbar from "./AppNavbar";
import Explore from "./Explore";
//import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
//import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { UserProvider, useFetchUser } from "../utils/user";

const Layout = ({ children }) => {
	// const { user, isAuthenticated, isLoading } = useAuth0();
	const [auth, setAuth] = useState(false);

	const {user, loading} = useFetchUser();

	// console.log("Layout auth: " + isAuthenticated);
	// console.log("User: " + user);

	return (
		<div>

				<Head>
					<title>PolyTasks</title>
				</Head>
				<AppNavbar />

				{children}
		</div>
	);
};

export default Layout;
