import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth = () => {
	return (
		<Auth0Provider
			domain="maslz98.us.auth0.com"
			clientId="4T1TbPEte0vUOAy0iVOKAV1hxmFmQMsr"
			redirectUri={"http://localhost:3000/"}
		></Auth0Provider>
	);
};

export default Auth;
