import data from "../data/data.json";

export default function HomeGallery() {
	return (
		<div className="home__gallery__container">
			{data.map((item) => (
				<a
					href={`/accommodation/${item.id}`}
					className="home__gallery__image__container"
					key={item.id}
				>
					<img src={item.cover} className="home__gallery__image"></img>
					<p className="home__gallery__title">{item.title}</p>
				</a>
			))}
		</div>
	);
}
