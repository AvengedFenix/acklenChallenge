import React, { useEffect, useState } from "react";
import Head from "next/head";
import AppNavbar from "./AppNavbar";
import Explore from "./Explore";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Layout = ({ children }) => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const [auth, setAuth] = useState(false);

	console.log("Layout auth: " + isAuthenticated);
	console.log("User: " + user);
	
	return (
		<div>
			<Auth0Provider
				domain={process.env.AUTH0_DOMAIN}
				clientId={process.env.AUTH0_CLIENT_ID}
				redirectUri={"http://localhost:3000/"}
			>
				<Head>
					<title>PolyTasks</title>
				</Head>
				<AppNavbar auth={isAuthenticated} />
				{children}
			</Auth0Provider>
		</div>
	);
};

export default Layout;
