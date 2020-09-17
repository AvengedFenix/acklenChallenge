import "../styles/globals.css";
import "../styles/TaskType.css";
import "../styles/Explore.css";
import "../styles/CreateTask.css"
import "../styles/Register.css";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
//const Layout = dynamic(() => import("../components/Layout"));
import Layout from "./../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
