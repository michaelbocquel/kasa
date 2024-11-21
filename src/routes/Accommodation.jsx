import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
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
	const [currentIndex, setCurrentIndex] = useState(0);
	const items = [];
	items.push(accommodation[0].pictures);
	const renderItem = (items) => <img className="accommodation__image" src={items[0][currentIndex]} />;

	const renderNavigation = () => (
		<div className="nav">
			<button
				onClick={() => {
					setCurrentIndex(
						(prevIndex) => (prevIndex - 1 + items[0].length) % items[0].length
					);
				}}
			>
				Prev
			</button>
			<button
				onClick={() =>
					setCurrentIndex((prevIndex) => (prevIndex + 1) % items[0].length)
				}
			>
				Next
			</button>
		</div>
	);

	return (
		<>
			{accommodation.length > 0 ? (
				<>
					<Header />
					
					<div className="accommodation__main__container">
					<div className="accommodation__carousel">
						{renderItem(items, currentIndex)}
						{renderNavigation()}
					</div>
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
							classSummary="collapse__summary accommodation__summary"
							classDetails="collapse__details"
						/>
						<Collapse
							summary="Équipements"
							details={accommodation[0].equipments.map((equipment, index) => (
								<p key={index}>{equipment}</p>
							))}
							classSummary="collapse__summary accommodation__summary"
							classDetails="collapse__details"
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
