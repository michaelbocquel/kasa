import Header from "../components/Header";
import ErrorDisplay from "../components/ErrorDisplay";
import Footer from "../components/Footer";

export default function ErrorPage() {
	return (
		<div className="error__page__container">
			<Header />
			<div className="error__main__container">
				<ErrorDisplay />
			</div>
			<Footer />
		</div>
	);
}
