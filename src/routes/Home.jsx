import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import HomeGallery from "../components/HomeGallery";

export default function Home() {
	return (
		<>
			<Header />
			<div className="home__main__container">
				<HomeBanner />
				<HomeGallery />
			</div>
			<Footer />
		</>
	);
}
