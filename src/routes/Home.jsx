import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import Gallery from "../components/Gallery";

export default function Home() {
	return (
		<>
			<Header />
			<div className="main__container">
				<HomeBanner />
				<Gallery />
			</div>
			<Footer />
		</>
	);
}
