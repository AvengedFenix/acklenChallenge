import React from "react";
import Head from "next/head";
import AppNavbar from "./AppNavbar";
import Explore from './Explore';


const Layout = () => {
	return (
		<div>
			<Head>
				<title>PolyTasks</title>
			</Head>
			<AppNavbar />
			<Explore />
		</div>
	);
};

export default Layout;
