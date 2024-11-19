import Header from "../components/Header";
import Collapse from "../components/Collapse";
import data from "../data/data.json";
import Footer from "../components/Footer";
import Error from "../routes/Error";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Accomodation() {
	const { id } = useParams();
	const [accommodation] = useState(
		data.filter((logement) => logement.id === id)
	);
	return (
		<>
			{accommodation.length > 0 ? (
				<>
					<Header />
					<img
						src={accommodation[0].cover}
						className="home__gallery__image"
					></img>
					<h1>{accommodation[0].title}</h1>
					<h1>{accommodation[0].location}</h1>
					<h1>{accommodation[0].tags}</h1>
					<Collapse
						summary="Description"
						details={accommodation[0].description}
					/>
					<Collapse
						summary="Équipements"
						details={accommodation[0].equipments}
					/>
					<h1>{accommodation[0].host.name}</h1>
					<img src={accommodation[0].host.picture}></img>
					<h1>{accommodation[0].rating}</h1>
					<Footer />
				</>
			) : (
				<Error />
			)}
		</>
	);
}
