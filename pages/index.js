import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Explore from "./../components/Explore";
import LoginButton from "../components/LoginButton";
import LogoutButton from './../components/LogoutButton';

const index = () => {
	return (
		<div>
			<Explore/>
		</div>
	);
};

export default index;
