import Header from "../components/Header";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Error from "../routes/Error";

import data from "../data/data.json";

import { useState } from "react";
import { useParams } from "react-router-dom";

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
					<div className="accommodation__main__container">
						<img
							src={accommodation[0].cover}
							className="accommodation__image"
						></img>
						<h1 className="accommodation__title">{accommodation[0].title}</h1>
						<h1 className="accommodation__location">
							{accommodation[0].location}
						</h1>
						<div className="accommodation__tag__container">
							{accommodation[0].tags.map((tag, index) => (
								<p key={index} className="accommodation__tag">
									{tag}
								</p>
							))}
						</div>
						<Collapse
							summary="Description"
							details={accommodation[0].description}
							class="collapse-details accommodation__description"
						/>
						<Collapse
							summary="Équipements"
							details={accommodation[0].equipments.map((equipment, index) => (
								<p key={index} className="accommodation__equipment">
									{equipment}
								</p>
							))}
							class="collapse-details accommodation__equipments"
						/>
						<div className="accommodation__host__container">
							<h1 className="accommodation__host__name">
								{accommodation[0].host.name}
							</h1>
							<img
								src={accommodation[0].host.picture}
								className="accommodation__host__picture"
							></img>
						</div>
						<h1 className="accommodation__rating">{accommodation[0].rating}</h1>
					</div>
					<Footer />
				</>
			) : (
				<Error />
			)}
		</>
	);
}
