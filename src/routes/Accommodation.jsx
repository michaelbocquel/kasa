import Header from "../components/Header";
import data from "../data/data.json";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export default function Accomodation() {
	let { id } = useParams();

	return (
		<>
			<Header />
			<img src={data[id - 1].cover} className="home__gallery__image"></img>
			<h1>{data[id - 1].title}</h1>
			<h1>{data[id - 1].location}</h1>
			<h1>{data[id - 1].tags}</h1>
			<h1>{data[id - 1].description}</h1>
			<h1>{data[id - 1].equipments}</h1>
			<h1>{data[id - 1].host.name}</h1>
			<img src={data[id - 1].host.picture}></img>
			<h1>{data[id - 1].rating}</h1>
			<Footer />
		</>
	);
}
