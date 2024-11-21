import Header from "../components/Header";
import AboutBanner from "../components/AboutBanner";
import Values from "../components/Values";
import Footer from "../components/Footer";

export default function About() {
	return (
		<>
			<Header />
			<div className="main__container">
				<AboutBanner />
				<Values />
			</div>
			<Footer />
		</>
	);
}
