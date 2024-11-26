import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

export default function Home() {
	return (
		<>
			<Header />
			<div className="main__container">
				<Banner
					src="../src/assets/home-banner.jpg"
					isText
					text="Chez vous, partout et ailleurs"
				/>
				<Gallery />
			</div>
			<Footer />
		</>
	);
}
