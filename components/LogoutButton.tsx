import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import Link from 'next/link';

const LogoutButton = () => {
	//const { logout } = useAuth0();

	return (
		<Link href="/api/logout">
			<button
				type="button"
				className="btn btn-secondary"
				// onClick={() => logout({ returnTo: "http://localhost:3000/" })}
			>
				Log Out
			</button>
		</Link>
	);
};

export default LogoutButton;
