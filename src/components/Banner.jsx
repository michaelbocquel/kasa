export default function Banner(props) {
	return (
		<div className="home__banner__container">
			<img
				src={props.src}
				className="home__banner__image"
			/>
			{props.isText && <p className="banner__text">{props.text}</p>}
		</div>
	);
}
