import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
	//const { logout } = useAuth0();

	return (
		<button
			type="button"
			className="btn btn-secondary"
			// onClick={() => logout({ returnTo: "http://localhost:3000/" })}
		>
			Log Out
		</button>
	);
};

export default LogoutButton;
