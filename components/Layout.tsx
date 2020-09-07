import React from "react";
import Head from "next/head";
import AppNavbar from "./AppNavbar";
import Explore from "./Explore";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from './LogoutButton';

const Layout = () => {
	return (
		<div>
			<Auth0Provider
				domain="maslz98.us.auth0.com"
				clientId="4T1TbPEte0vUOAy0iVOKAV1hxmFmQMsr"
				redirectUri={"http://localhost:3000/"}
			>
				<Head>
					<title>PolyTasks</title>
				</Head>
				<AppNavbar />
				<Explore />
				<LoginButton />
				<LogoutButton />
			</Auth0Provider>
		</div>
	);
};

export default Layout;
