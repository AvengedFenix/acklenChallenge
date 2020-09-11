import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import Link from 'next/link';

const LoginButton = () => {
	//const { loginWithRedirect } = useAuth0();

	return (
		<Link href="/api/login">
			<button
				type="button"
				className="btn btn-primary btn-login"
				//onClick={() => loginWithRedirect()}
			>
				Log In
			</button>
		</Link>
	);
};

export default LoginButton;
