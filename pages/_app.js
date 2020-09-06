import "../styles/globals.css";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
const Layout = dynamic(() => import("../components/Layout"));

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
