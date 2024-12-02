import Header from "../components/Header";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
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

	const renderNavigation = () => (
		accommodation[0].pictures.length > 1 && <>
			<button
				onClick={() => {
					setCurrentIndex(
						(prevIndex) =>
							(prevIndex - 1 + accommodation[0].pictures.length) %
							accommodation[0].pictures.length
					);
				}}
			>
				<img src="../src/assets/arrow-prev.svg" alt="" className="accommodation__carousel__arrow__prev" />
			</button>
			<button
				onClick={() =>
					setCurrentIndex(
						(prevIndex) => (prevIndex + 1) % accommodation[0].pictures.length
					)
				}
			>
				<img src="../src/assets/arrow-next.svg" alt="" className="accommodation__carousel__arrow__next" />
			</button>
		</>
	);

	return (
		<>
			{accommodation.length > 0 ? (
				<>
					<Header />
					<div className="accommodation__main__container">
						<div className="accommodation__carousel">
							<div className="accommodation__carousel__image__container">
								<img
									className="accommodation__image"
									src={accommodation[0].pictures[currentIndex]}
								></img>
								{renderNavigation()}
								<p className="accommodation__carousel__numbering">{currentIndex + 1} / {accommodation[0].pictures.length}</p>
							</div>
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
						
						<div className="accommodation__host__container">
							<h1 className="accommodation__host__name">
								{accommodation[0].host.name}
							</h1>
							<img
								src={accommodation[0].host.picture}
								className="accommodation__host__picture"
							></img>
						</div>
						<Rating count={accommodation[0].rating} />
					</div>
					<div className="accommodation__collapse__container">
						<Collapse
								summary="Description"
								details={accommodation[0].description}
								classSummary="collapse__summary accommodation__summary"
								classDetails="collapse__details accommodation__details"
							/>
							<Collapse
								summary="Équipements"
								details={accommodation[0].equipments.map((equipment, index) => (
									<li key={index} className="accommodation__equipment__item">{equipment}</li>
								))}
								classSummary="collapse__summary accommodation__summary"
								classDetails="collapse__details accommodation__details"
							/>
					</div>
					<Footer />
				</>
			) : (
				<Error />
			)}
		</>
	);
}
