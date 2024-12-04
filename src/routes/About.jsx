import Header from "../components/Header";
import Banner from "../components/Banner";
import Values from "../components/Values";
import Footer from "../components/Footer";

export default function About() {
	return (
		<>
			<Header />
			<div className="main__container">
				<Banner src="/assets/about-banner.jpg" />
				<Values />
			</div>
			<Footer />
		</>
	);
}
