import React from "react";
import Head from "next/head";
import AppNavbar from "./AppNavbar";

const Layout = () => {
	return (
		<div>
			<Head>
				<title>PolyTasks</title>
			</Head>
			<AppNavbar />
		</div>
	);
};

export default Layout;
