import Header from "../components/Header";
import AboutBanner from "../components/AboutBanner";
import AboutValues from "../components/AboutValues";
import Footer from "../components/Footer";

export default function About() {
	return (
		<>
			<Header />
			<div className="about__main__container">
				<AboutBanner />
				<AboutValues />
			</div>
			<Footer />
		</>
	);
}
