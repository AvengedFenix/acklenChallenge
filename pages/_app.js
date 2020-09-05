import "../styles/globals.css";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
const AppNavbar = dynamic(() => import("../components/AppNavbar"));
const Users = dynamic(() => import("../components/Users"));
const Explore = dynamic(() => import("../components/Explore"));

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<AppNavbar />
			{/* <Users /> */}
			<Explore />
		</div>
	);
}

export default MyApp;
