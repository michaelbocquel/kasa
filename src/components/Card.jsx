import data from "../data/data.json";

import { Link } from "react-router-dom";

export default function Card() {
	return (
		<>
			{data.map((item) => (
				<Link
					to={`/accommodation/${item.id}`}
					className="home__gallery__image__container"
					key={item.id}
				>
					<img src={item.cover} className="home__gallery__image"></img>
					<p className="home__gallery__title">{item.title}</p>
				</Link>
			))}
		</>
	);
}
