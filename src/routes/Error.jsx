import Header from "../components/Header";
import Error from "../components/Error";
import Footer from "../components/Footer";

export default function ErrorPage() {
	return (
		<div className="error__page__container">
			<Header />
			<div className="error__main__container">
				<Error />
			</div>
			<Footer />
		</div>
	);
}
