import React from "react";
import LoginButton from "./LoginButton";
import Link from "next/link";

const Register = () => {
	return (
		<>
			<h1 className="register-title">
				You need to register in order to access this function
			</h1>
			<Link href="/api/login">
				<button
					type="button"
					className="btn btn-primary btn-login-register"
					//onClick={() => loginWithRedirect()}
				>
					Log In
				</button>
			</Link>
		</>
	);
};

export default Register;
